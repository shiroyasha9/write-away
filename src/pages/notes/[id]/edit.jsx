import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditNote({ note }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note]);

  const editNoteHandler = async (e) => {
    e.preventDefault();

    const data = await fetch('/api/editNote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: note.id,
        title,
        description,
      }),
    });

    if (data.status === 200) {
      router.push('/');
    }
  };

  if (!note) return <div>Not found</div>;

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">Edit note</h1>
      <form className="mt-6 flex flex-col gap-y-4" onSubmit={editNoteHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            placeholder="Pasta recipe"
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="1. Boil water..."
            className="input resize-none"
            required
          />
        </div>
        <Button type="submit">Update Note</Button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const note = await prisma.note.findUnique({
    where: {
      id,
    },
  });
  return { props: { note: JSON.parse(JSON.stringify(note)) } };
}
