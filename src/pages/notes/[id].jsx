import Button from '@/components/Button';
import {prisma} from '@/server/db';
import {postRequest} from '@/server/requests';
import {useRouter} from 'next/router';

// react-quill
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.bubble.css';

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

const NotePage = ({ note }) => {
  const router = useRouter();

  const deleteNoteHandler = async () => {
    const data = await postRequest('/api/deleteNote', {
      id: note.id,
    });

    if (data.status === 200) {
      router.push('/');
    }
  };

  if (!note) return <div>Not found</div>;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <div>
          <Button onClick={() => router.back()}>Go back</Button>
        </div>
        <div className="flex gap-x-4">
          <Button onClick={() => router.push(`/notes/${note.id}/edit`)}>
            Edit
          </Button>
          <Button onClick={deleteNoteHandler}>Delete</Button>
        </div>
      </div>
      <div className="bg-lemon/75 px-12 py-4">
        <h2 className="mb-2 text-xl font-bold text-black">{note.title}</h2>
        <div className='h-[1px] bg-black/50'/>
        <ReactQuill
          value={note.description}
          readOnly={true}
          theme={"bubble"}
          className='!text-black mt-2'
        />
      </div>
    </div>
  );
};

export default NotePage;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const note = await prisma.note.findUnique({
    where: {
      id,
    },
  });
  return { props: { note: JSON.parse(JSON.stringify(note)) } };
}
