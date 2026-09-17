// Permit customisation of CodeBlock/Layout (upstream theme-classic 3.10.2):
// identical markup, but the title bar and content wrapper carry stable global
// class names (`pm-code-block__title`, `pm-code-block__content`) instead of
// hashed CSS-module classes, so src/css/components/_code.scss can style them
// without attribute selectors. Upstream's module styles live in that partial.
import React from "react";
import clsx from "clsx";
// `useCodeBlockContext` is exported only from theme-common/internal in 3.10.2
// (lib/internal.d.ts); upstream CodeBlock/Layout imports it identically.
import { useCodeBlockContext } from "@docusaurus/theme-common/internal";
import Container from "@theme/CodeBlock/Container";
import Title from "@theme/CodeBlock/Title";
import Content from "@theme/CodeBlock/Content";
import Buttons from "@theme/CodeBlock/Buttons";

export default function CodeBlockLayout({ className }) {
  const { metadata } = useCodeBlockContext();
  return (
    <Container as="div" className={clsx(className, metadata.className)}>
      {metadata.title && (
        <div className="pm-code-block__title">
          <Title>{metadata.title}</Title>
        </div>
      )}
      <div className="pm-code-block__content">
        <Content />
        <Buttons />
      </div>
    </Container>
  );
}
