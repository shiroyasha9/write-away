export default function NoteCard({ note }) {
  return (
    <div className="flex h-full w-full flex-1 flex-col justify-center rounded-lg bg-lemon/75 px-12 py-4">
      <h2 className="mb-2 text-xl font-bold text-black">{note.title}</h2>
      <p className="text-gray-700">{note.description}</p>
    </div>
  );
}
