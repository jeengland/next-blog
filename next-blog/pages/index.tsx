import Head from "next/head";

import PreviewPage from "@components/homepage/PreviewPage";
import BaseContainer from "@components/common/BaseContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name="description" content="A simple blog made in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <PreviewPage />
      </BaseContainer>
    </>
  );
}
