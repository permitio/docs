import React from "react";
import Link from "@docusaurus/Link";
import DiagramFrame from "./DiagramFrame";
import styles from "./diagrams.module.scss";

// The request path of one MCP tool call through Permit MCP Gateway. Adapted
// from next-website DefenseInDepthDiagram / AgenticIdentityDiagram; every
// label follows docs/permit-mcp-gateway/architecture.mdx, consent-service.mdx,
// permit-integration.mdx and audit-logs.mdx.
const HOPS = [
  {
    icon: "ri-robot-2-line",
    title: "MCP client",
    body: "Cursor, Claude, or VS Code, acting for a human who signed in and set a trust level.",
    to: "/permit-mcp-gateway/consent-service",
  },
  {
    icon: "ri-door-lock-line",
    title: "Permit MCP Gateway",
    body: "Verifies the session and binds every tool call to that human and that agent.",
    to: "/permit-mcp-gateway/architecture",
    highlight: true,
  },
  {
    icon: "ri-scales-3-line",
    title: "permit.check()",
    body: "Runs on every tool call: agent trust level, human trust ceiling, and the tool's risk.",
    to: "/permit-mcp-gateway/permit-integration",
    mono: true,
  },
  {
    icon: "ri-server-line",
    title: "Upstream MCP server",
    body: "Receives only allowed calls. Upstream OAuth tokens stay with the gateway, and the server is unchanged.",
    to: "/permit-mcp-gateway/guide",
  },
  {
    icon: "ri-file-search-line",
    title: "Audit log",
    body: "Every allowed or denied tool call, with the human, the agent, and the reason.",
    to: "/permit-mcp-gateway/audit-logs",
  },
];

export default function McpGatewayPathDiagram({ className }) {
  return (
    <DiagramFrame
      className={className}
      label="The path of one MCP tool call"
      caption="Point your MCP client at the gateway URL instead of the upstream server URL. The gateway checks and logs each call before it reaches the server."
    >
      <ol className={styles.flow}>
        {HOPS.map(({ icon, title, body, to, highlight, mono }) => (
          <li key={title} className={styles.flowStage} data-highlight={highlight || undefined}>
            <span className={styles.flowNode} aria-hidden="true">
              <i className={icon} />
            </span>
            <span className={styles.flowText}>
              <Link to={to} className={styles.flowTitle} data-mono={mono || undefined}>
                {title}
              </Link>
              <span className={styles.flowBody}>{body}</span>
            </span>
          </li>
        ))}
      </ol>
    </DiagramFrame>
  );
}
