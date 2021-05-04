import Head from "next/head";

import PreviewPage from "@components/homepage/PreviewPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Blog</title>
        <meta name="description" content="A simple blog made in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hi</h1>
      <PreviewPage />
    </div>
  );
}
