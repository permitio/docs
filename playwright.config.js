const { devices } = require("@playwright/test");

// The key-page visual baseline (tests/visual/key-pages.spec.js) captures 14
// pages x 2 viewports x 2 themes = 56 screenshots. That's cheap on its own,
// but Argos CI (.github/workflows/argos.yml) runs `npx playwright test` with
// no --project filter, which executes every project in this file - so
// without this gate, the baseline spec would run (and re-screenshot 56
// pages) on every Argos CI invocation alongside the full-site screenshot
// pass. The "visual-baseline" project below therefore only exists in the
// `projects` array when RUN_VISUAL_BASELINE is set, which `npm run
// test:visual` sets and CI does not - so `npx playwright test` in CI only
// ever sees the "chromium" project (unchanged from before this file), and
// the key-page spec must be run explicitly via `npm run test:visual`.
const RUN_VISUAL_BASELINE = Boolean(process.env.RUN_VISUAL_BASELINE);

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  webServer: {
    port: 3000,
    command: "npm run serve",
    reuseExistingServer: true,
  },
  projects: [
    {
      name: "chromium",
      testIgnore: "tests/visual/**",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    ...(RUN_VISUAL_BASELINE
      ? [
          {
            name: "visual-baseline",
            testDir: "tests/visual",
            use: {
              ...devices["Desktop Chrome"],
            },
          },
        ]
      : []),
  ],
};

export default config;
