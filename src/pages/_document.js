import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="̌̌#7e22ce" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Write your notes with ease." />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Privacy focused notes taking app to help write your notes with ease."
        />
        <meta
          name="description"
          content="Write Away is a privacy focused notes taking app to help write your notes with ease."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
