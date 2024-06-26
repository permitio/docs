/* eslint-disable spellcheck/spell-checker */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  auto_generated_sidebar: [
    {
      type: "html",
      value: `<div class='sidebar_top_wrapper'>
                <div class='sidebar_top'>
                  <div class='sidebar_top_logo is-dark'>
                    <a target="_blank" rel="noopener noreferrer" href="https://permit.io">
                      <img src="/logo/site-logos/marketing-dark.svg" alt='' />
                    </a>
                    <a href="/">
                      <img src="/logo/site-logos/docs-dark.svg" alt='' />
                    </a>
                  </div>
                  <div class='sidebar_top_logo is-light'>
                    <a target="_blank" rel="noopener noreferrer" href="https://permit.io">
                      <img src="/logo/site-logos/marketing-light.svg" alt='' />
                    </a>
                    <a href="/">
                      <img src="/logo/site-logos/docs-light.svg" alt='' />
                    </a>
                  </div>
                </div>

                <div class='sidebar_bottom'>
                  <a href="/">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/docs-home.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/docs-home.svg" alt='' />
                    </div>
                    Docs Home
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.permit.io/">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/marketing-home.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/marketing-home.svg" alt='' />
                    </div>
                    Permit Homepage
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://permit-io.slack.com/join/shared_invite/zt-nz6yjgnp-RlP9rtOPwO0n0aH_vLbmBQ#/shared-invite/email">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/slack.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/slack.svg" alt='' />
                    </div>
                    Slack Community
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/permitio">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/github.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/github.svg" alt='' />
                    </div>
                    GitHub
                  </a>
                </div>
              </div>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    { type: "autogenerated", dirName: "." },
  ],
};

module.exports = sidebars;
