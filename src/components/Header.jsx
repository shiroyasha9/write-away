import Button from './Button';

export default function Header() {
  return (
    <div className="sticky top-5 flex w-full justify-between">
      <h1 className="text-3xl font-semibold">Write Away</h1>
      <Button>Add Note</Button>
    </div>
  );
}
