import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from '@/components/ui/button';
import { Bold, Italic, List, ListOrdered, Heading2, Heading3, Link as LinkIcon, ImageIcon, Undo, Redo, Quote, PanelLeft, PanelRight } from 'lucide-react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  onImageUpload?: () => Promise<string | null>;
}

export interface RichTextEditorHandle {
  getHTML: () => string;
}

const normalizeHtml = (value: string) =>
  value
    .replace(/<p><\/p>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const normalizeUrl = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

// Extend Image extension to support float attribute
const FloatImage = ImageExtension.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      'data-float': {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute('data-float'),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes['data-float']) return {};
          return { 'data-float': attributes['data-float'] };
        },
      },
    };
  },
});

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(({ content, onChange, onImageUpload }, ref) => {
  const isSyncingRef = useRef(false);
  const [showFloatMenu, setShowFloatMenu] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      FloatImage,
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),
      Placeholder.configure({ placeholder: 'Commencez à écrire votre article...' }),
    ],
    content,
    onUpdate: ({ editor }) => {
      if (isSyncingRef.current) return;
      onChange(editor.getHTML());
    },
  });

  useImperativeHandle(ref, () => ({
    getHTML: () => editor?.getHTML() ?? '',
  }), [editor]);

  useEffect(() => {
    if (!editor || editor.isFocused) return;

    const nextContent = content || '<p></p>';
    if (normalizeHtml(editor.getHTML()) !== normalizeHtml(nextContent)) {
      isSyncingRef.current = true;
      editor.commands.setContent(nextContent, false, { preserveWhitespace: 'full' });
      isSyncingRef.current = false;
    }
  }, [content, editor]);

  const addImage = useCallback(async () => {
    if (!onImageUpload || !editor) return;
    const url = await onImageUpload();
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor, onImageUpload]);

  const addFloatImage = useCallback(async (float: 'left' | 'right') => {
    if (!onImageUpload || !editor) return;
    setShowFloatMenu(false);
    const url = await onImageUpload();
    if (url) {
      editor.chain().focus().setImage({ src: url, 'data-float': float } as any).run();
    }
  }, [editor, onImageUpload]);

  const addLink = useCallback(() => {
    if (!editor) return;

    const currentHref = (editor.getAttributes('link').href as string | undefined) ?? 'https://';
    const rawUrl = window.prompt('URL du lien:', currentHref);
    if (rawUrl === null) return;

    const href = normalizeUrl(rawUrl);

    if (!href) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    if (editor.state.selection.empty) {
      const linkText = window.prompt('Texte du lien:', href)?.trim() || href;
      editor.chain().focus().insertContent(`<a href="${href}">${linkText}</a>`).run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href }).run();
  }, [editor]);

  if (!editor) return null;

  const ToolBtn = ({ onClick, active, children, title }: { onClick: () => void; active?: boolean; children: React.ReactNode; title?: string }) => (
    <Button
      type="button"
      variant={active ? 'default' : 'outline'}
      size="icon"
      className="h-8 w-8"
      title={title}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/30">
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Gras"><Bold className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italique"><Italic className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Titre H2"><Heading2 className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Titre H3"><Heading3 className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Liste à puces"><List className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Liste numérotée"><ListOrdered className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Citation"><Quote className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={addLink} active={editor.isActive('link')} title="Lien"><LinkIcon className="h-4 w-4" /></ToolBtn>
        {onImageUpload && (
          <>
            <ToolBtn onClick={addImage} title="Image pleine largeur"><ImageIcon className="h-4 w-4" /></ToolBtn>
            <div className="relative">
              <ToolBtn onClick={() => setShowFloatMenu(!showFloatMenu)} title="Image + texte côte à côte">
                <PanelLeft className="h-4 w-4" />
              </ToolBtn>
              {showFloatMenu && (
                <div className="absolute top-full left-0 z-50 mt-1 flex gap-1 rounded-md border bg-background p-1 shadow-lg">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1.5 text-xs"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => addFloatImage('left')}
                  >
                    <PanelLeft className="h-3.5 w-3.5" />
                    Image à gauche
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1.5 text-xs"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => addFloatImage('right')}
                  >
                    <PanelRight className="h-3.5 w-3.5" />
                    Image à droite
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
        <ToolBtn onClick={() => editor.chain().focus().undo().run()} title="Annuler"><Undo className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()} title="Refaire"><Redo className="h-4 w-4" /></ToolBtn>
      </div>
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[280px] [&_.ProseMirror]:whitespace-pre-wrap [&_.ProseMirror_h2]:text-2xl [&_.ProseMirror_h3]:text-xl [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ul]:pl-6 [&_.ProseMirror_ol]:pl-6 [&_.ProseMirror_a]:underline [&_.ProseMirror_a]:underline-offset-2 [&_.ProseMirror_img[data-float=left]]:float-left [&_.ProseMirror_img[data-float=left]]:mr-6 [&_.ProseMirror_img[data-float=left]]:mb-4 [&_.ProseMirror_img[data-float=left]]:max-w-[50%] [&_.ProseMirror_img[data-float=left]]:rounded-lg [&_.ProseMirror_img[data-float=right]]:float-right [&_.ProseMirror_img[data-float=right]]:ml-6 [&_.ProseMirror_img[data-float=right]]:mb-4 [&_.ProseMirror_img[data-float=right]]:max-w-[50%] [&_.ProseMirror_img[data-float=right]]:rounded-lg"
      />
    </div>
  );
});

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
