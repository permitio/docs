import React from "react";
import clsx from "clsx";
import styles from "./diagrams.module.scss";

/**
 * Shared shell for coded architecture diagrams, ported from
 * next-website/components/diagrams/DiagramFrame.tsx. Diagrams are real markup,
 * not images, so labels stay accurate, readable by screen readers and search,
 * and correct in both themes.
 *
 * - label: short name for what the diagram shows (small uppercase label)
 * - caption: one sentence stating the takeaway, rendered as the figcaption
 */
export default function DiagramFrame({ label, caption, children, className }) {
  return (
    <figure className={clsx(styles.frame, className)}>
      <p className={styles.frameLabel}>{label}</p>
      <div className={styles.frameBody}>{children}</div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

/** Monospace key/value record, styled like a line in a decision log. */
export function DecisionReceipt({ title = "Example decision", rows, verdict }) {
  return (
    <div className={styles.receipt}>
      <div className={styles.receiptHead}>
        <span className={styles.receiptTitle}>{title}</span>
        <span className={styles.verdict} data-verdict={verdict}>
          {verdict}
        </span>
      </div>
      <dl className={styles.receiptRows}>
        {rows.map(([key, value]) => (
          <div key={key} className={styles.receiptRow}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
