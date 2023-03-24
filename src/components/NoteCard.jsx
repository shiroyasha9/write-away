import Link from 'next/link';

export default function NoteCard({ note }) {
  return (
    <Link
      className="flex h-full w-full flex-1 cursor-pointer flex-col justify-center rounded-lg bg-lemon/75 px-12 py-4 hover:bg-lemon/90"
      href={`/notes/${note.id}`}
    >
      <h2 className="mb-2 text-xl font-bold text-black">{note.title}</h2>
      <p className="text-gray-700">{note.description}</p>
    </Link>
  );
}
