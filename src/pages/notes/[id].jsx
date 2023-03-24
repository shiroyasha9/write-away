import { useRouter } from 'next/router';

const NotePage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default NotePage;
