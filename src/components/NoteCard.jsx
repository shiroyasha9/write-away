import Link from 'next/link';

export default function NoteCard({note}) {
  return (
    <Link
      className="text-xl font-semibold text-black truncate cursor-pointer rounded-lg bg-lemon/75 px-6 py-4 hover:bg-lemon/90"
      href={`/notes/${note.id}`}
    >
      {note.title}
    </Link>
  );
}
