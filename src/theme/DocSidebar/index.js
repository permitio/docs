import React from "react";
import OriginalSidebar from "@theme-original/DocSidebar";
import Logo from "@theme/Logo";

export default function DocSidebarWrapper(props) {
  return (
    <>
      <Logo />
      <OriginalSidebar {...props} />
    </>
  );
}
