import React from "react";
import Link from "@docusaurus/Link";
import DiagramFrame, { DecisionReceipt } from "./DiagramFrame";
import styles from "./diagrams.module.scss";

// Ported from next-website/components/diagrams/DecisionFlowDiagram.tsx. Each
// stage title links to the docs page that explains that step.
const STAGES = [
  {
    icon: "ri-fingerprint-line",
    title: "Identity",
    body: "A user, service, or AI agent, authenticated by your identity provider.",
    to: "/authentication/permit-and-authentication",
  },
  {
    icon: "ri-send-plane-line",
    title: "Request",
    body: "Your code asks: can this identity perform this action on this resource?",
    to: "/how-to/enforce-permissions/check",
  },
  {
    icon: "ri-scales-3-line",
    title: "Policy decision point",
    body: "Runs in your VPC next to your services and evaluates policy with OPA or Cedar.",
    to: "/concepts/pdp/overview",
    highlight: true,
  },
  {
    icon: "ri-shield-check-line",
    title: "Decision",
    body: "Allow or deny, returned to your code. The decision log records why.",
    to: "/how-to/use-audit-logs/debug-mode",
  },
  {
    icon: "ri-file-search-line",
    title: "Audit",
    body: "Every decision is logged and can be forwarded to your logging stack or SIEM.",
    to: "/how-to/use-audit-logs/types-and-filtering",
  },
];

export default function DecisionFlowDiagram({ className, showExample = true }) {
  return (
    <DiagramFrame
      className={className}
      label="How a permission decision is made"
      caption="The same five steps apply whether the caller is a person clicking a button or an agent calling a tool. Only the identity changes."
    >
      <ol className={styles.flow}>
        {STAGES.map(({ icon, title, body, to, highlight }) => (
          <li key={title} className={styles.flowStage} data-highlight={highlight || undefined}>
            <span className={styles.flowNode} aria-hidden="true">
              <i className={icon} />
            </span>
            <span className={styles.flowText}>
              <Link to={to} className={styles.flowTitle}>
                {title}
              </Link>
              <span className={styles.flowBody}>{body}</span>
            </span>
          </li>
        ))}
      </ol>

      {showExample && (
        <DecisionReceipt
          title="Example decision log entry"
          verdict="allow"
          rows={[
            ["user", "john@permit.io"],
            ["action", "read"],
            ["resource", "document:q3-report  (tenant: default)"],
            ["reason", "john@permit.io has the viewer role in tenant default, and viewer can read document"],
            ["decided by", "PDP in your VPC"],
          ]}
        />
      )}
    </DiagramFrame>
  );
}
