import Button from '@/components/Button';
import { useRouter } from 'next/router';

const NotePage = ({ note }) => {
  const router = useRouter();
  if (!note) return <div>Not found</div>;
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4 self-end">
        <Button onClick={() => router.push(`/notes/${note.id}/edit`)}>
          Edit
        </Button>
        <Button>Delete</Button>
      </div>
      <div className="bg-lemon/75 px-12 py-4">
        <h2 className="mb-2 text-xl font-bold text-black">{note.title}</h2>
        <p className="text-gray-700">{note.description}</p>
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
