import MDXComponents from "@theme-original/MDXComponents";
import NextStepCallout from "@site/src/components/cta/NextStepCallout";

// Global MDX registration for NextStepCallout only (task 4.6): every other
// custom component in docs/**/*.mdx is imported per-file, but the CTA needs
// to drop into many pages with zero boilerplate.
export default {
  ...MDXComponents,
  NextStepCallout,
};
