import Button from '@/components/Button';
import { prisma } from '@/server/db';
import { postRequest } from '@/server/requests';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {isEditorEmpty} from "@/utils";

// react-quill
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

export default function EditNote({ note }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note]);

  const editNoteHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const data = await postRequest('/api/editNote', {
      id: note.id,
      title,
      description,
    });

    if (data.status === 200) {
      setIsLoading(false)
      await router.push('/');
    }
  };

  const isDisabled =
    title.trim() === ''
    || isEditorEmpty(description)
    || isLoading;

  if (!note) return <div>Not found</div>;

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-center text-xl font-semibold">Edit note</h1>
        <Button onClick={() => router.back()}>Go back</Button>
      </div>
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
          <div className='editor-container'>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={(html) => {
                setDescription(html)
              }
              }
              className='editor'
            />
          </div>
        </div>
        <Button type="submit" disabled={isDisabled}>{!isLoading ? 'Update Note' : 'Updating...'}</Button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const note = await prisma.note.findUnique({
    where: {
      id,
    },
  });
  return { props: { note: JSON.parse(JSON.stringify(note)) } };
}
