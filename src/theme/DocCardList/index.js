/* eslint-disable spellcheck/spell-checker */
// Permit customisation of DocCardList: Tailwind grid with a `cols` prop (2 or 3)
// and an `articleClassName` override for each card wrapper. docs/home.mdx
// imports this file by relative path, so keep it at this location.
import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from "@docusaurus/plugin-content-docs/client";
import DocCard from "@theme/DocCard";

function DocCardListForCurrentSidebarCategory({ className }) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} />;
}

function DocCardListItem({ item, articleClassName }) {
  return (
    <article
      className={clsx(articleClassName || "col col--6 margin-bottom--lg", "w-full max-w-full")}
    >
      <DocCard item={item} />
    </article>
  );
}

export default function DocCardList(props) {
  const { items, className, articleClassName, cols = 2 } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section
      className={clsx(
        "row",
        className,
        "flex flex-col md:grid gap-6",
        cols === 2 && "md:grid-cols-2",
        cols === 3 && "md:grid-cols-3"
      )}
    >
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} articleClassName={articleClassName} />
      ))}
    </section>
  );
}
