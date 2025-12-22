# Contributing to Permit.io Documentation

Thanks for your interest in improving the Permit.io documentation! 

Any contribution helps us improve Permit.io’s documentation for everyone. Fixing a typo, adding a new tutorial, or proposing improvements to developer UX - everything matters. 

This guide will walk you through how to contribute effectively, from setting up your local environment to writing and formatting great documentation.

## About This Repository

This repository contains the source code for [docs.permit.io](https://docs.permit.io/). 

Important things to know:

- The docs are built using [Docusaurus 3.7](https://docusaurus.io/), a modern static site generator.
- A detailed guide to using Docosaurus 3.7 [is available here](https://docusaurus.io/docs/create-doc).
- Docs live in the `docs/` folder.
- We use `.mdx` for all docs.
- Deployment is handled by **Netlify** and happens automatically on merge to `master`.
- Sidebar structure is configured in `sidebars.js`

## File Structure

```bash
/docs           # All docs and tutorials
/sidebars.js    # Controls sidebar nav structure
/static         # Public assets (images, videos, etc.)
```
---

## Quickstart: Local Development

1. Clone & Install Dependencies

```bash
git clone https://github.com/permitio/docs.git
cd permit-docs
yarn
```

1. Start the Local Server

```bash
yarn start
```

This will launch a local dev server at `http://localhost:3000`. Most changes are hot-reloaded automatically.

1. Build (Optional)

```bash
yarn build
```

This creates a static build in the `build/` directory.

This will:

- Check for broken external links
- Format `.mdx` using Prettier
- Lint quickstart and component usage

---

## What You Can Contribute

A list of currently open contribution issues [is available here](https://github.com/permitio/docs/issues). In general, we welcome:

- **Docs Updates** – Fix broken links, improve clarity, screenshot/metadata updates
- **Tutorials** – Step-by-step guides with real code examples
- **Bug Reports** – Issues with docs, inconsistencies, or gaps
- **Feature Suggestions** – Ideas for new guides or improvements

---

## Creating an Issue

Planning a larger contribution? Open an issue to coordinate with the team.

**Issue Template:**

- **Title:** Adding new RBAC Nest.js Implementation Guide
- **Description:** What is the page about, and why is it needed.

Minor typo or formatting fixes? No need for an issue—just open a PR.

---

## Review & Merge

Once you submit a PR:

- A Permit.io team member will review your changes
- You may be asked to make small fixes
- Once approved, your PR will be merged

Upon merge to `master`, the site will redeploy automatically to [https://docs.permit.io](https://docs.permit.io/)

---

## Writing Guidelines

### Structure and Logic

The [Permit.io](http://Permit.io) documentation can be roughly separated into two categories: 

**“Why” docs** focus on more conceptual explanations of how certain parts of [Permit.io](http://Permit.io) operate, and the strategy behind these concepts. Examples are pages like: [Permit's PDP (Policy Decision Point)](https://docs.permit.io/concepts/pdp/overview), [Data Filtering](https://docs.permit.io/how-to/enforce-permissions/data-filtering), or [GitOps Overview](https://docs.permit.io/integrations/gitops/overview). These pages focus more on explaining concepts rather than being step-by-step tutorials. 

**“Do” docs** focus on a more practical, implementation guide type angle, and are meant as instructions users are to follow along as they build their own [Permit.io](http://Permit.io) implementation. 

Below are some writing guides for each:

### For All Docs

- Keep paragraphs short and structured
- Use sentence case for headings (I.e, "What we will build”)
- Avoid “marketing” language. Docs are here to explain how the product works, not sell anything.
- Writing “Permit.io” often results in an auto hyperlink. Remove those to avoid cluttering the docs with irrelevant links.
- Use consistent terminology (e.g., "Local PDP", not "local agent")
- When further explanation is required, link to relevant [Permit.io Docs](https://docs.permit.io/). When relevant docs aren’t available, you can also provide a link to a [relevant blog post](https://www.permit.io/blog).
- Code blocks
    - Max 25 lines
    - For longer examples, split them into sections, explaining each.
    - Language-tag (e.g., `ts`, `bash`)
- Local PDP
    - Even if you’re using the cloud PDP, please mention the Local PDP and its advantages:
        - Zero-latency policy decisions
        - Local testing without the need for a cloud service

### “Why” Blog Structure

- **Meta Description:**
    - A short subtitle should appear under the page title. This subtitle should be a very short explanation of what this page explains.
- **Introduction:**
    - Explains what concepts this page will cover and what it aims to teach.
    - Never title the intro section as "Introduction".
    - If this is a [Permit.io](http://Permit.io) unique feature, make sure to regard it as a feature, but don’t turn it into an ad.
    - The intro should not be longer than 200 words.
- **Article Body:**
    - Title each section with a relevant, clear title.
    - Avoid “clickbait” language, especially in the title. Keep the text short, clear, and to the point.
    - Give clear usage examples in simple language.
    - Provide clear screenshots/diagrams where applicable.
    - For concepts that have their own implementation guides, make sure to link to the relevant guide.
- Conclusion:
    - Always include a short conclusion paragraph that briefly explains what was explained on the page.
    - Suggest other relevant reading materials where applicable (Either from the docs, blog, or outside sources).

### “Do” Blog Structure

- **Meta Description:**
    - A short subtitle that will appear under the title of the page. This should be a very short explanation about what this page is about.
- **Intro / Use Case**
    - Always start by explaining what the user will be building (use case) and why.
    - Never title the intro section as "Introduction".
    - Explain the use case, not the tech buzzwords.
    - Mention Permit.io concisely as a tool, not as an ad.
    - The intro should not be longer than 200 words.
- **Prerequisites and Tech Stack**
    - Describe, in short points, what tools the user can expect to use during the implementation process.
- **Planning**
    - Always use plain English to describe access policies first. Never start policy setup without explaining the policy itself.
    - Example:
        
        > Only doctors with valid relationships to a medical center can see its visits.
        > 
        
        > Patients can view and edit their own visits.
        > 
        
        > Changes in relationships (e.g., doctor reassignment) immediately affect access rights.
        > 
    - Map out all the `resources`, `roles`, `attributes`, and `relationships` you will use to create your policies.
- **Implementation: Schema/Data/Enforcement**
    - The technical flow should be in the following order: **Schema, Data, and Enforcement**. Each topic needs to be separate.
        - **Schema**: everything in the Permit `policy` screen
            - Roles, resources, role derivations, resource relation, user/resource attributes (schema, not attribute values), users/resource sets, policy rules (checkboxes in policy screen)
        - **Data**: everything in the Permit `Directory` screen
            - Users, user attributes, user role (role assignment)
            - Resource instances, resource instance attributes
        - **Enforcement**: The `permit.check()` function (single and bulk), data filtering, partial evaluation.
    - Never describe steps as paragraphs. Always use bullet points or numbering.
        - How **NOT** to describe steps:
            
            > Go to X and create an account if you don't have one. Set up your organization, click on "Create New Project" to create a new project and provide the project name, click on next to pick the deployment region, we'll use the default region, and click on "Create" to create the project.
            > 
        - How to describe steps:
            
            > Setting up X:
            - Go to the X website and create an account
            - Next, to set up a new project, click on "Create New Project” in the top right corner. 
            - Pick the deployment region (We'll use the default region). 
            - Finish the setup by clicking on "Create".
            > 
    - Include screenshots or diagrams to add clarity. Ensure they are relevant and labeled appropriately.
    - Do not include any personal information in the screenshots (i.e., your personal email address).
- **The <TimelineStep /> Component**: A step by step visual representation for structured guides
    - When a tutorial includes a structured step by step guide, we have a special component for better visual rendering
    - To use the component, first import it to the `.mdx` file using:
      ```js
      import TimelineStep from "../../src/components/timeline/TimelineStep";
      import TimelineWrapper from "../../src/components/timeline/TimelineWrapper";
      ```
    - Each step collection should be wrapped with the <TimelineWrapper> component (at the beginning and the end of the collection)
    - Each step should be wrapped with the `<TimelineStep>` component
    - Example usage
      ```jsx
      <TimelineWrapper>
      <TimelineStep>
      ## Install the SDK
      ...
      </TimelineStep>
      <TimelineStep>
      ## Init the SDK instance
      ...
      </TimelineStep>
      </TimelineWrapper>
      ```
- **Result** / **Conclusion**
    - Show the thing you built in action
    - Explain what was achieved in following the tutorial
    - Add a link to the repo with the full code

Additional useful info about our writing style preferences is available in the [Permit.io Article Writing Guidelines](https://www.notion.so/How-to-Write-an-Article-for-Permit-io-1b81af21850580d491bdfc8da6f0f1c0?pvs=21).

---


## The Sidebar

The [Permit.io](http://Permit.io) documentation is divided into categories represented in the documentation sidebar. 

You can find detailed documentation about how the Docosaurus sidebar works [here](https://docusaurus.io/docs/sidebar). 

Here is a short overview of the various categories in the [Permit.io](http://Permit.io) documentation sidebar, and what they should be used for:

- **Getting Started**: A short walkthrough guide to basic use of Permit.io
- **Quickstart**: Includes step-by-step guides for working with various [Permit.io](http://Permit.io) features, working implementation examples, and some best practices on working with Permit.io and modeling authorization overall.
- **Model Policies**: A detailed step-by-step guide on how to model authorization policies with [Permit.io](http://Permit.io) (RBAC, ABAC, ReBAC, and PBAC), including an overview of the policy model, policy components, and API examples.
- **Enforce Permissions**: A section that explains how to enforce the models you created within your application.
- **Working with Data**: Explains how to use additional data for providing context to your authorization decisions
- **Manage SDLC**: Explains the part your newly created authorization layer takes in the SDLC processes of your application, including deployment, testing, monitoring, etc.
- **Connect your App**: An overview of the different SDKs and tools you can use to integrate [Permit.io](http://Permit.io).
- **Integrate with Authentication**: A step-by-step guide on how to integrate [Permit.io](http://Permit.io) with your authentication solution of choice.
- **Embed Frontend Components**: A detailed conceptual, as well as step-by-step explanation on the use and implementation of [Permit.io](http://Permit.io)’s suite of frontend components, otherwise known as Permit.io Elements.
- **Advanced Learning**: Provides an in-depth dive into how [Permit.io](http://Permit.io) operates, how it's built, and why, as well as API references and migration guides.
- **Updates and Feedback** include a changelog of the latest features added to Permit, a roadmap of upcoming features, and a feature request section.

This list should give you a better idea of where your newly created page belongs. 

---

## Help Wanted

Want to get involved? Look for [good first issues](https://github.com/permitio/docs/issues) or jump into our [community Slack](https://io.permit.io/blog-slack).

Thanks for helping improve the Permit.io docs! 💜
