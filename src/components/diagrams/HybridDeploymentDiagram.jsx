import React from "react";
import Link from "@docusaurus/Link";
import DiagramFrame from "./DiagramFrame";
import styles from "./diagrams.module.scss";

// Ported from next-website/components/diagrams/HybridDeploymentDiagram.tsx.
// Claims follow docs/overview/how-does-it-work.mdx (control plane in Permit's
// cloud, PDPs in your network, OPAL keeps them in sync, decisions do not
// depend on Permit's availability).
function Item({ icon, children }) {
  return (
    <li className={styles.hybridItem}>
      <i className={icon} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export default function HybridDeploymentDiagram({ className }) {
  return (
    <DiagramFrame
      className={className}
      label="Hybrid deployment"
      caption="Policy is managed in the control plane and evaluated in your network. The data your policies need can stay on your side."
    >
      <div className={styles.hybrid}>
        <div className={styles.hybridPanel}>
          <Link to="/concepts/control-plane-and-data-plane" className={styles.hybridTitle}>
            Permit control plane
          </Link>
          <p className={styles.hybridMeta}>Permit cloud</p>
          <ul className={styles.hybridList}>
            <Item icon="ri-layout-grid-line">Policy editor and API</Item>
            <Item icon="ri-git-branch-line">Policy as code in your Git repo</Item>
            <Item icon="ri-file-list-3-line">Audit logs</Item>
          </ul>
        </div>

        <div className={styles.hybridSync}>
          <span className={styles.hybridSyncPill}>
            <i className="ri-refresh-line" aria-hidden="true" />
            <span className={styles.hybridSyncText}>OPAL syncs policy and data</span>
          </span>
        </div>

        <div className={styles.hybridNetwork}>
          <div className={styles.hybridNetworkHead}>
            <span className={styles.hybridTitleText}>Your network</span>
            <span className={styles.hybridMeta}>VPC, data center, or on-prem</span>
          </div>
          <div className={styles.hybridNetworkBody}>
            <div className={styles.hybridPdp}>
              <Link to="/concepts/pdp/overview" className={styles.hybridTitle}>
                <i className="ri-scales-3-line" aria-hidden="true" /> Policy decision points
              </Link>
              <p className={styles.hybridPdpBody}>
                Run beside your services and answer checks locally, without a round trip to the control
                plane.
              </p>
            </div>
            <ul className={styles.hybridList}>
              <Item icon="ri-server-line">Your apps and APIs</Item>
              <Item icon="ri-database-2-line">Your data</Item>
            </ul>
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}
