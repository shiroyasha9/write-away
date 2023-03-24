import '@/styles/globals.css';
import Head from 'next/head';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Write Away</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
