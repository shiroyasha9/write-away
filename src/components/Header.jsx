import { useRouter } from 'next/router';
import Button from './Button';

export default function Header() {
  const router = useRouter();
  return (
    <div className="sticky top-5 flex w-full justify-between">
      <h1 className="text-3xl font-semibold">Write Away</h1>
      <Button onClick={() => router.push('/add')}>Add Note</Button>
    </div>
  );
}
