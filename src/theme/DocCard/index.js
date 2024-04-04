/* eslint-disable spellcheck/spell-checker */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { findFirstCategoryLink, useDocById } from "@docusaurus/theme-common/internal";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx(
        "card relative shadow transition rounded-lg h-full px-[18px] py-5 hover:opacity-100 group",
        styles.cardContainer
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

function CardLayout({ href, title, description, svgIcon }) {
  return (
    <CardContainer href={href}>
      <div className="flex flex-col">
        {svgIcon ? svgIcon : null}
        <h2 className={clsx("text--truncate !text-base", styles.cardTitle)} title={title}>
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={clsx("text--truncate !leading-normal", styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={
        item.description ??
        translate(
          {
            message: "{count} items",
            id: "theme.docs.DocCard.categoryDescription",
            description:
              "The default description for a category card in the generated index about how many items this category includes",
          },
          { count: item.items.length }
        )
      }
    />
  );
}

function CardLink({ item }) {
  const icon = item.icon ? item.icon : isInternalUrl(item.href) ? "📄" : "🔗";

  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
      svgIcon={item.svgIcon}
    />
  );
}

export default function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
