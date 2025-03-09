/* eslint-disable spellcheck/spell-checker */
import React from "react";
import clsx from "clsx";
import { useCurrentSidebarCategory, filterDocCardListItems } from "@docusaurus/theme-common";
import DocCard from "../DocCard/index.js";

function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
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
        ` flex flex-col md:grid gap-6 ${cols === 2 ? "md:grid-cols-2" : ""} ${
          cols === 3 ? "md:grid-cols-3" : ""
        }`
      )}
    >
      {filteredItems.map((item, index) => (
        <article
          key={index}
          className={clsx(
            `${articleClassName ? articleClassName : "col col--6 margin-bottom--lg"}`,
            "w-full max-w-full"
          )}
        >
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
