/* eslint-disable spellcheck/spell-checker */
// Permit customisation of the DocCard presentation layer.
// Upstream DocCard (index.js) still resolves href, title and description; this
// replaces only the card markup: an optional `item.svgIcon` (a Remixicon <i>)
// in a tinted chip above the title, and no emoji icon. The chip colour comes
// from `item.tone`: "purple" | "orange" | "neutral" (default). Styles live in
// src/css/components/_cards.scss on the ThemeClassNames docCard classes.
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";

const TONES = new Set(["purple", "orange", "neutral"]);

export default function DocCardLayout({ item, className, href, title, description }) {
  const tone = TONES.has(item.tone) ? item.tone : "neutral";
  return (
    <Link href={href} className={clsx("card", ThemeClassNames.docs.docCard.container, className)}>
      {item.svgIcon && (
        <span
          className={clsx(ThemeClassNames.docs.docCard.icon, `pm-card-icon--${tone}`)}
          aria-hidden="true"
        >
          {item.svgIcon}
        </span>
      )}
      <h2 className={clsx("text--truncate", ThemeClassNames.docs.docCard.title)} title={title}>
        {title}
      </h2>
      {description && (
        <p
          className={clsx("text--truncate", ThemeClassNames.docs.docCard.description)}
          title={description}
        >
          {description}
        </p>
      )}
    </Link>
  );
}
