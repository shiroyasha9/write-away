import Header from '@/components/Header';
import NoteCard from '@/components/NoteCard';
import { prisma } from '@/server/db';

export default function Home({ notes }) {
  if (!notes) return <div>Loading...</div>;

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-y-4">
      <Header />
      {notes.length === 0 && <div>No notes yet. Add one?`</div>}
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const notes = await prisma.note.findMany({});
  return { props: { notes: JSON.parse(JSON.stringify(notes)) } };
};
