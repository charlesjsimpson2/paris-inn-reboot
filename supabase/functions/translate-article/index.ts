import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese (Brazilian)" },
  { code: "de", name: "German" },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { article_id } = await req.json();
    if (!article_id) throw new Error("article_id is required");

    // Fetch the article
    const { data: article, error: fetchErr } = await supabase
      .from("articles")
      .select("title, excerpt, content, seo_title, seo_description")
      .eq("id", article_id)
      .single();

    if (fetchErr || !article) throw new Error("Article not found");

    const results: { language: string; success: boolean; error?: string }[] = [];

    for (const lang of LANGUAGES) {
      try {
        const fieldsToTranslate: Record<string, string> = {};
        if (article.title) fieldsToTranslate.title = article.title;
        if (article.excerpt) fieldsToTranslate.excerpt = article.excerpt;
        if (article.content) fieldsToTranslate.content = article.content;
        if (article.seo_title) fieldsToTranslate.seo_title = article.seo_title;
        if (article.seo_description) fieldsToTranslate.seo_description = article.seo_description;

        const prompt = `Translate the following hotel website article fields from French to ${lang.name}. 
Return a JSON object with the same keys, translated values. Keep all HTML tags intact in the content field. Do not translate proper nouns (hotel names, place names, brand names).

Fields to translate:
${JSON.stringify(fieldsToTranslate, null, 2)}`;

        const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              {
                role: "system",
                content:
                  "You are a professional hotel website translator. Translate accurately, keeping the same tone (warm, professional, inviting). Keep HTML markup intact. Return ONLY valid JSON with the translated fields.",
              },
              { role: "user", content: prompt },
            ],
            tools: [
              {
                type: "function",
                function: {
                  name: "save_translation",
                  description: "Save the translated fields",
                  parameters: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      excerpt: { type: "string" },
                      content: { type: "string" },
                      seo_title: { type: "string" },
                      seo_description: { type: "string" },
                    },
                    required: ["title"],
                    additionalProperties: false,
                  },
                },
              },
            ],
            tool_choice: { type: "function", function: { name: "save_translation" } },
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          if (response.status === 429) {
            results.push({ language: lang.code, success: false, error: "Rate limited" });
            // Wait before next request
            await new Promise((r) => setTimeout(r, 5000));
            continue;
          }
          if (response.status === 402) {
            results.push({ language: lang.code, success: false, error: "Credits exhausted" });
            break;
          }
          throw new Error(`AI error ${response.status}: ${errText}`);
        }

        const aiData = await response.json();
        const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
        if (!toolCall) throw new Error("No tool call in response");

        const translated = JSON.parse(toolCall.function.arguments);

        // Upsert translation
        const { error: upsertErr } = await supabase
          .from("article_translations")
          .upsert(
            {
              article_id,
              language: lang.code,
              title: translated.title || null,
              excerpt: translated.excerpt || null,
              content: translated.content || null,
              seo_title: translated.seo_title || null,
              seo_description: translated.seo_description || null,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "article_id,language" }
          );

        if (upsertErr) throw upsertErr;
        results.push({ language: lang.code, success: true });

        // Small delay between languages to avoid rate limits
        await new Promise((r) => setTimeout(r, 1000));
      } catch (langErr) {
        console.error(`Translation error for ${lang.code}:`, langErr);
        results.push({
          language: lang.code,
          success: false,
          error: langErr instanceof Error ? langErr.message : "Unknown error",
        });
      }
    }

    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("translate-article error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
