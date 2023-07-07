import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Workshop Store</title>
      <meta name="title" content="Workshop Store" />
      <meta name="description" content="Compre workshops na minha loja usando Solana Pay!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.isisdandara.com/" />
      <meta property="og:title" content="Solana Pay Store" />
      <meta property="og:description" content="Compre workshops na minha loja usando Solana Pay!" />
      <meta property="og:image" content="https://www.isisdandara.com/wp-content/uploads/2023/02/Grupo-de-Estudos.png" />
    </Head>
  );
}
