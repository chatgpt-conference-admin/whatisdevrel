import Head from "next/head";

export default function MetaHead() {
  return (
    <Head>
      <title>ChatGPT Conf 2023</title>
      <meta
        name="description"
        content="ChatGPT Conf 2023"
      />
      <meta property="og:url" content={`https://chatgpt-conf.vercel.app/`} />
      <meta property="og:site_name" content="WhatisDevRel.com" />
      <meta
        property="og:description"
        content="ChatGPT Conf 2023"
      />
      <meta property="og:title" content="ChatGPT Conf 2023" />
      <meta
        property="og:image"
        content="/chatgpt.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Chatgptconf" />
      <meta name="twitter:title" content="ChatGPT Conf 2023" />
      <meta
        name="twitter:description"
        content="ChatGPT Conf 2023"
      />
      <meta
        name="twitter:image"
        content="/chatgpt.png"
      />
    </Head>
  );
}
