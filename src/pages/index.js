import Header from '@/components/Header';
import NoteCard from '@/components/NoteCard';

const NOTES = [
  {
    id: 1,
    title: 'Note 1',
    description: 'This is a note',
  },
  {
    id: 2,
    title: 'Note 2',
    description: 'This is a note',
  },
  {
    id: 3,
    title: 'Note 3',
    description: 'This is a note',
  },
  {
    id: 4,
    title: 'Note 4',
    description: 'This is a note',
  },
  {
    id: 5,
    title: 'Note 5',
    description: 'This is a note',
  },
  {
    id: 6,
    title: 'Note 6',
    description: 'This is a note',
  },
  {
    id: 7,
    title: 'Note 7',
    description: 'This is a note',
  },
  {
    id: 8,
    title: 'Note 8',
    description: 'This is a note',
  },
  {
    id: 9,
    title: 'Note 9',
    description: 'This is a note',
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-y-4">
      <Header />
      {NOTES.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
