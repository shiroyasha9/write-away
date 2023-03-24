import { useRouter } from 'next/router';

export default function NoteCard({ note }) {
  const router = useRouter();
  return (
    <div
      className="flex h-full w-full flex-1 cursor-pointer flex-col justify-center rounded-lg bg-lemon/75 px-12 py-4"
      onClick={() => {
        router.push(`/notes/${note.id}`);
      }}
    >
      <h2 className="mb-2 text-xl font-bold text-black">{note.title}</h2>
      <p className="text-gray-700">{note.description}</p>
    </div>
  );
}
