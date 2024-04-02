import React from "react";
import OriginalLayout from "@theme-original/Layout";
import Head from "@docusaurus/Head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}
