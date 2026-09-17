# Docs content audit

Audit of every routed page under `docs/` against the technical-docs-writing rubric (10 dimensions scored 0-2). A page is publishable with no zeroes and a total of at least 16/20. A page is world-class at 18/20 or higher.

Pages renamed by PR #652 (`docs/concepts/pdp/new-edge-pdp*.mdx`, `docs/concepts/pdp/overview.mdx`) are deferred until that PR is on master.

## Method

1. Every routed page (`docs/**/*.mdx`, excluding `_` partials) was read in full.
2. Each page got one primary audience, one Diataxis content type, a 0-2 score on each dimension, and up to three concrete issues.
3. Pages rewritten in this PR are re-scored after the rewrite. The `Before` column shows the original total.

Dimension keys: **Aud** audience fit, **Task** task success, **Type** content type discipline, **Acc** accuracy, **Str** structure, **Ex** examples, **Term** terminology, **AI** AI retrievability, **Mnt** maintenance, **Sty** style.

## Score distribution

| Total | Before | Current |
|---|---|---|
| 18-20 (world-class) | 2 | 259 |
| 16-17 (publishable) | 3 | 35 |
| 12-15 | 47 | 12 |
| 8-11 | 241 | 28 |
| 0-7 | 50 | 9 |
| **Publishable (>=16, no zeroes)** | 5 | 294 |
| **Mean total** | 9.7 | 17.2 |
| **Pages scored** | 343 | 343 |

## Folder summary

| Folder | Pages | Mean before | Mean current | Publishable now | Most common issues |
|---|---|---|---|---|---|
| `ai-security/access-request-mcp` | 3 | 7.3 | 7.3 | 0 | style (3 zeroes), maint (2 zeroes), task (1 zeroes) |
| `ai-security` | 1 | 10.0 | 10.0 | 0 | no zeroes |
| `ai-security/integrations` | 5 | 6.4 | 6.4 | 0 | maint (4 zeroes), style (4 zeroes), acc (4 zeroes) |
| `api` | 7 | 10.7 | 19.0 | 7 | no zeroes |
| `api/elements` | 4 | 6.8 | 18.0 | 4 | no zeroes |
| `api/examples` | 7 | 11.9 | 11.9 | 0 | no zeroes |
| `api/rbac` | 2 | 8.0 | 19.0 | 2 | no zeroes |
| `api/rebac` | 3 | 8.3 | 18.7 | 3 | no zeroes |
| `api/working-with-abac` | 6 | 6.3 | 18.8 | 6 | no zeroes |
| `authentication/auth0` | 3 | 8.3 | 19.0 | 3 | no zeroes |
| `authentication/cognito` | 2 | 8.5 | 18.0 | 2 | no zeroes |
| `authentication` | 6 | 6.8 | 18.5 | 6 | no zeroes |
| `authentication/stytch` | 1 | 6.0 | 17.0 | 1 | no zeroes |
| `concepts` | 5 | 12.0 | 18.0 | 5 | no zeroes |
| `concepts/pdp` | 3 | 12.3 | 18.0 | 3 | no zeroes |
| `embeddable-uis` | 8 | 9.2 | 18.5 | 8 | no zeroes |
| `embeddable-uis/element` | 5 | 7.6 | 18.2 | 5 | no zeroes |
| `(root)` | 4 | 12.0 | 17.0 | 4 | no zeroes |
| `getting-started` | 2 | 14.5 | 18.0 | 2 | no zeroes |
| `how-to/SDLC` | 3 | 8.0 | 8.0 | 0 | style (3 zeroes), task (2 zeroes), term (2 zeroes) |
| `how-to/build-policies` | 13 | 9.5 | 18.5 | 13 | no zeroes |
| `how-to` | 3 | 7.7 | 18.7 | 3 | no zeroes |
| `how-to/deploy` | 18 | 9.8 | 18.3 | 18 | no zeroes |
| `how-to/enforce-permissions` | 11 | 9.1 | 18.2 | 11 | no zeroes |
| `how-to/manage-data` | 3 | 10.0 | 10.0 | 0 | style (2 zeroes) |
| `how-to/monitoring-pdps` | 1 | 10.0 | 18.0 | 1 | no zeroes |
| `how-to/permit-cli` | 7 | 10.3 | 18.1 | 7 | no zeroes |
| `how-to/policy-guard` | 2 | 9.5 | 9.5 | 0 | acc (1 zeroes), ex (1 zeroes) |
| `how-to/use-audit-logs` | 16 | 9.2 | 18.7 | 16 | no zeroes |
| `integrations/GraphQL` | 2 | 8.5 | 8.5 | 0 | acc (1 zeroes), ex (1 zeroes), style (1 zeroes) |
| `integrations/SCIM` | 3 | 11.3 | 11.3 | 0 | maint (2 zeroes) |
| `integrations/database-access-control` | 1 | 13.0 | 13.0 | 0 | no zeroes |
| `integrations/feature-flagging` | 1 | 8.0 | 8.0 | 0 | acc (1 zeroes), style (1 zeroes) |
| `integrations/gateways` | 4 | 9.2 | 9.2 | 0 | acc (2 zeroes), ex (1 zeroes), maint (1 zeroes) |
| `integrations/gitops` | 3 | 9.0 | 9.0 | 0 | style (2 zeroes), acc (1 zeroes), ex (1 zeroes) |
| `integrations/infra-as-code` | 1 | 12.0 | 12.0 | 0 | no zeroes |
| `integrations/permit-mcp` | 1 | 10.0 | 10.0 | 0 | no zeroes |
| `integrations/policy-engines` | 1 | 10.0 | 10.0 | 0 | no zeroes |
| `integrations/workflow-automation` | 1 | 9.0 | 9.0 | 0 | style (1 zeroes) |
| `manage-your-account` | 6 | 9.2 | 17.7 | 6 | no zeroes |
| `modeling` | 7 | 9.3 | 9.3 | 0 | style (3 zeroes), type (1 zeroes), ai (1 zeroes) |
| `overview` | 20 | 11.1 | 18.3 | 20 | no zeroes |
| `permit-mcp-gateway` | 16 | 11.1 | 18.0 | 16 | no zeroes |
| `permit-mcp-gateway/demos` | 2 | 9.0 | 17.5 | 2 | no zeroes |
| `permit-mcp-gateway/http-egress-proxy` | 8 | 11.2 | 18.2 | 8 | no zeroes |
| `quick-start` | 10 | 9.9 | 18.6 | 10 | no zeroes |
| `sdk/cpp` | 1 | 7.0 | 17.0 | 1 | no zeroes |
| `sdk/dotnet` | 15 | 10.7 | 19.0 | 15 | no zeroes |
| `sdk/erlang` | 1 | 7.0 | 16.0 | 1 | no zeroes |
| `sdk/golang` | 21 | 9.9 | 19.0 | 21 | no zeroes |
| `sdk/java` | 24 | 10.7 | 19.7 | 24 | no zeroes |
| `sdk/kotlin` | 1 | 7.0 | 17.0 | 1 | no zeroes |
| `sdk/nodejs` | 27 | 9.7 | 18.8 | 27 | no zeroes |
| `sdk` | 2 | 10.0 | 18.0 | 2 | no zeroes |
| `sdk/php` | 1 | 9.0 | 18.0 | 1 | no zeroes |
| `sdk/python` | 4 | 9.8 | 18.2 | 4 | no zeroes |
| `sdk/ruby` | 2 | 9.5 | 18.5 | 2 | no zeroes |
| `updates-and-feedback` | 3 | 6.0 | 17.7 | 3 | no zeroes |

## Lowest-scoring 40 pages (before)

| # | Page | Before | Current | Top issues |
|---|---|---|---|---|
| 1 | `docs/api/working-with-abac/overview.mdx` | 3 | 19 | stub with duplicate 'Overview' H2 then H4, promised vocabulary never appears; says rules are 'part of' condition sets (wrong); 'now', 'Previously', 'new version' dated wording, no links to child pages |
| 2 | `docs/api/rbac/rbac-example.mdx` | 4 | 19 | resource JSON has double commas and second user curl lacks 'curl', so steps fail; opening sentence is broken editing residue ('RBAC API" and delete it below.') duplicated as H4; no section headings or verify check, we/let's, comments say 'user role' for operator |
| 3 | `docs/authentication/fusionauth.mdx` | 4 | 17 | 'coming soon' stub with only a personal GitHub repo (filipermit) and tracking link; no steps, embedded webinar only; emoji, 'play with', 'we did' |
| 4 | `docs/authentication/supertokens.mdx` | 4 | 18 | no intro; npm install before any clone step, repo link only at end, no env or API key wiring; personal repo (filipermit), old permitio/pdp image, webinar and screenshots; emoji, 'Enjoy the demo!', 'the above example' |
| 5 | `docs/ai-security/access-request-mcp/food-ordering-demo-example.mdx` | 5 | 5 | client.py Python blocks have collapsed whitespace (typing_extensionsimport, asyncdef) and wrong lang tags (shell/scss); interrupt resume code never shown, 'graph should not look like this', role child-can-order undefined; we/let's, em dashes, 'simple', many volatile screenshots |
| 6 | `docs/ai-security/integrations/langflow.mdx` | 5 | 5 | never explains installing Permit components in Langflow or minting test JWTs; docker command contains pasted 'bash CopyEdit' artifact, booking flow reuses info-flow screenshot 10.png, condition uses undefined resource.class, fake URLs api.flightpolicies.com; LangFlow/Langflow casing, we/let's, em dashes |
| 7 | `docs/api/rebac/groups/groups.mdx` | 5 | 19 | broken curl samples: curly quote in JSON, unquoted tenant key, blank lines inside continued commands, PUT path uses group_resource_type_key; inconsistent tenants (default vs business), 'team#member' vs teams, GET descriptions reference 'marketing' with placeholder paths; 'new and improved'/deprecated wording, redoc vs scalar links, 'Let's dive deeper', 'we', 'of course' |
| 8 | `docs/how-to/build-policies/policy-basics.mdx` | 5 | 17 | link to http://localhost:3000/integrations/gitops/github, stray Hebrew character, 'Roles exist on an organization level' contradicts environment-level roles; repeated '(Top Level in the UI)' link spam and User Management vs Directory vs members confusion; marketing intro ('power of a powerful', 'champions', 'extremely simple, yet vastly powerful') and 8 UI videos |
| 9 | `docs/how-to/build-policies/rebac/building-rebac-policies.mdx` | 5 | 19 | acronyms swapped: 'Relationship-Based Access Control (RBAC)' and 'Role-Based Access Control (ReBAC)', typo 'group.xe'; repeated H5 'UI Example' headings not self-contained, videos + YouTube; 'crux', 'robust', 'crucial', 'molding' |
| 10 | `docs/ai-security/integrations/openai-prompt-filtering.mdx` | 6 | 6 | classify() never implemented and users never created, so code cannot run; roles placed under Directory > Roles, tip claims container PDP needed for role-based permissions, broken link www.app.permit.io; ungrammatical opening sentence, dangling 'demonstrate how the system:', we/let's, em dashes |
| 11 | `docs/ai-security/integrations/pydantic-ai.mdx` | 6 | 6 | source link and clone path point to langchain-permit while resources link Permit-PydanticAI, PydanticAI links to a personal fork; attribute model inconsistent (test users use membership_tier/verified never defined, clearance high vs confidential, 'bookings' copied from flight demo), PERMIT_KEY vs PERMIT_API_KEY; 'powerful', 'full confidence', em dashes |
| 12 | `docs/api/elements/access-requests.mdx` | 6 | 18 | curl samples invalid (missing line continuations, trailing commas, missing braces) and filters passed as headers; tells reader to get API_SECRET_KEY but calls use login cookie; 'SDK Secret Key', 'Embeddable Elements', H3 before any H2, duplicates access-request-api.mdx |
| 13 | `docs/api/elements/operation_approval.mdx` | 6 | 18 | curl samples invalid and create body omits resource_instance that responses include; Redoc link points to Access-Requests tag, header 'element_id: ELEMENTS_CONFIG_ID' unexplained; 'SDK Secret Key'/API_SECRET_KEY terms, real-looking name maya@permit.io, init/login block duplicated from access-requests |
| 14 | `docs/api/working-with-abac/condition-set-rules.mdx` | 6 | 19 | stub: payload only, no endpoint, method, or verify; depends on sets defined on another page ('this particular example'); 'Let's remind ourselves', 'we will want' |
| 15 | `docs/api/working-with-abac/examples.mdx` | 6 | 18 | page starts at H3/H4 with a sentence as heading; 'not': ['part-time'] contradicts operator syntax, Stanford never modeled, availability as string array; no endpoint or verify, 'lets', 'our' |
| 16 | `docs/authentication/auth0/permit-integration.mdx` | 6 | 19 | link to http://localhost:3000 demo; role assignment code redeclares 'role', uses undefined permitUserObj/tenantKey, check without await; Auth0 Action steps duplicated verbatim from demo page, empty 'Getting Started' H2, 'easily', 'great blog post', 'Let's test it!' |
| 17 | `docs/authentication/hankopermit.mdx` | 6 | 19 | 'leading authorization platform' claim; ABAC steps contradict (new user 'should not be able to delete' then 'should also be able to delete'), 'same user who created the role'; broken samples (git clone <git@github.com>, markdown link inside env value, untagged blocks), 14 screenshots with one reused, 'easily', 'great blog', 'we' |
| 18 | `docs/authentication/stytch/permit-integration.mdx` | 6 | 17 | sync code uses undefined userEmailId/tenantId/currentTenant and calls React hook useStytchUser in backend; redirect page imports Node 'stytch' SDK in the browser, REDIRECT_URL 'SEE_STEP_5' but covered in step 4; 'leading', 'robust', 'easily', 'him/his', typos |
| 19 | `docs/how-to/deploy/on-prem/installation.mdx` | 6 | 18 | 450 lines of internals before Step 1 and 'What happens' repeated twice; internal contradictions (help output lacks --gke, postgres 20GB vs 10Gi PVC, 'Infrastructure (10 services)' lists 11, '12 images' vs 35, Policy Sync required vs 'if configured'); 'As of January 2026', emojis, 'comprehensive', 'That's it!' |
| 20 | `docs/how-to/deploy/on-prem/prerequisites.mdx` | 6 | 18 | mixes architecture marketing, TLS config and troubleshooting into prereqs; inconsistent figures (35 vs 26 services, 51GB storage, '50-500 users'), repo sync called required then 'If you want to enable'; hype + emojis + CRITICAL caps, hardcoded usage numbers will rot |
| 21 | `docs/how-to/ownership.mdx` | 6 | 18 | ReBAC step says 'file is set as parent of folder' (reversed) and Bobs_Files#owner unexplained; typos (Upadte, Direcrory), let's/we, dash intro; 11 UI screenshots, concept + how-to muddled |
| 22 | `docs/integrations/gateways/kong.mdx` | 6 | 6 | docker command contains invisible U+2060 characters (not copy-runnable); '1-5 ms' claim, 'recent update', stale 'Copy SDK secret key' UI; 'seamlessly', 'easily', 'powerful', 'within minutes' |
| 23 | `docs/integrations/gitops/custom_policy.mdx` | 6 | 6 | final Rego invalid ('package package', import permit.rbac vs data.permit.rbac, else chain logic), untagged blocks; hardcoded 2023 dates and Cedar claim; let's/we, 'Were', emoji shortcode |
| 24 | `docs/overview/setup-attribute-based-access-control.mdx` | 6 | 18 | user set conditions (department=Engineering, training_status=certified) contradict scenario (R&D, completed); no enforcement or verify step, videos only with no code; vague UI paths ('Navigate to Dynamic Resource'), 'Imagine', 'master of ABAC' emoji |
| 25 | `docs/status.mdx` | 6 | 18 | page is only a scaled iframe with duplicate style prop (backgroundColor overwritten) and hardcoded 1080px width, poor on mobile; no text naming what is monitored (Cloud PDP, API, dashboard per description) or a direct status link for readers/agents; 'If you would like' wordy, ':::note info' misuse |
| 26 | `docs/updates-and-feedback/changelog.mdx` | 6 | 17 | stub with only an external link; 'here' link text; hype intro 'Explore the evolving journey' and 'our' |
| 27 | `docs/updates-and-feedback/feature-requests.mdx` | 6 | 18 | stub with only an external link; 'here' link text with random bold; marketing intro 'guiding the next wave of features we introduce' |
| 28 | `docs/updates-and-feedback/roadmap.mdx` | 6 | 18 | stub with only external link, roadmap on productlane while changelog/feature requests on Canny (possibly stale host); 'here' link text; hype 'glimpse into the future', 'innovations' |
| 29 | `docs/ai-security/access-request-mcp/implementation-guide.mdx` | 7 | 7 | mixes reference (env vars, tools) with a full FastAPI + CLI tutorial duplicated from food demo; CLI client code has broken indentation and undefined utils module; preview model gemini-2.5-flash-preview-04-17, 'powerful', 'easily', em dashes, vague verify step |
| 30 | `docs/ai-security/integrations/mongodb-rag.mdx` | 7 | 7 | ReBAC expanded as 'Role-Based Access Control (ReBAC)'; setup duplicated (Quickstart, Atlas setup, clone and .env repeated 3x) and quickstart says compose syncs everything while later steps run scripts manually; user ids inconsistent (carol/user_marketing_1 vs alice/bob), host scripts use http://permit-pdp:7000 |
| 31 | `docs/api/elements/access-request-api.mdx` | 7 | 17 | curl samples invalid (-data-raw single dash, no -X method, trailing commas, missing opening brace) and filters documented as headers not query params; near-verbatim duplicate of access-requests.mdx with the same response JSON repeated 6x; title 'Access Request API- API Only' and H1 'Use API KEY', unused imports |
| 32 | `docs/api/working-with-abac/building-conditions.mdx` | 7 | 19 | 'not' example is incoherent and INVALID age example says 48 vs code 40 with unverified 'Unbound Error'; repeated VALID/INVALID H4 headings not self-contained; 'we', 'Let's', 'important to note', Python True in js blocks |
| 33 | `docs/api/working-with-abac/condition-sets.mdx` | 7 | 19 | no endpoint or request to actually create a set; key mismatch private_repos vs private_repositories and parent example repeats parent condition, equals with arrays; relative .mdx link path likely broken, 'We will', 'Let's' |
| 34 | `docs/embeddable-uis/element-login.mdx` | 7 | 18 | broken code: Node init tab contains a Python import line, C# samples have unbalanced braces and no while body, JS loginUrl missing closing quote; loginAs params inconsistent (tenant vs tenantId), private-browsing sample returns {url: element_bearer_token}, dangling sentence 'Add with an authenticated session'; emojis, 'simple', 'We have', hyphen dashes, 'now compatible' dated language |
| 35 | `docs/embeddable-uis/element/audit-logs.mdx` | 7 | 18 | stub: no steps, config, or example beyond a screenshot and generic video; hype ('full control over your applications, enforcing security'); links to overview rather than embedding-elements |
| 36 | `docs/embeddable-uis/element/user-management.mdx` | 7 | 19 | no configuration steps or example, only concepts plus links; 'Effortlessly', em dash in 'straightforward-assign', 'valuable feedback'; H3 headings with colons and Q&A bold labels |
| 37 | `docs/embeddable-uis/webhooks.mdx` | 7 | 17 | 'Current flow' vs 'new approve invite flow' dated language, unclear which flow is live; no signature verification detail or handler example, schemas in pseudo-Python; skipped levels (H4-H6 then H3), 'leverage', 'array of functionalities', 'essentially' |
| 38 | `docs/how-to/build-policies/abac/patterns.mdx` | 7 | 19 | stale: 'Once we add ReBAC and groups natively to Permit.io' (ReBAC exists); 'ownership via user profile' lacks example, local PDP command uses 7767:7000 and :latest; 'easy', 'enjoy', hyphen dashes, H3 headings inside bullets |
| 39 | `docs/how-to/deploy/on-prem/quick-start.mdx` | 7 | 19 | description says 5-10 minutes, body says 10-15; nested 'Step 1/2/3' inside Step 2 makes headings ambiguous; uses --gke flag missing from installer help, no download source, emojis and 'just a few minutes' |
| 40 | `docs/how-to/enforce-permissions/data-filtering.mdx` | 7 | 18 | 'Simplified Partial-evaluation ... upcoming feature in advanced stages of release' is stale; wordy/hype intro ('not only secure access but also optimized'); single Go sample with empty API key, no output, one H2 |

## Upgraded pages

| Page | Before | After |
|---|---|---|
| `docs/api/api-reference.mdx` | 13 | 19 |
| `docs/api/api-with-cli.mdx` | 10 | 19 |
| `docs/api/background-tasks.mdx` | 11 | 20 |
| `docs/api/elements/access-request-api.mdx` | 7 | 17 |
| `docs/api/elements/access-requests.mdx` | 6 | 18 |
| `docs/api/elements/operation_approval.mdx` | 6 | 18 |
| `docs/api/elements/overview.mdx` | 8 | 19 |
| `docs/api/pdp-api-reference.mdx` | 12 | 19 |
| `docs/api/pdp-statistics.mdx` | 11 | 20 |
| `docs/api/pdp-webhooks.mdx` | 10 | 19 |
| `docs/api/rbac/disable-rebac-to-increase-performance.mdx` | 12 | 19 |
| `docs/api/rbac/rbac-example.mdx` | 4 | 19 |
| `docs/api/rebac/groups/groups-ui.mdx` | 9 | 18 |
| `docs/api/rebac/groups/groups.mdx` | 5 | 19 |
| `docs/api/rebac/rebac-api-calls.mdx` | 11 | 19 |
| `docs/api/v2-migration-guide.mdx` | 8 | 17 |
| `docs/api/working-with-abac/building-conditions.mdx` | 7 | 19 |
| `docs/api/working-with-abac/condition-set-rules.mdx` | 6 | 19 |
| `docs/api/working-with-abac/condition-sets.mdx` | 7 | 19 |
| `docs/api/working-with-abac/examples.mdx` | 6 | 18 |
| `docs/api/working-with-abac/operators.mdx` | 9 | 19 |
| `docs/api/working-with-abac/overview.mdx` | 3 | 19 |
| `docs/authentication/auth0/auth0-demo-app.mdx` | 8 | 19 |
| `docs/authentication/auth0/auth0-sync-script.mdx` | 11 | 19 |
| `docs/authentication/auth0/permit-integration.mdx` | 6 | 19 |
| `docs/authentication/cognito/cognito-demo-app.mdx` | 8 | 17 |
| `docs/authentication/cognito/permit-integration.mdx` | 9 | 19 |
| `docs/authentication/fusionauth.mdx` | 4 | 17 |
| `docs/authentication/hankopermit.mdx` | 6 | 19 |
| `docs/authentication/logto.mdx` | 11 | 19 |
| `docs/authentication/permit-and-authentication.mdx` | 8 | 19 |
| `docs/authentication/stytch/permit-integration.mdx` | 6 | 17 |
| `docs/authentication/supertokens.mdx` | 4 | 18 |
| `docs/authentication/your-authentication.mdx` | 8 | 19 |
| `docs/concepts/control-plane-and-data-plane.mdx` | 14 | 18 |
| `docs/concepts/deployment-options.mdx` | 14 | 18 |
| `docs/concepts/differentiator-checklist.mdx` | 13 | 18 |
| `docs/concepts/multi-tenant-authorization.mdx` | 10 | 18 |
| `docs/concepts/oss-fallback.mdx` | 9 | 18 |
| `docs/concepts/pdp/cloud-pdp-benchmarks.mdx` | 14 | 18 |
| `docs/concepts/pdp/cloud-pdp-capabilities.mdx` | 11 | 18 |
| `docs/concepts/pdp/configuration.mdx` | 12 | 18 |
| `docs/embeddable-uis/element-login.mdx` | 7 | 18 |
| `docs/embeddable-uis/element/access-request.mdx` | 8 | 19 |
| `docs/embeddable-uis/element/approval-management.mdx` | 8 | 18 |
| `docs/embeddable-uis/element/audit-logs.mdx` | 7 | 18 |
| `docs/embeddable-uis/element/operation-approval.mdx` | 8 | 17 |
| `docs/embeddable-uis/element/user-management.mdx` | 7 | 19 |
| `docs/embeddable-uis/email-configuration-and-templates.mdx` | 9 | 19 |
| `docs/embeddable-uis/embedding-elements.mdx` | 9 | 19 |
| `docs/embeddable-uis/overview.mdx` | 11 | 19 |
| `docs/embeddable-uis/permission-levels.mdx` | 10 | 19 |
| `docs/embeddable-uis/troubleshooting.mdx` | 11 | 19 |
| `docs/embeddable-uis/user-preview.mdx` | 10 | 18 |
| `docs/embeddable-uis/webhooks.mdx` | 7 | 17 |
| `docs/faq.mdx` | 10 | 18 |
| `docs/getting-started/slack-support.mdx` | 11 | 18 |
| `docs/how-to/build-policies/abac/building-abac-policy.mdx` | 8 | 18 |
| `docs/how-to/build-policies/abac/components.mdx` | 12 | 19 |
| `docs/how-to/build-policies/abac/defining-attributes.mdx` | 9 | 20 |
| `docs/how-to/build-policies/abac/overview.mdx` | 11 | 19 |
| `docs/how-to/build-policies/abac/patterns.mdx` | 7 | 19 |
| `docs/how-to/build-policies/abac/time-based-role.mdx` | 11 | 17 |
| `docs/how-to/build-policies/policy-basics.mdx` | 5 | 17 |
| `docs/how-to/build-policies/rbac/building-rbac-policy.mdx` | 8 | 18 |
| `docs/how-to/build-policies/rbac/components.mdx` | 9 | 19 |
| `docs/how-to/build-policies/rbac/overview.mdx` | 10 | 19 |
| `docs/how-to/build-policies/rebac/building-rebac-policies.mdx` | 5 | 19 |
| `docs/how-to/build-policies/rebac/overview.mdx` | 10 | 19 |
| `docs/how-to/bulk-operations.mdx` | 8 | 19 |
| `docs/how-to/deploy/cloud-hosts/aws-ecs-fargate.mdx` | 8 | 17 |
| `docs/how-to/deploy/cloud-hosts/gcp-cloud-run.mdx` | 12 | 19 |
| `docs/how-to/deploy/cloud-hosts/helm.mdx` | 12 | 19 |
| `docs/how-to/deploy/cloud-hosts/kubernetes-raw.mdx` | 10 | 19 |
| `docs/how-to/deploy/cloud-hosts/pulumi.mdx` | 10 | 17 |
| `docs/how-to/deploy/cloud-hosts/terraform.mdx` | 10 | 18 |
| `docs/how-to/deploy/deploy-to-production.mdx` | 9 | 18 |
| `docs/how-to/deploy/offline-mode.mdx` | 14 | 19 |
| `docs/how-to/deploy/on-prem/change-organization-tier.mdx` | 12 | 18 |
| `docs/how-to/deploy/on-prem/installation.mdx` | 6 | 18 |
| `docs/how-to/deploy/on-prem/landing.mdx` | 9 | 19 |
| `docs/how-to/deploy/on-prem/management.mdx` | 9 | 17 |
| `docs/how-to/deploy/on-prem/pdp-deployment.mdx` | 13 | 18 |
| `docs/how-to/deploy/on-prem/prerequisites.mdx` | 6 | 18 |
| `docs/how-to/deploy/on-prem/quick-start.mdx` | 7 | 19 |
| `docs/how-to/deploy/on-prem/reference.mdx` | 8 | 18 |
| `docs/how-to/deploy/on-prem/troubleshooting.mdx` | 12 | 19 |
| `docs/how-to/deploy/overview.mdx` | 9 | 19 |
| `docs/how-to/enforce-permissions/all-tenants-check.mdx` | 11 | 18 |
| `docs/how-to/enforce-permissions/authorized-users.mdx` | 8 | 19 |
| `docs/how-to/enforce-permissions/bulk-check.mdx` | 11 | 19 |
| `docs/how-to/enforce-permissions/check.mdx` | 10 | 19 |
| `docs/how-to/enforce-permissions/data-filtering.mdx` | 7 | 18 |
| `docs/how-to/enforce-permissions/list-role-assignments.mdx` | 9 | 19 |
| `docs/how-to/enforce-permissions/url-mapping/configuring-jwks.mdx` | 10 | 17 |
| `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx` | 8 | 17 |
| `docs/how-to/enforce-permissions/url-mapping/regex-url-mapping-check.mdx` | 9 | 18 |
| `docs/how-to/enforce-permissions/url-mapping/url-mapping-check.mdx` | 9 | 17 |
| `docs/how-to/enforce-permissions/user-permissions.mdx` | 8 | 19 |
| `docs/how-to/monitoring-pdps/monitoring-pdps.mdx` | 10 | 18 |
| `docs/how-to/ownership.mdx` | 6 | 18 |
| `docs/how-to/permit-cli/permit-cli-api.mdx` | 11 | 18 |
| `docs/how-to/permit-cli/permit-cli-envs.mdx` | 12 | 18 |
| `docs/how-to/permit-cli/permit-cli-gitops.mdx` | 7 | 17 |
| `docs/how-to/permit-cli/permit-cli-pdp.mdx` | 12 | 19 |
| `docs/how-to/permit-cli/permit-cli-policy.mdx` | 9 | 18 |
| `docs/how-to/permit-cli/permit-cli-test.mdx` | 12 | 18 |
| `docs/how-to/permit-cli/permit-cli.mdx` | 9 | 19 |
| `docs/how-to/sync-users.mdx` | 9 | 19 |
| `docs/how-to/use-audit-logs/audit-log-replay.mdx` | 8 | 17 |
| `docs/how-to/use-audit-logs/debug-mode.mdx` | 9 | 19 |
| `docs/how-to/use-audit-logs/errors/cloud_pdp_not_supporting_abac.mdx` | 7 | 19 |
| `docs/how-to/use-audit-logs/errors/no_matching_resourcesets.mdx` | 9 | 19 |
| `docs/how-to/use-audit-logs/errors/no_matching_rules.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/errors/no_matching_usersets.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/errors/no_permission.mdx` | 9 | 19 |
| `docs/how-to/use-audit-logs/errors/no_role_in_tenant.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/errors/no_such_action.mdx` | 9 | 19 |
| `docs/how-to/use-audit-logs/errors/no_such_resource.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/errors/no_such_tenant.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/errors/no_user_roles.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/errors/user_not_synced.mdx` | 10 | 19 |
| `docs/how-to/use-audit-logs/logs-forwarder.mdx` | 9 | 18 |
| `docs/how-to/use-audit-logs/troubleshooting.mdx` | 9 | 19 |
| `docs/how-to/use-audit-logs/types-and-filtering.mdx` | 9 | 17 |
| `docs/manage-your-account/creating-environments.mdx` | 10 | 18 |
| `docs/manage-your-account/permit-logs.mdx` | 9 | 17 |
| `docs/manage-your-account/projects-and-env.mdx` | 7 | 17 |
| `docs/manage-your-account/workspace-api.mdx` | 10 | 19 |
| `docs/manage-your-account/workspace-settings.mdx` | 9 | 17 |
| `docs/manage-your-account/workspace-usage.mdx` | 10 | 18 |
| `docs/overview/access-requests-and-approvals.mdx` | 8 | 17 |
| `docs/overview/advanced-authorization-queries.mdx` | 10 | 19 |
| `docs/overview/best-practices.mdx` | 15 | 18 |
| `docs/overview/configure-your-first-rbac-policy.mdx` | 11 | 18 |
| `docs/overview/connecting-your-app.mdx` | 14 | 19 |
| `docs/overview/create-a-rebac-policy.mdx` | 8 | 18 |
| `docs/overview/get-api-key.mdx` | 15 | 19 |
| `docs/overview/glossary.mdx` | 12 | 19 |
| `docs/overview/how-does-it-work.mdx` | 16 | 18 |
| `docs/overview/local-authorization-microservice.mdx` | 10 | 18 |
| `docs/overview/perform-a-local-policy-check.mdx` | 9 | 19 |
| `docs/overview/perform-policy-check-with-cloud-pdp.mdx` | 10 | 19 |
| `docs/overview/run-pdp.mdx` | 12 | 19 |
| `docs/overview/setup-attribute-based-access-control.mdx` | 6 | 18 |
| `docs/overview/sync-application-data-into-permit.mdx` | 9 | 19 |
| `docs/overview/sync-applications-data.mdx` | 11 | 18 |
| `docs/overview/sync-your-first-user-with-sdk.mdx` | 10 | 18 |
| `docs/overview/use-the-permit-api-and-sdk.mdx` | 9 | 19 |
| `docs/overview/walkthroughs-intro.mdx` | 15 | 16 |
| `docs/overview/why-permit.mdx` | 11 | 18 |
| `docs/permit-mcp-gateway/advanced-features.mdx` | 8 | 16 |
| `docs/permit-mcp-gateway/architecture.mdx` | 10 | 18 |
| `docs/permit-mcp-gateway/audit-logs.mdx` | 12 | 19 |
| `docs/permit-mcp-gateway/authentication-methods.mdx` | 15 | 18 |
| `docs/permit-mcp-gateway/consent-service.mdx` | 13 | 18 |
| `docs/permit-mcp-gateway/demos/linear-mcp-gateway.mdx` | 10 | 18 |
| `docs/permit-mcp-gateway/demos/n8n-linear-mcp-gateway.mdx` | 8 | 17 |
| `docs/permit-mcp-gateway/enterprise-deployment.mdx` | 10 | 18 |
| `docs/permit-mcp-gateway/guide.mdx` | 11 | 19 |
| `docs/permit-mcp-gateway/host-setup.mdx` | 9 | 17 |
| `docs/permit-mcp-gateway/http-egress-proxy/authorization.mdx` | 10 | 18 |
| `docs/permit-mcp-gateway/http-egress-proxy/cli.mdx` | 12 | 19 |
| `docs/permit-mcp-gateway/http-egress-proxy/connecting-agents.mdx` | 10 | 19 |
| `docs/permit-mcp-gateway/http-egress-proxy/credentials.mdx` | 10 | 18 |
| `docs/permit-mcp-gateway/http-egress-proxy/egress-rules.mdx` | 11 | 18 |
| `docs/permit-mcp-gateway/http-egress-proxy/index.mdx` | 11 | 18 |
| `docs/permit-mcp-gateway/http-egress-proxy/quickstart.mdx` | 13 | 18 |
| `docs/permit-mcp-gateway/http-egress-proxy/security.mdx` | 13 | 18 |
| `docs/permit-mcp-gateway/human-in-the-loop.mdx` | 9 | 17 |
| `docs/permit-mcp-gateway/index.mdx` | 15 | 19 |
| `docs/permit-mcp-gateway/managing-humans-and-agents.mdx` | 11 | 18 |
| `docs/permit-mcp-gateway/on-prem-installation.mdx` | 14 | 19 |
| `docs/permit-mcp-gateway/overview.mdx` | 8 | 18 |
| `docs/permit-mcp-gateway/permit-integration.mdx` | 12 | 18 |
| `docs/permit-mcp-gateway/platform.mdx` | 10 | 17 |
| `docs/permit-mcp-gateway/quickstart.mdx` | 10 | 19 |
| `docs/quick-start/aspnet.mdx` | 8 | 18 |
| `docs/quick-start/django.mdx` | 7 | 18 |
| `docs/quick-start/express.mdx` | 11 | 19 |
| `docs/quick-start/fastapi.mdx` | 11 | 19 |
| `docs/quick-start/flask.mdx` | 11 | 19 |
| `docs/quick-start/gin.mdx` | 10 | 19 |
| `docs/quick-start/nest.mdx` | 10 | 19 |
| `docs/quick-start/nextjs.mdx` | 10 | 18 |
| `docs/quick-start/rails.mdx` | 10 | 18 |
| `docs/quick-start/spring-boot.mdx` | 11 | 19 |
| `docs/sdk/cpp/quickstart-cpp.mdx` | 7 | 17 |
| `docs/sdk/dotnet/quickstart-dotnet.mdx` | 10 | 19 |
| `docs/sdk/dotnet/role/AssignRole.mdx` | 11 | 19 |
| `docs/sdk/dotnet/role/CreateRole.mdx` | 10 | 19 |
| `docs/sdk/dotnet/role/GetRole.mdx` | 11 | 19 |
| `docs/sdk/dotnet/role/ListAssignedRoles.mdx` | 10 | 19 |
| `docs/sdk/dotnet/role/ListRoles.mdx` | 11 | 19 |
| `docs/sdk/dotnet/role/UnassignRole.mdx` | 11 | 19 |
| `docs/sdk/dotnet/tenant/CreateTenant.mdx` | 10 | 19 |
| `docs/sdk/dotnet/tenant/DeleteTenant.mdx` | 11 | 19 |
| `docs/sdk/dotnet/tenant/GetTenant.mdx` | 11 | 19 |
| `docs/sdk/dotnet/tenant/UpdateTenant.mdx` | 10 | 19 |
| `docs/sdk/dotnet/user/CreateUser.mdx` | 11 | 19 |
| `docs/sdk/dotnet/user/DeleteUser.mdx` | 11 | 19 |
| `docs/sdk/dotnet/user/GetUser.mdx` | 11 | 19 |
| `docs/sdk/dotnet/user/SyncUser.mdx` | 11 | 19 |
| `docs/sdk/erlang/quickstart-erlang.mdx` | 7 | 16 |
| `docs/sdk/golang/quickstart-golang.mdx` | 9 | 19 |
| `docs/sdk/golang/resource/Create.mdx` | 10 | 19 |
| `docs/sdk/golang/resource/Delete.mdx` | 10 | 19 |
| `docs/sdk/golang/resource/Update.mdx` | 10 | 19 |
| `docs/sdk/golang/role/Create.mdx` | 9 | 19 |
| `docs/sdk/golang/role/Delete.mdx` | 10 | 19 |
| `docs/sdk/golang/role/Get.mdx` | 10 | 19 |
| `docs/sdk/golang/role/Update.mdx` | 8 | 19 |
| `docs/sdk/golang/tenant/Create.mdx` | 10 | 19 |
| `docs/sdk/golang/tenant/Delete.mdx` | 11 | 19 |
| `docs/sdk/golang/tenant/Get.mdx` | 10 | 19 |
| `docs/sdk/golang/tenant/List.mdx` | 10 | 19 |
| `docs/sdk/golang/tenant/Update.mdx` | 10 | 19 |
| `docs/sdk/golang/user/AssignResourceRole.mdx` | 11 | 19 |
| `docs/sdk/golang/user/AssignRole.mdx` | 11 | 19 |
| `docs/sdk/golang/user/Create.mdx` | 10 | 19 |
| `docs/sdk/golang/user/Delete.mdx` | 10 | 19 |
| `docs/sdk/golang/user/Get.mdx` | 9 | 19 |
| `docs/sdk/golang/user/GetAssignedRoles.mdx` | 9 | 19 |
| `docs/sdk/golang/user/SyncUser.mdx` | 11 | 19 |
| `docs/sdk/golang/user/UnassignRole.mdx` | 9 | 19 |
| `docs/sdk/java/quickstart-java.mdx` | 10 | 19 |
| `docs/sdk/java/resource/create.mdx` | 10 | 19 |
| `docs/sdk/java/resource/delete.mdx` | 11 | 20 |
| `docs/sdk/java/resource/get.mdx` | 10 | 19 |
| `docs/sdk/java/resource/list.mdx` | 11 | 20 |
| `docs/sdk/java/resource/update.mdx` | 11 | 20 |
| `docs/sdk/java/role/assign-role.mdx` | 11 | 20 |
| `docs/sdk/java/role/create.mdx` | 11 | 20 |
| `docs/sdk/java/role/delete.mdx` | 11 | 20 |
| `docs/sdk/java/role/get-assigned-roles.mdx` | 11 | 20 |
| `docs/sdk/java/role/get.mdx` | 10 | 19 |
| `docs/sdk/java/role/list.mdx` | 11 | 20 |
| `docs/sdk/java/role/unassign-role.mdx` | 11 | 20 |
| `docs/sdk/java/role/update.mdx` | 11 | 20 |
| `docs/sdk/java/tenant/create.mdx` | 11 | 19 |
| `docs/sdk/java/tenant/delete.mdx` | 11 | 20 |
| `docs/sdk/java/tenant/get.mdx` | 10 | 19 |
| `docs/sdk/java/tenant/list.mdx` | 11 | 20 |
| `docs/sdk/java/tenant/update.mdx` | 11 | 20 |
| `docs/sdk/java/user/create.mdx` | 10 | 19 |
| `docs/sdk/java/user/delete.mdx` | 11 | 20 |
| `docs/sdk/java/user/get.mdx` | 10 | 19 |
| `docs/sdk/java/user/list.mdx` | 11 | 20 |
| `docs/sdk/java/user/sync.mdx` | 11 | 20 |
| `docs/sdk/kotlin/quickstart-kotlin.mdx` | 7 | 17 |
| `docs/sdk/nodejs/all-tenants.mdx` | 7 | 17 |
| `docs/sdk/nodejs/bulk-requests-examples.mdx` | 7 | 18 |
| `docs/sdk/nodejs/quickstart-nodejs.mdx` | 8 | 18 |
| `docs/sdk/nodejs/relationship-tuple/list-relationship-tuples.mdx` | 9 | 19 |
| `docs/sdk/nodejs/resource-instance/list-resource-instances.mdx` | 10 | 19 |
| `docs/sdk/nodejs/resource/create-resource.mdx` | 9 | 19 |
| `docs/sdk/nodejs/resource/delete-resource.mdx` | 11 | 19 |
| `docs/sdk/nodejs/resource/update-resource.mdx` | 9 | 19 |
| `docs/sdk/nodejs/role/assign-role.mdx` | 9 | 19 |
| `docs/sdk/nodejs/role/create-role.mdx` | 9 | 19 |
| `docs/sdk/nodejs/role/delete-role.mdx` | 11 | 19 |
| `docs/sdk/nodejs/role/get-assigned-roles.mdx` | 11 | 19 |
| `docs/sdk/nodejs/role/get-role.mdx` | 11 | 19 |
| `docs/sdk/nodejs/role/unassign-role.mdx` | 9 | 19 |
| `docs/sdk/nodejs/role/update-role.mdx` | 9 | 19 |
| `docs/sdk/nodejs/sync-policy-script/sync-policy.mdx` | 10 | 18 |
| `docs/sdk/nodejs/tenant/create-tenant.mdx` | 9 | 19 |
| `docs/sdk/nodejs/tenant/delete-tenant.mdx` | 11 | 19 |
| `docs/sdk/nodejs/tenant/get-tenant.mdx` | 11 | 19 |
| `docs/sdk/nodejs/tenant/list-all-tenant-users.mdx` | 11 | 19 |
| `docs/sdk/nodejs/tenant/list-tenants.mdx` | 10 | 19 |
| `docs/sdk/nodejs/tenant/update-tenant.mdx` | 9 | 19 |
| `docs/sdk/nodejs/user/create-user.mdx` | 11 | 19 |
| `docs/sdk/nodejs/user/delete-user.mdx` | 11 | 19 |
| `docs/sdk/nodejs/user/get-user.mdx` | 10 | 19 |
| `docs/sdk/nodejs/user/list-users.mdx` | 10 | 19 |
| `docs/sdk/nodejs/user/sync-user.mdx` | 10 | 19 |
| `docs/sdk/permit-prisma-extension.mdx` | 12 | 18 |
| `docs/sdk/php/quickstart-php.mdx` | 9 | 18 |
| `docs/sdk/python/quickstart-python.mdx` | 10 | 19 |
| `docs/sdk/python/quickstart_python_sync.mdx` | 8 | 18 |
| `docs/sdk/python/sync-policy-script/sync-policy.mdx` | 9 | 18 |
| `docs/sdk/python/usage-example.mdx` | 12 | 18 |
| `docs/sdk/ruby/quickstart-ruby.mdx` | 10 | 18 |
| `docs/sdk/ruby/user/sync_user.mdx` | 9 | 19 |
| `docs/sdk/sdks-overview.mdx` | 8 | 18 |
| `docs/status.mdx` | 6 | 18 |
| `docs/updates-and-feedback/changelog.mdx` | 6 | 17 |
| `docs/updates-and-feedback/feature-requests.mdx` | 6 | 18 |
| `docs/updates-and-feedback/roadmap.mdx` | 6 | 18 |

## Cross-page findings

These problems span several pages. Fix them in batches, not page by page.

### Broken or invalid code samples

- `how-to/enforce-permissions/check.mdx`: stray `import { info } from "autoprefixer"` mid-page; the curl example passes a header with `-d`.
- `sdk/nodejs/all-tenants.mdx`, `sdk/nodejs/bulk-requests-examples.mdx`: curl uses `-D` (dump headers) instead of `-d`.
- Node.js reference pages (create/update resource, role, tenant; assign/unassign role) and `quick-start/express.mdx`, `quick-start/nest.mdx` pass `JSON.stringify(obj)` to SDK methods that take objects.
- Go reference pages: `role/Update` calls `Roles.Create`; `user/UnassignRole` calls `UnasignRole`; `GetAssignedRoles` passes a role key as the user.
- `api/rebac/groups/groups.mdx`, `api/elements/*`, `api/rbac/rbac-example.mdx`: invalid JSON and curl continuations.
- `ai-security/access-request-mcp/food-ordering-demo-example.mdx`: Python blocks lost their whitespace (`asyncdef`).
- `integrations/gateways/kong.mdx`: invisible U+2060 characters inside the docker command.
- `quick-start/django.mdx`, `quick-start/spring-boot.mdx`, `quick-start/nextjs.mdx`, `quick-start/gin.mdx`: undefined names, wrong routes, or wrong file locations.

### Wrong definitions

- `how-to/build-policies/rebac/building-rebac-policies.mdx` swaps the RBAC and ReBAC expansions. `ai-security/integrations/mongodb-rag.mdx` expands ReBAC as role-based.
- The framework quickstarts (`quick-start/*`) call a resource set "a ReBAC setup". A resource set is ABAC.
- The shared SDK quickstart partials say user data "never goes outside your system". Users are synced to the Permit control plane.

### Duplicate or conflicting pages

- `api/elements/access-request-api.mdx` and `api/elements/access-requests.mdx` are near copies.
- `overview/sync-application-data-into-permit.mdx`, `overview/sync-applications-data.mdx`, and `overview/sync-your-first-user-with-sdk.mdx` overlap.
- `authentication/your-authentication.mdx` and `authentication/permit-and-authentication.mdx` cover the same material.
- The eight framework guides in `quick-start/` share prose and reuse screenshots from other frameworks.
- `how-to/use-audit-logs/errors/no_matching_rules.mdx` and `how-to/use-audit-logs/errors/no_permission.mdx` have the same title and fix.
- On-prem pages disagree on the admin password secret, storage sizes, and whether Policy Sync is required.
- PDP health endpoint: `/health` on 7766 (`pdp-deployment`) vs `/healthy` on 7000 (`deploy/overview`).
- Permit MCP Gateway pages disagree on client setup (`mcp-remote` vs `url` key), trust-level consent flow, and whether the gateway is hosted-only.

### Links and anchors

- Several pages link to `/overview/connecting-your-app#1-get-your-permit-environment-api-key`, an anchor that comes from the imported partial `getting-started/_quickstart-parts/_quickstart_intro.mdx`. A heading change in that partial breaks every one of those links. Point them at `/overview/get-api-key`.
- Personal calendar links (`calendly.com/permit-io/demo`) appear on MCP gateway and deploy pages. The style guide requires `https://www.permit.io/demo`.
- Two Slack invite URLs are in use: `io.permit.io/slack` and `io.permit.io/docs-to-slack`.
- Links to `http://localhost:3000/...` in `how-to/build-policies/policy-basics.mdx` and `authentication/auth0/permit-integration.mdx`.
- Personal GitHub repos (`filipermit/*`, `eylonper/*`, `Tammibriggs/*`) linked as official examples.

### Terminology drift

- "SDK secret key", "API secret key", "API Key" instead of "API key".
- "Four Perimeter Model", "Four-Perimeter Framework", "4-Perimeter Framework".
- "container PDP", "Edge PDP", "sidecar", and "local PDP" used interchangeably.
- PDP service name `permitio-pdp` vs `permit-pdp` across the Helm, Pulumi, Terraform and raw Kubernetes pages.
- Real people's names and emails in SDK samples (`elonmusk@tesla.com`, company names), against the style guide.

### Style patterns that cost the most points

- Em dashes: the Permit MCP Gateway and HTTP egress proxy pages use them heavily (21 of 26 pages in those folders score 0 on style).
- "we", "let's", "simply", "easily", "powerful", "seamless", "robust" across tutorials and integration pages.
- Dated wording: "new", "recently", "coming soon", "on the roadmap", "as of January 2026", "in the near future".
- Headings that are not self-contained: bare H1s like "Create" or "list" in SDK reference pages, numbered "Step 3" headings, H1 to H3 jumps.

## Full claims log

Every claim that the rewrite removed, changed, or kept without verification, with the reason. Entries are grouped by rewrite batch.

### Batch u1 (`how-to/enforce-permissions` and related pages)

- `docs/how-to/enforce-permissions/data-filtering.mdx`: "Simplified Partial-evaluation, is an upcoming feature in advanced stages of release, which includes built-in translation to SQL" (reason: unreleased/roadmap wording, could not verify availability; removed)
- `docs/how-to/enforce-permissions/data-filtering.mdx`: "This capability exists in Open Policy Agent (OPA) under the compile API and is already available within Permit's PDP" (reason: reworded to the verifiable mechanism, OPA's Compile API through the exposed OPA port of the PDP container; whether Permit's generated policies partially evaluate cleanly was not verified)
- `docs/how-to/enforce-permissions/data-filtering.mdx`: "PDP-Level Filtering ... filterObjects function ... returns a subset of the objects passed to it based on the policy" (reason: SDK source shows FilterObjects/filter_objects run a bulk check in the SDK, not a PDP-side filter; page now says so)
- `docs/how-to/enforce-permissions/list-role-assignments.mdx`: "Permit is gradually releasing these APIs. The following pages contain the currently available APIs." (reason: dated/roadmap wording; removed)
- `docs/how-to/enforce-permissions/list-role-assignments.mdx`: "This function is paginated and returns a maximum of 100 role assignments per page" (reason: kept, but clarified from PDP source: max 100, REST default per_page 30, Python SDK default 100)
- `docs/how-to/enforce-permissions/list-role-assignments.mdx`: "Using these APIs in the local PDP avoids network latency and provides faster responses" (reason: reworded to the mechanism, the PDP answers from its local policy data without a call to the Permit cloud API)
- `docs/how-to/enforce-permissions/user-permissions.mdx`: "`enable_abac_user_permissions` parameter name is subject to change" (reason: stale; the flag name is verified in permitio/permit-backend user_permissions.rego.tpl and permitio/datasync handlers.go; note removed)
- `docs/how-to/enforce-permissions/user-permissions.mdx`: "Not all SDKs are supporting this feature at this point in time" (reason: dated; replaced with the verified fact that the Node.js and Python functions take no context argument)
- `docs/how-to/enforce-permissions/all-tenants-check.mdx`: "The tenant key isn't required and will be ignored if provided" (reason: kept from the original; not verified in the policy source)
- `docs/how-to/enforce-permissions/all-tenants-check.mdx`: "Currently, using relationship-based access control (ReBAC) doesn't work for the All Tenants Check" (reason: kept as a limitation without "currently"; behavior not verified in the policy source)
- `docs/how-to/enforce-permissions/authorized-users.mdx`: "That feature is performance-intensive and is disabled by default" (reason: default-off verified, the flag is opt-in per request in the Rego template; performance claim kept from original, not measured)
- `docs/how-to/enforce-permissions/url-mapping/url-mapping-check.mdx`: "The SDKs will be updated to support this feature soon" (reason: roadmap wording; replaced with verified fact: Java has permit.checkUrl(), other SDKs have no URL check)
- `docs/how-to/enforce-permissions/url-mapping/url-mapping-check.mdx`: "In the URL Mapping UI ... `example.com/v1/{customer_id}/payments`" (reason: PDP source compares the full URL segment by segment, including scheme and host; example changed to `https://example.com/v1/{customer_id}/payments`)
- `docs/how-to/enforce-permissions/url-mapping/url-mapping-check.mdx`: "Each rule sets the HTTP method, the URL template, the resource, and the action" as a UI description (reason: based on the MappingRule API schema and the existing screenshot; dashboard field labels not verified)
- `docs/how-to/enforce-permissions/url-mapping/regex-url-mapping-check.mdx`: "This feature is currently only available through the Permit.io API & PDP API" (reason: could not verify whether the URL Mapping dashboard supports regex rules; page now says to create regex rules with the API without claiming UI absence)
- `docs/how-to/enforce-permissions/url-mapping/regex-url-mapping-check.mdx`: "Simple URL mapping is supported in PDP version 0.8.0 or higher" (reason: mislabeled; PDP commit 3545c4aa "Integrate regex URL matching" is included in release 0.8.0 and not in 0.7.2, so the note now says regex URL mapping requires 0.8.0. Simple URL mapping: /allowed_url was added 2023-07-23, Docker Hub tag 0.2.18 pushed 2023-06-20 and 0.2.19 pushed 2023-08-02, consistent with 0.2.19)
- `docs/how-to/enforce-permissions/url-mapping/regex-url-mapping-check.mdx`: "The `secret` value is still required for now, even though it isn't used. This will be fixed in a future release of the proxy_configs API." (reason: roadmap; kept only verified facts: API spec lists secret as required, PDP /allowed_url code doesn't use it)
- `docs/how-to/enforce-permissions/url-mapping/configuring-jwks.mdx`: "In order to start using URL Mapping with Permit, you need to add your obtained JWKs ... sending API calls directly from the frontend" (reason: could not verify that URL mapping checks use the environment JWKS; API spec describes the environment `jwks` field as "jwks for element frontend only login"; page now names Permit Elements frontend login as the verified use)
- `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx`: "Via the Backend API ... `https://api.clerk.dev/v1/jwks`" (reason: stale; Clerk docs list `https://api.clerk.com/v1/jwks`, updated)
- `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx`: "If you are planning to use Clerk on a Serverless/Edge Runtime ... `Dashboard > API Keys > JWT Verification Key` ... not in PEM format" (reason: third-party dashboard path, volatile and not needed to obtain a JWKS; removed)
- `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx`: "OneLogin ... send a GET request to `https://<subdomain>.onelogin.com/oidc/2/signing_keys` ... pass a bearer access_token" (reason: replaced with the public JWKS URL `https://{subdomain}.onelogin.com/oidc/2/certs` listed on the OneLogin list-keys page)
- `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx`: SuperTokens doc link `https://supertokens.com/docs/microservice_auth/jwt-verification/index` (reason: 404; replaced with the SuperTokens protect-API-routes page, which shows `<YOUR_API_DOMAIN>/auth/jwt/jwks.json`)
- `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx`: "Obtaining JWKs involves generating key pairs, extracting keys from trusted certificates, utilizing key management systems ... ensuring the integrity and security of online communications" (reason: generic, unsupported claims; removed)
- `docs/how-to/enforce-permissions/data-filtering.mdx`: Couchbase blog link `https://www.couchbase.com/blog/permit-io-couchbase-access-control/` (reason: returned HTTP 403 to a script, likely bot protection; kept, not confirmed live)

### Batch w1 (`sdk/nodejs` and related pages)

- `docs/sdk/nodejs/all-tenants.mdx`: "you can use the permit.AllTenantsCheck function" (reason: no such method; the SDK method is `permit.checkAllTenants()` per permit-node src/enforcement/enforcer.ts)
- `docs/sdk/nodejs/all-tenants.mdx`: "send a GET request to the `/allowed/all-tenants` endpoint" (reason: contradicts permit-node, which sends POST)
- `docs/sdk/nodejs/all-tenants.mdx`: response sample with "allowed" and "message" fields (reason: contradicts PDP schema `AllTenantsAuthorizationResult.allowed_tenants` in permitio/PDP horizon/enforcer/schemas.py; sample kept byte-identical and flagged on the page, fix logged)
- `docs/sdk/nodejs/bulk-requests-examples.mdx`: "each user object in the `users` array is of type UserCreate and contains the user's details such as username, email, password" (reason: contradicts API; body field is `operations`, UserCreate has no username or password)
- `docs/sdk/python/sync-policy-script/sync-policy.mdx`: "The script avoids duplicating resources and roles by checking their existence before creation" (reason: contradicts the script code, which never checks; a second run raises PermitAlreadyExistsError. Replaced with a warning; cross-page conflict with the Node.js script logged in codefix_w1.md)
- `docs/sdk/nodejs/user/sync-user.mdx`: "sync (save) a user's information to the Permit.io cloud and PDP ... upon user creation" and "should be used for the initial creation" (reason: stale; users.sync creates or updates, per permit-node src/api/users.ts)
- `docs/sdk/nodejs/user/create-user.mdx`, `sync-user.mdx`: "You can use anything for this ID; the user email" (reason: conflicts with "key must be url-friendly"; replaced with a unique, URL-friendly identifier such as the identity provider user ID)
- `docs/sdk/permit-prisma-extension.mdx`: "Resource Synchronization: Keeps your Permit.io policy engine in sync with your database by automatically ingesting resource instances and their relationships" (reason: contradicts permit-prisma src/extension/PermitClientExtension.ts, which syncs resource instances only, not relationship tuples)
- `docs/sdk/permit-prisma-extension.mdx`: "implementing true row-level security" and TL;DR "Seamlessly integrate" (reason: marketing claim, not verifiable; data filtering applies only to findMany)
- `docs/sdk/permit-prisma-extension.mdx`: "Intercepts all Prisma operations" as unconditional (reason: code skips checks when no user is set and for excluded models/operations; documented as a warning)
- `docs/sdk/permit-prisma-extension.mdx`: "Use locally deployed PDP for ABAC and ReBAC policies" (reason: contradicts /concepts/pdp/cloud-pdp-capabilities, where the Cloud PDP supports ReBAC; only ABAC needs an Edge PDP)
- `docs/sdk/permit-prisma-extension.mdx`: "When `enableAttributeSync` is on, resource attributes are automatically synced to Permit.io for policy evaluation" (reason: in code, enableAttributeSync and enableResourceSync trigger the same instance sync and send only the record's `attributes` field; reworded)
- `docs/sdk/ruby/user/sync_user.mdx`: "sync (save) a user's information ... upon user creation" and "should be used for the initial creation" (reason: permit-ruby lib/api/users.rb creates or updates the user)
- `docs/sdk/ruby/user/sync_user.mdx`: commented-out link telling readers to use an assignRole function (reason: permit-ruby has no role assignment method; replaced with API endpoint links)

### Batch u2 (`getting-started/_quickstart-parts` and related pages)

- `docs/getting-started/_quickstart-parts/_quickstart_{nodejs,python,python_sync,golang,java,dotnet,ruby}.mdx`: "This means that your user data **never** goes outside your system, **keeping security high**." (reason: contradicts product behavior; users, roles, and attributes synced through the Permit API are stored in the Permit control plane. permit-node `src/api/deprecated.ts` says these API calls go outside your local network.) Replaced with a note on where checks run and where user data is stored.
- Same partials: "Permission checks are being run against the PDP container that's running locally on your machine - offering minimal latency and without leaving your network." (reason: only true for a container PDP; the intro partial defaults to the Cloud PDP tab. Rewritten to say checks go to the configured PDP URL and a container PDP evaluates checks on your machine.)
- Same partials: "You can also pass the entire decoded JWT, to include attributes about the user." (reason: could not verify; SDK `check()` signatures take a user key or a user object with `key` and `attributes`, not a JWT.)
- Same partials: "The tenant passed in needs to be either the **tenant id** or the **tenant key**." (reason: could not verify that tenant IDs are accepted in `permit.check()`; pages now say "tenant key".)
- `_quickstart_nodejs.mdx`, `_quickstart_python.mdx`: "There attributes are merged (and override) user and resource attributes that were persisted to the permit API." (reason: could not verify merge/override semantics in SDK or docs sources.)
- `_quickstart_nodejs.mdx`, `docs/sdk/nodejs/quickstart-nodejs.mdx` prose: implied default that the SDK "returns false if you get a timeout / network error" (reason: contradicts permit-node `src/config.ts`, where `throwOnError` defaults to `true`). Prose no longer states a default; the code comment is logged in codefix_u2.md.
- `_quickstart_golang.mdx`: "`User`: ... this can be created using `models.NewUserCreate("user_key")`" and "`resource`: ... `models.NewResourceCreate("resource_key")`" (reason: contradicts permit-golang; `Check()` takes `enforcement.User`/`enforcement.Resource` built with `enforcement.UserBuilder`/`ResourceBuilder`.)
- `_quickstart_golang.mdx`: "Assuming a Node.js app made up of a single file, with the `permitio` and `express` modules installed." above the Go example (reason: wrong language).
- `_quickstart_golang.mdx`: heading "Full app example (includes ABAC RBAC and terraform )" (reason: could not verify ABAC/RBAC coverage in the permit-go-example README; kept only the verified Terraform configuration.)
- `_quickstart_java.mdx`: "Example application using Spring framework" for permit-java-example (reason: could not verify Spring in the repository README; README describes "a simple blog application". RBAC, ABAC, ReBAC, and Terraform coverage verified in the README.)
- `_quickstart_intro.mdx`: image alt texts were swapped ("Copy secret key from user menu" on the Projects screen screenshot, and vice versa). Fixed to describe each screenshot.
- `_quickstart_intro.mdx`: "Cloud PDP is a **managed, production-ready** service" (reason: "production-ready" is a marketing qualifier; kept "managed" and the verified RBAC/ReBAC support and no-ABAC limit from `/concepts/pdp/cloud-pdp-capabilities`.)
- `_quickstart_python_sync.mdx`: full example pinning `permit==1.0.0rc1` with `permit.write()` (reason: current `permit` package on PyPI is 2.8.3 and `permit/permit.py` has no `write()`; added a warning pending the code fix in codefix_u2.md.)
- `docs/sdk/cpp/quickstart-cpp.mdx`, `docs/sdk/erlang/quickstart-erlang.mdx`, `docs/sdk/kotlin/quickstart-kotlin.mdx`, `docs/sdk/php/quickstart-php.mdx`: "Currently, the <language> SDK is in beta." (reason: could not verify status; the repositories' READMEs don't state beta status, and the C++, Kotlin, and Erlang repositories were last pushed 2025-01-09. The sidebar labels in `sidebars.js` still say "(Beta)"; the coordinator may want to align them.)
- `docs/sdk/erlang/quickstart-erlang.mdx`: implied that permit-erlang is a client SDK (reason: the repository README describes the code as "An Erlang server stub generated by OpenAPI Generator"; the page now says so.)
- Same four pages: hardcoded Slack invite `https://permit-io.slack.com/join/shared_invite/...` (reason: style guide requires `https://io.permit.io/slack`).
- `docs/sdk/php/quickstart-php.mdx`: "Should also work with PHP 8.0." (reason: replaced with the verified constraint from permit-php `composer.json`: `"php": "^7.4 || ^8.0"`.)
- `docs/sdk/sdks-overview.mdx`: Python "Get User Permission" marked 🔴 (reason: contradicts permit-python `permit/permit.py`, which defines `async def get_user_permissions(...)`; changed to ✅.)
- `docs/sdk/sdks-overview.mdx`: rest of the parity table not re-audited row by row. Spot checks that look doubtful but were not changed: .NET "Get User Permission ✅" (`src/permit/Permit.cs` exposes only `Check`, `BulkCheck`, `BulkCheckVerbose` at the top level), Ruby "Get Authorized Users ✅" (`lib/permit.rb` exposes only `check` and `sync_user`). Added an info admonition telling readers to confirm against SDK source.
- `docs/sdk/sdks-overview.mdx`: "It is impossible to implement all the features of the Permit.io API in Terraform due to Terraform limitations and basic design principles." (reason: reworded to the concrete case the table shows, request-time features such as permission checks.)
- `docs/overview/connecting-your-app.mdx`: title "Running a demo" (reason: did not match the page's task; retitled "Connect your app and run your first permission check". URL and anchors unchanged.)

### Batch w2 (`sdk/golang` and related pages)

- `docs/sdk/golang/role/Get.mdx`, `docs/sdk/dotnet/role/GetRole.mdx`: "Get a single tenant role" (reason: contradicts SDK and API; roles are environment-level objects fetched from the environment the API key belongs to).
- `docs/sdk/golang/role/Create.mdx`: role `Key` description that referred to a user email and `permit.check` (reason: copy-paste from the user page; contradicts `models.RoleCreate`).
- `docs/sdk/dotnet/role/ListAssignedRoles.mdx`: "If no is tenant provided, all tenants will fetch" (reason: garbled, and the tenant argument is ignored; `Api.cs` `ListAssignedRoles` sends only `user` to `List_role_assignmentsAsync`).
- `docs/sdk/golang/user/UnassignRole.mdx`: parameters described as a payload object with a repeated `ctx` (reason: contradicts `users.go`, which takes positional arguments). The old `#payload` anchor was dropped; no page links to it (checked `grep -rn` over docs and src).
- `docs/sdk/golang/resource/Create.mdx`, `docs/sdk/golang/resource/Update.mdx`: "A actions definition block" (copy-paste prose, rewritten against `models.ActionBlockEditable`).
- `docs/sdk/dotnet/user/CreateUser.mdx`, `docs/sdk/golang/user/Create.mdx`: suggestion to use an email as the user key (reason: conflicts with the URL-friendly key rule stated on the same page; removed rather than asserted).

Verified and kept: Go `Tenants.Create` returns the existing tenant when the key exists (API spec, POST /v2/facts/{proj_id}/{env_id}/tenants description); .NET `SyncUser` uses the replace-user PUT endpoint (`Api.cs` `Replace_userAsync`); Go `GetAssignedRoles` pagination limits 1-100 (`users.go`, `isPaginationInLimit`, `DefaultPerPageLimit`).

### Batch w3 (`sdk/java` and related pages)

- `docs/sdk/java/user/create.mdx`: "The user key must be url-friendly (slugified)." (reason: could not verify; the `UserCreate.key` Javadoc in permit-java does not say this, and the page's own sample key `auth0|elon` contains `|`)
- `docs/sdk/java/user/sync.mdx`: "The user key must be url-friendly (slugified)." (reason: same as above)
- `docs/sdk/java/user/sync.mdx`: "sync (save) a user's information to the Permit.io cloud and PDP (Policy Decision Point) upon user creation" (reason: reworded; source shows `sync()` is an upsert via `PUT` that creates or updates, so "upon user creation" only was incomplete)
- `docs/sdk/java/role/delete.mdx`, `resource/delete.mdx`, `tenant/delete.mdx`, `user/delete.mdx`: "The id of the <object>. This is the unique key of the <object>." (reason: contradictory; replaced with "key or ID", per the API spec path parameter "Either the unique id ... or the URL-friendly key")
- `docs/sdk/java/resource/update.mdx`, `role/update.mdx`: `name` listed as required for `ResourceUpdate` / `RoleUpdate` (reason: contradicts source; every field in `ResourceUpdate` and `RoleUpdate` is optional)
- `docs/sdk/java/resource/create.mdx`, `resource/update.mdx`, `role/create.mdx`, `role/update.mdx`: fields `roles`, `relations`, `extends`, `grantedTo`, `attributes` added (verified in `openapi/models/ResourceCreate.java`, `ResourceUpdate.java`, `RoleCreate.java`, `RoleUpdate.java`; not removals, listed for reviewer awareness)
- Delete warnings added on the four delete pages are based on the API spec descriptions "Deletes the <object> and all its related data" (and for roles, "This includes any permissions granted to said role"). The specific examples (role assignments, actions, attributes) are inferred from the Permit data model; confirm with the owner if stricter wording is wanted.

### Batch u3 (`overview/perform-policy-check-with-cloud-pdp.mdx` and related pages)

- `docs/overview/perform-policy-check-with-cloud-pdp.mdx`: "It is **fully managed and eventually consistent**. Use it to try Permit and for production workloads that don't require strict read-your-own-writes guarantees." (reason: could not verify the Cloud PDP consistency model in docs or source; cloud-pdp-capabilities does not state it)
- `docs/overview/perform-policy-check-with-cloud-pdp.mdx`: "keep all authorization traffic **inside your own VPC**" (reason: reworded to "checks run inside your own network")
- `docs/overview/perform-policy-check-with-cloud-pdp.mdx`: "The check function can accept various arguments beyond the user and resource." (reason: vague; replaced with a link to /how-to/enforce-permissions/check)
- `docs/overview/perform-a-local-policy-check.mdx`: "Best practices for production deployments" listed as covered by the target page (reason: contradicts the target page, which does not cover it)
- `docs/overview/local-authorization-microservice.mdx`: "Scrape it with your monitoring stack to track request latency, decision counts, and errors" and metrics at `http://localhost:7766/metrics` (reason: contradicts PDP source. pdp-server on port 7000 routes /health, /ready, /healthy, /redoc, /scalar and authz APIs, and falls back to horizon, which registers no /metrics route. /metrics is OPA's endpoint on 8181, gated by horizon/static/templates/authz.rego.template and PDP_ALLOW_METRICS_UNAUTHENTICATED. Code fix logged.)
- `docs/overview/local-authorization-microservice.mdx`: "`7766`: The main PDP API port" (reason: 7766 is the host port; the container port is 7000 per the PDP Dockerfile `EXPOSE 7000 7001 8181`)
- `docs/overview/local-authorization-microservice.mdx`: removed the duplicated pull and run steps, their two code blocks, and the two videos (`/img/updated/walkthroughs/local-policy-check/pulling-pdp.mp4`, `running-pdp.mp4`), per coordinator note that run-pdp owns "run the PDP container". The videos have no counterpart on run-pdp; the coordinator may move them there.
- `docs/overview/local-authorization-microservice.mdx`: WhatsNext items "Create user and resource attributes / Define your first User and Resource Sets / Create your ABAC policy rules" (reason: replaced by descriptive next-step links)
- `docs/overview/glossary.mdx`: "Checking permissions for the same user key in several environments in the same month counts as one MAU." and "MAU is the count of unique user keys ... across your workspace (organization)" (reason: could not verify the billing counting rule; workspace-usage.mdx only says unique users per month)
- `docs/overview/glossary.mdx`: "Billing is calculated per workspace, based on MAU" (reason: contradicts workspace-usage.mdx, which says MAU and tenants; reworded)
- `docs/overview/glossary.mdx`: "though most teams need only one" (workspaces) (reason: could not verify)
- `docs/overview/glossary.mdx`: "It is recursive, and a critical part of a secure access control system. It includes features such as meta roles, meta audit logs, and API logs." plus the external devops.com link (reason: could not verify feature names; replaced with a member roles link)
- `docs/overview/glossary.mdx`: "In Permit, the PDP is a Docker container ... often deployed as a sidecar" (reason: stale; the managed Cloud PDP also exists)
- `docs/overview/why-permit.mdx`: "so you don't have to build permissions again", "Permit covers all three layers, not only the enforcement building blocks", "delegate parts of access control to your end users safely" (reason: marketing, unverifiable)
- `docs/overview/best-practices.mdx`: "run Permit checks in read-only mode" (reason: no read-only mode found; reworded as calling permit.check() next to the existing check and logging both)
- `docs/overview/best-practices.mdx`: Slack link `https://io.permit.io/docs-to-slack` changed to `https://io.permit.io/slack` (style guide)
- `docs/overview/get-api-key.mdx` and `docs/overview/use-the-permit-api-and-sdk.mdx`: image alt texts were swapped ("Copy secret key from user menu" was on the Projects screen screenshot); corrected on get-api-key, images removed from use-the-permit-api-and-sdk (duplicate steps now link to get-api-key)

### Batch u4 (`how-to/sync-users.mdx` and related pages)

- `docs/how-to/sync-users.mdx`: "We do plan to release a Policy Editor Element (https://permitio.canny.io/feature-requests/p/policy-editor-element), which will allow users to define their own policies within safe limits" (reason: roadmap/planned feature; style guide forbids describing unreleased features. Removed, kept the pointer to building such UIs on the Permit API)
- `docs/how-to/sync-users.mdx`: "you should use the `assign.role` function" (reason: no such function; replaced with `permit.api.users.assignRole()` / `assign_role`, verified in permit-node src/api/users.ts and permit-python permit/api/users.py)
- `docs/how-to/sync-users.mdx`: "The API `Create User` function will not assign the user with a role" (reason: stale; UserCreate in https://api.permit.io/v2/openapi.json has a `role_assignments` field. Reworded: without `role_assignments` the user has no roles)
- `docs/how-to/sync-users.mdx`: "The user key must be url-friendly (slugified)" (reason: imprecise; replaced with the key pattern `^[A-Za-z0-9|@+\-\._]+$` from the OpenAPI UserCreate schema)
- `docs/how-to/sync-users.mdx`: considered "API returns 201 when it creates the user" from the OpenAPI description; not kept because the Postman screenshot on sync-your-first-user shows `200 OK` for a create. Page says "returns the created user, or 409".
- `docs/overview/sync-application-data-into-permit.mdx`: "Security: Minimizes manual interventions" / "Efficiency" / "Consistency" SCIM benefit bullets (reason: generic marketing claims, removed)
- `docs/overview/sync-application-data-into-permit.mdx`: "SCIM sends Lisa's information to Permit.io, which creates her user and assigns her predefined roles" (reason: role assignment through SCIM only verifiable via Okta group push in integrations/SCIM/OKTA.mdx; example reworded to user creation, with a pointer to the Okta group mapping)
- `docs/overview/sync-application-data-into-permit.mdx`: title changed to "Plan your User Sync Strategy"; page is not listed in sidebars.js (not an issue I can fix; coordinator may want to add it or leave it orphaned)
- `docs/overview/sync-your-first-user-with-sdk.mdx`: title "Sync your First User" (implied SDK in URL) retitled "Sync your First User with the API" to match the cURL/Postman walkthrough (URL unchanged)
- `docs/overview/sync-your-first-user-with-sdk.mdx`: "while keeping the `Employee` role in the default tenant" (reason: the walkthrough never assigns Employee; assign-role sample assigns `admin`. Prose says the default-tenant role doesn't change; alt text describes the screenshot as-is. Screenshot `default-tenant.png` should be retaken or the walkthrough should assign `Employee`)
- `docs/overview/sync-your-first-user-with-sdk.mdx`: "Permit is API-first: everything you can do in the UI, you can also do with the API" (reason: absolute claim not verifiable; softened to "Everything you did with the API in this walkthrough, you can also do in the Permit dashboard")
- `docs/overview/sync-applications-data.mdx`: SDK names "`users.sync`, `tenant.create`, `resource_instances.create`, `relationship_tuples.create`" (reason: mixed languages; Node names verified as `permit.api.users.sync`, `tenants.create`, `roleAssignments.assign`, `resourceInstances.create`, `relationshipTuples.create` in permit-node src/api/api-client.ts; Python snake_case names verified in permit-python permit/api/api_client.py. Table lists both)
- `docs/overview/sync-applications-data.mdx`: alt text "Tenant Attributes" on the user-attributes screenshot and "Empty Resource Screen" on the resource-instance screenshot (reason: wrong alt text, replaced)
- `docs/overview/sync-applications-data.mdx`: relationship tuple `tenant` "If the resource instances don't exist yet, the tenant is required to create them, otherwise it is ignored" (reason: OpenAPI RelationshipTupleCreate says a disagreeing tenant is rejected when exactly one instance exists; reworded to the spec)
- `docs/overview/configure-your-first-rbac-policy.mdx`: "Tick the actions ... `create`, `read`, `publish`" (reason: contradicts the check-policies.mp4 video, which checks `create`, `delete`, `publish`; prose now matches the video)
- `docs/overview/setup-attribute-based-access-control.mdx`: user set conditions "`department` equals `Engineering`, `training_status` equals `certified`" vs scenario "R&D department ... completed training" (reason: contradiction. Frames of user-set.mp4 show Engineering/certified with user set name "R&D Certified Employee"; scenario, attribute examples and steps now match the video)
- `docs/overview/setup-attribute-based-access-control.mdx`: "Define an Engineering user as someone permitted to read standard documents but restricted from accessing highly classified documents" (reason: the video's role is `Employee`, and a role with `read` on `Document` can read every document, including resource-set documents, because permit.root allows when any policy allows (permitio/generated-policy-example root.rego). Replaced with an accurate scenario table and a warning; owner may want to re-record setting-policy.mp4 with the Employee role granted on a non-classified resource set)
- `docs/overview/setup-attribute-based-access-control.mdx`: added "The Cloud PDP doesn't evaluate ABAC policies" (source: docs/concepts/pdp/cloud-pdp-capabilities.mdx)
- `docs/overview/create-a-rebac-policy.mdx`: "A resource cannot be its own parent. If a resource requires a self-relation, consider using an alternative relation type such as owner or container." (reason: could not verify; removed)
- `docs/overview/create-a-rebac-policy.mdx`: "When you define the relation, Permit automatically creates the matching roles in the Policy Editor." (reason: could not verify; removed)
- `docs/overview/create-a-rebac-policy.mdx`: Dashboard permissions "Analyst: view, add-widget, edit" (reason: dashboard-permissions/widget-permissions screenshot shows Dashboard#Analyst with add-widget, remove-widget, view; prose now matches. The truncated fifth column in that screenshot (likely Dashboard#Viewer) shows edit and view, while the page says Viewer: view only. Kept "view"; screenshot should be checked)
- `docs/overview/create-a-rebac-policy.mdx`: user emails, instance keys (`johnsmith`, `annasmith`, `data`, `data_consumption`) and UI labels added from frames of creating-users-rebac.mp4, create-resource-instances-rebac.mp4, assign-instance-roles-rebac.mp4
- `docs/overview/create-a-rebac-policy.mdx`: relation-diagram.png shows Anna as Viewer of Dashboard and Analyst/Editor of Widget A, which the data steps never create (kept image with generic alt text; owner may want a diagram that matches the walkthrough data)
- `docs/overview/advanced-authorization-queries.mdx`: "`permit.authorized_users`" and "`permit.GetUserPermissions`" presented as universal names (reason: Node SDK has no filterObjects or authorized users function (permit-node src/index.ts: check, bulkCheck, checkAllTenants, getUserPermissions); Go has BulkCheck, FilterObjects, GetUserPermissions, no authorized users; Python has bulk_check, filter_objects, authorized_users, get_user_permissions. Table lists per SDK)
- `docs/overview/advanced-authorization-queries.mdx`: "Alice can read Blog Post 1, 2, 3" etc. describe the scenario, but the linked samples use other data (anna@smith.com/contract, repo, bob@example.com). Page now says samples show the call shape with other names.
- `docs/overview/access-requests-and-approvals.mdx`: text steps added only from docs/embeddable-uis/embedding-elements.mdx, element/access-request.mdx, element-login.mdx, element/user-management.mdx; the "Setting up Permit" and "Building the policy" steps link to owner pages instead of describing video-only content
- `docs/overview/access-requests-and-approvals.mdx`: button name differs between docs: "Get Code" (embedding-elements.mdx) vs "Generate Code" (access-request.mdx). Page uses "Generate Code"; one of the source pages is stale.

### Batch w4 (`quick-start/{express,fastapi,flask,django,nest}.mdx` and related pages)

#### Claims

- `docs/quick-start/{express,fastapi,flask,django,nest}.mdx`: "A **Free Post** resource set filters non-premium posts ... This is a ReBAC setup." (reason: wrong. permit-cli `source/templates/blogging-platform.tf` defines `Free_Post` as a resource set with the condition `resource.premium equals false`, which is ABAC. Rewritten as ABAC; the Post-to-Comment role derivation is described as ReBAC.)
- same 5 files: "As users become **Authors**, they gain access to create and update blog posts and manage comments." (reason: contradicts the template. The top-level Author role has `Post:create`, `Post:read`, `Comment:read`. Update and moderation come from the resource roles Post#Author and Comment#Moderator. Replaced with a table built from the template.)
- same 5 files: "the person who creates a post automatically becomes a **Comment Moderator**" (reason: imprecise. The template derives Comment#Moderator from the Post#Author role on the parent post, not from creating the post. Rewritten.)
- same 5 files: "This setup combines ABAC and ReBAC to enforce flexible and secure permissions." (reason: marketing wording; removed.)
- same 5 files: "To check the available templates, run `permit template list`" (reason: wrong command. permit-cli has `source/commands/env/template/list.tsx`, so the command is `permit env template list`. Prose fixed; the matching code block is in codefix_w4.md.)
- same 5 files: Dashboard role assignment steps "Beside the user, click on the **Add Instance Role** button ... Select tenant **(default)**" (reason: contradicts the page's own screenshot `user-access.png`, which shows the **Edit User** panel with **Permissions Per Tenant**, **Default Tenant**, and **Top Level Access**. Instance access is a different control. Rewritten to match the screenshot and linked to /how-to/sync-users.)
- same 5 files: "The PDP server runs on port `7766` by default. You can change the port if needed." (reason: `permit pdp run` hardcodes `-p 7766:7000` in permit-cli `source/components/pdp/PDPRunComponent.tsx`, and has no port option. Kept 7766, removed "you can change the port".)
- same 5 files: API key steps "Click on **Projects** ... three dots ... **Copy API Key**" duplicated inline (reason: owned by /overview/get-api-key; replaced with a link. The old link to /overview/connecting-your-app/#1-get-your-permit-environment-api-key is gone.)
- `docs/quick-start/nest.mdx`: "The `getPosts` handler returns a secret message and is protected by the guard. Just like a middleware." and "Since the blog application can have various elements like creating a post, commenting, editing, etc.,  `/posts` to demonstrate access control." (reason: fragment and garbled sentence; rewritten.)
- `docs/quick-start/{express,nest}.mdx`: "Conclusion" recap sections removed (meta-commentary; no inbound links).

#### Added claims (verified)

- "The Cloud PDP doesn't evaluate ABAC rules, so run the container PDP" (source: docs/overview/run-pdp.mdx, Cloud PDP limits admonition).
- "Each check also appears in the **Audit Log** screen" (source: docs/overview/local-authorization-microservice.mdx, `PDP_OPA_DECISION_LOG_ENABLED` default `True`).
- Python pages: "The `permit` package installs Pydantic with email validation" (source: permit-python `requirements.txt`, `pydantic[email]`).
- Flask: the `Permit` class from `permit` is the asyncio client; sync client exists (source: permit-python `permit/sync.py`).
- Nest: guard returning `false` gives HTTP 403 `{"message":"Forbidden resource","error":"Forbidden","statusCode":403}` (source: `static/img/quick-start-guide/nest-user-not-permitted.png`, NestJS default). `nest new` projects listen on port 3000 and register `AppController` in `AppModule` (NestJS CLI default scaffold).
- Django: `CsrfViewMiddleware` in the `startproject` MIDDLEWARE rejects POST requests without a CSRF token with 403 (Django documented behavior).

#### Media removed

- `docs/quick-start/nest.mdx`: removed `/img/quick-start-guide/next-user-permitted.png` and `/img/quick-start-guide/next-user-not-permitted.png`. The screenshots show a Next.js request to `http://localhost:3000/api/protected/posts` with a `user` header returning `{"secret":"User is permitted"}`; the Nest code serves `GET /posts`, reads `x-user`, and returns `{"message":"You have passed the auth check"}`. Replaced with copyable curl commands and expected output in text.
- `docs/quick-start/nest.mdx`: removed `/img/quick-start-guide/nest-register-user.png`. The response in the screenshot has a `role_assignment` key; the Nest code returns the assignment under `response`, so the screenshot was not produced by this code. Note: `nest-user-permitted.png` / `nest-user-not-permitted.png` exist in static but show `POST /posts` with a JSON body, which also does not match the Nest code (GET with `x-user` header), so they were not used.
- `docs/quick-start/{fastapi,flask,django}.mdx`: removed `/img/quick-start-guide/python-register-user.png`, `python-user-permitted.png`, `python-user-not-permitted.png`. These images are Express output: the register response uses the Express `response` key (Python code returns `role_assignment`), and the posts responses say "You are authorized to create a post" / "You are not authorized to create a post" (the Express messages; the Python code returns "User is permitted" / "User is not permitted"). `python-register-user.png` is byte-for-byte the same screenshot as `express-register-user.png`. Replaced with copyable curl commands and expected output in text.

### Batch w5 (`quick-start/gin.mdx` and related pages)

- `docs/quick-start/gin.mdx`, `nextjs.mdx`, `rails.mdx`, `spring-boot.mdx`, `aspnet.mdx`: "A **Free Post** resource set filters non-premium posts ... This is a ReBAC setup." (reason: contradicts permit-cli `source/templates/blogging-platform.tf`; a resource set with a `resource.premium equals false` condition is ABAC. Rewritten as ABAC.)
- same five pages: "As users become **Authors**, they gain access to create and update blog posts and manage comments." (reason: contradicts the template; the top-level Author role has only `Post:create`, `Post:read`, `Comment:read`. Rewritten from the template.)
- same five pages: "the person who creates a post automatically becomes a **Comment Moderator**" (reason: contradicts the template; the role derivation gives the Moderator role on comments to a user with the Author role on that post instance, not to whoever creates the post. Rewritten.)
- same five pages: "New users accessing the blog are assigned the **Reader** role and have permission to read posts." (reason: the template's Reader role reads only Free Posts via the resource set; the role is assigned by the app code, not by Permit. Removed.)
- same five pages: "This setup combines ABAC and ReBAC to enforce flexible and secure permissions." (reason: unverifiable "secure" claim, filler. Removed.)
- same five pages: dashboard steps "Beside the user, click on the **Add Instance Role** button" / spring-boot "Click the **Add Role** button" (reason: contradicts the page's own user-access.png screenshot, which shows the Edit User panel with Permissions Per Tenant, Top Level Access, and Save; and `permit.check(user, "create", "Post")` needs a top-level role, not an instance role. Rewritten from the screenshot labels.)
- same five pages: link `/overview/connecting-your-app/#1-get-your-permit-environment-api-key` replaced with `/overview/get-api-key` (fragile partial anchor).
- `docs/quick-start/gin.mdx`: removed screenshots `/img/quick-start-guide/python-register-user.png`, `python-user-permitted.png`, `python-user-not-permitted.png` (reason: wrong for this page; byte-identical to the express/python/rails/spring/dotnet images, they show a register response with a `response` key (Gin returns `role_assignment`), a `/posts` request with a JSON body (Gin reads the `X-User` header), and messages "You are authorized to create a post" (Gin returns "Post created successfully"). Replaced with curl commands and expected output from the page's code.)
- `docs/quick-start/rails.mdx`: removed `/img/quick-start-guide/next-register-user.png` (reason: Next.js screenshot; shows `POST http://localhost:3000/api/register`, a route the Rails app does not have) and `rails-user-permitted.png`, `rails-user-not-permitted.png` (reason: byte-identical to the shared express images; show port 8000 and messages "You are (not) authorized to create a post", while the Rails controller returns "User is (not) permitted").
- `docs/quick-start/spring-boot.mdx`: removed `spring-register-user.png`, `spring-user-permitted.png`, `spring-user-not-permitted.png` (reason: byte-identical to the shared express images; port 8000, `response` key, and messages do not match the Spring controller, which returns `role_assignment` and "User is (not) permitted" on port 8080).
- `docs/quick-start/spring-boot.mdx`: "use the `curl` command to make a request to the `/check-permission` endpoint" (reason: the code defines `POST /posts`; fixed in prose). ":::info You can grant authorization programmatically as well." (reason: vague; replaced with a link to /how-to/sync-users.)
- `docs/quick-start/aspnet.mdx`: removed `dotnet-register-user.png`, `dotnet-user-permitted.png`, `dotnet-user-not-permitted.png` (reason: byte-identical to the shared express images; `response` key and "You are (not) authorized to create a post" messages do not match the C# handlers, which return `role_assignment` and "User is (not) permitted").
- `docs/quick-start/aspnet.mdx`: "The Permit SDK is initialized with the `PERMIT_API_KEY` ... and the `PDP_URL`" (reason: contradicts the code, which hardcodes `http://localhost:7766`; prose now describes actual behavior, code fix logged). Page title changed from "ASP.NET Application" to ".NET app" because the sample is an `HttpListener` console app, not ASP.NET Core; sidebar label in sidebars.js is still "ASP.NET" (coordinator may want to change it).
- `docs/quick-start/nextjs.mdx`: removed `/img/quick-start-guide/next-user-permitted.png` (reason: shows `{"secret":"User is permitted"}`, but the route handler returns `{"message":"You have passed the auth check"}`). Kept `next-register-user.png` and `next-user-not-permitted.png` (match the code).
- `docs/quick-start/nextjs.mdx`: open risk, not claimed on the page: whether the `permitio` SDK runs in Next.js middleware's default Edge runtime (reason: could not verify; see codefix_w5.md item 3c).
- `docs/quick-start/*` (all five): "Conclusion" sections removed (summary filler); "enterprise-grade", "robust", "high-performance", "secure, scalable" intro phrasing removed (unverifiable marketing).

### Batch u5 (`concepts/control-plane-and-data-plane.mdx` and related pages)

#### Removed or corrected

- `docs/concepts/control-plane-and-data-plane.mdx`: "The PDP's policy engine (OPA or Cedar)" (reason: the permitio/PDP Dockerfile bundles only the OPA binary; no Cedar agent in the image. Page now says the Edge PDP image bundles OPA, the OPAL client, and an API server.)
- `docs/concepts/multi-tenant-authorization.mdx`: "[Tenants are nested under environments](/manage-your-account/projects-and-env#working-with-the-permit-hierarchy)" (reason: anchor does not exist on the target page; replaced with a plain page link)
- `docs/concepts/multi-tenant-authorization.mdx`: "Use the selector at the top left to switch tenants, rename them, and create new ones." (reason: could not verify selector position or rename/create from docs; replaced with Directory screen and All Tenants wording from how-to/sync-users.mdx)
- `docs/concepts/oss-fallback.mdx`: "use Permit's SDKs in passthrough mode, talking directly to the policy engines in your PDPs" (reason: could not verify a "passthrough mode" in any SDK or doc)
- `docs/concepts/oss-fallback.mdx`: "We hope you stay" and external thenewstack open-core link (reason: tone; opinion link)
- `docs/concepts/pdp/cloud-pdp-benchmarks.mdx`: "Throughput scales near-linearly with concurrency — 10 concurrent requests yield roughly 10x throughput with minimal latency increase." (reason: contradicts the page's own methodology, which says throughput is the observed request rate, not capacity)
- `docs/concepts/pdp/cloud-pdp-benchmarks.mdx`: "P50 latency stays under 15 ms" and "suitable for latency-sensitive applications" (reason: restated from the tables as average P50 at or under 12 ms and average P99 under 50 ms; suitability claim unsupported)
- `docs/concepts/pdp/cloud-pdp-capabilities.mdx`: AuthZen paths "POST /v1/access/evaluation", "/v1/access/evaluations", "/v1/subjects", "/v1/resources", "/v1/actions" (reason: contradicts permitio/PDP pdp-server/src/api/authzen/mod.rs, which routes /access/v1/evaluation, /access/v1/evaluations, /access/v1/search/subject, /access/v1/search/resource, /access/v1/search/action; the rate-limit table already used the correct paths)
- `docs/concepts/pdp/cloud-pdp-capabilities.mdx`: "High throughput & data volume – Optimized for large-scale policy checks" and "designed for high data volume and high throughput" (reason: unqualified, and in tension with per-IP rate limits of 200-3000 req/min)
- `docs/concepts/pdp/cloud-pdp-capabilities.mdx`: "Any dashboards, filters, or exports you rely on today continue to work." (reason: could not verify; dated wording)
- `docs/concepts/pdp/cloud-pdp-capabilities.mdx`: support link "https://permit.io/support" (reason: replaced with support@permit.io, used elsewhere in docs)
- `docs/concepts/pdp/cloud-pdp-capabilities.mdx`: container PDP rate limiting "Your responsibility to configure if needed" (reason: no rate-limit layer in the PDP router; now "None built in")
- `docs/concepts/pdp/configuration.mdx`: "minor versions (e.g., 1.2.3 to 1.2.4)" (reason: that is a patch release per SemVer)
- `docs/concepts/pdp/configuration.mdx`: PDP_PORT "Default: 7766" (reason: Dockerfile sets ENV PDP_PORT=7000 and EXPOSE 7000; 7766 is only the binary default and the usual host-side mapping)
- `docs/concepts/pdp/configuration.mdx`: PDP_HORIZON_PORT "use UVICORN_PORT for PDP versions prior to v0.9.0" (reason: copy-paste from PDP_PORT)
- `docs/concepts/pdp/configuration.mdx`: PDP_BACKEND_SERVICE_URL "Default: https://api.permit.io/v2" (reason: horizon/config.py default is {CONTROL_PLANE}/v1)
- `docs/concepts/pdp/configuration.mdx`: PDP_OPA_DECISION_LOG_INGRESS_ROUTE "Default: /v2/decision-logs/ingress" (reason: horizon/config.py default is /v1/decision_logs/ingress)
- `docs/concepts/pdp/configuration.mdx`: PDP_OPA_DECISION_LOG_INGRESS_BACKEND_TIER_URL "Default: https://decision-log-ingress.api.permit.io" (reason: source default is None; value comes from the control plane)
- `docs/concepts/pdp/configuration.mdx`: PDP_CONTROL_PLANE_PDP_DELTAS_API "https://pdp-deltas.api.permit.io", PDP_CONTROL_PLANE_RELAY_API "https://opal-relay.api.permit.io", PDP_CONTROL_PLANE_RELAY_JWT_TIER "https://relay-jwt.api.permit.io" (reason: could not verify; source defaults are localhost and the PDP receives remote config from the control plane. Now "controlled by Permit".)
- `docs/concepts/pdp/configuration.mdx`: OPAL_SERVER_URL "Default: https://opal-v2.permit.io" and OPAL_SERVER_WS_URL "wss://opal-v2.permit.io" (reason: Dockerfile sets https://opal.permit.io; value is controlled by Permit. WS URL is derived from OPAL_SERVER_URL in opal_client/config.py)
- `docs/concepts/pdp/configuration.mdx`: OPAL_INLINE_OPA_LOG_FORMAT "Default: none" (reason: Dockerfile sets OPAL_INLINE_OPA_LOG_FORMAT="http")
- `docs/concepts/pdp/configuration.mdx`: OPAL_FETCHING_CALLBACK_TIMEOUT "Default: 60" (reason: opal_common/config.py default is 10)
- `docs/concepts/pdp/configuration.mdx`: PDP_USE_NEW_AUTHORIZED_USERS "This feature is controlled by the control plane." (reason: could not verify)
- `docs/concepts/pdp/configuration.mdx`: OPA_DECISION_LOG_ENABLED reference missing the PDP_ prefix (corrected)
- `docs/concepts/pdp/configuration.mdx`: link anchor "/integrations/database-access-control/trino-integration#pdp-trino-config-file" (reason: anchor does not exist on the target page; linked to the page)

#### Kept but not verifiable from source (owner to confirm)

- `docs/concepts/pdp/configuration.mdx`: "_Added in PDP v0.9.0_" notes on PDP_PORT, PDP_USE_NEW_AUTHORIZED_USERS, PDP_OPA_URL, cache and Horizon variables, and "_Added in PDP v0.9.4_" on ALL_PROXY (reason: no changelog in permitio/PDP; the variables exist in current source)
- `docs/concepts/pdp/configuration.mdx`: PDP_OPA_CLIENT_QUERY_TIMEOUT "0.9.0 and later: 0 means 0 seconds" (reason: Python config confirms "0 means no timeout" for the old server; Rust behavior for 0 not traced)
- `docs/concepts/pdp/configuration.mdx`: UVICORN_NUM_WORKERS (default 1) and GUNICORN_TIMEOUT (default 600) (reason: current PDP starts Horizon with `python -m uvicorn` and no worker or Gunicorn flags (pdp-server/src/state.rs), so these no longer apply; moved under "Settings for PDP versions before v0.9.0", and the pre-0.9 defaults could not be verified)
- `docs/concepts/pdp/configuration.mdx`: ALL_PROXY "proxy must support HTTP/2 and WebSocket connections" and "TLS in TLS is not supported" (reason: not traced in source)
- `docs/concepts/pdp/cloud-pdp-capabilities.mdx`: Cloud PDP rate-limit table values, "ABAC not supported", "custom policy as code not supported", Cloud PDP decision logs "same format" (reason: Cloud PDP service config is not public; consistent with concepts/pdp/overview.mdx)
- `docs/concepts/deployment-options.mdx`: full on-premise "delivered as Kubernetes Helm charts" and light on-premise flow (reason: consistent with diagrams and on-prem docs; not traced in source)

### Batch w6 (`how-to/use-audit-logs` and related pages)

- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "This feature is currently available to whitelisted organizations only!" and "add you to our VIP whitelist" (reason: could not verify in the API spec or permit-cli source; the endpoint is public in https://api.permit.io/v2/openapi.json; owner should confirm availability)
- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "Maximum replay duration: 30 days" (reason: could not verify; not in AuditLogReplayRequest schema)
- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "Maximum concurrency: 10 (contact support for higher limits)" (reason: API spec contradicts itself: concurrency_limit says "max: 5" with default 10)
- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "Maximum timeout for a session is 60 seconds" (reason: could not verify; spec only has graceful_shutdown_s, "Graceful shutdown time in seconds", default 60)
- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "Replay requests may be throttled based on your plan" (reason: could not verify)
- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "Certain audit log types may not be replayable (Authorized-users, Bulk check, etc.)" (reason: could not verify)
- `docs/how-to/use-audit-logs/audit-log-replay.mdx`: "`graceful_shutdown_s` | object (optional) | Additional filters to apply to audit logs before replay" and `start_time` type "string" (reason: contradicts API spec: integer, graceful shutdown seconds)
- `docs/how-to/use-audit-logs/types-and-filtering.mdx`: "Max number of results for this api is 10,000" (reason: could not verify; replaced with the List audit logs spec page size of 100; removed by the interrupted agent)
- `docs/how-to/use-audit-logs/types-and-filtering.mdx`: Trust Center ProductOverviewLink (reason: unrelated to audit logs; removed by the interrupted agent)
- `docs/how-to/use-audit-logs/logs-forwarder.mdx`: "Fluent Bit is a lightweight, and highly scalable logging and metrics processor... CNCF graduated project" (reason: marketing, not needed for the task)
- `docs/how-to/use-audit-logs/logs-forwarder.mdx`: unused video imports removed (not a claim; noted for the build)
- `docs/how-to/permit-cli/permit-cli.mdx`: "The Permit CLI is now available only via npm" (reason: stale dated wording)
- `docs/how-to/permit-cli/permit-cli.mdx`: "built with Pastel, using TypeScript and a React-style architecture. Contributions welcome!" (reason: contributor detail, not reader task)
- `docs/how-to/permit-cli/permit-cli.mdx`: index linked `permit opa policy` to the GitOps page (reason: contradicts content; command is documented on permit-cli-policy#opa-policy)
- `docs/how-to/permit-cli/permit-cli-pdp.mdx`: "`--pdpurl` ... (`default: http://localhost:7676`)" (reason: contradicts source/hooks/useClient.ts: pdp check defaults to getCloudPdpUrl(), the Cloud PDP)
- `docs/how-to/permit-cli/permit-cli-pdp.mdx`: check-url "`--pdp-url` ... (default: Cloud PDP)" (reason: contradicts source/commands/pdp/check-url.tsx: default http://localhost:7766)
- `docs/how-to/permit-cli/permit-cli-pdp.mdx`: attribute format "key1=value1,key2=value2" and flag "-resource-attributes" (reason: contradicts source/utils/attributes.ts, which splits on ":"; flag is --resource-attributes)
- `docs/how-to/permit-cli/permit-cli-pdp.mdx`: "display the container ID and name" (reason: could not verify; source prints "The PDP is running on port 7766")
- `docs/how-to/permit-cli/permit-cli-envs.mdx`: `permit env member --role <Owner | Editor | Member>` (reason: contradicts source/commands/env/member.tsx enum admin/write/read)
- `docs/how-to/permit-cli/permit-cli-envs.mdx`: `--api-key` listed as Required for env copy, env member, env select (reason: contradicts source: optional, CLI prompts or signs in)
- `docs/how-to/permit-cli/permit-cli-envs.mdx`: `--environment-id` flag for env delete (reason: contradicts source: envId -> --env-id)
- `docs/how-to/permit-cli/permit-cli-envs.mdx`: env create "--env-key will be derived from name if not provided" and custom branch "default is set to the environment ID" (reason: could not verify in source)
- `docs/how-to/permit-cli/permit-cli-envs.mdx`: "enable secure blue-green deployment" (reason: marketing, unverified property)
- `docs/how-to/permit-cli/permit-cli-gitops.mdx`: "--inactive <boolean> ... (Required) ... set the environment to inactive after configuring GitOps (default:false)" (reason: contradicts source: optional boolean, "Do not activate the repository When Validated")
- `docs/how-to/permit-cli/permit-cli-gitops.mdx`: "Use the CLI to modify and fine-tune Open Policy Agent (OPA) Rego policies while maintaining system stability" (reason: no CLI command does this; empty section replaced with links to custom_policy and permit opa policy)
- `docs/how-to/permit-cli/permit-cli-policy.mdx`: "Check this repo for a good [example](https://github.com/daveads/openapispec)" (reason: personal GitHub repo presented as official example; the same URL remains inside a code block, see codefix_w6.md)
- `docs/how-to/permit-cli/permit-cli-policy.mdx`: "`-x-permit` extensions" (reason: contradicts the extension names, which start with x-permit)
- `docs/how-to/permit-cli/permit-cli-api.mdx`: flags `--first_name`, `--last_name`, alias `user-id`, `--attributes <object>` (reason: contradicts source/commands/api/sync/user.tsx: --first-name, --last-name, alias userId, repeated key:value strings)
- `docs/how-to/permit-cli/permit-cli-api.mdx`: create proxy "`--key` - a unique ID by which Permit will identify the user for permission checks" (reason: contradicts source: "Unique key identifying the proxy config")
- `docs/how-to/permit-cli/permit-cli-api.mdx`: "Simplifies the usage of Permit's API, allowing you to perform most API actions directly through the CLI" (reason: overstated; the CLI covers a few endpoints)
- `docs/how-to/permit-cli/permit-cli-test.mdx`: run audit "`--api-key` - API Key to be used for test generation" (reason: copy error; the key reads audit logs)

### Batch u6 (`how-to/deploy` and related pages)

#### Health endpoint and port conflict (resolved)
Source: permitio/PDP `pdp-server/src/api/health/handlers.rs` routes `/health`, `/ready`, `/healthy` to the same `check_all_health` (Horizon direct check + OPA `/health`; 200 `"status":"ok"` or 503 `"status":"error"`). Routes are outside the API-key middleware (`pdp-server/src/api/mod.rs`). Dockerfile sets `PDP_PORT=7000` (binary default 7766 is overridden in the image). Canonical statement now lives in `docs/how-to/deploy/deploy-to-production.mdx#pdp-health-check-endpoints`; other pages link there. Note: `docs/how-to/deploy/on-prem/pdp-deployment.mdx` (not in this batch) uses `/health` on 7766 via the service, which is consistent with this.

#### Removed or changed claims
- `docs/how-to/deploy/deploy-to-production.mdx`: "PDP will listen on port 7766 by default" (reason: contradicts Dockerfile `ENV PDP_PORT=7000`; container listens on 7000, examples map host 7766). Rewritten.
- `docs/how-to/deploy/deploy-to-production.mdx`: "zero-latency, great performance, high availability, and improved security" (reason: style guide; replaced with the no-network-round-trip mechanism).
- `docs/how-to/deploy/overview.mdx`: "Custom Hosted PDP deployments ... are available to enterprise tier customers" (reason: plan-tier claim could not verify; kept contact route to support@permit.io and https://www.permit.io/demo, dropped tier).
- `docs/how-to/deploy/overview.mdx`: personal link "https://calendly.com/permitio/" (reason: style guide; replaced with https://www.permit.io/demo).
- `docs/how-to/deploy/overview.mdx`: "zero-latency between your application and the PDP" and "improved ... security (no dependency on other clouds)" (reason: style guide; replaced with "no network latency" over loopback for sidecar, per owner decision, and availability when Permit's cloud is unreachable).
- `docs/how-to/deploy/overview.mdx`: "Managed Cloud PDP" (reason: glossary; now "Cloud PDP").
- `docs/how-to/deploy/cloud-hosts/kubernetes-raw.mdx`: liveness `/health` "returns 503 when the PDP failure rate exceeds the configured threshold", readiness `/healthy` "503 if the Policy Engine's latest policy update fails", startup `/ready` "200 once the Policy Engine has finished loading the policy from the policy store (Git repository)" (reason: contradicts PDP source; all three paths on port 7000 are aliases of the same combined check).
- `docs/how-to/deploy/cloud-hosts/kubernetes-raw.mdx`: env vars `PDP_OPA_CLIENT_FAILURE_THRESHOLD_PERCENTAGE` (10%) and `PDP_OPA_CLIENT_FAILURE_THRESHOLD_INTERVAL` (60s) as configuring the liveness probe (reason: the real variable name is `PDP_OPA_CLIENT_FAILURE_THRESHOLD` (default 0.1) per `horizon/config.py`, and it drives Horizon's internal `/health` on port 7001, not the `/health` served on port 7000; removed).
- `docs/how-to/deploy/cloud-hosts/kubernetes-raw.mdx`: service name "`permit-pdp.<Your Namespace>.svc.cluster.local`" (reason: contradicts `kubernetes/service.yaml` in permit-pdp-deployments-examples, which names the Service `permitio-pdp` on port 80). Prose now says `permitio-pdp`.
- `docs/how-to/deploy/cloud-hosts/gcp-cloud-run.mdx`: "We shared the YAML file that we used" implying the repo file equals the page YAML (reason: repo `gcp/cloud-run.yaml` differs: service `pdpd`, maxScale 100, API key as plain value). Now described as an older variant.
- `docs/how-to/deploy/cloud-hosts/gcp-cloud-run.mdx`: "`watchdog: error` is expected in Cloud Run due to how Cloud Run handles background processes" (reason: cause could not verify; replaced with the verified fact that Horizon reports `ok` when the direct check succeeds regardless of watchdog, per `checkers.rs`).
- `docs/how-to/deploy/cloud-hosts/gcp-cloud-run.mdx`: "Use an Environment-level API key (not Project or Org key) for Cloud Run deployments" (reason: stated without cause; kept the recommendation with the verified reason that org/project keys need `PDP_ACTIVE_*` variables).
- `docs/how-to/deploy/cloud-hosts/gcp-cloud-run.mdx`: link "Get your API Key" pointed to `/api/api-with-cli` (reason: wrong owner page; now `/overview/get-api-key`).
- `docs/how-to/monitoring-pdps/monitoring-pdps.mdx`: "Data Updated: Last data update timestamp" (reason: contradicts the page's own screenshot, where the column is "DATA UPDATES" with counts 0 and 2; now described as a number without asserting its exact semantics).

#### Kept but not verifiable from source (owner to confirm)
- `docs/how-to/deploy/deploy-to-production.mdx`: "multiply the number of policy objects ... by 6 KB ... 100,000 users, 500,000 resource instances, and 100 tenants needs about 3.5 GB" (reason: could not verify; kept because it is operational sizing guidance with no replacement. Remove if the owner can't confirm.)
- `docs/how-to/deploy/deploy-to-production.mdx`: "CPU: about 200 millicores ... limit of at least 1000 millicores; Memory: about 512 MiB" (reason: not in source; Helm chart defaults are 256m CPU request, 512Mi memory request, 1Gi memory limit, which is close.)
- `docs/how-to/deploy/cloud-hosts/aws-ecs-fargate.mdx`: "Start with 1 vCPU" (reason: could not verify; the repo's example task definition uses 512 CPU units / 1024 MiB.)
- `docs/how-to/monitoring-pdps/monitoring-pdps.mdx`: "Read timeouts during consistent update requests / HTTP 500 during sync operations ... do not indicate disconnects ... typically client-side timeout configuration" and "most red PDPs in production are stopped PDPs" (reason: support guidance, not verifiable from PDP source; kept.)
- `docs/how-to/monitoring-pdps/monitoring-pdps.mdx`: navigation (organization sidebar > Monitoring > Pdps tab, filters) (reason: taken from the existing screenshot only; EAP UI.)

#### External example repo problems (affect Terraform and Pulumi pages)
- `docs/how-to/deploy/cloud-hosts/terraform.mdx` and `pulumi.mdx`: the permit-pdp-deployments-examples Terraform `main.tf` and Pulumi `__main__.py` install chart version 0.0.2 from `https://permitio.github.io/sidecar`, which returns 404. The chart (including 0.0.2) is served from `https://permitio.github.io/PDP`. Pages now tell the reader to change the repository URL. The example repo itself should be fixed.
- `docs/how-to/deploy/cloud-hosts/terraform.mdx`: example uses Helm provider 2.x `set {}` and `kubernetes {}` blocks with no version pin; Helm provider 3.0.0 (2025-06-18) changed these (terraform-provider-helm CHANGELOG). Page notes it.

### Batch u7 (`permit-mcp-gateway/index.mdx` and related pages)

- `docs/permit-mcp-gateway/index.mdx`: "get a secured gateway URL for any MCP server in under 5 minutes" (reason: hype, unverifiable time claim)
- `docs/permit-mcp-gateway/index.mdx`: "A Permit.io account (free tier available)" (reason: plan-tier claim, could not verify in docs; removed)
- `docs/permit-mcp-gateway/index.mdx`: "Advanced Features: enterprise capabilities and roadmap" (reason: roadmap wording not allowed; link text rewritten)
- `docs/permit-mcp-gateway/index.mdx`: "every Permit policy model and feature" (reason: overclaim; narrowed to RBAC, ABAC, ReBAC and next-call policy updates, verified in permit-integration.mdx)
- `docs/permit-mcp-gateway/quickstart.mdx`: "Get a secured MCP Gateway URL in under 5 minutes" (reason: hype, unverifiable)
- `docs/permit-mcp-gateway/quickstart.mdx`: "Add to `.cursor/mcp.json` (Cursor) or your VS Code MCP settings" with an `mcpServers` snippet (reason: contradicts VS Code docs, which use `.vscode/mcp.json` with a top-level `servers` key, https://code.visualstudio.com/docs/copilot/customization/mcp-servers; heading narrowed to Cursor, VS Code prose pointer added). Same change in guide.mdx.
- `docs/permit-mcp-gateway/quickstart.mdx`: "Ask your agent to perform an action ... and verify it works" (reason: vague verify; replaced with an activity-log check on the Agents detail page, verified in audit-logs.mdx "Platform UI: Activity Views")
- `docs/permit-mcp-gateway/guide.mdx`: "Quick Start: First Value in 5 Minutes" section (reason: hype and duplicate of the numbered steps; merged into the steps and verify sections)
- `docs/permit-mcp-gateway/guide.mdx`: "The gateway currently returns all tools in list_tools responses" (reason: dated wording "currently"; kept as stable behavior, matches architecture.mdx)
- `docs/permit-mcp-gateway/guide.mdx`: "Email OTP ... (6-digit code, 5-minute expiry)", SAML SP Entity ID and ACS URL values, full auth-method list details (reason: duplicate of authentication-methods.mdx; replaced with a short summary and link, not a claim problem)
- `docs/permit-mcp-gateway/overview.mdx`: "Enterprise adoption of AI agents is accelerating" (reason: unsupported generalization)
- `docs/permit-mcp-gateway/overview.mdx`: "you get the full power of Permit's policy engine" (reason: hype)
- `docs/permit-mcp-gateway/overview.mdx`: "Minutes to first value" and "The fastest way to get started" (reason: hype)
- `docs/permit-mcp-gateway/overview.mdx`: "Hosted (SaaS) ... Available on all plans" and "The hosted deployment is available for all plans" (reason: plan-tier claim, could not verify)
- `docs/permit-mcp-gateway/overview.mdx`: "Local PDP: low-latency authorization decisions with no external network dependency" (reason: duplicate of enterprise-deployment.mdx and overstated for customer-controlled mode, which still syncs with the cloud control plane; removed with the duplicated deployment section)
- `docs/permit-mcp-gateway/overview.mdx`: "policies and users can be migrated between deployment models" (reason: owned by enterprise-deployment.mdx; removed here, not verified independently)
- `docs/permit-mcp-gateway/overview.mdx`: "Purpose-built for MCP" (reason: marketing phrasing)
- `docs/permit-mcp-gateway/overview.mdx`: "30-day inactivity / 90-day absolute" session expiry (kept: verified in consent-service.mdx "Session expiry" table; also in guide.mdx with a link)
- `docs/permit-mcp-gateway/overview.mdx`: "you may not need the gateway today, but it is designed to be adopted incrementally" (reason: soft marketing; rewritten as a plain statement)
- `docs/permit-mcp-gateway/overview.mdx`: "Azure AD" in comparison table renamed "Microsoft Entra ID" (reason: product rename)
- `docs/permit-mcp-gateway/overview.mdx`, `docs/permit-mcp-gateway/index.mdx`: Calendly demo link replaced by https://www.permit.io/demo

### Batch w7 (`how-to/deploy` and related pages)

Source used: private repo `permitio/permit-deployments` (branch main), files `on-prem/scripts/install-permit-platform.sh`, `on-prem/scripts/push-images-to-registry.sh`, `on-prem/internal-side.sh` (generates the package `values.yaml`), `on-prem/INTERNAL-README.md`, and chart templates `tls-secret.yaml`, `frontend-service.yaml`, `permit-services.yaml`, `policy-sync-validation.yaml`. Copies in `scratchpad/w7src/`.

#### Owner must confirm (installer behavior that conflicts with the docs)

- `docs/how-to/deploy/on-prem/installation.mdx`, `quick-start.mdx`: "(no flags) Deploy to production Kubernetes (EKS, GKE, AKS)" / targets-table row "None: Deploys to the cluster in your current kubectl context" (reason: contradicts install-permit-platform.sh. Only `--gke` sets `ENVIRONMENT=production`. With no target flag, `create_cluster()` runs `kind create cluster`, and `run_migrations()`/`deploy_platform()` read the backend tag with `docker exec permit-platform-on-prem-control-plane crictl images` unless OpenShift or GKE mode is set, so a no-flag run on EKS/AKS fails. Resolved in prose: the targets table documents `--gke` for any existing Kubernetes cluster, and a warning plus notes in both pages tell readers to add `--gke`. The code blocks that omit it are logged in codefix_w7.md (fixes 1, 4, 8). Owner decision: fix the script so no flag means production, as `--help` says, or accept the doc change.)
- `installation.mdx`, `quick-start.mdx`: Kind installs with an empty `imageRegistry` (reason: `configure_image_registry()` exits for every non-OpenShift target when `global.imageRegistry` is empty, including `--kind`, but the package ships `imageRegistry: ""` and INTERNAL-README's Kind test sets only `frontendDomain`. Docs now say the check applies to every target except OpenShift; the owner should confirm what Kind users set.)
- `installation.mdx`: `--gke` flag (reason: verified. The argument parser accepts `--gke` (sets `GKE_DEPLOYMENT=true`, `ENVIRONMENT=production`), but `show_help` does not list it. Kept, with a note that `--help` omits it.)

#### Removed or changed

- `installation.mdx`: "35 services total", "Deployments (35 total)", "Infrastructure Services (10 services)" listing 11, "Services (26 total)", "Found 35 images", "Loaded 12 platform images", "~35 images" (reason: contradict each other and INTERNAL-README, which lists 18 Permit images plus 6 third-party images and 33 pods in a healthy cluster. All counts removed; the page lists services by group from INTERNAL-README and tells readers to run `kubectl get deployments,services,pvc`.)
- `installation.mdx`: `permit-foaz-proxy` and `permit-proxy` in the deployment and service lists (reason: not in INTERNAL-README's service list or healthy-pod list. Removed.)
- `installation.mdx`: "PostgreSQL ... Storage: 20GB persistent volume", `thirdPartyServices.postgres.persistence.size: "20Gi"`, `postgres-pvc ... 10Gi`, "OpenSearch 15GB (3 shards default)" vs `opensearch-pvc 20Gi`, "Redis 5GB" (reason: contradict each other and the package values in internal-side.sh: postgres 40Gi, redis 15Gi, opensearch 20Gi, rabbitmq 5Gi, keycloak 5Gi, read replica 5Gi. Sizes removed; the page points to `thirdPartyServices.<service>.persistence.size` and adds the verified expand-only PVC warning from internal-side.sh and INTERNAL-README.)
- `prerequisites.mdx`: storage table with growth rates and "Total Production Storage: 51GB minimum" (reason: sizes stale per internal-side.sh, growth rates unverifiable. Removed; page points to values.yaml.)
- `installation.mdx`: `imageRegistry: ""  # Optional - Docker Hub if empty` (reason: contradicts configure_image_registry(), which exits for non-OpenShift targets when imageRegistry is empty. Removed; Step 4 now says pushing images to a registry is required except on OpenShift.)
- `installation.mdx`: "Policy Sync Issues (if configured)" and "permit-policy-sync-v2 ... Connects to your Git repository (if configured)" vs "Policy Sync configuration is mandatory" (reason: validate_frontend_domain() exits on CHANGEME_GIT_REPO_URL / CHANGEME_SSH_PRIVATE_KEY, and policy-sync-validation.yaml fails on empty values. Policy Sync is required; "if configured" removed, anchor kept.)
- `prerequisites.mdx`: "Git repository setup is mandatory" followed by "If you want to enable Git-based policy synchronization" (reason: same as above; optional wording removed.)
- `installation.mdx`: step timings "(1-2 minutes)", "(3-5 minutes)", "8-15 minutes"; `quick-start.mdx` description "5-10 minutes", body "10-15 minutes", "just a few minutes"; `landing.mdx` "Get running in 10-15 minutes"; push "10-20 minutes", "~12GB upload", "~12GB required in GAR" (reason: contradict each other and INTERNAL-README's ~6GB package; no source. Removed.)
- `installation.mdx`: "As of January 2026, the Helm chart includes built-in support for global.imagePullSecrets" (reason: dated wording. `imagePullSecrets` verified in the generated values.yaml; stated in present tense.)
- `installation.mdx`: "Pushes both the original tag and :latest tag to your registry" (reason: contradicts push-images-to-registry.sh, which pushes only `<registry>/<tar-basename>:<original-tag>`. Rewritten.)
- `installation.mdx`: "For non-GKE registries ... manually update the imageRegistry field" (reason: contradicts push-images-to-registry.sh, which rewrites imageRegistry for any registry. Rewritten.)
- `installation.mdx`, `prerequisites.mdx`: "--gke ... Installs nginx-ingress-controller (if not present)", "The installer will set this up automatically with --gke flag", "Creates a Google Cloud Load Balancer automatically" (reason: contradicts install_ingress_controller(), which installs NGINX only for Kind. Prerequisites now say to install an ingress controller; the chart default `ingress.className: "nginx"` is verified.)
- `installation.mdx`, `prerequisites.mdx`: "Compatible with both GKE Standard and Autopilot" (reason: could not verify; the installer grants anyuid-style root containers on OpenShift and runs database containers as root, which Autopilot may restrict. Removed.)
- `installation.mdx`: "Error Handling and Recovery": "Automatically rolls back to previous state", "Cleans up partial image loads", "Reverts ingress changes", "Database connection - Retries every 30 seconds for 5 minutes", "Pod startup timeouts - Waits up to 10 minutes" (reason: not found in install-permit-platform.sh; retries exist only for docker load/push. Removed.)
- `installation.mdx`: "Network connectivity - Tests Docker registry access", "Storage requirements - Checks available disk space", "RBAC configuration - Sets up service accounts" in pre-install validation (reason: check_prerequisites() only checks tools and `kubectl cluster-info`. Removed; the run summary follows main().)
- `installation.mdx`: "Once generated, these passwords are stored in Kubernetes secrets and automatically reused" (reason: verified in generate_infrastructure_passwords() and INTERNAL-README. Kept in shorter form. Added verified fact that the passwords are written into values.yaml, with a warning.)
- `installation.mdx`: "Image Management ... Handles registry authentication (automatically for ECR)" (reason: not in the script. Removed.)
- `installation.mdx`: "The connection is still encrypted and secure for internal use" (reason: a self-signed certificate encrypts but does not authenticate the server; "secure" is unqualified. Reworded.)
- `installation.mdx`: "Infrastructure Requirements by Target" (Requires docker for production K8s) (reason: check_prerequisites() requires only kubectl and helm for production and oc/kubectl/helm for OpenShift; docker is needed for Kind and for the push script. Moved to prerequisites with corrected tool lists.)
- `prerequisites.mdx`: "Current Deployment Resource Usage" (~1.2 cores, ~13GB RAM, 51GB, 26 internal services, "8 OPAL relay services", "Keycloak ~1.5GB, OpenSearch ~3.7GB", "permit-data-generator: 500m CPU each") and "Service Categories (35 total services)" (reason: unverifiable snapshot numbers that contradict INTERNAL-README counts. Removed.)
- `prerequisites.mdx`: "Why This Complexity?" bullets ("Sub-millisecond policy decisions with distributed caching", "Supports millions of authorization requests per day", "Multi-tenancy", "SCIM integration, webhooks, advanced analytics") (reason: marketing, not prerequisites; performance figures are about PDPs, not the control plane install. Removed.)
- `prerequisites.mdx`: "Small teams (50-500 users)", "Large organizations (1000+ users)" (reason: no source. Removed.)
- `prerequisites.mdx`: "Multi-Node Cluster (3-4 nodes)" vs table "4+ nodes" (reason: internal contradiction; kept "4 or more" to match the table and the OpenShift section.)
- `prerequisites.mdx`: "Version: OpenShift 4.10+ on AWS" vs "OCP 4.8+" and "Red Hat OpenShift: 4.8+" (reason: internal contradiction; kept 4.8, which appears three times. Version minimums are not checked by the installer and remain unverified.)
- `prerequisites.mdx`: GKE node type "n1-standard-4 or e2-standard-4" vs "e2-standard-8 (8 vCPU, 32GB) or larger" (reason: internal contradiction; replaced with a node-type table mapped to the two node sizes in the sizing table. Instance specs are public provider facts. `Standard_D4s_v3` added as the 4 vCPU/16 GB Azure equivalent.)
- `prerequisites.mdx`: `3128 Proxy Services`, "Database connections (3 instances)", "15+ internal API services" (reason: proxy not in INTERNAL-README; counts unverified. Removed.)
- `prerequisites.mdx`: "Expected Outputs" blocks with check marks (reason: not real command output. Removed; prose states the real expected results of `kubectl auth can-i` and `oc auth can-i`.)
- `prerequisites.mdx`: Google Container Registry (legacy) block and duplicate Artifact Registry creation block (reason: registry creation is owned by installation Step 4; GCR is Google's deprecated product. Removed.)
- `prerequisites.mdx`: duplicate OpenShift and Kubernetes validation blocks under "Cluster Access Requirements" (reason: repeated under "Pre-Installation Validation"; one copy kept.)
- `prerequisites.mdx`: TLS section with `--generate-tls`, custom certificate YAML, and `--skip-tls-check` blocks (reason: duplicates installation.mdx, which owns TLS. Replaced with a decision list and link.)
- `prerequisites.mdx`: "The installer is designed to be self-contained and handles most setup automatically" (reason: vague; replaced with a requirements table.)
- `prerequisites.mdx`: "Without write access ..." rationale for deploy-key write access (reason: write access kept from the original; the reason Policy Sync needs it was not traced in source.)
- `landing.mdx`: "Encryption at Rest - PostgreSQL data encryption for policies and configurations", "Audit Logging - Complete decision logs", "enterprise-grade security", "Enhanced security", "RBAC & IAM - Role-based access control via integrated Keycloak" (reason: no source for encryption at rest; hype. Replaced with a table of controls verified in the installer: TLS options, generated credentials, Keycloak sign-in, SSH deploy key, PDP API key, namespace.)
- `landing.mdx`: "Backend Services ... (~20+ microservices)" (reason: contradicts counts elsewhere. Removed.)
- `landing.mdx`: "Air-gapped installation - No internet connection required post-setup", "High availability - Multiple replicas for critical services" (reason: air-gapped verified by image tars in the package (INTERNAL-README), kept; note that on Kind the NGINX ingress images are downloaded separately. HA replicas not verified; removed.)
- `landing.mdx`, `installation.mdx`: added verified warning that OpenSearch Dashboards at `/opensearch/` has no authentication (source: installer completion output "no authentication required").
- `quick-start.mdx`: added step "Push the images to your registry" as required for non-OpenShift targets (source: configure_image_registry()).
- `quick-start.mdx`: added danger admonition that `kubectl delete namespace permit-platform` deletes the PVCs (Kubernetes behavior; data loss depends on reclaim policy).

#### Code blocks removed (duplicates, illustrations of internals, or fabricated output)

installation.mdx: pseudo "Script commands" (grep/which), image list, `openssl rand -hex 16` secret generation (script uses `openssl rand -base64`), `alembic upgrade head` migration commands, service discovery map, "Configuration Files the Script Uses" values block, `kubectl get deployments/services/secrets/pvc` sample outputs, "Detailed Logging" sample, `docker pull .../hello-world || echo "Authentication configured"` (always prints success), per-flag "What it does" blocks for default/OpenShift/GKE/Kind/generate-tls/skip-tls-check/skip-openshift-registry/namespace/dry-run/skip-images (replaced by verified tables; the GKE and default blocks had wrong comments), stale `--help` output (missing `--yes`), fabricated "Installation Output" log, frontend URL block, scaling and storage blocks (owned by management.mdx).
quick-start.mdx: `kubectl create secret docker-registry` block (owned by installation.mdx, linked).
prerequisites.mdx: listed above.

### Batch u8 (`permit-mcp-gateway/advanced-features.mdx` and related pages)

#### Removed internal admonition (advanced-features.mdx)
- `docs/permit-mcp-gateway/advanced-features.mdx`: removed the published internal admonition "Items flagged on the marketing site but not yet detailed in documentation". Each item it listed, for owner review:
  - `docs/permit-mcp-gateway/advanced-features.mdx`: "Sub-millisecond authorization decisions" for the gateway (reason: not owner-confirmed for the gateway; the confirmed sub-millisecond figure is for the PDP and the page did not tie it to the PDP; the marketing enterprise page says "High-performance PDP, sub-10ms"). Removed.
  - `docs/permit-mcp-gateway/advanced-features.mdx`: "Anomaly detection ... under development as part of session monitoring" (reason: roadmap, could not verify). Removed.
  - `docs/permit-mcp-gateway/advanced-features.mdx`: "Shadow agent detection ... an area of active research" (reason: roadmap, could not verify; the marketing site lists "IGA / PAM Connectors for Shadow MCP"). Removed.

#### Availability and maturity (advanced-features.mdx)
- `docs/permit-mcp-gateway/advanced-features.mdx`: "Agent Interrogation is under active development ... being refined", and the Maturity notes for Agent Verification, Session Monitoring, and Intent-Based Access Control ("early access", "active development", "emerging", "roadmap") (reason: roadmap/dated wording, could not verify). Replaced with "Contact Permit" in the availability table (anchor `#feature-maturity-summary` kept).
- `docs/permit-mcp-gateway/advanced-features.mdx`: Enterprise-plan status of Agent Interrogation, Agent Verification, Session Monitoring, Permission Receipts, Intent-Based Access Control (reason: could not verify; permit.io/mcp-gateway/pricing lists only HITL approvals and configurable consent windows as Enterprise). HITL and Time-Limited Consent Enterprise status verified there.
- `docs/permit-mcp-gateway/advanced-features.mdx`: behavior kept but unverified against source: the three parts of the composite identity, drift-triggered reactions (downgrade trust, re-consent, block, approval), step-up consent, declared-intent logging, drift history, per-workflow policy, exportable permission receipts, session monitoring intent comparison (reason: could not verify; gateway source search hit the GitHub rate limit; only `identify_self`, fingerprinting, and drift monitoring are confirmed on the marketing site and in the egress proxy security page). Owner to confirm these ship.
- `docs/permit-mcp-gateway/advanced-features.mdx`: Calendly links replaced with https://www.permit.io/demo; "Contact us" mailto links in maturity notes removed.

#### Cross-page conflicts (not resolved)
- `docs/permit-mcp-gateway/managing-humans-and-agents.mdx`: "The same person using multiple MCP clients creates separate agent identities" vs "if both Alice and Bob use Cursor ... the same Cursor agent identity may have roles on both user_profile:alice and user_profile:bob" (reason: page contradicts itself; architecture.mdx shows each client gets a `client_id` via dynamic client registration and sessions keyed by client_id + subject, but no page says whether two humans' Cursor installs share a client_id). Admonition reworded to "If the same agent identity is authorized by two humans, it holds a role on each profile", without claiming two Cursor installs share one identity. Owner to confirm.
- `docs/permit-mcp-gateway/platform.mdx`: "Revoking access terminates any active sessions for that user on the affected MCP server" (reason: contradicts managing-humans-and-agents.mdx "removes the profile-to-server relation"; consent-service.mdx says revocation "immediately invalidates the session"). Both pages now say only that the agents' next tool call to that server is denied; managing-humans keeps the relation-removal mechanism, which matches permit-integration.mdx. Owner to confirm whether sessions are also terminated.
- `docs/permit-mcp-gateway/demos/n8n-linear-mcp-gateway.mdx`: "you will be asked to import and assign trust levels for all of Linear's tools" (reason: contradicts consent-service.mdx, which describes a single trust level slider with Allowed/Denied badges). Reworded to "shows Linear's tools with their trust levels, and you set the trust granted to the n8n workflow" with a link to Consent Service. Screenshot tool-import.png kept; owner should check it matches the consent screen.
- `docs/permit-mcp-gateway/demos/n8n-linear-mcp-gateway.mdx`: "go to the Permit MCP Gateway dashboard and toggle the trust level" (reason: location unspecified; now links to Modifying agent trust levels on the Agents page, an inference from managing-humans-and-agents.mdx). Owner to confirm the screenshots show that page.
- `docs/permit-mcp-gateway/demos/linear-mcp-gateway.mdx`: "restricting a Project Manager to read-only access" (reason: contradicts steps, which give the PM Medium trust and list_issues set to Medium). Description aligned with the steps. The click path "Dashboard > Hosts > Create Host" differs from host-setup "Dashboard > Create Host"; kept to match the screenshot.
- `docs/permit-mcp-gateway/host-setup.mdx`: Cursor and Claude Desktop snippets use `npx mcp-remote` while quickstart.mdx uses a `url` key (reason: cross-page conflict from the audit; quickstart is not assigned to this batch). host-setup now explains mcp-remote, matching guide.mdx.

#### Removed or reworded claims
- `docs/permit-mcp-gateway/host-setup.mdx`: "You can evaluate with the hosted gateway and migrate seamlessly when ready" (reason: "seamlessly" unverifiable). Kept "You can evaluate with the hosted gateway first."
- `docs/permit-mcp-gateway/host-setup.mdx`: rollout phase durations ("1–2 weeks", "2–4 weeks") kept but labeled as suggestions (reason: guidance, not product fact).
- `docs/permit-mcp-gateway/human-in-the-loop.mdx`: Calendly "Schedule a demo" link replaced with https://www.permit.io/demo.
- `docs/permit-mcp-gateway/human-in-the-loop.mdx`: keyboard shortcuts, card border colors, "Extend +5 min" in the last 60 seconds, preset rejection reasons (reason: could not verify against source due to the GitHub rate limit; kept as volatile UI facts).

#### Media removed (duplicates; the owning page keeps them)
- `docs/permit-mcp-gateway/platform.mdx`: create-host.png, create-host-environment.png, import-mcp-connect.png, import-mcp-review.png (reason: host creation and import procedures moved to host-setup.mdx, which keeps the same screenshots).
- `docs/permit-mcp-gateway/host-setup.mdx`: human-detail.png in the grant-access step (reason: granting access now links to managing-humans-and-agents.mdx, which keeps the screenshot).

### Batch w8 (`how-to/deploy` and related pages)

Sources used for verification: permitio/permit-deployments `on-prem/scripts/install-permit-platform.sh` and `on-prem/charts/permit-platform/templates/*` (copies in `scratchpad/w8src/`), permitio/PDP `charts/pdp/{values.yaml,templates/*}` and `pdp-server/src/opa_client/allowed.rs`. The chart's `values.yaml` isn't in permitio/permit-deployments (404), so default values can't be verified.

#### Resolved conflicts

- Admin password secret: the installer reads `global-infrastructure-secret` key `KEYCLOAK_ADMIN_PASSWORD` first and falls back to `keycloak-admin-secret` key `password` (install.sh lines 257-265). management.mdx and troubleshooting.mdx now say this; troubleshooting code blocks still read `keycloak-admin-secret` (code fix logged).
- `global.postgres` vs `thirdPartyServices.postgres`: both are real. `global.postgres` feeds connection strings (global-infrastructure-secret.yaml); `thirdPartyServices.postgres` configures the deployment (persistence.size, config). Explained in reference.mdx.
- `ingress.tls.certificateFiles`: verified (tls-secret.yaml reads certFile/keyFile via `.Files.Get`). Inline `certificate.cert/key` are written raw into `data` (must be base64). Documented in reference.mdx.
- `backup`/`restore` (`s3://` storageLocation), `autoscaling`, `pgBouncer`, `monitoring`, `networkPolicy`, `resourceQuota`, top-level `securityContext.runAsNonRoot`, `migrations.runOnInstall/runOnUpgrade`: no chart template reads them. reference.mdx now says they have no effect (code blocks kept; removal logged in codefix_w8.md).
- Duplicate "Configuration Management" H2s in management.mdx: resolved; second one is H3 "Inspect the running configuration" with id `configuration-management-1`.
- Uninstall and support bundle blocks moved byte-identical from reference.mdx to management.mdx (codeguard reports them as moved across files); reference.mdx links to the owner sections.

#### Removed or unverified claims

- `docs/how-to/deploy/on-prem/change-organization-tier.mdx`: "As of the latest version, the on-premise installer automatically sets all organizations to Enterprise tier" (reason: undated; replaced with the verified migrations-job behavior and its log lines from migrations.yaml).
- `docs/how-to/deploy/on-prem/change-organization-tier.mdx`: Before/After UI strings "PRO" badge and "14 days left in Pro Trial" (reason: could not verify frontend strings).
- `docs/how-to/deploy/on-prem/change-organization-tier.mdx`: "`billing_tier` controls ... Upgrade prompts" (reason: could not verify).
- `docs/how-to/deploy/on-prem/troubleshooting.mdx`: "Our support team has experience with all major Kubernetes platforms and can assist with advanced troubleshooting scenarios" (reason: marketing, unverifiable).
- `docs/how-to/deploy/on-prem/management.mdx`, `troubleshooting.mdx`, `reference.mdx`: "35 Permit services" / "(all 35 Permit services)" in code comments kept byte-identical; prose no longer states a count (reason: could not verify count; installation page used other figures).
- `docs/how-to/deploy/on-prem/reference.mdx`: storage sizes "10Gi Minimum, 20Gi+ for production" (postgres), "15Gi Minimum for 3 shards" (opensearch), and image tags `opal-server 0.7.5-rc.7`, `keycloak 20.0.5`, `opensearch 2.11.0`, `postgres_15-alpine`, `rabbitmq_3.12.10` (reason: chart values.yaml not available to verify; kept inside code blocks as examples, prose says the package's values.yaml is the source of truth). management.mdx 50Gi/100Gi are labeled as examples.
- `docs/how-to/deploy/on-prem/reference.mdx`: `thirdPartyServices.keycloak.persistence.size` and `persistence.storageClass` (reason: not read; keycloak-postgres-pvc is fixed at 5Gi and no template sets storageClassName). Prose now says so.
- `docs/how-to/deploy/on-prem/reference.mdx`: `global.opensearch`, `global.keycloak.realm/clientId/clientSecret`, `permitServices.policySync.branch/syncInterval`, `permitServices.backend.env.LOG_LEVEL/ENABLE_MONITORING` (reason: not read by templates). Prose now says so.
- `docs/how-to/deploy/on-prem/management.mdx`, `troubleshooting.mdx`: `policy-sync-ssh-key` and `postgres-secret` secrets (reason: neither the chart nor the installer creates them; policy sync gets the key as the `POLICY_REPO_AUTH_PRIVATE_KEY` env var). Prose now says so.
- `docs/how-to/deploy/on-prem/management.mdx`: "Or register a new account" in the sign-in code block (reason: could not verify self-registration is enabled in the Keycloak realm; kept in code block).
- `docs/how-to/deploy/on-prem/management.mdx`: health URLs `/health`, `/scim/health`, `/api/v2/health` and backend `:8000/health` (reason: not verified against service routes; kept as in original).
- `docs/how-to/deploy/on-prem/pdp-deployment.mdx`: `PDP_LOG_LEVEL=DEBUG` env var example (reason: not found in permitio/PDP; prose points to `pdp.debug_mode=true`, which sets `PDP_DEBUG`, verified in charts/pdp/templates/deployment.yaml).
- `docs/how-to/deploy/on-prem/pdp-deployment.mdx`: "Look for successful connection messages to the control plane" (reason: exact log text not verified; replaced with a generic instruction to look for control plane or API key errors).

### Batch w9 (`permit-mcp-gateway/architecture.mdx` and related pages)

Source checked: internal repo permitio/agent-security (gateway/src, packages/policy-management, helm/agent-security, on-prem/CUSTOMER-README.md, helm/agent-security/examples/values-onprem.yaml) and permitio/PDP charts/pdp.

- `docs/permit-mcp-gateway/architecture.mdx`: "Permit MCP Gateway is available as a hosted gateway deployment" / Integration Patterns table with only "Hosted Gateway" (reason: contradicts enterprise-deployment.mdx and on-prem-installation.mdx; replaced with a three-model component table linking to enterprise-deployment#deployment-models)
- `docs/permit-mcp-gateway/architecture.mdx`: Data Flow mermaid diagram and protocol table with ports 8001, 8002, 3000, 8080, 6379, 5432 and "AWS ALB (TLS termination)" (reason: internal, hosted-infrastructure specific, volatile, not actionable for operators; replaced with a port-free "what moves" table; the mermaid code block was removed)
- `docs/permit-mcp-gateway/architecture.mdx`: rate-limit table "/api/auth/sign-in 100 req / 5 min, /api/auth/sign-up 100 req / 10 min, /oauth/register 100 req/min, /mcp 1000 req/min, writes 1200 req/min, all traffic 2000 req/min" (reason: could not verify; consent-service/src/app/api/oauth/register/route.ts says production limits are enforced by AWS WAF at the edge, which is not in the repo; volatile. Kept the per-IP behavior, the 429 JSON body (shape confirmed in platform/src/lib/permit/client.ts), and the NAT/support note)
- `docs/permit-mcp-gateway/architecture.mdx`: env var table `GATEWAY_JWT_TTL_SECONDS` (default 300, 60-3600) and `GATEWAY_JWT_REQUIRE_VAULT` (reason: verified in gateway/src/config.rs but not settable on the hosted gateway, and the on-prem Helm chart exposes the vault flag under a different key and does not wire the KMS vault (helm/agent-security/values.yaml comments); removed as internal. Default 5-minute lifetime kept)
- `docs/permit-mcp-gateway/architecture.mdx`: "When the token vault is enabled (`VAULT_ENABLED=true` + `AWS_KMS_KEY_ID`), the key is encrypted at rest using AES-256-GCM with AWS KMS envelope encryption; without vault it is stored as plaintext JSON" (reason: internal env vars and a storage detail the on-prem chart does not wire; removed)
- `docs/permit-mcp-gateway/architecture.mdx`: rotation procedure `redis-cli DEL gateway:jwt:signing_key` then `kubectl rollout restart deployment/gateway` (reason: deployment name is wrong for the on-prem chart (`agent-security-gateway`) and the step is not actionable for hosted customers; bash block removed, page now says contact your Permit team. 90-day warning, metric name `gateway_jwt_signing_key_age_seconds`, and kid behavior kept, verified in gateway/src/clients/gateway_jwt.rs and gateway/src/metrics.rs)
- `docs/permit-mcp-gateway/architecture.mdx`: "under 10 lines of meaningful code" (reason: filler; removed)
- `docs/permit-mcp-gateway/architecture.mdx`: "Adopting the gateway requires a single configuration change" and "Key Advantages" / "full power of Permit's policy engine" / "permissions-as-a-service" lists (reason: marketing, duplicated overview; removed)
- `docs/permit-mcp-gateway/architecture.mdx`: trust-level keyword lists (reason: kept, verified in packages/policy-management/src/heuristics/tool-trust.ts; clarified they are suggestions an admin can override and that high patterns are checked first)
- `docs/permit-mcp-gateway/architecture.mdx`: added "sends Cache-Control: public, max-age=300" (verified in gateway/src/routes/public/well_known/gateway_jwks.rs), MCP error -32004 (gateway/src/routes/public/mcp/errors.rs), list_tools returns all upstream tools and Agent Interrogation / HITL checks run in the call_tool chain (gateway/src/routes/public/mcp/handler.rs)
- `docs/permit-mcp-gateway/architecture.mdx`: customer-controlled model: whether the admin dashboard runs in the customer network (reason: could not verify; table says "Contact Permit for your deployment")
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Permit does not claim certification under specific compliance frameworks" (reason: contradicts owner-confirmed claims; replaced with "Permit.io is HIPAA compliant and SOC 2 Type II attested")
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Permit offers two enterprise deployment models" vs "supports three deployment models" (reason: internal contradiction; page now lists three models: hosted, customer-controlled, fully on-premises)
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "set up a hosted gateway in under 5 minutes" (reason: unverified number; removed)
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Schedule a demo" link to calendly.com/permit-io/demo (reason: style guide; changed to https://www.permit.io/demo)
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Agent Verification (early access)", "Session Monitoring (early access)", "Intent-Based Access Control (roadmap)" (reason: roadmap/dated wording and conflicts with advanced-features availability table ("Contact Permit"); replaced with a table that links to that availability table)
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Audit logs: Your infrastructure + Permit.io (configurable)" and "Policies and users can be migrated between deployment models" for customer-controlled (reason: kept from original, could not verify in source; owner should confirm)
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "you can migrate to customer-controlled deployment at any time" (reason: "at any time" unverifiable; softened to "Permit can help you move ... later")
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Resilience: authorization continues even if internet connectivity to Permit.io is temporarily interrupted" (reason: kept, reworded to the mechanism: the PDP keeps its last synced policy; behavior of OPAL-backed PDPs, not measured for the gateway)
- `docs/permit-mcp-gateway/enterprise-deployment.mdx`: "Join our Slack ... talk with ... other enterprise users" (reason: unverifiable audience claim; now "Ask questions in the Permit Slack community")
- `docs/permit-mcp-gateway/on-prem-installation.mdx`: "You should see 10 pods" with 2/2/2/2/1/1 (reason: kept, verified against helm/agent-security/examples/values-onprem.yaml (the installer's values.yaml per on-prem/internal-side.sh); now scoped to "the default on-premises values template")
- `docs/permit-mcp-gateway/on-prem-installation.mdx`: "Verify the gateway health endpoint" with `curl https://app.../api/health` (reason: the endpoint is the admin dashboard (platform) liveness route, platform/src/app/api/health/route.ts, not the gateway; prose relabeled, code unchanged)
- `docs/permit-mcp-gateway/on-prem-installation.mdx`: "Permit environment API key from the Permit Platform dashboard (Settings → API Keys)" (reason: UI path not verified for the self-hosted Permit Platform; replaced with a link to /overview/get-api-key)
- `docs/permit-mcp-gateway/on-prem-installation.mdx`: "Some DNS providers do not resolve wildcard records for their own apex" (reason: technically imprecise explanation; kept only the actionable check for an explicit app record)
- `docs/permit-mcp-gateway/on-prem-installation.mdx`: PDP service `permitio-pdp` on port 7766 (reason: kept and stated, verified in permitio/PDP charts/pdp/templates/service.yaml and values.yaml)

### Batch u9 (`api/working-with-abac` and related pages)

- `docs/api/working-with-abac/overview.mdx`: "we can now define Condition Set Rules that will be part of Condition Sets" (reason: contradicts the API spec; condition set rules are a separate object under `/v2/facts/{proj_id}/{env_id}/set_rules` that reference sets by key). Replaced with the correct relationship.
- `docs/api/working-with-abac/overview.mdx`: "Previously, you had to make a separate API call to get this information, however, currently with the new version of the API, you can directly pass in the verbose versions" (reason: dated wording; replaced with the spec fact that `proj_id`/`env_id` accept an ID or a key).
- `docs/api/working-with-abac/building-conditions.mdx`: "This example is invalid because we specify the user.age to be between 15 and 18, but then set another condition to test for the age being greater than 48. This will throw an Unbound Error." (reason: contradicts source; `{"or": [{"user.age": ...}, {"user.age": ...}]}` validates as `OperatorOr[BooleanExpression]` of `AttributeCondition`s in permit-backend `schemas/conditions.py`; the prose said 48 while the code says 40). The section is relabeled as a valid same-attribute example; anchor `#invalid-1` kept.
- `docs/api/working-with-abac/building-conditions.mdx`: "not" example "A user with the Editor role can only request changed to the document ... will be reflected as: An Editor can request changes to the document and any other available resources." (reason: incoherent, does not describe logical negation). Replaced with a plain negation example.
- `docs/api/working-with-abac/building-conditions.mdx` (risk to confirm, samples kept): the examples use `subject.*` and `environment.*` attribute prefixes. `ConditionsBlockSchema` accepts them (`AttributeObjectType` includes subject and environment), but `ConditionSet._sanitize_condition` in permit-backend `schemas/condition_set.py` only accepts `user.`, `resource.`, `tenant.`, `context.`, and `role.` and raises "Invalid comparison key" otherwise during policy generation. A condition set saved with `subject.paying` or `environment.location` may fail when the policy is generated. Owner should confirm and consider switching the samples to `user.` / `context.`.
- `docs/api/working-with-abac/condition-sets.mdx`: "There are currently two types of condition sets" (reason: dated wording; "currently" removed, the two types are the spec enum `userset`/`resourceset`).
- `docs/api/working-with-abac/operators.mdx`: "For example, if you want to check if the user's email is equal to the user's first name, you can use the following condition" (reason: contradicts the sample, which uses `contains`). Prose now says "contains".
- `docs/api/working-with-abac/operators.mdx`: "There are currently three types of logical operators" (reason: dated wording). Also added the operators `in`, `between`, `match`, `array_len_equals`, `array_len_greater_than`, `array_len_less_than`, which exist in `ComparisonOperatorType` (permit-backend `schemas/operators/comparison.py`) but were missing from the table.
- `docs/api/rbac/rbac-example.mdx`: "RBAC API\" and delete it below." and the duplicated H4 "We have a shared todo app..." (reason: editing residue; removed, anchor not linked anywhere).
- `docs/api/rbac/disable-rebac-to-increase-performance.mdx`: "The updated configuration will take effect only when a new PDP instance is started" (reason: could not verify in permit-backend or PDP; `rebac_disabled` is read by the policy synchronizer `env_updater.py` when the policy is generated, but the source does not show whether running PDPs pick it up without a restart). Kept "restart running PDPs" as a step without the "only when" claim. Owner should confirm.
- `docs/api/rbac/disable-rebac-to-increase-performance.mdx` (unverified, kept): `rebac_disabled` is not in the OpenAPI spec (`EnvironmentUpdate.settings` is an untyped object). The key is confirmed in permit-backend `policy_synchronizer/.../env_updater.py` (`(env.settings or {}).get("rebac_disabled", False)`).
- `docs/api/elements/overview.mdx`: "The API now allows us to create Embeddable Element calls, which give much more flexibility when defining them." (reason: dated, vague). Removed.
- `docs/api/elements/access-request-api.mdx`: "Please note that the `elements_config_id` refers to the ID of the user management element that is linked to the access request element." (reason: could not verify; the spec describes `elements_config_id` only as the ID or key of an elements config). Page now says "the ID or key of the element configuration". Owner should confirm which element config ID the facts-path endpoints expect.
- `docs/api/elements/access-request-api.mdx` and `access-requests.mdx`: "You can filter access requests by passing the following headers" (reason: contradicts the spec; filters are query parameters, and the facts-path list endpoint has no `tenant` filter while the elements-path one does).
- `docs/api/elements/access-requests.mdx`, `operation_approval.mdx`: "Remember to copy your `SDK Secret Key`" and "Get your API_SECRET_KEY ... Replace API_SECRET_KEY" (reason: glossary term is "API key"; the element-session curls authenticate with the login cookie, not the API key). The API key is now described only as the SDK constructor credential.
- `docs/api/elements/operation_approval.mdx`: Redoc link "Approval Flow API in the Permit Redoc" pointed to `#tag/Access-Requests` (reason: wrong tag). Now `#tag/Operation-Approval-(EAP)`.
- `docs/api/elements/access-requests.mdx`, `operation_approval.mdx` (unverified, kept from the original pages and consistent with `docs/embeddable-uis/element-login.mdx`): `USER_NOT_FOUND` when the user is not in the tenant; one tenant per session; the requesting user must belong to the tenant; non-reviewers see only their own requests; the ticket `redirect_url` is a `get_cookie` URL.
- `docs/updates-and-feedback/changelog.mdx`: "Explore the evolving journey of our permissions and access control features" (reason: hype). The Canny changelog responds 200, but its most recent entry is dated 2025-02-20 (from the page's og:image version and entry dates). A Productlane changelog also exists at https://permit.productlane.com/changelog (200, "Permit.io Changelog | Productlane", entries render client-side). The link was kept on Canny; owner should decide whether the changelog moved to Productlane.
- `docs/updates-and-feedback/feature-requests.mdx`: "guiding the next wave of features we introduce at Permit.io" (reason: marketing). Link https://permitio.canny.io/feature-requests responds 200 (Canny board, 174 posts at check time).
- `docs/updates-and-feedback/roadmap.mdx`: "Get a glimpse into the future of access control ... innovations" (reason: hype). Link https://permit.productlane.com/roadmap responds 308 to /request (200, "Permit.io feature requests | Productlane", shows In Progress and Completed ideas). Not dead, but the roadmap and feature requests now live on two different hosts (Productlane and Canny). Owner should decide whether feature requests should also point to Productlane `/request`.

### Batch u10 (`authentication/permit-and-authentication.mdx` and related pages)

- `docs/authentication/permit-and-authentication.mdx`: "Compatible with All Authentication Standards: OAuth 2.0, OpenID Connect (OIDC), SAML, WS-Fed, Headers, mTLS" (reason: could not verify; Permit SDK checks take a user key, the app verifies tokens. WS-Fed and mTLS support not documented anywhere)
- `docs/authentication/permit-and-authentication.mdx`: "Permit.io's authorization layer will integrate with it through our flexible handoff mechanisms" / "integrate seamlessly with any authentication solution" (reason: marketing; replaced with mechanism description)
- `docs/authentication/permit-and-authentication.mdx`: IdP-managed roles have "no support for ReBAC" (reason: could not verify; SCIM and handoff code can write any role assignment. Replaced with tradeoff about runtime-granted roles)
- `docs/authentication/permit-and-authentication.mdx`: "Permit.io ensures your AuthZ policies remain accurate and up-to-date" (reason: unverifiable guarantee)
- `docs/authentication/permit-and-authentication.mdx`: removed "Why This Works" section (authoring notes) and "Book a Demo" link to io.permit.io/docs-to-call (non-standard demo link)
- `docs/authentication/your-authentication.mdx`: "Permit.io measures usage through Monthly Active Users (MAUs) ... counted as a single MAU" (reason: pricing/billing detail, volatile, not an authentication how-to; owner should confirm it lives on a pricing page)
- `docs/authentication/your-authentication.mdx`: "specific endpoint and method will be detailed in the API documentation" (stale meta text; replaced with the verified endpoint `POST /v2/facts/{proj_id}/{env_id}/bulk/users` from the OpenAPI spec)
- `docs/authentication/fusionauth.mdx`: "Guide coming soon!" and description "integration guide is coming soon" (reason: roadmap claim)
- `docs/authentication/fusionauth.mdx`: "Clone and play with our demo NextJS project" (reason: contradicts repo; filipermit/permit-x-fusionauth is an Express server plus a webpack React client, not Next.js)
- `docs/authentication/fusionauth.mdx`: tracking link `https://fusionauth.link/4fS8uTU` replaced with `https://fusionauth.io` (reason: tracking redirect)
- `docs/authentication/fusionauth.mdx`, `docs/authentication/supertokens.mdx`: OWNER REVIEW. Both link to personal repos `https://github.com/filipermit/permit-x-fusionauth` (last commit 2022-09-20) and `https://github.com/filipermit/permit-x-supertokens` (last commit 2022-08-24). Both exist (gh api returns 200), so links kept. Both pin `permitio` SDK 0.0.5 and use `permit.write()` and `roles` in `syncUser()`, which the current SDK doesn't have; pages now say so. Consider moving to the permitio org or archiving.
- `docs/authentication/fusionauth.mdx`: SECURITY, OWNER REVIEW. filipermit/permit-x-fusionauth commits a Permit API token (JWT, exp 2023-09) in `server/routes/permit.js` and `server/routes/sync-user.js`, and a FusionAuth client secret and API key in `config.js`. Page now warns readers to replace them; owner should confirm those credentials are revoked.
- `docs/authentication/supertokens.mdx`: "Enjoy the demo!" and emoji headings removed (style). Verification steps added from repo source (log line text, roles `Friend`/`Stranger`, tenant `SuperTokens`, resource `card`); the app was not run.
- `docs/authentication/hankopermit.mdx`: "Permit is the leading authorization platform for developers" (reason: unverifiable marketing claim)
- `docs/authentication/hankopermit.mdx`: ABAC steps "This new user should not be able to delete tasks" then "You should also be able to delete it" (reason: contradictory; rewritten to match the configured policy and repo article.md: second user can't delete first user's note, can delete own note, admin can delete any note)
- `docs/authentication/hankopermit.mdx`: "limited to the same user who created the role" (reason: wrong, should be the note's owner)
- `docs/authentication/hankopermit.mdx`: step "copy the API URL" reused screenshot 3.jpg (project creation); replaced with existing static/ui-videos/integrations/authentication/hankopermit/4.jpg, which shows the API URL settings (media swap, same folder)
- `docs/authentication/hankopermit.mdx`: screenshot 13.jpg shows `post` unchecked on `notes` for both roles and all actions on `Owned Notes`; step text follows the RBAC policy from 8.jpg. Minor mismatch, owner may retake.
- `docs/authentication/logto.mdx`: "Seamless user authentication", "easily adapt your security model ... without changing your code" (reason: filler/marketing)
- `docs/authentication/logto.mdx`: Slack link io.permit.io/docs-to-slack changed to io.permit.io/slack (house standard)
- `docs/authentication/logto.mdx`: added warnings that the check-permission route trusts a `userId` query parameter and that the webhook route doesn't verify Logto's signature. "Logto signs webhook requests with the webhook's signing key" is from Logto's webhook docs (not re-fetched this session); owner may confirm.
- `docs/authentication/auth0/permit-integration.mdx`: "Auth0 is one of the leading authentication platforms ... Permit.io is the leading authorization platform" (reason: unverifiable marketing)
- `docs/authentication/auth0/permit-integration.mdx`: link `http://localhost:3000/integrations/authentication/auth0-demo` (reason: broken localhost link; replaced with `/authentication/auth0/auth0-demo-app#41-sync-auth0-with-permit`)
- `docs/authentication/auth0/permit-integration.mdx`: "delete tasks immediately" (kept as "without signing out and in again"; propagation time unverified)
- `docs/authentication/auth0/auth0-demo-app.mdx`: removed the duplicated Auth0 Action steps, Action code block, and session object block; page links to the owner page `/authentication/auth0/permit-integration#31-sync-auth0-with-permit` (codeguard reports these two blocks missing: intentional dedupe per coordinator note)
- `docs/authentication/auth0/auth0-demo-app.mdx`: "the `userProvider` in `_app.tsx` redirects the user to the login page if they have not logged in" (reason: could not verify; UserProvider only provides user context)
- `docs/authentication/auth0/auth0-sync-script.mdx`: "Auth0 is one of the leading authentication platform ... Permit.io is the leading authorization platform" (reason: marketing)
- `docs/authentication/auth0/auth0-sync-script.mdx`: link `/sdk/python/quickstart_python_sync#1-get-your-permit-environment-api-key` replaced with `/overview/get-api-key` (fragile partial anchor, per cross-page finding)
- `docs/authentication/auth0/auth0-sync-script.mdx`: added from script source: after creating missing roles the script exits without syncing users (must rerun); tenant prompt defaults to `default`
- `docs/authentication/cognito/cognito-demo-app.mdx`: added a warning that the repo's `/api/sync` route throws ReferenceError (payload out of scope) so users aren't synced; workaround is adding the user in Directory. Owner should fix permitio/cognito-integration.
- `docs/authentication/cognito/cognito-demo-app.mdx`: repo README says run the frontend with `npm install` and serve on port 8000; the frontend has no package.json and the backend listens on 8000 with CORS for 8181. Page says serve frontend on 8181. Owner should fix README.
- `docs/authentication/cognito/permit-integration.mdx`: "Using Cognito and Permit together allows you to easily manage ... in a secure and scalable way", "it will take effect immediately without refresh" (reason: marketing / unverified timing)
- `docs/authentication/cognito/permit-integration.mdx`: "For production use container / sidecar PDP" linked to the Node.js quickstart (reason: wrong target; now links to `/how-to/deploy/deploy-to-production`)
- `docs/authentication/stytch/permit-integration.mdx`: "Stytch is one of the leading authentication platforms ... robust and scalable", "Permit.io is a leading authorization platform" (reason: marketing)
- `docs/authentication/stytch/permit-integration.mdx`: "Adding a user to the Tenant" via `syncUser` (reason: wrong; syncUser doesn't place a user in a tenant, role assignment does. Heading renamed with old anchor kept)
- `docs/authentication/stytch/permit-integration.mdx`: removed the second copy of the account-owner-role.png screenshot (duplicate of the first on the same page)
- `docs/authentication/stytch/permit-integration.mdx`: OWNER REVIEW. user-synced.png breadcrumb shows project "Barclays Planning" (a real company name) and a personal avatar; style guide asks for fictional companies. Kept; consider retaking.

### Batch w10 (`permit-mcp-gateway/audit-logs.mdx` and related pages)

Sources checked: permitio/agent-security repo (consent-service, platform, gateway, packages/policy-management; default branch tarball), and docs/how-to/use-audit-logs/types-and-filtering.mdx.

#### audit-logs.mdx
- `docs/permit-mcp-gateway/audit-logs.mdx`: "Decision: `Allow` or `Deny`" (reason: contradicts platform/src/components/audit-logs/audit-logs-table.tsx, which renders "Allowed"/"Denied"; changed)
- `docs/permit-mcp-gateway/audit-logs.mdx`: denial reasons "User not found" and "Resource not found" (reason: could not verify these strings; platform/src/lib/permit/audit-logs.ts only rewrites the no-role case to "No permission for 'X'" and passes other Permit reasons through; replaced with Permit denial codes user_not_synced and no_such_resource, linked)
- `docs/permit-mcp-gateway/audit-logs.mdx`: "The Permit Audit Log supports filtering by User, Resource, Action, Decision" (reason: contradicts how-to/use-audit-logs/types-and-filtering.mdx: the screen filters by user, date, decision, tenant; resource and action filters are API-only; changed)
- `docs/permit-mcp-gateway/audit-logs.mdx`: "Export or review the entries" for compliance reports (reason: could not verify an export feature on the Audit Log screen; replaced with the List audit logs API)
- `docs/permit-mcp-gateway/audit-logs.mdx`: gateway dashboard step "Filter by decision" on the MCP server audit log (reason: no decision filter in platform/src/components/audit-logs; moved the filter to the Permit dashboard)
- `docs/permit-mcp-gateway/audit-logs.mdx`: "The Permit dashboard shows the full policy evaluation chain, including which derived roles were checked" (reason: could not verify the derived-role detail; narrowed to the decision log's check and reason per types-and-filtering.mdx)
- `docs/permit-mcp-gateway/audit-logs.mdx`: added "Partial audit view" note above 50 agent registrations (verified: platform/src/schemas/audit-logs.ts MAX_FILTER_ITEMS = 50; components/audit-logs/partial-audit-alert.tsx)

#### authentication-methods.mdx
- `docs/permit-mcp-gateway/authentication-methods.mdx`: OIDC callback URL "https://{subdomain}.agent.security/api/auth/callback/sso-{subdomain}" (reason: contradicts platform/src/components/hosts/auth-methods/oidc-provider-details.tsx, which shows `/api/auth/oauth2/callback/sso-{subdomain}` per the better-auth genericOAuth convention; prose and tables changed, fenced block logged in codefix_w10.md)
- `docs/permit-mcp-gateway/authentication-methods.mdx`: "Passkeys require an initial registration via another method (email/password or social login)" (reason: could not verify; consent-service has a passkey sign-in button but no passkey registration UI was found; reworded to "a user without a registered passkey can't sign in with a passkey, so keep another method on")
- `docs/permit-mcp-gateway/authentication-methods.mdx`: "SP Metadata XML: Download from the host settings page" (reason: platform saml-provider-details.tsx shows an "SP Metadata URL" read-only field, no download; changed)
- `docs/permit-mcp-gateway/authentication-methods.mdx`: "Azure AD Identifier" and "In Set up Permit MCP Gateway" (third-party UI labels, not verified against the current Azure portal; reworded to the Microsoft Entra identifier, noting older portals say Azure AD Identifier)
- `docs/permit-mcp-gateway/authentication-methods.mdx`: "seamless SSO experience" (reason: filler; removed)
- `docs/permit-mcp-gateway/authentication-methods.mdx`: kept and verified: 6-digit OTP with 5-minute expiry, IdP-initiated SAML disabled, InResponseTo validation, PEM check and all validation rules, Microsoft tenant default `common`, OIDC scopes, sign-in screen order, Create Account condition, force-redirect fallback message, domain intersection logic, default Email / Password only (consent-service/src/lib/auth.ts, lib/domain-filter.ts, lib/db/auth-config-types.ts, components/login/login-client.tsx, app/api/admin/auth-config/[subdomain]/route.ts)
- `docs/permit-mcp-gateway/authentication-methods.mdx`: Okta, Entra ID, and Google Workspace console click paths kept unverified (third-party UIs); added a note that console labels change

#### consent-service.mdx
- `docs/permit-mcp-gateway/consent-service.mdx`: "Soft TTL (inactivity) 30 days: if no tool calls are made for 30 days, the session is removed" and "Hard TTL (absolute) 90 days: maximum session lifetime regardless of activity" (reason: contradicts gateway source. gateway/src/config.rs marks soft_ttl `#[allow(dead_code)] // Used by cleanup job (not yet implemented)`; McpSession::is_stale is dead code; gateway/src/storage/mcp/operations.rs touch_session, called on each MCP request from routes/public/mcp/mod.rs, re-sets the Redis EXPIRE to the 90-day hard TTL, so the 90 days restart on every use. Rewritten as "Redis removes the application session 90 days after the last tool call". CROSS-PAGE CONFLICT: guide.mdx (~line 218), advanced-features.mdx (~line 73), and overview.mdx still say 30 days without tool calls or 90 days after creation. Owner to confirm product behavior. The consent-service OAuth provider sets refreshTokenExpiresIn to 30 days, which may be an effective 30-day limit for MCP clients; not verified.)
- `docs/permit-mcp-gateway/consent-service.mdx`: "Manual revocation ... immediately invalidates the session" (reason: could not verify session deletion on revocation; aligned with platform.mdx and managing-humans-and-agents.mdx: the agent's next tool call to that server is denied)
- `docs/permit-mcp-gateway/consent-service.mdx`: "The user clicks **Authorize Agent**" (reason: contradicts consent-service/src/components/consent/steps/review-consent-step.tsx, whose buttons are "Accept" and "Deny"; changed)
- `docs/permit-mcp-gateway/consent-service.mdx`: added "For a server added through Dynamic MCPs, the user can also change the trust level of individual tools, up to the max trust level" (verified: review-consent-step.tsx allows per-tool edits only when mcp.isDynamic; mcp-consent-form.tsx sends per-tool trust only for dynamic servers). KNOWN CONFLICT for owner, not resolved: demos/n8n-linear-mcp-gateway.mdx shows per-tool trust at consent, while consent-service.mdx describes one slider capped by the admin maximum. Source shows one trust level for admin-imported servers and per-tool overrides only for dynamic MCP servers. Owner to confirm which case the n8n demo and its tool-import.png screenshot show.
- `docs/permit-mcp-gateway/consent-service.mdx`: "The upstream tokens are stored securely" (reason: unqualified security claim; reworded to "the gateway stores the upstream tokens in the user's session")
- `docs/permit-mcp-gateway/consent-service.mdx`: "handled transparently", "Reducing friction" (reason: filler; removed)
- `docs/permit-mcp-gateway/consent-service.mdx`: kept and verified: session keyed by client ID and subject in Redis (gateway PUT /mcp/sessions/{client_id}/{subject}), Permit sync before session creation, 403 above max trust, 5-minute upstream token refresh buffer (TOKEN_REFRESH_BUFFER_SECS=300), path-based `/mcp/{static_mcp_key}` route, `/.well-known/oauth-authorization-server` served by the gateway

#### permit-integration.mdx
- `docs/permit-mcp-gateway/permit-integration.mdx`: "Role assignments linking each action to the appropriate trust level" (reason: wrong term; role permissions grant actions to roles. Verified: packages/policy-management/src/resources/resources.ts builds `low`/`medium`/`high` roles with `permissions` and `extends`; changed to permissions)
- `docs/permit-mcp-gateway/permit-integration.mdx`: "Trust level | Permit role `{server}-low` | Permissions" (reason: conflated two role sets; source has `low`/`medium`/`high` roles on the MCP server resource that hold permissions, and `{server}-low`/`-medium`/`-high` roles on user_profile assigned to agents; table split)
- `docs/permit-mcp-gateway/permit-integration.mdx`: "you get the full power of Permit's policy engine", "Permit is not a peripheral integration", "deep integration" (reason: hype; removed)
- `docs/permit-mcp-gateway/permit-integration.mdx`: "RBAC, ABAC, and ReBAC policy models", "Real-time policy updates via OPAL", "Policy-as-code via Terraform provider", "Local PDP option ... decisions stay within your network" (reason: could not verify for the gateway; gateway/src/config.rs defaults PERMIT_PDP_URL to https://cloud-pdp.api.permit.io, and the Cloud PDP doesn't support ABAC per types-and-filtering.mdx. Replaced with the Cloud PDP default, a link to enterprise-deployment's Local PDP section, next-call policy changes, the audit log, and the Permit API)
- `docs/permit-mcp-gateway/permit-integration.mdx`: "The environment name typically matches the host name" (reason: could not verify; replaced with reading the linked project and environment on the host. Verified that an environment can attach to only one host: platform/src/app/api/hosts/route.ts)
- `docs/permit-mcp-gateway/permit-integration.mdx`: allow-list route table (`POST /api/mcp/connect`, `/api/mcp/oauth/start`, `/api/mcp/preprovisioned-clients`) (reason: internal routes, volatile; the routes exist, table replaced with the behavior. `POST /api/consent/accept` and its 403 message kept in the three-layer section, verified in consent-service/src/app/api/consent/accept/route.ts)
- `docs/permit-mcp-gateway/permit-integration.mdx`: "Allowing the same MCP server resource to be shared across tenants if needed" (reason: could not verify; removed. `default` tenant verified for static and dynamic resources)
- `docs/permit-mcp-gateway/permit-integration.mdx`: effective permission rows where the profile relation is above the agent role, for example `{server}-medium` + `high` relation = medium (kept, unverified: the 9 derived-role rules in packages/policy-management/src/derived-roles/derived-roles.ts have no rule for `{server}-medium` + `high`, `{server}-low` + `medium`, or `{server}-low` + `high`, and platform/src/app/api/humans/[key]/mcp-access/route.ts creates a single relation tuple per grant. Owner to confirm how those combinations derive a role; possible product bug or missing detail)
- `docs/permit-mcp-gateway/permit-integration.mdx`: "Key Takeaways" section (reason: summary section with repeated claims such as "Changes are instant"; removed)

### Batch u11 (`how-to/build-policies` and related pages)

- `docs/how-to/build-policies/policy-basics.mdx`: "Roles exist on an organization level - whether you change project, tenant, or environment, the same roles exist for you." (reason: contradicts API spec path /v2/schema/{proj_id}/{env_id}/roles and building-rbac-policy.mdx "created at the environment level"; rewritten as per-environment)
- `docs/how-to/build-policies/policy-basics.mdx`: "Roles are assigned to users via the User Management page" linking to /manage-your-account/workspace-settings#member-management (reason: that page is dashboard members, not users; replaced with Directory screen and a users-vs-members note)
- `docs/how-to/build-policies/policy-basics.mdx`: "Permissions ... can also be assigned directly to individual users or entities" (reason: could not verify direct user permissions in Permit's RBAC model)
- `docs/how-to/build-policies/policy-basics.mdx`: "The default settings will only be applied to new resources created from the dashboard." (reason: could not verify whether API-created resources also get default permissions)
- `docs/how-to/build-policies/policy-basics.mdx`: "Users are contained within tenants, and can only access the resources within their tenant." (reason: overgeneralized; user sets are not tenant-bound per building-abac-policy.mdx; replaced with role assignments scoped per tenant)
- `docs/how-to/build-policies/policy-basics.mdx`: marketing intro ("power of a powerful authorization engines", "champions the best practices", "ensuring scalability, traceability", "extremely simple, yet vastly powerful") (reason: unverifiable marketing)
- `docs/how-to/build-policies/policy-basics.mdx`: stray Hebrew character (U+05BF) before the screenshots; link to http://localhost:3000/integrations/gitops/github replaced with /integrations/gitops/github.
- `docs/how-to/build-policies/rbac/components.mdx`: "Top level represents the fact that Roles have higher priority in policy evaluation than Instance-level Roles." (reason: could not verify; no evidence in docs or API of role priority; top-level now defined as tenant-wide per mesa-verde.mdx)
- `docs/how-to/build-policies/rbac/components.mdx`: "Below is an example of a two roles; an Admin and a Friend ... card resource" (reason: contradicts screenshot rbac-0.png, which shows Admin and Customer roles on a document resource; text fixed to match). Duplicate arcade demo removed; page links to the RBAC overview demo.
- `docs/how-to/build-policies/rbac/overview.mdx`: "It's the most basic and simple approach to access management." (reason: generalization)
- `docs/how-to/build-policies/rbac/building-rbac-policy.mdx`: truncated "Role Attributes" section ("To achieve more granularity in role creation, we") (reason: incomplete; replaced with a link to defining-attributes#define-role-attributes)
- `docs/how-to/build-policies/rebac/overview.mdx`: "Given their ability to manage high volumes of data while maintaining consistency, these systems prove effective in large-scale environments." (reason: vague unverified scale claim)
- `docs/how-to/build-policies/rebac/overview.mdx`: "We want to grant them editing access to all files the employee data files" (reason: contradicts the policy that uses Legal_Docs; text now says legal documents)
- `docs/how-to/build-policies/rebac/building-rebac-policies.mdx`: "Once you successfully define the relationships on the roles - it will automatically create the roles for you in the policy editor." (reason: could not verify what is auto-created)
- `docs/how-to/build-policies/rebac/building-rebac-policies.mdx`: "Permit implementation of Relationship-Based Access Control (RBAC) is fully compatible with the Tuples convention" (reason: acronym wrong, and "fully compatible" unverified; softened to "follows the tuple convention")
- `docs/how-to/build-policies/abac/defining-attributes.mdx`: "resource attributes can only be pushed in permit.check and as a custom Rego function" (reason: contradicts API spec ResourceInstanceCreate.attributes and overview/sync-applications-data.mdx, which store resource instance attributes via API or Directory > Instances)
- `docs/how-to/build-policies/abac/defining-attributes.mdx`: "Permit supports attributes on three different objects" followed by four (reason: count wrong; fixed to four)
- `docs/how-to/build-policies/abac/defining-attributes.mdx`: tenant attributes UI path "Manage tenants ... open the Tenant Attributes panel" (reason: could not verify a Tenant Attributes panel inside Manage Tenants; kept Settings > Manage Tenants only)
- `docs/how-to/build-policies/abac/patterns.mdx`: "Once we add ReBAC and groups natively to Permit.io - those would be the default recommended way to implement groups." (reason: stale; ReBAC and Groups API exist)
- `docs/how-to/build-policies/abac/patterns.mdx`: "ReBAC is a subset of ABAC" (reason: unverified generalization)
- `docs/how-to/build-policies/abac/patterns.mdx` (media): /img/resource_ownership.png shows attribute `resource.owner` while the code sample uses `owners` (reason: screenshot and code disagree; prose notes the key must match; consider retaking the screenshot)
- `docs/how-to/build-policies/abac/building-abac-policy.mdx` (media): /img/abac-updated/user-set-0.png shows conditions on `tenant.university` and `tenant.is_full_time`, while the steps create user attributes (reason: screenshot contradicts steps; kept, consider retaking). Set names also differ across screenshots ("Full-time Stanford Student(s)", "Bicycle(s) available after 5pm").
- `docs/how-to/build-policies/abac/building-abac-policy.mdx`: resource set condition "`resource.time` > \"17:00\"" (reason: contradicts screenshot, which uses Number type and greater-than 17; text fixed)
- `docs/how-to/build-policies/abac/building-abac-policy.mdx`: tenant attributes "Navigate to the Users panel, click the Tenant Attributes button, click Add New Tenant Attribute" (reason: contradicts screenshot, which shows Directory Settings > Tenant Attributes > Add Attribute)
- `docs/how-to/build-policies/abac/building-abac-policy.mdx`: warning "Tenant boundaries are not automatically enforced for user sets" kept and expanded with its consequence; owner should confirm.
- `docs/how-to/ownership.mdx`: "As `file` is set as parent of `folder`, all permissions set on a `folder` will automatically propagate to `files`" (reason: reversed; screenshots show folder is parent of file; also propagation requires a role derivation, now an explicit step linking to building-rebac-policies#defining-role-derivations)
- `docs/how-to/ownership.mdx`: "The ABAC condition will compare the file_ownership attribute" (reason: screenshots show attribute `owner`; file_ownership is the resource set key)
- `docs/how-to/ownership.mdx`: "Go to the Policy section and click on Resource instances" (reason: screenshot 7 shows an older UI; current docs place instances in Directory > Instances; step rewritten to Directory)
- `docs/how-to/ownership.mdx`: "Go to the ABAC Rules tab, and enable ABAC Options." (reason: could not verify an enable toggle)

### Batch w11 (`permit-mcp-gateway/http-egress-proxy` and related pages)

- `docs/permit-mcp-gateway/http-egress-proxy/index.mdx`: "The HTTP Egress Proxy is a newer capability and is enabled per environment" (reason: stale dated wording; replaced with "must be enabled for your account")
- `docs/permit-mcp-gateway/http-egress-proxy/index.mdx`: "High-risk requests can be routed to a human for approval before they're forwarded (optional, per host)" (reason: contradicts agent-security docs/reference/http-proxy-and-cli.md step 9: the intent guardian StepUp/Defer verdict is the only HITL trigger on the proxy path, and the guardian requires agent identity. Rewritten to match egress-rules.mdx)
- `docs/permit-mcp-gateway/http-egress-proxy/index.mdx`: "Every decision ... is logged" (reason: security.mdx and the gateway security model say audit is best-effort, fire-and-forget; softened to best-effort)
- `docs/permit-mcp-gateway/http-egress-proxy/cli.mdx`, `egress-rules.mdx`, `quickstart.mdx`: "there is no CLI command for authoring them yet" (reason: roadmap wording; restated as present fact, verified in packages/agent-security-cli/README.md: no `asg proxy workflow` command)
- `docs/permit-mcp-gateway/http-egress-proxy/security.mdx`: "a recent sign-in, within the last day, is required" (reason: could not verify in permitio/agent-security docs/reference/http-proxy-and-cli.md or security-model.md; removed)
- `docs/permit-mcp-gateway/http-egress-proxy/quickstart.mdx`, `connecting-agents.mdx`: `asg run` linked to cli.mdx which did not document it (resolved: documented `asg init` and `asg run` in cli.mdx from packages/agent-security-cli/src/commands/run.ts and init.ts; links now point to /permit-mcp-gateway/http-egress-proxy/cli#launch-an-agent-with-asg-run)
- Verified and kept: rate-limit defaults 600 per host / 1200 per eTLD+1 / 60 s window (gateway/src/config.rs, PROXY_RATE_LIMIT_PER_HOST, PROXY_RATE_LIMIT_PER_ETLD, PROXY_RATE_LIMIT_WINDOW_SECS), now labeled as gateway defaults with the setting names; "exactly twelve distinct words" (CLI README and ref doc); VAULT_ENABLED / AWS_KMS_KEY_ID (gateway/src/token_vault/config.rs); AWS STS session TTL 15 min to 12 h and form label "External ID reference" (platform/src/components/proxy/credential-sheet.tsx).
- Unverified but kept (owner to confirm): dashboard navigation labels "CLIs / APIs → Workflows/Credentials/Overview/Activity" (CLI README calls the section "Proxy -> Workflows" in the Platform UI); method class membership `read` = GET/HEAD/OPTIONS, `write` = POST/PUT/PATCH; revocation "from their account".
- Source conflict to flag upstream: permitio/agent-security docs/guides/asg-cli-quickstart.md says `asg run` reuses a cached token; run.ts and the CLI README say there is no token cache and every launch asks for consent. Docs follow run.ts.

### Batch w12 (`embeddable-uis/element-login.mdx` and related pages)

#### Decisions and cross-page conflicts
- `docs/embeddable-uis/element-login.mdx` and `embedding-elements.mdx`: Login Errors tables had drifted (element-login lacked `FORBIDDEN_ACCESS`). element-login (title "Log users in to Permit Elements") now owns the four-row table; the four codes match `ElementsApiErrors` in permit-node and `LoginAsErrorMessages` in permit-python. embedding-elements keeps a short `#login-errors` section that links to it, and troubleshooting links to `/embeddable-uis/element-login#login-errors` (was a link with no anchor). embedding-elements keeps its frontendOnly and logout code blocks (code guard) but links to element-login for parameters and other methods.
- Button name: "Get Code" (embedding-elements) vs "Generate Code" (element pages). Screenshot `static/img/elements/troubleshooting/generate-code.png` and `emails/email-notification-toggle.png` show **Generate Code**; the dialog it opens is titled "Element Embed Code" with a **Copy Code** button (`user-management/EmbedCode.png`). All pages use "Generate Code".
- `docs/embeddable-uis/webhooks.mdx`: "Current flow" vs "With the new approve invite flow applied" does not say which flow is live, or what setting selects it. Reworded neutrally as two flows ("Invite creates the user" / "Invite requires approval"); anchors `#current-flow` and `#with-the-new-approve-invite-flow-applied` kept. Added "The webhook type you receive tells you which flow applied: `create_user` or `invite_user`" (inferred from the payload schemas, not verified). Owner to confirm which flow is default and how it is chosen.
- `docs/embeddable-uis/element/operation-approval.mdx`: "Once the request is approved or denied, the user will receive approval for the requested action" (reason: contradicts itself). Replaced with: approval assigns the `_Approved_` role on the resource instance (from approval-management.mdx), denial doesn't, and a webhook is sent (from the page and its diagram).
- `docs/embeddable-uis/element/access-request.mdx`: reviewer described as "the workspace owner" and as "Level 1 role in User Management". Unified as "a user whose role is at Level 1 (Workspace Owner)", matching the permission-levels screenshot labels.
- `docs/embeddable-uis/element/operation-approval.mdx`: role assignment example `transfer:transfer-1#_Reviewer_` vs screenshot `addPermissionForReviewer.png`, which shows the role key `_reviewer_` (lowercase) on resource `transfar`. Kept `_Reviewer_` in text; owner to confirm the role key case.
- `docs/embeddable-uis/element/approval-management.mdx`: note "it is crucial to select the tenant" while the iframe sample has no `tenantKey`. Replaced with: the example has no `tenantKey`; if the generated snippet includes it, set it. Owner to confirm whether Approval Management iframes take `tenantKey`.
- `docs/embeddable-uis/overview.mdx`: ElementTile redirects `/features/permit-elements/element/audit-logs` and `/features/permit-elements/element/approval-flows` changed to `/embeddable-uis/element/audit-logs` and `/embeddable-uis/element/access-request` (redirects.js targets). ActionContainer anchors `user-management#customising-your-element` and `#configure-your-webhook` (did not exist) now point to `/embeddable-uis/embedding-elements#customize-the-element` (new heading id on the customization section) and `/embeddable-uis/webhooks#configure-your-webhook`. "Get started" now points to embedding-elements. Slack link `io.permit.io/docs-to-slack` changed to `io.permit.io/slack`.
- access-request, approval-management, operation-approval, audit-logs: "Embedding Elements" links changed from `/embeddable-uis/overview` to `/embeddable-uis/embedding-elements`. The shared YouTube embed is kept on all five element pages without repeated intro text; its iframe title changed from "YouTube video player" to "Permit Elements video" (video content not reviewed).

#### Removed or reworded claims
- `docs/embeddable-uis/overview.mdx`: "We add new elements over time" (reason: roadmap wording). Replaced with a request-an-element pointer to Slack.
- `docs/embeddable-uis/element/audit-logs.mdx`: "This element gives full control over your applications, enforcing security" (reason: hype, unverifiable). Replaced with the columns visible in `audit-logs-full.png` (Time, User, Resource, Action). The page's embed steps (create in Elements screen, permission levels, Generate Code, login) are generalized from the other element pages, not verified for this element type specifically.
- `docs/embeddable-uis/overview.mdx`: tile description "Monitor decisions made against each policy" kept in the tile component, but the new table describes what the screenshot shows (user actions on resources).
- `docs/embeddable-uis/permission-levels.mdx`: "As more elements come out ... Some elements will be view only, which means you can only expect the Hidden Roles and the Viewer levels" (reason: dated wording, could not verify which types are view-only). Replaced with "Some element types don't use all five levels. The configuration form of each element shows the levels that element type supports." Level descriptions now use the dashboard labels in `permission-levels-full.png` ("Can assign roles, and Add / Remove users"; Manager "Can assign level 2-4 roles"), replacing "cannot make changes to the overall workspace" (unverified). Level 4 = Assignable Roles matches API enum `ElementsPermissionLevel` (LEVEL_1..LEVEL_4, HIDDEN).
- `docs/embeddable-uis/permission-levels.mdx`: added "If a user opens the element with a role in Hidden Roles, the login fails with `INVALID_PERMISSION_LEVEL`" (from the original embedding-elements error table, which said "usually"; not verified in source).
- `docs/embeddable-uis/troubleshooting.mdx`: Set-Cookie blocked fix "turn on the third-party cookies in the browser settings or set the SameSite attribute to None in the server response" (reason: end users can't be asked to change browser settings, and the `permit_session` cookie is set by Permit, not by the customer's server). Replaced with: use the `supportsPrivateBrowser` login method for users; allow third-party cookies only in your own browser to confirm the cause.
- `docs/embeddable-uis/troubleshooting.mdx`: "the user will be redirected to the /login_elements page" reworded to "A successful login makes a request to /login_elements" (the user isn't redirected; permit-js uses a hidden iframe or AJAX). Kept unverified that every method produces a `/login_elements` request (diagram shows it for backend methods only).
- `docs/embeddable-uis/webhooks.mdx`: "If your endpoint fails to do this, the webhook may consider the delivery a failure and retry, causing unnecessary traffic" (reason: retry behavior could not be verified). Removed.
- `docs/embeddable-uis/webhooks.mdx`: "we provide a input box so you can enter your secret, and use it to validate incoming data" replaced with "Permit uses the secret as a bearer token to authenticate its requests"; check the `Authorization` header. Based on API spec `WebhookCreateWithElements.bearer_token` ("An optional bearer token to use to authenticate the request"); the `Authorization: Bearer` header format itself is inferred, not verified in the sender source.
- `docs/embeddable-uis/webhooks.mdx`: "This extra approval step introduces a security advantage, since it ensures that only verified and authorized users can complete the process" reworded to "Your application can verify the invited person first, so only users you approve get an account."
- `docs/embeddable-uis/webhooks.mdx`: Access Request `status` values listed as `pending`, `approved`, `denied`, `canceled` from the API spec `RequestStatus` enum.
- `docs/embeddable-uis/email-configuration-and-templates.mdx`: "Permit Elements currently supports the following email provider" (reason: dated wording). Now "Permit Elements sends email through an SMTP provider." "Inviting Approving the invited user using an SDK" (garbled) removed. "The invite code is the `user_invite_id`" is verified by permit-js `approve()`, which posts to `/user_invites/{inviteCode}/approve`. SMTP settings location changed to the **Settings** button on the Permit Elements screen, per `emails/elements-settings.png`.
- `docs/embeddable-uis/email-configuration-and-templates.mdx`: `{{ redirect_to }}` "will be replaced with the URL that you filled in the Redirect To field" reworded to "the invite link, built from the Redirect To URL" (the email link carries `invite_code`); unverified detail.
- `docs/embeddable-uis/element-login.mdx`: "Permit Element is now compatible with private browsers, such as Chrome Incognito Mode and Safari" (reason: dated wording). Replaced with the mechanism from permit-js `sendToken.ts` (token posted to the iframe with `postMessage`).
- `docs/embeddable-uis/element-login.mdx`: "Ensuring Login Before Loading the Iframe ... preventing issues with private browsing mode. Add with an authenticated session to Permit cloud." (reason: dangling sentence; for `supportsPrivateBrowser`, permit-js retries until the iframe exists, so the order isn't what matters). Replaced with "Match the iframe URL exactly": permit-js finds the iframe by `src === elementIframeUrl`. Anchor `#ensuring-login-before-loading-the-iframe` kept on that section. The general rule "call login before the iframe renders" moved to the login step.
- `docs/embeddable-uis/element-login.mdx` (kept, unverified): `ticket.element_bearer_token` is not in the typed `loginAs` responses of permit-node or permit-python (they spread extra API fields, so it may be present at runtime). The requirement to return it in a `url` field is verified (permit-js reads `data.url`). The version floor "permit-js 0.5.2" is kept; 0.5.2 exists on npm but the release that added `supportsPrivateBrowser` was not checked.
- `docs/embeddable-uis/element-login.mdx`: added verified details from permit-js: `LoginMethod.cookie` is the default; cookie login loads `loginUrl` in a hidden iframe with a `tenant` query parameter; bearer/header login POSTs and reads `url` from the JSON response (so `ticket.content` = `{ url: redirect_url }`, verified in permit-node); `frontendOnly` requires `userJwt`, `tenant`, `envId`, ignores `loginUrl`, and accepts `userKeyClaim`; `supportsPrivateBrowser` requires `elementIframeUrl`.
- `docs/embeddable-uis/user-preview.mdx`: alt text "Audit Logs Element" on the preview screenshot (reason: wrong image description). Steps now use labels visible in `generic/element-preview.png` (End User Preview, level dropdown with "(Empty)", Tenant dropdown, desktop/mobile icons, "Nothing to Preview"). The tenant-dropdown visibility note is kept from the original, unverified.

#### Anchors not preserved
- `docs/embeddable-uis/troubleshooting.mdx`: headings "🛠️ Error `401 Unauthorized` -" and "🛠️ Page Not Found (404) -" had slugs starting with an invisible U+FE0F character (`️-error-401-unauthorized--`, `️-page-not-found-404--`). No page links to them; they were not kept as explicit ids.
- Removed H1s (`# Permit Elements`, `# Permissions Levels`, `# Live Element Preview`, `# Email Configuration and Templates`, `# Access Request Element`, etc.); nothing in docs or src links to those slugs.

### Batch u12 (`faq.mdx` and related pages)

#### Removed or changed

- `docs/faq.mdx`: "The free tier includes all features for up to 1,000 monthly active users, with no credit card required." (reason: partly verified. https://www.permit.io/pricing shows the Community plan "Free Forever", MAU 1000, and "All features are open to all tiers". "No credit card required" does not appear on the pricing page, so it was removed.)
- `docs/faq.mdx`: "Timestamps are stored with millisecond precision. Fetch logs through the API with `timestamp_from` and `timestamp_to`" (reason: contradicts the API spec. `GET /v2/activity` takes `timestamp_from` and `timestamp_until`, both integers in seconds since the epoch; there is no `timestamp_to`. Millisecond storage could not be verified. Rewritten to use `timestamp_until` and dedupe on the event `id`.)
- `docs/faq.mdx`: house/front-door metaphor for authentication vs authorization (reason: style rule against metaphors; replaced with a table.)
- `docs/faq.mdx`: "Within team management, I can add new people to the team, but not assign them any other role, apart from Admin." (reason: stale. The Members tab offers Workspace Owner, Editor, and Viewer roles plus project and environment roles. Heading reworded with the old anchor kept, and the answer points to Member management.)
- `docs/status.mdx`: frontmatter "Check the live status and uptime of Permit.io's Cloud PDP, API, and dashboard." (reason: the live status page (https://permit-io.instatus.com/) lists Permit.io Backend, OPAL, Frontend, Marketing Website, PDP Deltas, and PDP Data in US East and Europe. It has no "Cloud PDP" entry. The description and body now list what the page shows. Note: https://status.permit.io does not resolve in DNS, so the direct link uses permit-io.instatus.com.)
- `docs/getting-started/slack-support.mdx`: "/permit-escalate - Pro/Enterprise Support Only" and "Works in private channels and DMs, not in public channels" (reason: kept but only partly verified. The pricing page lists "Dedicated Slack Channel" for Pro and Enterprise only, which matches. The public-channel restriction could not be verified. Owner should confirm.)
- `docs/getting-started/slack-support.mdx`: image alt "Slack general channel" for /img/slack/slack-1.png (reason: wrong. The screenshot is the Slack invite page "See what Permit is up to"; alt text corrected. The screenshot shows real member names; consider replacing it.)
- `docs/manage-your-account/projects-and-env.mdx`: removed the duplicate "Creating a new Environment" video and text (reason: duplicate of creating-environments, which now owns the task; heading kept with anchor `creating-a-new-environment` and a link to the owner page.)
- `docs/manage-your-account/projects-and-env.mdx`: dangling e-learning example "John Smith ... enrolled as a student in ... Introduction to Web Development" (reason: example never completed; removed.)
- `docs/manage-your-account/projects-and-env.mdx`: "By default, we defined the Default Project for you." (reason: kept as "A new workspace includes a project named Default Project", based on permit-backend `services/common/consts.py` DEFAULT_PROJECT_NAME = "Default Project".)
- `docs/manage-your-account/permit-logs.mdx`: "This log will only show changes made via the Permit.io dashboard. If you wish to see changes made via the Permit.io REST API, you should check out the API log." (reason: contradicts the API spec. `GET /v2/activity` filters by `actor_type` of `member`, `user`, or `api_key`, so the activity log is not limited to dashboard changes. Removed.)
- `docs/manage-your-account/permit-logs.mdx`: "Only workspace owners may view activity logs / the API log." (reason: kept from the original; could not verify in source.)
- `docs/manage-your-account/workspace-settings.mdx`: "their access level will be `Mixed`, if its more than two projects with different access" (reason: the "more than two projects" threshold could not be verified; the screenshot shows `Mixed` for a member with 2 projects. Rewritten as "when those roles differ in access level".)
- `docs/manage-your-account/workspace-settings.mdx`: "Organization Keys ... are primarily accessible by top-level administrators", "Project Keys ... access is typically granted to project managers", "Environment Keys ... Developers and operations teams usually manage these" (reason: speculative, not verifiable. Replaced with a scope table based on docs/api/api-with-cli.mdx.)
- `docs/manage-your-account/workspace-settings.mdx`: "Enterprise and Pro (for an additional fee) customers can request a tailored DPA" (reason: verified and kept. The pricing page row "GDPR, CCPA, DPA Agreement" shows Pro "$500/y" and Enterprise "Included".)
- `docs/manage-your-account/workspace-settings.mdx`: "if you must work with PII you can keep it solely on your self-hosted PDPs" (reason: could not verify a supported mechanism for keeping PII only on self-hosted PDPs. Removed. Kept that the user key is the only required user field, per the UserCreate schema in the API spec.)
- `docs/manage-your-account/workspace-settings.mdx`: real employee name "Shaul, one of our talented engineers" (reason: personal data and hype; example now describes "a member". The screenshot mixed-access-level.png still shows real @permit.io emails; consider replacing it.)
- `docs/manage-your-account/workspace-usage.mdx`: "Permit.io calculates your billing based on the number of Monthly Active Users (MAUs) and Tenants" (reason: pricing page shows MAU and tenant quotas per plan among other limits; reworded to "Permit plans set quotas on MAUs and tenants, among other limits" and linked to pricing.)
- `docs/manage-your-account/workspace-api.mdx`: "Environments: Projects API - requires a Project level API key" (reason: link was labeled "Projects API" but pointed to Environments; relabeled. Org-level keys also work per api-with-cli.mdx, so the text says project-level or organization-level.)

#### Added and verified

- `docs/how-to/bulk-operations.mdx`: per-call limits (users 3,000, tenants 2,000, resource instances 3,000, role assignments 2,000, roles 2,000, relationship tuples 1,000) verified in permitio/permit-deployments `chart-values/backend/values-prod-us-east-2-v2.yaml` and `values-prod-eu-central-1.yaml` (BULK_LIMIT_*). Over-limit HTTP 403 and empty-request HTTP 400 verified in permitio/permit-backend `api/common/bulk_utils.py` `check_bulk_size`. The limits are deployment config and can change.
- `docs/manage-your-account/creating-environments.mdx`: default roles apply only to resources created by a workspace member, not by API keys (permit-backend `api/routers/schema_routes/resources.py`, `assign_default_roles=... viewer.type == ViewerContextType.member and env.settings.get("enable_default_roles") is True`). Copy permissions, same-project restriction, `conflict_strategy` values `fail`/`overwrite`, and `scope` keys verified in the API spec.
- `docs/manage-your-account/projects-and-env.mdx` and `workspace-settings.mdx`: "rotating an API key revokes the old key" verified in permit-backend `services/api_keys.py` `rotate_secret` ("the previous value must stop authenticating").
- `docs/manage-your-account/workspace-api.mdx`: "Create Organization requires a special permission" verified in the API spec description of `POST /v2/orgs`.

#### Slack invite URL (not changed)

- `https://io.permit.io/slack` (title "SM to community") and `https://io.permit.io/docs-to-slack` (title "docs-to-slack") both return HTTP 200 and meta-refresh to the same Slack invite. docs-to-slack looks like the tracked link for docs, so existing docs-to-slack links in faq.mdx and slack-support.mdx were kept, and new links in status.mdx and bulk-operations.mdx use docs-to-slack. workspace-api.mdx keeps its original io.permit.io/slack link. STYLE_GUIDE.md says io.permit.io/slack; the coordinator should pick one URL and apply it site-wide.

### Batch w13 (`api/api-with-cli.mdx` and related pages)

- `docs/api/api-with-cli.mdx`: rate-limit table "Schema write requests (`POST /v2/schema/*`) 40 req/min", "Member requests (`/v2/members/*`) 50 req/min", "DELETE requests 60 req/min", "Bulk requests 100 req / 10 min", "All write requests (POST, PUT, DELETE) 300 req/min", "All requests 1,000 req/min" (reason: could not verify; not in the OpenAPI spec, pricing page, or other docs. Removed the numbers, kept the `#rate-limiting` section with HTTP 429 behavior because /how-to/bulk-operations links to it. Owner: confirm the numbers to restore the table.)
- `docs/api/api-with-cli.mdx`: "EU region (available at Permit Pro)" (reason: pricing page shows "Deployment Regions: Single" for Community/Startup, "Single (selectable)" for Pro, "Multiple (optional)" for Enterprise, with default regions US East 2 and EU Central 1. Replaced with "Which regions you can choose depends on your plan" plus a pricing link. `api.eu.permit.io` verified reachable (HTTP 200 on /v2/openapi.json).)
- `docs/api/api-with-cli.mdx`: "get all the users in your organization" (reason: contradicts the endpoint, which is per environment: /v2/facts/{proj}/{env}/users. Reworded.)
- `docs/api/background-tasks.mdx`: "Background tasks may take a long time, up to 30 minutes" (reason: could not verify; not in the spec. Removed.)
- `docs/api/background-tasks.mdx`: prose "the status will be `failed,`" (reason: contradicts OpenAPI TaskStatus enum: processing, success, failure, cancelled. Prose now says `failure`; JSON sample logged in codefix_w13.md.)
- `docs/api/pdp-webhooks.mdx`: "If it doesn't work after several retries, Permit's support team will be notified automatically so they can look into the issue." (reason: could not verify. Removed.)
- `docs/api/pdp-webhooks.mdx`: "make sure your PDP is of at least version 0.2.24. This feature won't work with older PDPs." (reason: could not verify the minimum version in permitio/PDP (GitHub code search was rate-limited). Removed. Owner: restore if confirmed.)
- `docs/api/pdp-webhooks.mdx`: link "https://api.permit.io/v2/redoc#tag/Webhooks" (reason: the public OpenAPI spec has no webhooks path or Webhooks tag, so the anchor does not resolve. The endpoint itself exists: unauthenticated POST/GET to /v2/projects/x/envs/y/webhooks returns 401, /webooks returns 404. Link removed. Owner: consider publishing the webhooks endpoint in the spec.)
- `docs/api/pdp-statistics.mdx`: link /overview/connecting-your-app#1-get-your-permit-environment-api-key (reason: stale per brief; replaced with /overview/get-api-key.)
- `docs/api/pdp-api-reference.mdx`: frontmatter promised "hosted evaluation PDP" coverage the page lacked (reason: added Cloud PDP base URL https://cloudpdp.api.permit.io; /openapi.json, /redoc, /scalar all return 200. /scalar route verified in permitio/PDP horizon/pdp.py.)
- `docs/api/v2-migration-guide.mdx`: "In the near future, we'll make it possible to directly duplicate and merge environments just like git branches." (reason: roadmap/stale. Removed; linked /manage-your-account/creating-environments, which documents copy and merge.)
- `docs/api/v2-migration-guide.mdx`: "which was the current version until recently" (reason: dated wording. Removed.)
- `docs/api/v2-migration-guide.mdx`: "The v2 API was built from the ground up to be more convenient to use and faster than the v1 API", "should work identically but be a lot faster, as we've also done major optimization work on the v2 PDPs" (reason: unverified performance claims. Removed.)
- `docs/api/v2-migration-guide.mdx`: "While you can keep using v1 for a while, we'll eventually retire it", "We're going to keep supporting the v1 API for the foreseeable future" (reason: roadmap. Removed; kept "deprecated".)
- `docs/api/v2-migration-guide.mdx`: "newly generated [API keys] are much shorter than before... Existing API keys work normally, and new v2 keys work on v1 as expected" (reason: could not verify. Removed; kept "authenticate the same way".)
- `docs/api/v2-migration-guide.mdx`: "almost no one is using them anyway" (reason: unverifiable generalization. Removed.)
- `docs/api/v2-migration-guide.mdx`: compatibility environment named three ways: "v1compat_global_env" in project "v1compat_global_project", "v1_global_env", and "v2_global_env" in project "v1_global_project" (reason: contradictory. Page now uses the names in the code sample, `v2_global_env` in `v1_global_project`. Owner: confirm the real names; if they are v1compat_*, the code sample needs a fix too.)
- `docs/api/v2-migration-guide.mdx`: image "permitio/sidecar-v2" vs code sample "permitio/pdp-v2" (reason: contradictory. Page uses `permitio/pdp-v2`, which matches /overview/run-pdp.)
- `docs/api/v2-migration-guide.mdx`: Microsoft / Windows / Azure / Flight Simulator as the example organization and projects (reason: real company; style guide requires fictional examples. Replaced with Acme Corp, `billing`, `crm` in prose tables.)
- `docs/api/v2-migration-guide.mdx`: v2 sample `permit.api.sync_user(user)` (note: still works but is marked deprecated in permit-python permit/api/deprecated.py, "use permit.api.users.sync() instead". Prose now says so; code unchanged.)
- `docs/api/rebac/groups/groups.mdx`: "Previous GET endpoints are considered deprecated... They should not be used and will be removed in the future", "new and improved versions that offer better performance" (reason: spec marks only GET /groups and GET /groups/{group_instance_key} as deprecated; performance and removal claims unverified. Replaced with the spec facts: use /groups/direct.)
- `docs/api/rebac/groups/groups.mdx`: "The name of this relation will be `team_group`" and "The name of this relation will be `group`" (reason: relation names not in the spec; spec only says a relation, relationship, and derivation are created. Removed names.)
- `docs/api/rebac/groups/groups.mdx` and `groups-ui.mdx`: "Extended support for this function may be added in the future to allow assignment between groups with different resource types." (reason: roadmap. Removed; kept the same-resource-type limitation, once, in groups.mdx.)
- `docs/api/rebac/groups/groups.mdx`: list, children, parents, users, roles GET endpoints described as recommended with "enhanced performance" (reason: spec labels children/parents/users/roles list endpoints "(EAP)". Table now marks them "Early access".)
- `docs/api/rebac/groups/groups-ui.mdx`: "Key Benefits of Using Groups UI" and generic "Best Practices" list (reason: marketing/filler, not task content. Removed.) Also removed the quoted UI helper strings ("The description reads: ...") as volatile.
- `docs/api/rebac/groups/groups-ui.mdx`: "Child groups inherit relationship configurations from parent groups" (reason: direction of inheritance not verifiable from spec ("This group will inherit the group's roles"). Replaced with a link to the Groups API page.)
- `docs/api/rebac/rebac-api-calls.mdx`: role derivation Base URL pointed at implicit_grants while the example PATCHes /resources/file/roles/editor (reason: both are valid per spec: PATCH ResourceRoleUpdate has granted_to; POST implicit_grants takes DerivedRoleRuleCreate. Page now documents both.)

## Per-page scores

| Page | Audience | Type | Aud | Task | Type | Acc | Str | Ex | Term | AI | Mnt | Sty | Total | Before | Top issues |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `docs/ai-security/access-request-mcp/food-ordering-demo-example.mdx` | AI agent builder | tutorial | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | **5** | 5 | client.py Python blocks have collapsed whitespace (typing_extensionsimport, asyncdef) and wrong lang tags (shell/scss); interrupt resume code never shown, 'graph should not look like this', role child-can-order undefined; we/let's, em dashes, 'simple', many volatile screenshots |
| `docs/ai-security/access-request-mcp/implementation-guide.mdx` | implementer | mixed | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | **7** | 7 | mixes reference (env vars, tools) with a full FastAPI + CLI tutorial duplicated from food demo; CLI client code has broken indentation and undefined utils module; preview model gemini-2.5-flash-preview-04-17, 'powerful', 'easily', em dashes, vague verify step |
| `docs/ai-security/access-request-mcp/overview.mdx` | decision maker | explanation | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **10** | 10 | hype phrasing ('bridges the gap', 'foundation for secure agent workflows') and broken bold markup 'a**nd'; no diagram of the request/approve flow; MCP not expanded, naming drifts (Access Request MCP vs Permit MCP vs MCP Server) |
| `docs/ai-security/framework.mdx` | decision maker | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | H1 '4-Perimeter' vs title 'Four Perimeter' and H3s directly under H1; feature bullet lists read as marketing ('Utilize OpenAI's language models') with commented-out placeholder examples; Further Reading links go to blog posts, not the docs integration pages for each perimeter |
| `docs/ai-security/integrations/langchain.mdx` | AI agent builder | tutorial | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | **8** | 8 | 'Scheduling Eligible Users' set and restricted-doc access never configured yet expected results rely on them; pins langchain ^0.1.0 / langchain-openai ^0.0.2 and a 2025 date, JWT creation and jwt_issuer/audience env vars unexplained; 'powerful abstractions', we/let's, em dashes |
| `docs/ai-security/integrations/langflow.mdx` | AI agent builder | tutorial | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | **5** | 5 | never explains installing Permit components in Langflow or minting test JWTs; docker command contains pasted 'bash CopyEdit' artifact, booking flow reuses info-flow screenshot 10.png, condition uses undefined resource.class, fake URLs api.flightpolicies.com; LangFlow/Langflow casing, we/let's, em dashes |
| `docs/ai-security/integrations/mongodb-rag.mdx` | AI agent builder | tutorial | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | **7** | 7 | ReBAC expanded as 'Role-Based Access Control (ReBAC)'; setup duplicated (Quickstart, Atlas setup, clone and .env repeated 3x) and quickstart says compose syncs everything while later steps run scripts manually; user ids inconsistent (carol/user_marketing_1 vs alice/bob), host scripts use http://permit-pdp:7000 |
| `docs/ai-security/integrations/openai-prompt-filtering.mdx` | AI agent builder | tutorial | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | **6** | 6 | classify() never implemented and users never created, so code cannot run; roles placed under Directory > Roles, tip claims container PDP needed for role-based permissions, broken link www.app.permit.io; ungrammatical opening sentence, dangling 'demonstrate how the system:', we/let's, em dashes |
| `docs/ai-security/integrations/pydantic-ai.mdx` | AI agent builder | tutorial | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | **6** | 6 | source link and clone path point to langchain-permit while resources link Permit-PydanticAI, PydanticAI links to a personal fork; attribute model inconsistent (test users use membership_tier/verified never defined, clearance high vs confidential, 'bookings' copied from flight demo), PERMIT_KEY vs PERMIT_API_KEY; 'powerful', 'full confidence', em dashes |
| `docs/api/api-reference.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 13 | no request example on page itself (links to Calling the API) |
| `docs/api/api-with-cli.mdx` | implementer | mixed | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 10 | rate-limit numbers removed pending owner confirmation; node code tag pending code fix |
| `docs/api/background-tasks.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | wait curl backtick, missing Content-Type, status failed vs failure, truncated support_link: pending code fix |
| `docs/api/elements/access-request-api.mdx` | implementer | reference | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | **17** | 7 | short delta page with no runnable sample (proposed block in codefix); elements_config_id meaning unverified |
| `docs/api/elements/access-requests.mdx` | implementer | reference | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 6 | pending code fix (curls, headers as filters, response field names/status values, loginAs tenantId); cookie auth vs spec bearer unverified; repeated response JSON |
| `docs/api/elements/operation_approval.mdx` | implementer | reference | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 6 | pending code fix (curls, element_id header, maya@permit.io, loginAs tenantId); login section duplicates access-requests page |
| `docs/api/elements/overview.mdx` | implementer | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 8 | pending code fix (trailing backslash); origin header unexplained |
| `docs/api/examples/autopopulate-actions.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | JSON example (with allow-review) differs from curl body; curl carries unneeded authority/origin headers and placeholder permit_env_api_key; no verify step (create a resource and see actions), 'Please remember' |
| `docs/api/examples/create-tenant.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | create curl missing line continuation after auth header so body is dropped; 'The return user object' for a tenant, closing fence on same line as JSON; 'First of all we need', no H1/intro sentence |
| `docs/api/examples/filter-relationship-tuple.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | H1 'Overview' instead of task title; filter descriptions are lowercase fragments ('filter the relationship tuples data'), 'in this example' repeated; 'The return user object' for tuples |
| `docs/api/examples/filter-role-associations.mdx` | implementer | reference | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | **12** | 12 | first section filters roles by attribute (schema API), not role assignments the title promises; H1 'Overview'; 'The return user object' wording, 'First of all we need' |
| `docs/api/examples/filter-users.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | inline ':::note ... :::' admonitions and a stray ':::' break rendering; tenant path uses bare tenant_id placeholder and a commented-out curl; test@gmail.com in sample data, H1 'Overview' |
| `docs/api/examples/get-project-and-env.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | list endpoints shown returning a single object with trailing comma; 'previous step' link points to the same page; 'A large majority', H1 'Overview' |
| `docs/api/examples/list-user-permissions.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | first request missing 'curl' and quoting; method ignores resource-instance (ReBAC) and derived roles and ends 'get the final list of permitted roles' (means permissions); no pointer to PDP-side permission listing, 'E.G', lowercase H4s |
| `docs/api/pdp-api-reference.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 12 | no example request; short reference by design |
| `docs/api/pdp-statistics.mdx` | operator | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | untagged code blocks with tab indentation pending code fix |
| `docs/api/pdp-webhooks.mdx` | operator | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 10 | webhooks endpoint not in public OpenAPI spec (exists per 401 probe); curl /webooks + continuation + payload trailing comma pending code fix; min PDP version removed |
| `docs/api/rbac/disable-rebac-to-increase-performance.mdx` | operator | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 12 | PDP restart requirement unverified; rebac_disabled not in OpenAPI spec (confirmed in backend source) |
| `docs/api/rbac/rbac-example.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 4 | pending code fix (double commas, missing curl, content type) |
| `docs/api/rebac/groups/groups-ui.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 9 | 7 screenshots of volatile UI; UI labels not verifiable from source |
| `docs/api/rebac/groups/groups.mdx` | implementer | mixed | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 5 | several curl samples broken (curly quote, unquoted key, blank lines, wrong paths, env role vs resource role, tenants): pending code fix; relation names removed |
| `docs/api/rebac/rebac-api-calls.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 11 | no response body examples; Python tab only for relations |
| `docs/api/v2-migration-guide.mdx` | maintainer | mixed | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **17** | 8 | compat env/project names chosen from code sample (v1_global_project/v2_global_env) need owner confirmation; mixed explanation and how-to; v1 page ages |
| `docs/api/working-with-abac/building-conditions.mdx` | implementer | reference | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 7 | pending code fix (True, trailing commas, not as array); subject./environment. prefixes may fail policy generation (see claims) |
| `docs/api/working-with-abac/condition-set-rules.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 6 | pending code fix (permissions array to permission string); endpoint shown in prose, no curl |
| `docs/api/working-with-abac/condition-sets.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 7 | pending code fix (private_repositories key, equals with arrays, resource_id); no full curl |
| `docs/api/working-with-abac/examples.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 1 | 2 | 2 | 2 | **18** | 6 | pending code fix (not with array, string operand, permissions field); key names mention Stanford while policy does not model the university |
| `docs/api/working-with-abac/operators.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | pending code fix (untagged blocks, missing commas); long page |
| `docs/api/working-with-abac/overview.mdx` | implementer | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 3 | landing page has no request example; links to child pages carry the samples |
| `docs/authentication/auth0/auth0-demo-app.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 8 | pending code fix (env var name, cd before checkout); Auth0 dashboard steps volatile |
| `docs/authentication/auth0/auth0-sync-script.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | pending code fix (family_name field, cd auth0); Auth0 dashboard labels volatile |
| `docs/authentication/auth0/permit-integration.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 6 | pending code fix (assignRole block, await, userObj); Auth0 Action UI steps volatile |
| `docs/authentication/cognito/cognito-demo-app.mdx` | implementer | mixed | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | demo repo sync route broken (workaround documented); pending code fix (env names, payload scope) |
| `docs/authentication/cognito/permit-integration.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | pending code fix (placeholders, verifier, scope, await) |
| `docs/authentication/fusionauth.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 4 | personal repo on 2022 SDK with committed secrets; not runnable as-is (owner review) |
| `docs/authentication/hankopermit.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 6 | pending code fix (clone URL, PDP URL, Permit init); 14 screenshots to maintain |
| `docs/authentication/logto.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | pending code fix (angle-bracket URLs, SSR snippet); Logto Console labels volatile |
| `docs/authentication/permit-and-authentication.mdx` | decision maker | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 8 | no code examples by design (explanation page links to how-tos) |
| `docs/authentication/stytch/permit-integration.mdx` | implementer | tutorial | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 6 | pending code fix (browser SDK, env prefix, undefined vars); userEmail source unconfirmed |
| `docs/authentication/supertokens.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 4 | personal 2022 repo on SDK 0.0.5, verify steps not run; pending code fix (pdp-v2 image, lang tags) |
| `docs/authentication/your-authentication.mdx` | implementer | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 8 | handoff steps link to SDK reference instead of inline code |
| `docs/concepts/control-plane-and-data-plane.mdx` | new user | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 14 | no code or verify step (explanation page); relies on HybridDeploymentDiagram component added |
| `docs/concepts/deployment-options.mdx` | decision maker | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 14 | no docs page for light on-prem setup (support email only); diagrams are SVG images, not coded components |
| `docs/concepts/differentiator-checklist.mdx` | decision maker | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 13 | performance figures and compliance claims need owner upkeep; no examples (checklist) |
| `docs/concepts/multi-tenant-authorization.mdx` | implementer | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 10 | check snippet is a fragment without client setup; UI tenant creation steps delegated to Sync users |
| `docs/concepts/oss-fallback.mdx` | decision maker | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 9 | migration steps are high-level with no runnable examples; SDK adaptation path not documented |
| `docs/concepts/pdp/cloud-pdp-benchmarks.mdx` | operator | reference | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 14 | no load-test harness or payload to reproduce; October 2025 snapshot will age |
| `docs/concepts/pdp/cloud-pdp-capabilities.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 11 | rate limits and support matrix are volatile; no curl example; overview.mdx AuthZen samples still use /v1/access paths (not this file) |
| `docs/concepts/pdp/configuration.mdx` | operator | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 12 | pending code fix (JSON sample with comments); 'Added in vX' notes and pre-0.9 settings not verifiable from source |
| `docs/embeddable-uis/element-login.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 7 | pending code fix (Node/Python/.NET init, C# and Java loginAs samples, cookie quote, Python cookie GET, TS annotations in js blocks); element_bearer_token and permit-js 0.5.2 floor unverified |
| `docs/embeddable-uis/element/access-request.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 8 | screenshot-heavy steps; tenant warning consequence vague |
| `docs/embeddable-uis/element/approval-management.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 8 | whether iframe takes tenantKey unverified; role key case (_Reviewer_ vs _reviewer_) |
| `docs/embeddable-uis/element/audit-logs.mdx` | admin | landing | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 7 | no iframe example; embed steps generalized from other element pages |
| `docs/embeddable-uis/element/operation-approval.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | no SDK/API example for assigning the reviewer resource role; role key case unconfirmed; two near-duplicate iframe blocks |
| `docs/embeddable-uis/element/user-management.mdx` | admin | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 7 | explanation page with no code by design; embedding steps live on embedding-elements |
| `docs/embeddable-uis/email-configuration-and-templates.mdx` | admin | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | pending code fix (Python sample indentation, top-level await); SMTP field names not listed |
| `docs/embeddable-uis/embedding-elements.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | pending code fix (TS annotations in js block); dashboard click path volatile |
| `docs/embeddable-uis/overview.mdx` | new user | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 11 | no code by design (landing page); ElementTile descriptions kept from original |
| `docs/embeddable-uis/permission-levels.mdx` | admin | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | which element types use fewer levels unverified; UI labels volatile |
| `docs/embeddable-uis/troubleshooting.mdx` | implementer | reference | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 11 | screenshot alt text written from headings; /login_elements request for frontendOnly unverified |
| `docs/embeddable-uis/user-preview.mdx` | admin | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | tenant dropdown visibility note unverified; short page |
| `docs/embeddable-uis/webhooks.mdx` | implementer | mixed | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 7 | which invite flow is default and how it is chosen unknown; Authorization header format inferred; schemas are pseudo-Python, no handler example |
| `docs/faq.mdx` | new user | reference | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | community Q&A section is explanation inside a FAQ; AWS Marketplace URL carries tracking params; Slack link uses docs-to-slack (see claims) |
| `docs/getting-started/ai-support.mdx` | new user | how-to | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 18 | names vendor Inkeep and screenshots volatile UI; Slack link io.permit.io/slack while slack-support page uses docs-to-slack; intro does not name who the page is for |
| `docs/getting-started/slack-support.mdx` | new user | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 11 | /permit-escalate plan gating and private-channel restriction only partly verifiable (pricing page lists dedicated Slack for Pro/Enterprise); AI agent handle volatile |
| `docs/home.mdx` | new user | landing | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 2 | **16** | 16 | all content lives in imported components (content.js), not visible or retrievable from the page source; card links not verifiable from MDX; no plain-text next steps outside components |
| `docs/how-to/SDLC/CI-CD.mdx` | operator | explanation | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 2 | 0 | **8** | 8 | no concrete CI steps or API calls for copy-env/create-env despite 'Manage Policy Life Cycle' title; 'API secret key'/'API-Key'/'API-secret-keys' inconsistent; 'allows us', 'simply', 'robust', 'leveraging', H3 without H2 |
| `docs/how-to/SDLC/authz-testing.mdx` | operator | explanation | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 2 | 0 | **8** | 8 | no test examples (opa test, PDP integration test, CI config); vague 'In Permit, we incorporate these tests into our development cycles'; bold inside headings, 'thoroughly', 'vital role', passive voice |
| `docs/how-to/SDLC/modeling-implementation-components.mdx` | decision maker | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | **8** | 8 | 'Data Plane' used for users/tenants data, conflicting with glossary data plane = PDPs; typos ('his plane', 'we utilize its OPAL'), broken nested list, data filtering 'typically requires custom policy code' likely stale; em dashes, 'seamlessly', 'Let's', marketing asides |
| `docs/how-to/build-policies/abac/building-abac-policy.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 8 | user-set screenshot shows tenant.* conditions and set names differ slightly across screenshots; check shown as inline call |
| `docs/how-to/build-policies/abac/components.mdx` | new user | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 12 | conceptual examples only |
| `docs/how-to/build-policies/abac/defining-attributes.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 9 | curl uses API_SECRET_KEY placeholder (explained in prose) |
| `docs/how-to/build-policies/abac/overview.mdx` | new user | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 11 | none |
| `docs/how-to/build-policies/abac/patterns.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 7 | resource_ownership screenshot names attribute owner while code uses owners; local PDP command pins :latest |
| `docs/how-to/build-policies/abac/time-based-role.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 11 | pending code fix: check uses type _internal_api; tenant JSON lacks required name; tenant key attribute semantics unverified |
| `docs/how-to/build-policies/overview.mdx` | decision maker | explanation | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 18 | intro does not name the reader; Policy Editor screenshots will drift; Rego sample uses pre-v1 rule syntax without note |
| `docs/how-to/build-policies/policy-basics.mdx` | new user | mixed | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 5 | concept page with UI videos; videos and screenshots add maintenance risk; no code example (links to check page) |
| `docs/how-to/build-policies/rbac/building-rbac-policy.mdx` | new user | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 8 | verify step uses inline permit.check call, no full code block; screenshot of nav shows old Users label |
| `docs/how-to/build-policies/rbac/components.mdx` | new user | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | permission table example only, no code |
| `docs/how-to/build-policies/rbac/overview.mdx` | new user | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | no code; relies on arcade embed for demo |
| `docs/how-to/build-policies/rebac/building-rebac-policies.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 5 | videos and screenshots need upkeep; check examples use inline results rather than full SDK setup |
| `docs/how-to/build-policies/rebac/overview.mdx` | new user | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | prose policies still wrapped in untagged code fences (kept byte-identical) |
| `docs/how-to/bulk-operations.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 8 | curl samples broken (missing line continuations, stray -, extra brace, missing comma, trailing commas): pending code fix; per-call limits come from deployment config and can change |
| `docs/how-to/deploy/cloud-hosts/aws-ecs-fargate.mdx` | operator | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | no code sample for service networking, console steps depend on AWS UI screenshots; :latest image |
| `docs/how-to/deploy/cloud-hosts/gcp-cloud-run.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 12 | console screenshots and :latest tag can drift |
| `docs/how-to/deploy/cloud-hosts/helm.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 12 | chart defaults table can drift from values.yaml |
| `docs/how-to/deploy/cloud-hosts/kubernetes-raw.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | **19** | 10 | apply and wait commands need -n and permitio-pdp name (pending code fix); prose works around them |
| `docs/how-to/deploy/cloud-hosts/pulumi.mdx` | operator | how-to | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 10 | external example repo broken (pulumi new in non-empty dir, missing pulumi-kubernetes, dead sidecar helm repo); pending code fix in docs and example repo |
| `docs/how-to/deploy/cloud-hosts/terraform.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 10 | example repo uses dead sidecar helm repo and helm provider 2.x syntax; workaround in prose, pending code fix |
| `docs/how-to/deploy/deploy-to-production.mdx` | operator | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 9 | memory sizing formula (6 KB per object) and starting CPU/memory kept but not verifiable from source; :latest image tag |
| `docs/how-to/deploy/offline-mode.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 14 | version-gated feature (0.9.11) and backup filenames can drift |
| `docs/how-to/deploy/on-prem/change-organization-tier.mdx` | admin | how-to | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 12 | manual edit of an internal DB schema will rot if the schema changes; reference sections (field and schema tables) appended to a how-to |
| `docs/how-to/deploy/on-prem/installation.mdx` | operator | mixed | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 6 | pending code fixes (skip-images and flag-combination commands missing --gke, OpenShift --skip-images needs --skip-openshift-registry, push output, verify-image tag, TLS cert YAML must be base64, Policy Sync secret check, frontend curl); owner must choose between fixing the installer's no-flag path and the --gke doc change; service list needs updates as the chart changes |
| `docs/how-to/deploy/on-prem/landing.mdx` | decision maker | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | architecture diagram is ASCII art in a code block rather than a coded diagram component |
| `docs/how-to/deploy/on-prem/management.mdx` | operator | reference | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | pending code fixes (componentstatuses, OpenShift nesting of opensearch block, unread storageClass, policy-sync-ssh-key and postgres-secret commands, curl-based postgres/redis probe, duplicate tar in support bundle); still a long command catalog mixing how-to and reference; '35 services' comments in code |
| `docs/how-to/deploy/on-prem/pdp-deployment.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 13 | pending code fixes (/allowed payload shape and missing Authorization header, pdp.resources vs resources, pdp.replicaCount vs pdp.replicas, helm upgrade without --reuse-values); chart defaults in the parameter table can change with chart versions |
| `docs/how-to/deploy/on-prem/prerequisites.mdx` | operator | mixed | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 6 | cluster sizing figures and version minimums (Kubernetes 1.21, OpenShift 4.8, Helm 3.8) kept from the original without a source; storage IOPS recommendations unverified |
| `docs/how-to/deploy/on-prem/quick-start.mdx` | operator | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 7 | pending code fixes (install commands missing --gke, success output lines, uninstall only removes one of three Helm releases); same no-flag installer decision as installation.mdx |
| `docs/how-to/deploy/on-prem/reference.mdx` | operator | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 8 | pending code fixes (example values.yaml blocks contain keys the chart doesn't read: backup/restore, autoscaling, pgBouncer, monitoring, policySync.branch/syncInterval, storageClass); hardcoded image tags and sizes in examples (prose defers to package values.yaml, which isn't in a public repo) |
| `docs/how-to/deploy/on-prem/troubleshooting.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 12 | pending code fixes (frontend port-forward 3000:3000 vs service port 80, ingress name, keycloak-admin-secret/postgres-secret/policy-sync-ssh-key commands that the chart doesn't create) |
| `docs/how-to/deploy/overview.mdx` | implementer | explanation | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | Cloud PDP hostname and layout guidance may drift |
| `docs/how-to/enforce-permissions/all-tenants-check.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 11 | pending code fix (Go attribute map type, Java imports, read/create messages); no Node.js tab; tenant-ignored and ReBAC limitation not verified in policy source |
| `docs/how-to/enforce-permissions/authorized-users.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 8 | pending code fix (invalid Python ABAC, curl context nesting, missing await); Python only, no client init |
| `docs/how-to/enforce-permissions/bulk-check.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 11 | pending code fix in src/sdks/bulk-check (permit.bulk, Go alias p); use-case snippets lack client init |
| `docs/how-to/enforce-permissions/check.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (curl -d header, nested context); examples Node.js only with no client init |
| `docs/how-to/enforce-permissions/data-filtering.mdx` | implementer | explanation | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 7 | comparison section is explanation inside a how-to; single Go sample (empty API key pending code fix); no partial evaluation example |
| `docs/how-to/enforce-permissions/list-role-assignments.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | pending code fix (import path, user= keyword, semicolon); Python only, no client init or REST example |
| `docs/how-to/enforce-permissions/url-mapping/configuring-jwks.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 10 | pending code fix (JWKS JSON fragment); steps rely on four dashboard screenshots; dashboard labels not re-verified |
| `docs/how-to/enforce-permissions/url-mapping/fetching-jwks.mdx` | implementer | explanation | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | mixes JWK explanation with how-to; third-party provider URLs can drift; no copyable fetch example |
| `docs/how-to/enforce-permissions/url-mapping/regex-url-mapping-check.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | **18** | 9 | pending code fix (check URL does not match rule); long pattern catalog after the task; no SDK example except Java mention |
| `docs/how-to/enforce-permissions/url-mapping/url-mapping-check.mdx` | implementer | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | rule creation relies on dashboard screenshots; UI field labels not verified; no API example for simple rules on this page |
| `docs/how-to/enforce-permissions/user-permissions.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 8 | pending code fix (Node/Java filter commas, Java trailing comma, Node init ellipsis); no Python or Go filter example |
| `docs/how-to/manage-data/loading-data.mdx` | implementer | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | says 'three ways' but has four sections; hype ('elegantly crafted', 'seamless' x2, 'Simply', 'don't worry'); links to EAP-tagged API section, 'his access' |
| `docs/how-to/manage-data/local-facts-uploader.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | Node imports from 'permit' not 'permitio', Python uses await inside sync 'with' at top level; snippets rely on undefined ctx/newUser/userCreate; title 'Send Consistent Updates' vs 'proxy facts'/'Local Facts API' naming, no prereq that a PDP is running |
| `docs/how-to/manage-data/use-external-data-source.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | curl block untagged with blank lines, broken placeholder 'permit*key*', Rego in json block; PDP setup (v0.2.15, OPAL_SPLIT_ROOT_DATA) after steps, no verify; 'Simply', 'don't worry', 'That's it!', we/our |
| `docs/how-to/monitoring-pdps/monitoring-pdps.mdx` | operator | explanation | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | EAP UI; Data updates column meaning and log-error guidance not verifiable from source |
| `docs/how-to/ownership.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 6 | verify steps use inline checks; 11 screenshots mix old and new UI (Resource Instances tab under Policy) |
| `docs/how-to/permit-cli/permit-cli-api.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 11 | sync user, users list, proxy examples have wrong flags and literal double backslashes (pending code fix) |
| `docs/how-to/permit-cli/permit-cli-envs.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 12 | create/delete/member examples use camelCase flags and invalid role (pending code fix) |
| `docs/how-to/permit-cli/permit-cli-gitops.mdx` | implementer | reference | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 7 | create github example lacks permit prefix and passes true (pending code fix); no clone example block |
| `docs/how-to/permit-cli/permit-cli-pdp.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 12 | multi-letter aliases (-ua, -ra) depend on Commander parsing |
| `docs/how-to/permit-cli/permit-cli-policy.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 9 | simple example misses continuation and unquoted pipes, openapi example uses --key and a personal repo URL (pending code fix) |
| `docs/how-to/permit-cli/permit-cli-test.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 12 | run audit examples use angle brackets and camelCase flags (pending code fix); no code-sample example |
| `docs/how-to/permit-cli/permit-cli.mdx` | new user | landing | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | command index must be updated when CLI commands change |
| `docs/how-to/policy-guard/policy_guard.mdx` | admin | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | UI and ReBAC support 'on the roadmap' + Slack EAP ask; use cases vague, no concrete example; 'Easily', 'streamlined' |
| `docs/how-to/policy-guard/policy_guard_api.mdx` | implementer | how-to | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 2 | 1 | 1 | **9** | 9 | invalid JSON (key" missing quote, trailing commas) and proj_id vs project_id; no Content-Type header, no expected responses; bold sentences stand in for intros, let's/we |
| `docs/how-to/sync-users.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | visible SDK sample is an untagged object with no call (pending code fix); API sample untagged |
| `docs/how-to/use-audit-logs/audit-log-replay.mdx` | operator | reference | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | example request uses concurrency and string timestamps (pending code fix); concurrency maximum not stated (API spec contradicts itself) |
| `docs/how-to/use-audit-logs/debug-mode.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | curl enable/disable blocks miss a line continuation (pending code fix) |
| `docs/how-to/use-audit-logs/errors/cloud_pdp_not_supporting_abac.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 7 | no inline SDK pdp option snippet |
| `docs/how-to/use-audit-logs/errors/no_matching_resourcesets.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_matching_rules.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_matching_usersets.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_permission.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_role_in_tenant.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_such_action.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_such_resource.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_such_tenant.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/errors/no_user_roles.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/errors/user_not_synced.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | examples by link only |
| `docs/how-to/use-audit-logs/logs-forwarder.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | **18** | 9 | no values-file code sample; verify step for Elasticsearch is generic |
| `docs/how-to/use-audit-logs/troubleshooting.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | no inline check snippet; relies on linked pages |
| `docs/how-to/use-audit-logs/types-and-filtering.mdx` | admin | mixed | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | reason sample is a broken JavaScript string (pending code fix); retention period unstated |
| `docs/integrations/GraphQL/apollo_server.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | getUserIdFromJWT undefined and isMutation undeclared, hardcoded token; no verify step; H2 duplicates title, H4 steps without H3, typo 'got to' |
| `docs/integrations/GraphQL/overview.mdx` | implementer | explanation | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | **7** | 7 | data source sample invalid JS (private fields, missing await/paren, stray '});'); @permit directive shown without implementation; 'effortless', 'terrible sin', ';-)' |
| `docs/integrations/SCIM/EntraID.mdx` | admin | how-to | 1 | 2 | 2 | 1 | 1 | 2 | 1 | 1 | 0 | 1 | **12** | 12 | test section uses Provision on demand right after warning against it; API key anchor on connecting-your-app looks broken, 'step 6 from before'; 10 Azure UI screenshots |
| `docs/integrations/SCIM/OKTA.mdx` | admin | how-to | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | **10** | 10 | prereqs without links, no verify that users appear in Permit, Push Groups-to-roles mapping unexplained; imgur-hosted screenshot; 'seamless' x2, OKTA/API KEY casing |
| `docs/integrations/SCIM/SCIM_overview.mdx` | admin | mixed | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 2 | 1 | 1 | **12** | 12 | generic SCIM explainer mixed with multi-tenant URL reference; all headings H3, no H2; 'streamlines', 'comprehensive', 'seamless' |
| `docs/integrations/database-access-control/trino-integration.mdx` | implementer | mixed | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | 1 | **13** | 13 | code block titles like '24:38:trino-authz-example/trino-authz.yaml' are editor artifacts; properties tagged yaml, quick start list indentation broken, 'at to define' typo; config example filter missing expression |
| `docs/integrations/feature-flagging/casl.mdx` | implementer | tutorial | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | **8** | 8 | garbage text 'q1 1§1', missing comma in JS object, backendUrl /api/something vs /api/dashboard, resource names differ; 'synergy', 'seamlessly', 'dedicated pursuit'; connecting-your-app anchors look broken, no verify |
| `docs/integrations/gateways/aws-api-gateway.mdx` | implementer | how-to | 1 | 1 | 2 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | Lambda returns bare bool and reads event['action'], not a valid API Gateway authorizer response; HTTP API chosen but steps use REST 'Resources' menu; 6 AWS console screenshots, no verify output |
| `docs/integrations/gateways/kong.mdx` | implementer | how-to | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | **6** | 6 | docker command contains invisible U+2060 characters (not copy-runnable); '1-5 ms' claim, 'recent update', stale 'Copy SDK secret key' UI; 'seamlessly', 'easily', 'powerful', 'within minutes' |
| `docs/integrations/gateways/nginx.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no sample request with permit-* headers or expected 200/403; audit link app.permit.io/audit and Slack invite likely stale; numbered headings (3.1) and duplicate H1 |
| `docs/integrations/gateways/overview.mdx` | decision maker | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | AWS Cedar engine claim likely stale; typos ('doucments', 'i]If'); Object Filtering API unlinked, 'easily', 'streamlining' |
| `docs/integrations/gitops/custom_policy.mdx` | implementer | tutorial | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | **6** | 6 | final Rego invalid ('package package', import permit.rbac vs data.permit.rbac, else chain logic), untagged blocks; hardcoded 2023 dates and Cedar claim; let's/we, 'Were', emoji shortcode |
| `docs/integrations/gitops/github.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | **12** | 12 | 'API_KEY from step 4' should be step 3; says edit custom/root.rego while custom_policy page uses custom/custom.rego + root.rego; untagged ssh-keygen block, emoji, we/our |
| `docs/integrations/gitops/overview.mdx` | decision maker | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | 'available in trial to all users' unverifiable; grammar ('is allowing you implement'), 'saves us from reinventing the wheel', we; GitOps/Gitops casing, all H3 |
| `docs/integrations/infra-as-code/terraform-provider.mdx` | implementer | mixed | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | 1 | **12** | 12 | main.tf hardcodes API key while variables.tf is defined but unused, no verify in Permit; provider version ~> 0.0.14 hardcoded; OpenTofu install/benefits digression with unverified 'Enhanced Features' |
| `docs/integrations/permit-mcp/overview.mdx` | AI agent builder | tutorial | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | stale pinned model gemini-2.5-flash-preview-04-17 and server.py link to personal fork (Tammibriggs); code split into de-indented fragments with stray backtick, resource named restaurant vs restaurants; no verify step, PDP not expanded, we/let's voice |
| `docs/integrations/policy-engines/overview.mdx` | decision maker | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | competitive claims 'unlike other permission services' and 'easiest way to deploy Cedar'; OPA/PDP/OPAL not expanded, thin sections with only a diagram; no link to how to choose or configure an engine |
| `docs/integrations/workflow-automation/n8n.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | hype intro ('transforms', 'Seamlessly', 'intelligent'); no verify step, PDP setup not linked, sample responses look invented (decision timestamp, spending-limit reason); duplicate H1 and 'Settings -> API Keys' casing |
| `docs/manage-your-account/creating-environments.mdx` | operator | how-to | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | copy JSON samples missing closing brace and env curls lack Content-Type: pending code fix; dashboard steps rely on video; copied-objects checklist not verified against source |
| `docs/manage-your-account/permit-logs.mdx` | admin | how-to | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | owner-only visibility not verified in source; no request sample for the log APIs; screenshots of volatile UI |
| `docs/manage-your-account/projects-and-env.mdx` | admin | mixed | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 7 | concept plus dashboard how-to on one page; several steps are video-only; no API sample (links to owner pages) |
| `docs/manage-your-account/workspace-api.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | endpoint map without request samples (links to API reference and creating-environments) |
| `docs/manage-your-account/workspace-settings.mdx` | admin | how-to | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | members, API keys, and DPA share one page; create/rotate key steps are video-only; owner-only role details from UI screenshots |
| `docs/manage-your-account/workspace-usage.mdx` | admin | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 10 | UI location of usage widget is volatile; no API equivalent documented |
| `docs/modeling/feature-flagging.mdx` | implementer | tutorial | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | permit.check not awaited and hardcoded userAttributes in loader differ from render checks; broken anchors to /overview/connecting-your-app#1-... and #2-...; em dash, 'seamlessly', 'meticulously', 'diligently', 'we support them all' |
| `docs/modeling/food-delivery-system-example-using-nuxt.mdx` | implementer | tutorial | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | Vue snippet has syntax errors (missing closing parens in if checks); 'ABAC Rules tab' vs 'ABAC Sets tab' inconsistency, verify section placed after Conclusion; GIFs of volatile UI, 'Permit token'/'NodeJS' terms |
| `docs/modeling/google-drive.mdx` | implementer | tutorial | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | Node.js tabs fenced as python in section 4; 'US West'/'US East' PDP tabs look inverted or unexplained; Java setup tab with no Java examples, hardcoded SDK 2.0.0, Python init uses '...' |
| `docs/modeling/mesa-verde.mdx` | decision maker | mixed | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **8** | 8 | 'Configuration Guide' is walkthrough prose, not runnable steps, mixed with marketing; em dashes throughout, 'in minutes', 'intuitive', 'enjoying'; Wire_Transfer create action named 'Operate', typo 'Reciever', broken Strong Auth bullet |
| `docs/modeling/other-code-examples.mdx` | new user | landing | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | **8** | 8 | all content hidden in a React examples component, no text for search/AI; hype ('simplifies', 'powerful', 'seamless', 'streamline', 'leverage'); starts at H3 with import mid-page |
| `docs/modeling/pink-mobile.mdx` | implementer | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | 'Account#Owner' code sample actually shows Plan#editor; three-plane model redefines 'control plane' against glossary, typo 'plains'; no run instructions (defers to repo), fragments with '...', harry@potter.io sample data |
| `docs/modeling/rebac-GHC.mdx` | implementer | tutorial | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | **9** | 9 | hosted demo URL with shared passwords likely to rot; Rego sample uses pre-OPA-1.0 'allow {' syntax, custom policy steps vague ('In the relevant branch'); code blocks without language, 'Connect' menu and PERMIT_SDK_KEY naming |
| `docs/overview/access-requests-and-approvals.mdx` | implementer | tutorial | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | steps summarize linked Elements pages; no code on page; YouTube videos volatile |
| `docs/overview/advanced-authorization-queries.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | samples use other data than Alice/Bob scenario and curl bodies use id instead of key (pending code fix) |
| `docs/overview/best-practices.mdx` | decision maker | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 15 | no end-to-end worked example |
| `docs/overview/configure-your-first-rbac-policy.mdx` | new user | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 11 | no code by design; steps depend on dashboard videos and labels |
| `docs/overview/connecting-your-app.mdx` | new user | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 14 | pending code fixes in Go/Java/.NET/Ruby/sync-Python partials; UI screenshots and pinned SDK versions will need upkeep |
| `docs/overview/create-a-rebac-policy.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 8 | test snippet uses member_group placeholder (pending code fix); Dashboard Viewer column in screenshot differs from table |
| `docs/overview/get-api-key.mdx` | new user | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 15 | dashboard screenshots need upkeep |
| `docs/overview/glossary.mdx` | new user | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 12 | no Permit MCP Gateway or Edge PDP entries |
| `docs/overview/how-does-it-work.mdx` | new user | explanation | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 16 | PNG connectivity diagram alongside coded diagrams |
| `docs/overview/local-authorization-microservice.mdx` | implementer | mixed | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | why-section plus how-to on one page; metrics URL shows 7766 but OPA metrics are on 8181 (pending code fix); performance figures need upkeep |
| `docs/overview/perform-a-local-policy-check.mdx` | implementer | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | check call itself lives on the linked check page |
| `docs/overview/perform-policy-check-with-cloud-pdp.mdx` | new user | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | check-function-false/true samples missing await (pending code fix); dashboard screenshots need upkeep |
| `docs/overview/run-pdp.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 12 | untagged docker code blocks (pending code fix); Cloud tab example is Node.js only |
| `docs/overview/setup-attribute-based-access-control.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 6 | no runnable check sample, only a results table; video-based UI steps |
| `docs/overview/sync-application-data-into-permit.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | embedded sync-sdk-request JS uses permit.users.sync (pending code fix); page not in sidebar |
| `docs/overview/sync-applications-data.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 11 | src/sdks samples: wrong Node names, broken curl, real-person data (pending code fix) |
| `docs/overview/sync-your-first-user-with-sdk.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 10 | JS tabs use wrong SDK methods and tenant curl URLs are invalid (pending code fix); default-tenant screenshot shows Employee role not assigned in walkthrough |
| `docs/overview/use-the-permit-api-and-sdk.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | invalid log/throwOnError snippets, account:view vs read, broken curl first-call (pending code fix); Node.js only |
| `docs/overview/walkthroughs-intro.mdx` | new user | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 1 | 1 | 2 | **16** | 15 | guide list lives in src/components/home-page/content.js, not retrievable from MDX |
| `docs/overview/why-permit.mdx` | decision maker | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 11 | no diagram or cost comparison; product claims beyond owner-confirmed ones deferred to permit.io |
| `docs/permit-mcp-gateway/advanced-features.mdx` | decision maker | explanation | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **16** | 8 | most feature behavior (interrogation, receipts, monitoring) unverified and availability logged for owner |
| `docs/permit-mcp-gateway/architecture.mdx` | maintainer | mixed | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | page mixes explanation with an upstream verification how-to; sequence diagrams (code blocks) still embed Redis key names, a 5-min refresh value and one em dash inside mermaid; customer-controlled admin dashboard location unverified |
| `docs/permit-mcp-gateway/audit-logs.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 12 | dashboard tab labels and screenshots will drift |
| `docs/permit-mcp-gateway/authentication-methods.mdx` | admin | reference | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 15 | pending code fix (OIDC callback block); how-to setup steps inside a reference; third-party console labels drift |
| `docs/permit-mcp-gateway/consent-service.mdx` | implementer | explanation | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 13 | session expiry now contradicts guide/advanced-features/overview 30d/90d wording (owner to confirm); revocation effect on sessions unverified |
| `docs/permit-mcp-gateway/demos/linear-mcp-gateway.mdx` | AI agent builder | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | about 20 volatile UI screenshots; host creation click path differs slightly from host-setup (Hosts vs Dashboard) |
| `docs/permit-mcp-gateway/demos/n8n-linear-mcp-gateway.mdx` | AI agent builder | tutorial | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | per-tool trust screen vs consent slider conflict logged; webhook and fetcher nodes not shown |
| `docs/permit-mcp-gateway/enterprise-deployment.mdx` | decision maker | explanation | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 10 | customer-controlled model details (configurable audit log location, migration between models) not verifiable in source; no concrete example of a model choice |
| `docs/permit-mcp-gateway/guide.mdx` | admin | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | many UI screenshots and trust keyword list are maintenance risk; long page |
| `docs/permit-mcp-gateway/host-setup.mdx` | admin | how-to | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **17** | 9 | rollout planning section still mixes planning with the how-to; client snippet style (mcp-remote vs url key) still differs from quickstart |
| `docs/permit-mcp-gateway/http-egress-proxy/authorization.mdx` | operator | explanation | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 10 | where a person revokes access (account page) not verified; consent flow shows no sample output |
| `docs/permit-mcp-gateway/http-egress-proxy/cli.mdx` | operator | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 12 | asg run adapter and env-var details track a fast-moving CLI (v0.5.0) |
| `docs/permit-mcp-gateway/http-egress-proxy/connecting-agents.mdx` | AI agent builder | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | container-config output not shown; token-in-container example is prose only |
| `docs/permit-mcp-gateway/http-egress-proxy/credentials.mdx` | operator | mixed | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 10 | how-to plus reference tables on one page; asg proxy connect success output not shown |
| `docs/permit-mcp-gateway/http-egress-proxy/egress-rules.mdx` | operator | reference | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 11 | method class membership (read = GET/HEAD/OPTIONS) not verified in source; dashboard labels unverified |
| `docs/permit-mcp-gateway/http-egress-proxy/index.mdx` | decision maker | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 11 | landing page with no hands-on example by design; dashboard section name CLIs / APIs not verified against UI source |
| `docs/permit-mcp-gateway/http-egress-proxy/quickstart.mdx` | implementer | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 13 | pre-existing code comment in curl block keeps an em dash (code byte-identical rule); intercept verify result described generically; dashboard labels unverified |
| `docs/permit-mcp-gateway/http-egress-proxy/security.mdx` | operator | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 13 | explanation page with few config examples; vault env vars shown inline only |
| `docs/permit-mcp-gateway/human-in-the-loop.mdx` | admin | mixed | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | keyboard shortcuts and 10 screenshots are volatile UI; behaviors not verified against source |
| `docs/permit-mcp-gateway/index.mdx` | decision maker | landing | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 15 | topic table mirrors the sidebar and needs updating when pages are added |
| `docs/permit-mcp-gateway/managing-humans-and-agents.mdx` | admin | mixed | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **18** | 11 | agent identity sharing across humans unresolved (logged); mixes explanation with how-to procedures |
| `docs/permit-mcp-gateway/on-prem-installation.mdx` | operator | how-to | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 14 | pod counts and Kubernetes 1.25+ tied to current installer values; em dashes remain inside unchanged YAML/bash comments |
| `docs/permit-mcp-gateway/overview.mdx` | decision maker | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 8 | explanation page with no example flow beyond prose; audit log event list (sign-in, session events) not source-verified |
| `docs/permit-mcp-gateway/permit-integration.mdx` | maintainer | explanation | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 12 | min() table rows with relation above agent role not derivable from the 9 listed rules (owner to confirm); internal consent API route named |
| `docs/permit-mcp-gateway/platform.mdx` | admin | reference | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 10 | UI labels and screenshots unverified against the gateway source (rate limited); revoke semantics logged for owner |
| `docs/permit-mcp-gateway/quickstart.mdx` | new user | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fix for Claude Code --url and Claude Desktop url key; VS Code has prose pointer only, no snippet; client config formats are volatile |
| `docs/quick-start/aspnet.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 1 | 2 | **18** | 8 | pending code fix (PDP_URL ignored, CLI command); sidebar label still says ASP.NET for an HttpListener console app |
| `docs/quick-start/django.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 7 | pending code fixes (views.sync_user, Posts undefined, urlpatterns overwrite, template command); CSRF handled by warning only |
| `docs/quick-start/express.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | pending code fixes (assignRole JSON.stringify, missing app.listen, permit env template apply); dashboard UI steps and screenshots need upkeep |
| `docs/quick-start/fastapi.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | pending code fix (permit env template apply); dashboard UI steps need upkeep; Python curl screenshots removed (showed Express output) |
| `docs/quick-start/flask.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | pending code fixes (app.run placement, permit env template apply); asyncio.run per request kept, sync client linked |
| `docs/quick-start/gin.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fix (godotenv import, package main, permit env template apply); dashboard labels may drift |
| `docs/quick-start/nest.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fixes (assignRole JSON.stringify fails TS compile, template command); Next.js screenshots removed so verify is text-only |
| `docs/quick-start/nextjs.mdx` | implementer | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | pending code fix (middleware and route file paths, CLI template command); Edge runtime compatibility of permitio in middleware unverified |
| `docs/quick-start/rails.mdx` | implementer | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | pending code fix (sync_user, no Ruby SDK role assignment method, hash syntax error, CLI command); Ruby gem 0.0.4 is old; require conflict with Ruby quickstart partial |
| `docs/quick-start/spring-boot.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | pending code fix (CLI template command); pinned SDK version 2.0.0 |
| `docs/quickstart.mdx` | new user | tutorial | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 1 | 1 | 2 | **16** | 16 | role/resource/user/permission steps are only videos with one-line captions, no text click path; no verify step (e.g. run a check or view audit log); videos of volatile UI |
| `docs/sdk/cpp/quickstart-cpp.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | **17** | 7 | no install or usage steps beyond the repository; beta sidebar label unverified |
| `docs/sdk/dotnet/quickstart-dotnet.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fixes (apiURL named arg, Dictionary type, fence languages); options table mirrors constructor defaults |
| `docs/sdk/dotnet/role/AssignRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/dotnet/role/CreateRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | payload is a JS object literal, not C# (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/role/GetRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/dotnet/role/ListAssignedRoles.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | example uses JS const and passes tenantId as roleId (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/role/ListRoles.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/dotnet/role/UnassignRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example assigns result of a void Task (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/tenant/CreateTenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | payload is a JS object literal, not C# (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/tenant/DeleteTenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example assigns result of a void Task (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/tenant/GetTenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/dotnet/tenant/UpdateTenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | payload is a JS object literal, not C# (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/user/CreateUser.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/dotnet/user/DeleteUser.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example assigns result of a void Task (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/dotnet/user/GetUser.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/dotnet/user/SyncUser.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | C# example tagged js (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/erlang/quickstart-erlang.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 1 | **16** | 7 | repository is a generated server stub with no usage path; beta sidebar label unverified |
| `docs/sdk/golang/quickstart-golang.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | pending code fixes (permit.New, JS line in tenant block, map type); prose workarounds to delete after fix |
| `docs/sdk/golang/resource/Create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/resource/Delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/resource/Update.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/role/Create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | errors table repeated on every page |
| `docs/sdk/golang/role/Delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/role/Get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | GetById example passes uuid.String() (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/golang/role/Update.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 8 | example calls Roles.Create (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/golang/tenant/Create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/tenant/Delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/golang/tenant/Get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | GetById example passes uuid.String() (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/golang/tenant/List.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/tenant/Update.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | example uses nonexistent NewUpdateTenant (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/golang/user/AssignResourceRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/golang/user/AssignRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/golang/user/Create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/user/Delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | errors table repeated on every page |
| `docs/sdk/golang/user/Get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | GetById example calls Users.Get with uuid.String() (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/golang/user/GetAssignedRoles.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example passes role-key as the user key (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/golang/user/SyncUser.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | errors table repeated on every page |
| `docs/sdk/golang/user/UnassignRole.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example calls misspelled UnasignRole (pending code fix); prose works around the broken sample; errors table repeated on every page |
| `docs/sdk/java/quickstart-java.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fixes (user.key before declare, undefined tenant/resourceAttributes, staging API URL); pinned version 2.0.0 |
| `docs/sdk/java/resource/create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (undefined actions/attributes) |
| `docs/sdk/java/resource/delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/resource/get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (new UUID(String)) |
| `docs/sdk/java/resource/list.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending minor import fix |
| `docs/sdk/java/resource/update.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/role/assign-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending code fix (real person/company in sample) |
| `docs/sdk/java/role/create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending minor import fix |
| `docs/sdk/java/role/delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | delete warning wording inferred from API spec |
| `docs/sdk/java/role/get-assigned-roles.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending minor import fix |
| `docs/sdk/java/role/get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (new UUID(String)) |
| `docs/sdk/java/role/list.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending minor import fix |
| `docs/sdk/java/role/unassign-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending code fix (real person/company in sample) |
| `docs/sdk/java/role/update.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/tenant/create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 11 | pending code fix (attributes unused, real company) |
| `docs/sdk/java/tenant/delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/tenant/get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (new UUID(String)) |
| `docs/sdk/java/tenant/list.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending minor import fix |
| `docs/sdk/java/tenant/update.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/user/create.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (syntax error, missing UserRoleCreate ctor, real person) |
| `docs/sdk/java/user/delete.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/user/get.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | pending code fix (new UUID(String)) |
| `docs/sdk/java/user/list.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | none |
| `docs/sdk/java/user/sync.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** | 11 | pending code fix (real person, HashMap import) |
| `docs/sdk/kotlin/quickstart-kotlin.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | **17** | 7 | no install or usage steps beyond the repository; beta sidebar label unverified |
| `docs/sdk/nodejs/all-tenants.mdx` | implementer | mixed | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 1 | **17** | 7 | no Node.js call sample; curl and response sample broken (pending code fix); disclaimer sentence about wrong sample |
| `docs/sdk/nodejs/bulk-requests-examples.mdx` | implementer | mixed | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 7 | only curl samples on a Node.js page; curls broken (pending code fix) |
| `docs/sdk/nodejs/quickstart-nodejs.mdx` | implementer | tutorial | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 8 | pending code fixes (resources.create, malformed role fence, deprecated syncUser, undefined user/role); API-management section is a digression from the check tutorial |
| `docs/sdk/nodejs/relationship-tuple/list-relationship-tuples.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | include_total_count param and real company in samples (pending code fix) |
| `docs/sdk/nodejs/resource-instance/list-resource-instances.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | example result not assigned to a variable |
| `docs/sdk/nodejs/resource/create-resource.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/resource/delete-resource.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/resource/update-resource.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/role/assign-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/role/create-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/role/delete-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/role/get-assigned-roles.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/role/get-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/role/unassign-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/role/update-role.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/sync-policy-script/sync-policy.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 10 | outline references undefined employee_doc resource (pending code fix); empty skeleton blocks |
| `docs/sdk/nodejs/tenant/create-tenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/tenant/delete-tenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/tenant/get-tenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/tenant/list-all-tenant-users.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 11 | example result not assigned to a variable |
| `docs/sdk/nodejs/tenant/list-tenants.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | example result not assigned to a variable |
| `docs/sdk/nodejs/tenant/update-tenant.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | example uses deprecated flat alias and JSON.stringify (pending code fix) |
| `docs/sdk/nodejs/user/create-user.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/user/delete-user.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | example uses deprecated flat alias (pending code fix) |
| `docs/sdk/nodejs/user/get-user.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | example result not assigned to a variable |
| `docs/sdk/nodejs/user/list-users.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 10 | example result not assigned to a variable |
| `docs/sdk/nodejs/user/sync-user.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | example redeclares user and uses deprecated syncUser (pending code fix) |
| `docs/sdk/permit-prisma-extension.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | 2 | **18** | 12 | PermitError import missing in sample (pending code fix); long page mixing how-to and reference |
| `docs/sdk/php/quickstart-php.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 9 | sample has unused React imports and an employee name (optional fix logged); *@dev dependency on a generated client |
| `docs/sdk/python/quickstart-python.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fix for firstName keys in FastAPI example; version-gated timeout options |
| `docs/sdk/python/quickstart_python_sync.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 8 | pending code fixes (await in sync samples, 1.0.0rc1 full example with permit.write); warning admonition is a stopgap |
| `docs/sdk/python/sync-policy-script/sync-policy.mdx` | implementer | how-to | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 9 | script not idempotent, unused resource_obj, missing asyncio import in snippet (pending code fix) |
| `docs/sdk/python/usage-example.mdx` | implementer | reference | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 12 | wrong role_assignments.list kwargs, missing List import, real people in samples (pending code fix); many methods on one page |
| `docs/sdk/ruby/quickstart-ruby.mdx` | implementer | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | pending code fixes (require 'permit-sdk' vs lib/permit.rb, PDP URL scheme, resource key vs type); require fix needs a run to confirm |
| `docs/sdk/ruby/user/sync_user.mdx` | implementer | reference | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | Go := operator in sample (pending code fix) |
| `docs/sdk/sdks-overview.mdx` | implementer | reference | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 8 | parity marks not fully re-audited (doubtful .NET Get User Permission, Ruby Get Authorized Users); table lags SDK releases |
| `docs/status.mdx` | operator | landing | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | 2 | **18** | 6 | iframe keeps fixed 1080px width and scale, weak on mobile; service list mirrors live status page and can drift |
| `docs/updates-and-feedback/changelog.mdx` | new user | landing | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 6 | Canny changelog last entry Feb 2025; Productlane changelog may be the current one (owner decision) |
| `docs/updates-and-feedback/feature-requests.mdx` | new user | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 6 | feature requests on Canny while roadmap page on Productlane also accepts requests |
| `docs/updates-and-feedback/roadmap.mdx` | decision maker | landing | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 6 | roadmap URL redirects to Productlane /request; describes third-party page layout that can change |

### Deferred pages

- `docs/concepts/pdp/new-edge-pdp-architecture.mdx` (renamed by PR #652)
- `docs/concepts/pdp/new-edge-pdp-configuration.mdx` (renamed by PR #652)
- `docs/concepts/pdp/new-edge-pdp-deployment.mdx` (renamed by PR #652)
- `docs/concepts/pdp/new-edge-pdp-feature-parity.mdx` (renamed by PR #652)
- `docs/concepts/pdp/new-edge-pdp-how-it-works.mdx` (renamed by PR #652)
- `docs/concepts/pdp/new-edge-pdp.mdx` (renamed by PR #652)
- `docs/concepts/pdp/overview.mdx` (renamed by PR #652)
