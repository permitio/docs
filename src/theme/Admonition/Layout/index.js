// Permit customisation of Admonition/Layout (upstream theme-classic 3.10.2):
// identical markup, with stable global class names on the heading, icon and
// content (`pm-admonition__*`) instead of hashed CSS-module classes, so
// src/css/components/_admonitions.scss can style them without attribute
// selectors. Upstream's module styles are restated in that partial.
//
// The heading also records whether the title is the type's default label
// (`:::note`) or an author's own title (`:::note[Video walkthrough]`). A
// default renders as a short Rajdhani label; a custom title is a phrase the
// reader has to read, so it keeps its own case in Manrope
// (pm-admonition__heading--custom).
import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";

// Admonition/Type/* pass their default title as a <Translate> element.
const isDefaultTitle = (title) => React.isValidElement(title) && title.type === Translate;

function AdmonitionContainer({ type, className, children, id }) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}

function AdmonitionHeading({ icon, title }) {
  return (
    <div
      className={clsx(
        "pm-admonition__heading",
        !isDefaultTitle(title) && "pm-admonition__heading--custom"
      )}
    >
      <span className="pm-admonition__icon">{icon}</span>
      {title}
    </div>
  );
}

function AdmonitionContent({ children }) {
  return children ? <div className="pm-admonition__content">{children}</div> : null;
}

export default function AdmonitionLayout(props) {
  const { type, icon, title, children, className, id } = props;
  return (
    <AdmonitionContainer type={type} className={className} id={id}>
      {title || icon ? <AdmonitionHeading title={title} icon={icon} /> : null}
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionContainer>
  );
}
