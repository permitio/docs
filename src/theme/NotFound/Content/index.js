import React, { useCallback } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import siteLinks from "@site/src/data/site-links";

// Same five destinations the footer's Docs column leads with (already the
// site's established "start here" set), plus the API reference.
const DESTINATIONS = [
  { label: "Quickstart", to: "/quickstart", icon: "ri-rocket-line" },
  { label: "How Permit works", to: "/overview/how-does-it-work", icon: "ri-compasses-2-line" },
  {
    label: "Guides & tutorials",
    to: "/how-to/build-policies/policy-basics",
    icon: "ri-book-marked-line",
  },
  { label: "SDKs", to: "/sdk/sdks-overview", icon: "ri-tools-line" },
  { label: "API reference", to: siteLinks.API_REFERENCE, icon: "ri-shapes-line" },
];

// Reuses the navbar's live Inkeep search trigger instead of standing up a
// second search integration; falls back to a plain docs-home link if the
// widget hasn't mounted (e.g. JS disabled).
function openSiteSearch(event) {
  const trigger =
    typeof document !== "undefined" && document.querySelector(".ikp-search-bar__container button");
  if (trigger) {
    event.preventDefault();
    trigger.click();
  }
}

export default function NotFoundContent({ className }) {
  const onSearchClick = useCallback((event) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_404_search", {
        event_category: "NotFound",
        event_label: "search_the_docs",
        value: window.location.pathname,
      });
    }
    openSiteSearch(event);
  }, []);

  const onDestinationClick = useCallback((label) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_404_destination", {
        event_category: "NotFound",
        event_label: label,
        value: window.location.pathname,
      });
    }
  }, []);

  return (
    <main className={clsx("container margin-vert--xl pm-404", className)}>
      <div className="pm-404-intro">
        <Heading as="h1" className="pm-404-title">
          <Translate id="theme.NotFound.title" description="The title of the 404 page">
            Page not found
          </Translate>
        </Heading>
        <p className="pm-404-lead">
          That page moved, or never existed. Search the docs, jump to a popular destination below,
          or ask in Slack if you&apos;re still stuck.
        </p>
        <a href="/" className="pm-404-search" onClick={onSearchClick}>
          <i className="ri-search-line" aria-hidden="true" />
          Search the docs
        </a>
      </div>

      <div className="pm-404-destinations">
        <h2 className="pm-404-section-heading">Popular destinations</h2>
        <ul className="pm-404-list">
          {DESTINATIONS.map(({ label, to, icon }) => (
            <li key={label}>
              <Link to={to} className="pm-404-link" onClick={() => onDestinationClick(label)}>
                <i className={clsx(icon, "pm-404-link-icon")} aria-hidden="true" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="pm-404-slack">
        <i className="ri-slack-fill" aria-hidden="true" />
        Still can&apos;t find it? Ask in{" "}
        <a
          href={siteLinks.COMMUNITY}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onDestinationClick("slack")}
        >
          our Slack community
        </a>
        .
      </p>
    </main>
  );
}
