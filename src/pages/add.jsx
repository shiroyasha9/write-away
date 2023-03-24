import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const addNewNoteHandler = async (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
    };

    const data = await fetch('/api/addNote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });

    if (data.status === 200) {
      router.push('/');
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">Add a new note</h1>
      <form className="mt-6 flex flex-col gap-y-4" onSubmit={addNewNoteHandler}>
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
        <Button type="submit">Add Note</Button>
      </form>
    </div>
  );
}
