import React from "react";
import OriginalSidebar from "@theme-original/DocSidebar";
import Logo from "@theme/Logo";

// The logo only shows in the mobile menu; _doc-sidebar.scss hides it in the
// desktop sidebar, where the sidebars.js header block carries the logos.

export default function DocSidebarWrapper(props) {
  return (
    <>
      <Logo className="pm-sidebar-logo" />
      <OriginalSidebar {...props} />
    </>
  );
}
