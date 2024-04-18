/* eslint-disable spellcheck/spell-checker */
import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import styles from "./styles.module.css";

function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const doc = useDoc();
  const windowSize = useWindowSize();

  // Check if window size is 'desktop' or 'ssr' and full_width is true
  const isDesktopAndSSR = windowSize === "desktop" || windowSize === "ssr";
  const isFullWidthDesktop = isDesktopAndSSR && doc.frontMatter.full_width;
  const isFullWidthContainer = doc.frontMatter.full_width_container;

  const hideBreadcrumbs = doc.frontMatter.hide_breadcrumbs;

  return (
    <div className="row">
      <div
        className={clsx(
          `col ${isFullWidthContainer ? "!p-0" : ""}`,
          !docTOC.hidden ? styles.docItemCol : ""
        )}
      >
        <DocVersionBanner />
        <div
          className={clsx({
            [styles.fullWidthContainer]: isFullWidthContainer,
            [styles.docItemContainerFull]: isFullWidthDesktop, // Apply full width only if on desktop and full_width is true
            [styles.docItemContainer]: !isFullWidthDesktop, // Otherwise, apply the standard width
          })}
        >
          <article>
            {!hideBreadcrumbs && <DocBreadcrumbs />}
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
