const { devices } = require("@playwright/test");

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
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
