import Link from 'next/link';

export default function NoteCard({ note }) {
  return (
    <Link
      className="cursor-pointer truncate rounded-lg bg-lemon/75 px-6 py-4 text-xl font-semibold text-black hover:bg-lemon/90"
      href={`/notes/${note.id}`}
    >
      {note.title}
    </Link>
  );
}
