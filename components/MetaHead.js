import Head from "next/head";

export default function MetaHead() {
  return (
    <Head>
      <title>ChatGPT Conf 2023</title>
      <meta
        name="description"
        content="All you need to know about DevRel and how to get into it."
      />
      <meta property="og:url" content={`https://www.whatisdevrel.com`} />
      <meta property="og:site_name" content="WhatisDevRel.com" />
      <meta
        property="og:description"
        content="ChatGPT Conf 2023"
      />
      <meta property="og:title" content="ChatGPT Conf 2023" />
      <meta
        property="og:image"
        content="https://www.whatisdevrel.com/ogimage_new.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nutlope" />
      <meta name="twitter:title" content="What is DevRel?" />
      <meta
        name="twitter:description"
        content="ChatGPT Conf 2023"
      />
      <meta
        name="twitter:image"
        content="https://www.whatisdevrel.com/ogimage_new.png"
      />
    </Head>
  );
}
