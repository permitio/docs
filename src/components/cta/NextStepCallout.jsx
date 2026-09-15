import React from "react";
import Link from "@docusaurus/Link";
import siteLinks from "@site/src/data/site-links";
import styles from "./NextStepCallout.module.scss";

// Contextual sales/production CTAs for pages with high developer intent
// (task 4.6). One component, three fixed variants; always place it at the
// end of a section or page, never inside a step list. Budget: at most one
// callout per page, and never on SDK/API reference pages.
//
// The click handler fires the same gtag event pattern the TOC help box uses
// (src/theme/TOC/index.js), with the variant as the label so all three
// surfaces roll up together in analytics.
function fireEvent(variant) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_next_step_callout", {
      event_category: "NextStepCallout",
      event_label: variant,
      value: window.location.pathname,
    });
  }
}

// No dedicated "PDP deployment checklist" doc exists yet; /how-to/deploy/overview
// is the closest existing production-deployment guide. Point the production
// variant there until a standalone checklist page ships.
const PRODUCTION_CHECKLIST_PATH = "/how-to/deploy/overview";

const VARIANTS = {
  enterprise: ({ onClick }) => (
    <>
      This runs on the Enterprise plan.{" "}
      <a href={siteLinks.DEMO} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        Talk to an engineer about your deployment →
      </a>
    </>
  ),
  production: ({ onClick }) => (
    <>
      Going to production?{" "}
      <Link to={PRODUCTION_CHECKLIST_PATH} onClick={onClick}>
        Review the PDP deployment checklist
      </Link>
      , or{" "}
      <a href={siteLinks.DEMO} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        talk to an engineer about scale and latency
      </a>
      .
    </>
  ),
  agents: ({ onClick }) => (
    <>
      Rolling out agents across your org?{" "}
      <a href={siteLinks.DEMO} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        Book a security review →
      </a>
    </>
  ),
};

export default function NextStepCallout({ variant }) {
  const Content = VARIANTS[variant];
  if (!Content) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(`NextStepCallout: unknown variant "${variant}"`);
    }
    return null;
  }

  const onClick = () => fireEvent(variant);

  return (
    <aside className={styles.callout} data-variant={variant}>
      <span className={styles.label}>Next step</span>
      <p className={styles.text}>
        <Content onClick={onClick} />
      </p>
    </aside>
  );
}
