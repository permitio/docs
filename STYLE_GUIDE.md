# Permit.io docs style guide

This guide covers how docs.permit.io pages sound, how they are structured, and which words we use for what.
It applies to every page under `docs/`. For setup, local development, and the pull request flow, see [CONTRIBUTING.md](./CONTRIBUTING.md).

The reader of these docs has already decided to build with Permit. Our job is to get them to a working permission check fast, and then help them find the next thing they need. Marketing claims belong on www.permit.io; the docs link there when a product claim is needed.

## Voice

- **Second person.** Talk to the reader: "you create a role", not "we will create a role" or "the user creates a role".
- **Present tense.** "The PDP evaluates the policy", not "the PDP will evaluate the policy".
- **Imperative steps.** "Click **Create Role**." "Run `docker ps`." Not "Now let's click..." or "You'll want to...".
- **One idea per sentence.** Split sentences that join two instructions or two facts with "and then" or a dash.
- **Name the mechanism.** Every claim says how it works. "Checks run on the PDP next to your service, so they don't make a network round trip to Permit" instead of "lightning-fast checks".
- **No filler or hype words:** simply, just, easy, easily, seamless, comprehensive, powerful, robust, cutting-edge, effortless, revolutionary, unmatched, lightning-fast, magic.
- **No em-dashes.** Use a period, a comma, a colon, or parentheses.
- **Straight apostrophes and quotes** (`'` and `"`), not curly ones.
- **No invented facts.** No performance numbers, customer names, statistics, "fun facts", or compliance claims unless they come from a verified source. When in doubt, leave the claim out.
- **Don't open with a greeting.** No "Welcome to...", "Let's get started!", or "In this tutorial, we will...". The first sentence says what the reader does on the page.

| Instead of | Write |
|---|---|
| Welcome to Permit! In this quick tutorial, we will go over the basic steps... | Create a Permit.io account, set up your workspace, and build your first RBAC policy. |
| Simply pass the tenant ID. | Pass the tenant ID. |
| Zero-latency decisions. | Decisions run on the PDP next to your service, without a network round trip to Permit. |
| SOC 2 certified. | SOC 2 Type II attested. |
| Congratulations! You should now have a PDP container running. | Your PDP container is running. |

## Page anatomy

Every page follows this order. Skip a section only when it has nothing to say.

1. **Title: the task.** "Check permissions with the Node.js SDK", "Sync your first user". Concept pages name the concept: "Control & Data planes".
2. **Description: one sentence.** The same sentence goes in the frontmatter `description`, which feeds search results and link previews. Say what the reader does or learns, not that the page is "a guide".
3. **Intro.** One or two sentences under the title: what you build or learn, and why. Never a heading called "Introduction".
4. **Prerequisites.** A short list: account, API key, SDK, running PDP. Link to the page that sets each one up.
5. **Steps.** Numbered steps or `<TimelineWrapper>` steps. One action per step. For policy guides, keep the order **Schema** (Policy screen), **Data** (Directory screen), **Enforcement** (`permit.check()` and friends).
6. **Verify.** How the reader confirms it worked: a check result, an audit log entry, a `docker ps` line.
7. **Next steps.** Two to five links to the next tasks.

```mdx
---
title: Check permissions with the Node.js SDK
description: "Install the Node.js SDK, connect it to a PDP, and call permit.check() from your backend."
---

Call `permit.check()` from your Node.js backend to decide whether a user can perform an action on a resource.

## Prerequisites

- A Permit.io account with at least one policy ([Quickstart](/quickstart))
- Your environment API key ([Get your API key](/overview/get-api-key))
```

## Headings and URLs

- Use sentence case for new headings ("Create a resource"). Existing Title Case headings can stay until the page is rewritten.
- **Never rename a file or change `id` or `slug`.** URLs are part of our public API. Titles and sidebar labels can change.
- **Keep heading anchors that other pages link to.** Before you change a heading's text, search `docs/` for `#<anchor>`. If anything links to it, keep the old anchor with an explicit id:

  ```mdx
  ## Create a workspace and name your organization {#2-creating-a-workspace--naming-your-organization}
  ```

  `npm run build` runs `hyperlink --check-anchors` and fails on a broken anchor.

## Code samples

- Tag every code block with a language (`js`, `python`, `bash`).
- Keep blocks under 25 lines. Split longer examples into steps and explain each.
- Use placeholders in angle brackets or brackets that the text tells the reader to replace: `<YOUR_API_KEY>`, `[your-api-key]`.
- Don't change a published code sample in a copy edit. If a sample is wrong, fix it in its own commit and say so in the commit message.
- No personal data in code or screenshots. Use `john@permit.io`, `sam@permit.io`, or `example.com` addresses.

## Components

These components are registered globally, so you don't import them:

| Component | Use |
|---|---|
| `<NextStepCallout variant="production" />` | Bottom of pages where the reader is heading to production. Variants: `production`, `agents`, `enterprise` (Enterprise-only features). One per page, at the end. |
| `<DecisionFlowDiagram />` | How a permission decision is made (identity, request, PDP, decision, audit). `showExample={false}` hides the example decision log entry. |
| `<HybridDeploymentDiagram />` | Control plane in Permit's cloud, PDPs in your network, OPAL between them. |
| `<McpGatewayPathDiagram />` | The path of one MCP tool call through Permit MCP Gateway. |

Import these per file:

- `ProductOverviewLink` (`@site/src/components/ProductOverviewLink`): the one-line "Product overview" link at the top of a section intro, pointing to the matching www.permit.io page. One per section intro, directly under the H1.
- `TimelineWrapper` / `TimelineStep`: step-by-step guides. See CONTRIBUTING.md for usage.
- `Tabs` / `TabItem` (`@theme/Tabs`, `@theme/TabItem`): per-language or per-PDP-type alternatives. Use `groupId="language"` or `groupId="pdp"` so the reader's choice carries across pages.

Diagrams are coded components with real text and a caption, never generated images. Screenshots are real product screenshots with a descriptive `alt`.

Admonitions: `:::note` for context, `:::tip` for a shortcut or example, `:::info` for something to remember, `:::warning` for something that breaks if ignored, `:::danger` for data loss or security risk. Give each a short title when it helps scanning.

## Links

- Link to other docs pages with root-relative paths: `/how-to/enforce-permissions/check`.
- Website links use `https://www.permit.io/...`. The dashboard is `https://app.permit.io`. The community is `https://io.permit.io/slack`.
- Sales intent ("talk to us about your deployment") goes to `https://www.permit.io/demo`. Never to a personal calendar link.
- Link text says where it goes: "see [Cloud PDP capabilities](/concepts/pdp/cloud-pdp-capabilities)", not "click [here]".

## Glossary

Use these terms, spelled this way.

| Term | Rule |
|---|---|
| **Permit.io** | On first mention on each page, and in titles where the company or product is meant. |
| **Permit** | In running text after the first mention. |
| **Permit Elements** | The product name. Describe it as "embeddable UI components". Individual components are "elements" (lowercase) or by name: "the User Management element". |
| **Permit MCP Gateway** | The product name. Not "Agent Security MCP Gateway". "The gateway" is fine after first mention. |
| **AI agents** | The section and the thing being secured. Not "AI security agents". |
| **PDP** | Expand on first use on each page: "policy decision point (PDP)". The managed one is the **Cloud PDP**; self-hosted ones are **Edge PDPs** or container PDPs. |
| **PEP** | "policy enforcement point (PEP)" on first use. |
| **OPAL** | "Open Policy Administration Layer (OPAL)" on first use. Open source. |
| **OPA**, **Cedar** | "Open Policy Agent (OPA)"; "AWS Cedar" or "Cedar". |
| **RBAC**, **ABAC**, **ReBAC** | Expand on first use: role-based, attribute-based, relationship-based access control. Note the capital B and lowercase e in ReBAC. |
| **control plane**, **data plane** | Lowercase in running text. The control plane runs in Permit's cloud; the data plane (PDPs) runs in your network. |
| **Policy Editor** | The UI screen, capitalized. |
| **tenant**, **environment**, **project**, **workspace** | Lowercase in running text. |
| **user** / **member** | Users are identities you check permissions for. Members are your team in the Permit dashboard. |
| **API key** | Not "API Key", "secret key", or "SDK key". "environment API key" when the scope matters. |
| **permit.check()** | In code formatting, with parentheses. |
| **X** | The social network. Not Twitter. |
| **SOC 2 Type II** | Always "attested" or "attestation". Never "certified" or "certification". |
| **HIPAA** | Permit.io is HIPAA compliant; "HIPAA compliant" is the wording to use. Don't claim ISO 27001, PCI, or FedRAMP for Permit. |
| **sign in** / **sign-in** | Verb / noun. Not "log into" in new copy. |

## Content quality rules (technical-docs-writing)

This section adds the stricter rules of the technical-docs-writing standard. Where it and the sections above disagree, the stricter rule wins, except for the owner decisions listed at the end of this section. The page-by-page scores live in `docs-content-audit.md` at the repo root.

### One reader and one content type per page

- **Name one primary reader.** New user, implementer, operator, decision maker, or AI agent builder. The intro says who the page is for and what they get. When two readers need different things, link between two pages instead of writing one page for both.
- **Pick one Diataxis type.** Tutorial (learn by doing a guided sequence), how-to (solve one task for a reader who has context), reference (exact facts, parameters, tables), or explanation (concepts, architecture, tradeoffs). Move content of another type to the page that owns it and link to it.
- **Shortest working path first.** Outcome, prerequisites, then the recommended path. Alternatives, advanced options, and edge cases come after the path works.
- **Show success.** Every how-to and tutorial ends with a check the reader can run and the output they should see.

### Sections that stand alone

Readers and AI assistants often land on a single section from search. Write every section so it answers its question when quoted alone.

- **Explicit names over pronouns.** "The PDP returns `false`", not "it returns `false`". Never "as described above", "the previous step", or "this" without a noun.
- **Descriptive headings.** "Run the PDP as a Docker container", not "Step 2" or "Setup". Put a number in front of a descriptive heading if the order matters: "1. Run the PDP as a Docker container".
- **No skipped heading levels.** H2 then H3. No H1 in the body; the title is the H1.
- **Define before use.** Expand an acronym and define a product term the first time a page uses it, even if another page already did.

### Words to avoid

These add to the filler list in [Voice](#voice).

- **No metaphors, clichés, or generalizations.** "The PDP is the brain of your authorization" becomes "The PDP evaluates each permission check against the policy".
- **No "not only ... but also".** Write two plain statements.
- **No "we", "our", or "let's"** in instructions. Name the actor: "you", "Permit", or "the PDP".
- **No meta-commentary.** "In this section", "It's worth noting that", "As you can see", "In conclusion".
- **No dated wording** for stable behavior: "new", "now", "recently", "coming soon", "currently", "on the roadmap". Use present tense for stable behavior. Use a date for a historical event: "Since SDK version 2.5.0".

### Specific warnings

A warning states the condition and the consequence.

| Instead of | Write |
|---|---|
| Be careful with your API key. | Anyone with your environment API key can change that environment's policy through the Permit API. Load the key from an environment variable, and don't commit it. |
| Be careful when renaming headings. | Renaming a heading changes its anchor. Links from other pages to the old anchor break, and `npm run build` fails. |

### Links

- **Link text names the destination.** "See [Sync users](/how-to/sync-users)", never "click [here]" or "this [guide]".
- **Link to the page that owns a topic** instead of repeating its steps. Copies drift: two pages with the same steps end up with two different sets of steps.

### Examples

- Examples are complete: imports, client setup, the call, and the expected result or output.
- Placeholders are explained in the text before or right after the block.
- Samples use fictional people and companies (`john@permit.io`, `acme-corp`), not real public figures or customers.

### Accuracy

- Ground every behavior claim in a source: the SDK repositories, the [API reference](https://api.permit.io/v2/redoc), the PDP repository, or observed product behavior. If a claim cannot be verified, remove it and raise it in the pull request for the owner to confirm.
- Don't describe unreleased or planned features in docs pages.

### Owner decisions

These override the generic rules above.

- **Confirmed product claims:** Permit.io is HIPAA compliant and SOC 2 Type II attested. PDP performance figures (thousands of checks per second, sub-millisecond latency, under 10 ms at p95, millions of decisions a day from a single PDP instance) are confirmed. A sidecar PDP over loopback has "no network latency".
- **Fun-fact admonitions stay** when they cite a primary source. They are the one allowed exception to "no clichés".
- **Names:** Permit Elements, Permit MCP Gateway, Mix and Match Policies (the Policies landing page), Nexus PDP, and X (not Twitter).
- **URLs never change.** No file renames, and no `id` or `slug` changes. Keep linked anchors with `\{#old-id}` when a heading changes.
- **Code samples stay byte-identical** in content edits unless they are verifiably wrong. A code fix goes in its own commit that says what was wrong.

### Scoring rubric

Score a page 0 to 2 on each dimension. A page is publishable with no zeroes and at least 16 of 20. A page is world-class at 18 or higher.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Audience fit | Audience is unclear or mixed | Audience can be inferred | Primary reader and goal are explicit |
| Task success | Reader cannot complete the task | Task works with outside context | Task is complete, ordered, and success is recognizable |
| Content type discipline | Tutorial, how-to, reference, and explanation are muddled | Mostly one type with digressions | Structure matches the reader's goal |
| Accuracy | Claims are unverified or stale | Mostly accurate with gaps | Claims are grounded in source truth |
| Structure | Dense or hard to scan | Usable but uneven | Headings, lists, tables, and links form a clear map |
| Examples | Missing, partial, or non-runnable | Useful but incomplete | Complete, realistic, and easy to adapt |
| Terminology | Inconsistent or undefined terms | Minor inconsistency | Terms are defined and used consistently |
| AI retrievability | Sections depend on hidden context | Some sections stand alone | Sections are self-contained and explicit |
| Maintenance | Likely to rot or over-specifies volatile details | Some maintenance risk | Evergreen where possible and clear about volatile facts |
| Style | Wordy, passive, product-centric | Clear with rough spots | Concise, active, reader-centered |

## Before you open a pull request

- [ ] Title is the task; frontmatter `description` is one sentence.
- [ ] No filler words, no em-dashes, no curly quotes in new text.
- [ ] Every claim names its mechanism, and no number, customer, or compliance claim is unverified.
- [ ] Glossary terms are used as listed.
- [ ] No file, `id`, or `slug` changed; renamed headings keep linked anchors.
- [ ] The page has one primary reader and one content type, and a how-to or tutorial ends with a success check.
- [ ] Every section makes sense when quoted alone: no "it", "this", or "above" without a noun.
- [ ] Warnings state the condition and the consequence. Link text names the destination.
- [ ] `npm run build` passes.
