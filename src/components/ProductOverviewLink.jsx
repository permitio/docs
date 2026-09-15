import React from "react";

// One-line pointer from a docs section intro to the matching www.permit.io
// product page. Used only at the top of section intros (task 4.5), never
// inside procedural steps. Content pages hardcode the href like any other
// prose link (see docs/**/*.mdx conventions); this just gives that one line
// a consistent look.
export default function ProductOverviewLink({ href, label }) {
  // A div, not a <p>: the markdown intro-paragraph rule (_markdown.scss)
  // styles the first sibling <p> after an <h1> as larger, muted body text,
  // which this one-liner should not pick up.
  return (
    <div className="pm-product-overview-link">
      <i className="ri-external-link-line" aria-hidden="true" />
      Product overview:{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
}
