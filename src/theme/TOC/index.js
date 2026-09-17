import React, { useCallback } from "react";
import OriginalTOC from "@theme-original/TOC";
import EditThisPage from "@theme/EditThisPage";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import siteLinks from "@site/src/data/site-links";

// Fires the same event name/shape NextStepCallout uses, so both surfaces
// roll up under one analytics pattern: event_category names the surface,
// event_label names the specific action, value is the page it fired from.
const fireEvent = (eventName, eventCategory, eventLabel) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: window.location.pathname,
    });
  }
};

export default function TOC({ toc, ...props }) {
  // metadata.editUrl is computed per-file by the docs plugin (docusaurus.config.js
  // docs.editUrl) with the doc's real extension; no more hand-built .mdx-only path.
  const { metadata } = useDoc();

  const onEditThisPageClick = useCallback(() => {
    fireEvent("click_edit_github", "EditOnGitHub", "edit_on_github");
  }, []);

  const onSlackClick = useCallback(() => {
    fireEvent("click_toc_help", "TOCHelp", "ask_in_slack");
  }, []);

  const onEngineerClick = useCallback(() => {
    fireEvent("click_toc_help", "TOCHelp", "talk_to_an_engineer");
  }, []);

  return (
    <div className="pm-toc">
      <h2 className="pm-toc-heading">Contents</h2>
      <OriginalTOC toc={toc} {...props} />
      {metadata.editUrl && (
        <span onClick={onEditThisPageClick}>
          <EditThisPage editUrl={metadata.editUrl} />
        </span>
      )}
      <div className="pm-toc-help-box">
        <h3 className="pm-toc-help-heading">Need help?</h3>
        <div className="pm-toc-help" id="toc-help-slack">
          <i className="ri-slack-fill pm-toc-help-icon" aria-hidden="true" />
          <a
            href={siteLinks.COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            className="pm-toc-help-link"
            onClick={onSlackClick}
          >
            Ask in Slack
          </a>
        </div>
        <div className="pm-toc-help" id="toc-help-demo">
          <i className="ri-customer-service-2-line pm-toc-help-icon" aria-hidden="true" />
          <a
            href={siteLinks.DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="pm-toc-help-link"
            onClick={onEngineerClick}
          >
            Talk to an engineer
          </a>
        </div>
      </div>
    </div>
  );
}
