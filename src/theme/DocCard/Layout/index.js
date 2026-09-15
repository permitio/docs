/* eslint-disable spellcheck/spell-checker */
// Permit customisation of the DocCard presentation layer.
// Upstream DocCard (index.js) still resolves href, title and description; this
// replaces only the card markup: Tailwind card with a hover border overlay, an
// optional `item.svgIcon` above the title, and no emoji icon.
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

function Container({ className, href, children }) {
  return (
    <Link
      href={href}
      className={clsx(
        "card relative shadow transition rounded-lg h-full px-[18px] py-5 hover:opacity-100 group",
        ThemeClassNames.docs.docCard.container,
        styles.cardContainer,
        className
      )}
    >
      <div className="flex flex-col relative z-20 gap-[14px]">{children}</div>
      <div
        style={{ border: "1px solid #D1B9B0" }}
        className="absolute z-10 pointer-events-none rounded-lg inset-0 opacity-100 group-hover:opacity-0 transition"
      ></div>
      <div
        style={{ border: "2px solid #974EF2" }}
        className="absolute z-10 pointer-events-none rounded-lg inset-0 opacity-0 group-hover:opacity-100 transition"
      ></div>
    </Link>
  );
}

export default function DocCardLayout({ item, className, href, title, description }) {
  return (
    <Container href={href} className={className}>
      <div className="flex flex-col">
        {item.svgIcon ?? null}
        <h2 className={clsx("text--truncate !text-base", styles.cardTitle)} title={title}>
          {title}
        </h2>
      </div>
      {description && (
        <p className={clsx("text--truncate !leading-normal", styles.cardDescription)} title={description}>
          {description}
        </p>
      )}
    </Container>
  );
}
