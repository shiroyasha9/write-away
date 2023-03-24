import Header from '@/components/Header';
import NoteCard from '@/components/NoteCard';
import { prisma } from '@/server/db';

export default function Home({ notes }) {
  if (!notes) return <div>Loading...</div>;

  return (
    <div className="home">
      <Header />
      {notes.length === 0 && <div>No notes yet. Add one?`</div>}
      <div className="notes-container">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const notes = await prisma.note.findMany({
    orderBy: { updatedAt: 'desc' },
  });
  return { props: { notes: JSON.parse(JSON.stringify(notes)) } };
};
