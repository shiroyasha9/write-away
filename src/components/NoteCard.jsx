import Link from 'next/link';

export default function NoteCard({ note }) {
  return (
    <Link
      className="note-card"
      href={`/notes/${note.id}`}
    >
      {note.title}
    </Link>
  );
}
