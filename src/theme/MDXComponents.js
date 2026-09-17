import MDXComponents from "@theme-original/MDXComponents";
import NextStepCallout from "@site/src/components/cta/NextStepCallout";
import DecisionFlowDiagram from "@site/src/components/diagrams/DecisionFlowDiagram";
import HybridDeploymentDiagram from "@site/src/components/diagrams/HybridDeploymentDiagram";
import McpGatewayPathDiagram from "@site/src/components/diagrams/McpGatewayPathDiagram";

// Global MDX registration. Most custom components in docs/**/*.mdx are
// imported per-file; these are registered here because they drop into many
// pages with zero boilerplate: the next-step CTA (task 4.6) and the coded
// architecture diagrams (task 5.1).
export default {
  ...MDXComponents,
  NextStepCallout,
  DecisionFlowDiagram,
  HybridDeploymentDiagram,
  McpGatewayPathDiagram,
};
