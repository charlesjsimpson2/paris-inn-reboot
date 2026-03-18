import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from '@/components/ui/button';
import { Bold, Italic, List, ListOrdered, Heading2, Heading3, Link as LinkIcon, ImageIcon, Undo, Redo, Quote } from 'lucide-react';
import { useCallback, useEffect } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  onImageUpload?: () => Promise<string | null>;
}

const RichTextEditor = ({ content, onChange, onImageUpload }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageExtension,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: 'Commencez à écrire votre article...' }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    const nextContent = content || '';
    if (editor.getHTML() !== nextContent) {
      editor.commands.setContent(nextContent, false);
    }
  }, [content, editor]);

  const addImage = useCallback(async () => {
    if (!onImageUpload || !editor) return;
    const url = await onImageUpload();
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor, onImageUpload]);

  const addLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('URL du lien:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  const ToolBtn = ({ onClick, active, children }: { onClick: () => void; active?: boolean; children: React.ReactNode }) => (
    <Button
      type="button"
      variant={active ? 'default' : 'outline'}
      size="icon"
      className="h-8 w-8"
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/30">
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')}><Bold className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')}><Italic className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })}><Heading2 className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })}><Heading3 className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')}><List className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')}><ListOrdered className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')}><Quote className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={addLink} active={editor.isActive('link')}><LinkIcon className="h-4 w-4" /></ToolBtn>
        {onImageUpload && <ToolBtn onClick={addImage}><ImageIcon className="h-4 w-4" /></ToolBtn>}
        <ToolBtn onClick={() => editor.chain().focus().undo().run()}><Undo className="h-4 w-4" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()}><Redo className="h-4 w-4" /></ToolBtn>
      </div>
      <EditorContent editor={editor} className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[280px]" />
    </div>
  );
};

export default RichTextEditor;
