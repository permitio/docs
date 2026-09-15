import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { trackLandingClick } from "./track";
import styles from "./landing.module.scss";

// Shared building blocks for the docs home (docs/home.mdx) and the
// walkthroughs landing (docs/overview/walkthroughs-intro.mdx). Both pages use
// `full_width_container`, so LandingPage supplies its own gutter and measure.
//
// Headings are plain JSX (not markdown `##`), so they stay out of the TOC.
// Avoid <header> elements here: the bleed layout hides `header` to drop the
// generated doc title.

const isExternal = (href) => /^https?:\/\//.test(href);

function ExternalMark({ href }) {
  return isExternal(href) ? (
    <>
      <i className={clsx("ri-arrow-right-up-line", styles.externalMark)} aria-hidden="true" />
      <span className={styles.srOnly}> (opens in a new tab)</span>
    </>
  ) : null;
}

export function LandingPage({ children }) {
  return <div className={styles.page}>{children}</div>;
}

/** Page title, lead, primary/secondary actions, and an optional aside. */
export function LandingHero({ title, lead, actions = [], aside, category }) {
  return (
    <div className={clsx(styles.hero, aside && styles.heroWithAside)}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroLead}>{lead}</p>
        {actions.length > 0 && (
          <div className={styles.heroActions}>
            {actions.map(({ label, href, primary }) => (
              <Link
                key={label}
                to={href}
                className={primary ? styles.buttonPrimary : styles.buttonSecondary}
                onClick={() => trackLandingClick(category, label)}
              >
                {label}
                {isExternal(href) ? (
                  <ExternalMark href={href} />
                ) : (
                  <i className="ri-arrow-right-line" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
      {aside && <div className={styles.heroAside}>{aside}</div>}
    </div>
  );
}

/** A titled section with an optional one-line intro and a trailing link. */
export function LandingSection({ id, title, intro, link, category, children }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className={styles.sectionHead}>
        <div>
          <h2 id={headingId} className={styles.sectionTitle}>
            {title}
          </h2>
          {intro && <p className={styles.sectionIntro}>{intro}</p>}
        </div>
        {link && (
          <Link
            to={link.href}
            className={styles.sectionLink}
            onClick={() => trackLandingClick(category, link.label)}
          >
            {link.label}
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

/**
 * Link cards. `numbered` renders an ordered list and shows the position in
 * place of the icon: use it only when the order is a real sequence.
 */
export function CardGrid({ items, numbered = false, columns = 4, category }) {
  const List = numbered ? "ol" : "ul";
  return (
    <List className={styles.cards} data-columns={columns}>
      {items.map(({ title, description, href, icon }, index) => (
        <li key={href} className={styles.cardItem}>
          <Link
            to={href}
            className={styles.card}
            onClick={() => trackLandingClick(category, title)}
          >
            <span className={styles.cardMarker} aria-hidden="true">
              {numbered ? String(index + 1).padStart(2, "0") : <i className={icon} />}
            </span>
            <span className={styles.cardTitle}>{title}</span>
            <span className={styles.cardDescription}>{description}</span>
            <i className={clsx("ri-arrow-right-line", styles.cardArrow)} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </List>
  );
}

/** SDK and tooling tiles: name, registry, and package identifier. */
export function SdkTiles({ items, category }) {
  return (
    <ul className={styles.sdks}>
      {items.map(({ name, registry, pkg, href }) => (
        <li key={name} className={styles.sdkItem}>
          <Link to={href} className={styles.sdk} onClick={() => trackLandingClick(category, name)}>
            <span className={styles.sdkName}>{name}</span>
            <span className={styles.sdkRegistry}>{registry}</span>
            <code className={styles.sdkPackage}>{pkg}</code>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Plain task links in a ruled list. */
export function TaskLinks({ items, category }) {
  return (
    <ul className={styles.tasks}>
      {items.map(({ label, href }) => (
        <li key={href} className={styles.taskItem}>
          <Link to={href} className={styles.task} onClick={() => trackLandingClick(category, label)}>
            <span>{label}</span>
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Help channels: icon, linked title, one line on when to use it. */
export function HelpLinks({ items, category }) {
  return (
    <ul className={styles.help}>
      {items.map(({ icon, label, description, href }) => (
        <li key={label} className={styles.helpItem}>
          <i className={clsx(icon, styles.helpIcon)} aria-hidden="true" />
          <span>
            <Link to={href} className={styles.helpLink} onClick={() => trackLandingClick(category, label)}>
              {label}
              <ExternalMark href={href} />
            </Link>
            <span className={styles.helpDescription}>{description}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * The call the home page lead promises: one permission check with the Node.js
 * SDK, as written in docs/sdk/nodejs/quickstart-nodejs.mdx. Static markup (no
 * Prism) so it costs nothing at load.
 */
export function CheckSnippet({ category }) {
  return (
    <div className={styles.snippet}>
      <div className={styles.snippetHead}>
        <span className={styles.snippetLabel}>Node.js</span>
        <span className={styles.snippetFile}>permit.check()</span>
      </div>
      <pre className={styles.snippetCode} tabIndex={0} aria-label="Permission check with the Node.js SDK">
        <code>
          <span className={styles.tkComment}>{"// Ask the PDP next to your service"}</span>
          {"\n"}
          <span className={styles.tkKeyword}>const</span> permitted = <span className={styles.tkKeyword}>await</span>{" "}
          permit.<span className={styles.tkFunction}>check</span>({"\n"}
          {"  "}
          <span className={styles.tkString}>"john@permit.io"</span>, <span className={styles.tkComment}>{"// user"}</span>
          {"\n"}
          {"  "}
          <span className={styles.tkString}>"read"</span>,{"           "}
          <span className={styles.tkComment}>{"// action"}</span>
          {"\n"}
          {"  "}
          <span className={styles.tkString}>"document"</span>
          {"        "}
          <span className={styles.tkComment}>{"// resource"}</span>
          {"\n"});
        </code>
      </pre>
      <p className={styles.snippetFoot}>
        Every SDK exposes the same check.{" "}
        <Link
          to="/how-to/enforce-permissions/check"
          onClick={() => trackLandingClick(category, "snippet_check_docs")}
        >
          How checks work
        </Link>
      </p>
    </div>
  );
}
