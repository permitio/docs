import React from "react";
import OriginalLayout from "@theme-original/Layout";
import Head from "@docusaurus/Head";
import "remixicon/fonts/remixicon.css";

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}
