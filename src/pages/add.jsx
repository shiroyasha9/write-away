import Button from '@/components/Button';
import {postRequest} from '@/server/requests';
import {useRouter} from 'next/router';
import {useState} from 'react';
import dynamic from "next/dynamic";
import {isEditorEmpty} from "@/utils";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

export default function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const addNewNoteHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const data = await postRequest('/api/addNote', {
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
        <Button type="submit" disabled={isDisabled}>{!isLoading ? 'Add Note' : 'Adding...'}</Button>
      </form>
    </div>
  );
}
