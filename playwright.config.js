const { devices } = require("@playwright/test");

// Local key-page visual baseline (tests/visual/key-pages.spec.js): 14 pages x
// 2 viewports x 2 themes. Not run in CI; run it with `npm run test:visual`.

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
      name: "visual-baseline",
      testDir: "tests/visual",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
