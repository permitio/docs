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
| 18-20 (world-class) | 2 | 100 |
| 16-17 (publishable) | 3 | 27 |
| 12-15 | 47 | 30 |
| 8-11 | 241 | 164 |
| 0-7 | 50 | 22 |
| **Publishable (>=16, no zeroes)** | 5 | 127 |
| **Mean total** | 9.7 | 13.0 |
| **Pages scored** | 343 | 343 |

## Folder summary

| Folder | Pages | Mean before | Mean current | Publishable now | Most common issues |
|---|---|---|---|---|---|
| `ai-security/access-request-mcp` | 3 | 7.3 | 7.3 | 0 | style (3 zeroes), maint (2 zeroes), task (1 zeroes) |
| `ai-security` | 1 | 10.0 | 10.0 | 0 | no zeroes |
| `ai-security/integrations` | 5 | 6.4 | 6.4 | 0 | maint (4 zeroes), style (4 zeroes), acc (4 zeroes) |
| `api` | 7 | 10.7 | 10.7 | 0 | acc (2 zeroes), maint (1 zeroes), style (1 zeroes) |
| `api/elements` | 4 | 6.8 | 18.0 | 4 | no zeroes |
| `api/examples` | 7 | 11.9 | 11.9 | 0 | no zeroes |
| `api/rbac` | 2 | 8.0 | 19.0 | 2 | no zeroes |
| `api/rebac` | 3 | 8.3 | 8.3 | 0 | maint (2 zeroes), task (1 zeroes), acc (1 zeroes) |
| `api/working-with-abac` | 6 | 6.3 | 18.8 | 6 | no zeroes |
| `authentication/auth0` | 3 | 8.3 | 19.0 | 3 | no zeroes |
| `authentication/cognito` | 2 | 8.5 | 18.0 | 2 | no zeroes |
| `authentication` | 6 | 6.8 | 18.5 | 6 | no zeroes |
| `authentication/stytch` | 1 | 6.0 | 17.0 | 1 | no zeroes |
| `concepts` | 5 | 12.0 | 18.0 | 5 | no zeroes |
| `concepts/pdp` | 3 | 12.3 | 18.0 | 3 | no zeroes |
| `embeddable-uis` | 8 | 9.2 | 9.2 | 0 | style (5 zeroes), acc (1 zeroes), ex (1 zeroes) |
| `embeddable-uis/element` | 5 | 7.6 | 7.6 | 0 | style (5 zeroes), maint (3 zeroes), task (2 zeroes) |
| `(root)` | 4 | 12.0 | 17.0 | 4 | no zeroes |
| `getting-started` | 2 | 14.5 | 18.0 | 2 | no zeroes |
| `how-to/SDLC` | 3 | 8.0 | 8.0 | 0 | style (3 zeroes), task (2 zeroes), term (2 zeroes) |
| `how-to/build-policies` | 13 | 9.5 | 18.5 | 13 | no zeroes |
| `how-to` | 3 | 7.7 | 18.7 | 3 | no zeroes |
| `how-to/deploy` | 18 | 9.8 | 13.7 | 9 | acc (6 zeroes), style (4 zeroes), maint (3 zeroes) |
| `how-to/enforce-permissions` | 11 | 9.1 | 18.2 | 11 | no zeroes |
| `how-to/manage-data` | 3 | 10.0 | 10.0 | 0 | style (2 zeroes) |
| `how-to/monitoring-pdps` | 1 | 10.0 | 18.0 | 1 | no zeroes |
| `how-to/permit-cli` | 7 | 10.3 | 10.3 | 0 | acc (4 zeroes), task (1 zeroes), ex (1 zeroes) |
| `how-to/policy-guard` | 2 | 9.5 | 9.5 | 0 | acc (1 zeroes), ex (1 zeroes) |
| `how-to/use-audit-logs` | 16 | 9.2 | 9.2 | 0 | ex (13 zeroes), acc (6 zeroes), style (2 zeroes) |
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
| `permit-mcp-gateway` | 16 | 11.1 | 15.4 | 9 | style (5 zeroes), maint (1 zeroes), acc (1 zeroes) |
| `permit-mcp-gateway/demos` | 2 | 9.0 | 17.5 | 2 | no zeroes |
| `permit-mcp-gateway/http-egress-proxy` | 8 | 11.2 | 11.2 | 0 | style (8 zeroes) |
| `quick-start` | 10 | 9.9 | 9.9 | 0 | maint (10 zeroes), acc (5 zeroes), ex (1 zeroes) |
| `sdk/cpp` | 1 | 7.0 | 17.0 | 1 | no zeroes |
| `sdk/dotnet` | 15 | 10.7 | 11.3 | 1 | ex (4 zeroes) |
| `sdk/erlang` | 1 | 7.0 | 16.0 | 1 | no zeroes |
| `sdk/golang` | 21 | 9.9 | 10.3 | 1 | ai (14 zeroes), acc (5 zeroes), ex (3 zeroes) |
| `sdk/java` | 24 | 10.7 | 11.1 | 1 | ex (6 zeroes) |
| `sdk/kotlin` | 1 | 7.0 | 17.0 | 1 | no zeroes |
| `sdk/nodejs` | 27 | 9.7 | 10.1 | 1 | acc (11 zeroes), ex (11 zeroes), ai (5 zeroes) |
| `sdk` | 2 | 10.0 | 15.0 | 1 | no zeroes |
| `sdk/php` | 1 | 9.0 | 18.0 | 1 | no zeroes |
| `sdk/python` | 4 | 9.8 | 14.5 | 2 | acc (1 zeroes) |
| `sdk/ruby` | 2 | 9.5 | 13.5 | 1 | acc (1 zeroes), ex (1 zeroes) |
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
| 7 | `docs/api/rebac/groups/groups.mdx` | 5 | 5 | broken curl samples: curly quote in JSON, unquoted tenant key, blank lines inside continued commands, PUT path uses group_resource_type_key; inconsistent tenants (default vs business), 'team#member' vs teams, GET descriptions reference 'marketing' with placeholder paths; 'new and improved'/deprecated wording, redoc vs scalar links, 'Let's dive deeper', 'we', 'of course' |
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
| 19 | `docs/how-to/deploy/on-prem/installation.mdx` | 6 | 6 | 450 lines of internals before Step 1 and 'What happens' repeated twice; internal contradictions (help output lacks --gke, postgres 20GB vs 10Gi PVC, 'Infrastructure (10 services)' lists 11, '12 images' vs 35, Policy Sync required vs 'if configured'); 'As of January 2026', emojis, 'comprehensive', 'That's it!' |
| 20 | `docs/how-to/deploy/on-prem/prerequisites.mdx` | 6 | 6 | mixes architecture marketing, TLS config and troubleshooting into prereqs; inconsistent figures (35 vs 26 services, 51GB storage, '50-500 users'), repo sync called required then 'If you want to enable'; hype + emojis + CRITICAL caps, hardcoded usage numbers will rot |
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
| 34 | `docs/embeddable-uis/element-login.mdx` | 7 | 7 | broken code: Node init tab contains a Python import line, C# samples have unbalanced braces and no while body, JS loginUrl missing closing quote; loginAs params inconsistent (tenant vs tenantId), private-browsing sample returns {url: element_bearer_token}, dangling sentence 'Add with an authenticated session'; emojis, 'simple', 'We have', hyphen dashes, 'now compatible' dated language |
| 35 | `docs/embeddable-uis/element/audit-logs.mdx` | 7 | 7 | stub: no steps, config, or example beyond a screenshot and generic video; hype ('full control over your applications, enforcing security'); links to overview rather than embedding-elements |
| 36 | `docs/embeddable-uis/element/user-management.mdx` | 7 | 7 | no configuration steps or example, only concepts plus links; 'Effortlessly', em dash in 'straightforward-assign', 'valuable feedback'; H3 headings with colons and Q&A bold labels |
| 37 | `docs/embeddable-uis/webhooks.mdx` | 7 | 7 | 'Current flow' vs 'new approve invite flow' dated language, unclear which flow is live; no signature verification detail or handler example, schemas in pseudo-Python; skipped levels (H4-H6 then H3), 'leverage', 'array of functionalities', 'essentially' |
| 38 | `docs/how-to/build-policies/abac/patterns.mdx` | 7 | 19 | stale: 'Once we add ReBAC and groups natively to Permit.io' (ReBAC exists); 'ownership via user profile' lacks example, local PDP command uses 7767:7000 and :latest; 'easy', 'enjoy', hyphen dashes, H3 headings inside bullets |
| 39 | `docs/how-to/deploy/on-prem/quick-start.mdx` | 7 | 7 | description says 5-10 minutes, body says 10-15; nested 'Step 1/2/3' inside Step 2 makes headings ambiguous; uses --gke flag missing from installer help, no download source, emojis and 'just a few minutes' |
| 40 | `docs/how-to/enforce-permissions/data-filtering.mdx` | 7 | 18 | 'Simplified Partial-evaluation ... upcoming feature in advanced stages of release' is stale; wordy/hype intro ('not only secure access but also optimized'); single Go sample with empty API key, no output, one H2 |

## Upgraded pages

| Page | Before | After |
|---|---|---|
| `docs/api/elements/access-request-api.mdx` | 7 | 17 |
| `docs/api/elements/access-requests.mdx` | 6 | 18 |
| `docs/api/elements/operation_approval.mdx` | 6 | 18 |
| `docs/api/elements/overview.mdx` | 8 | 19 |
| `docs/api/rbac/disable-rebac-to-increase-performance.mdx` | 12 | 19 |
| `docs/api/rbac/rbac-example.mdx` | 4 | 19 |
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
| `docs/how-to/sync-users.mdx` | 9 | 19 |
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
| `docs/permit-mcp-gateway/demos/linear-mcp-gateway.mdx` | 10 | 18 |
| `docs/permit-mcp-gateway/demos/n8n-linear-mcp-gateway.mdx` | 8 | 17 |
| `docs/permit-mcp-gateway/guide.mdx` | 11 | 19 |
| `docs/permit-mcp-gateway/host-setup.mdx` | 9 | 17 |
| `docs/permit-mcp-gateway/human-in-the-loop.mdx` | 9 | 17 |
| `docs/permit-mcp-gateway/index.mdx` | 15 | 19 |
| `docs/permit-mcp-gateway/managing-humans-and-agents.mdx` | 11 | 18 |
| `docs/permit-mcp-gateway/overview.mdx` | 8 | 18 |
| `docs/permit-mcp-gateway/platform.mdx` | 10 | 17 |
| `docs/permit-mcp-gateway/quickstart.mdx` | 10 | 19 |
| `docs/sdk/cpp/quickstart-cpp.mdx` | 7 | 17 |
| `docs/sdk/dotnet/quickstart-dotnet.mdx` | 10 | 19 |
| `docs/sdk/erlang/quickstart-erlang.mdx` | 7 | 16 |
| `docs/sdk/golang/quickstart-golang.mdx` | 9 | 19 |
| `docs/sdk/java/quickstart-java.mdx` | 10 | 19 |
| `docs/sdk/kotlin/quickstart-kotlin.mdx` | 7 | 17 |
| `docs/sdk/nodejs/quickstart-nodejs.mdx` | 8 | 18 |
| `docs/sdk/php/quickstart-php.mdx` | 9 | 18 |
| `docs/sdk/python/quickstart-python.mdx` | 10 | 19 |
| `docs/sdk/python/quickstart_python_sync.mdx` | 8 | 18 |
| `docs/sdk/ruby/quickstart-ruby.mdx` | 10 | 18 |
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
| `docs/api/api-reference.mdx` | implementer | reference | 1 | 1 | 2 | 2 | 1 | 1 | 1 | 1 | 2 | 1 | **13** | 13 | no intro on base URL, auth header, or EU endpoint before the iframe; H1 'API Reference' vs title 'Cloud API Reference', alt text 'Object diagram diagram'; 'which is embedded here' depends on the iframe rendering |
| `docs/api/api-with-cli.mdx` | implementer | mixed | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | title 'Calling the API' vs H1 'Using the API', filler ('That being said'), code tag 'node'; rate limits and 'EU region (available at Permit Pro)' plan claim unverified, 'get all the users in your organization' but endpoint is per environment; 'API Key(s)' casing, API Docs section duplicates API reference page, UI videos |
| `docs/api/background-tasks.mdx` | implementer | reference | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **11** | 11 | wait example curl has mismatched quote/backtick so it fails; no list of which endpoints are background APIs, vague description; API_SECRET_KEY placeholder, truncated support_link, 'Let's look' |
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
| `docs/api/pdp-api-reference.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | **12** | 12 | stub of one paragraph; description promises hosted evaluation PDP coverage the page lacks; PDP not expanded, 'Just like' |
| `docs/api/pdp-statistics.mdx` | operator | reference | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | **11** | 11 | 'simply', link text 'here', untagged code blocks with mixed tab indentation; 'As with other APIs...' repeated 3x; 'Environment API Key' casing, anchor /overview/connecting-your-app#1-... may be stale |
| `docs/api/pdp-webhooks.mdx` | operator | how-to | 1 | 1 | 2 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | curl has URL typo '/webooks' and missing line continuation so it fails; payload JSON trailing comma; claim that Permit support is notified automatically unverified, no verify/test step |
| `docs/api/rbac/disable-rebac-to-increase-performance.mdx` | operator | how-to | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **19** | 12 | PDP restart requirement unverified; rebac_disabled not in OpenAPI spec (confirmed in backend source) |
| `docs/api/rbac/rbac-example.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 4 | pending code fix (double commas, missing curl, content type) |
| `docs/api/rebac/groups/groups-ui.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | **9** | 9 | 7 screenshots of volatile UI and admonitions/Assign Group to Group duplicated from Groups API page; 'Step 1-4' H3s and 'Required Fields:' with colon, Optional field listed under Required; 'easily', 'Let's', 'we', exclamation, no verify step |
| `docs/api/rebac/groups/groups.mdx` | implementer | mixed | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | **5** | 5 | broken curl samples: curly quote in JSON, unquoted tenant key, blank lines inside continued commands, PUT path uses group_resource_type_key; inconsistent tenants (default vs business), 'team#member' vs teams, GET descriptions reference 'marketing' with placeholder paths; 'new and improved'/deprecated wording, redoc vs scalar links, 'Let's dive deeper', 'we', 'of course' |
| `docs/api/rebac/rebac-api-calls.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | 'Assigning roles to users' has empty Base URL; role derivation Base URL says implicit_grants but example PATCHes resources/file/roles/editor; no SDK init or responses, repeated 'Base URL'/'Example' headings, typo 'can can' |
| `docs/api/v2-migration-guide.mdx` | maintainer | mixed | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | **8** | 8 | contradictory compat env names (v1compat_global_env, v1_global_env, v2_global_env) and image name (sidecar-v2 vs pdp-v2); dated 'until recently', 'in the near future' duplicate/merge environments; 'simply', 'good news', 'Obviously', 'we', curly quotes, 'except quirks' typo |
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
| `docs/embeddable-uis/element-login.mdx` | implementer | how-to | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | **7** | 7 | broken code: Node init tab contains a Python import line, C# samples have unbalanced braces and no while body, JS loginUrl missing closing quote; loginAs params inconsistent (tenant vs tenantId), private-browsing sample returns {url: element_bearer_token}, dangling sentence 'Add with an authenticated session'; emojis, 'simple', 'We have', hyphen dashes, 'now compatible' dated language |
| `docs/embeddable-uis/element/access-request.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | **8** | 8 | 'Embedding the Element' links to /embeddable-uis/overview instead of embedding-elements, reviewer described as workspace owner vs 'Level 1' role; steps written as H3 headings, no login/verify step, dangling 'Choose a way to log in' sentence; 'as simple as', we/our, curly quotes, many UI screenshots + shared YouTube embed |
| `docs/embeddable-uis/element/approval-management.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | **8** | 8 | iframe sample lacks tenantKey while note says tenant is crucial, placeholder list omits SOME_UNIQUE_ID; broken grammar ('After the request will approve', 'This element based on'), 'Easily'; leftover '//todo change this' comment and screenshot-heavy steps |
| `docs/embeddable-uis/element/audit-logs.mdx` | admin | landing | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | **7** | 7 | stub: no steps, config, or example beyond a screenshot and generic video; hype ('full control over your applications, enforcing security'); links to overview rather than embedding-elements |
| `docs/embeddable-uis/element/operation-approval.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | **8** | 8 | contradiction: 'once approved or denied, the user will receive approval'; per-request resource instance key and reviewer tuple assignment not explained (how/which API); TODO comments left in source, en dash, 'Let's', 'simple' |
| `docs/embeddable-uis/element/user-management.mdx` | admin | explanation | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | **7** | 7 | no configuration steps or example, only concepts plus links; 'Effortlessly', em dash in 'straightforward-assign', 'valuable feedback'; H3 headings with colons and Q&A bold labels |
| `docs/embeddable-uis/email-configuration-and-templates.mdx` | admin | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | garbled line 'Inviting Approving the invited user using an SDK'; Python sample uses top-level await with unused asyncio import and masked key placeholders; 'seamlessly', 'That's it!' emoji, skipped heading levels (H1 to H3/H4) |
| `docs/embeddable-uis/embedding-elements.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | button called 'Get Code' here vs 'Generate Code' on element pages (also bold inside backticks); JWKS config comes after element creation, no verify step; 'comprehensive', 'straightforward', 'easy', 'Just', emoji |
| `docs/embeddable-uis/overview.mdx` | new user | landing | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | ElementTile redirects to /features/permit-elements/element/audit-logs and approval-flows (old paths) and anchors #customising-your-element/#configure-your-webhook do not exist on user-management page; 'Get started' points to User Management concept page instead of embedding guide; 'colour' vs 'color', H1 then H3 |
| `docs/embeddable-uis/permission-levels.mdx` | admin | reference | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | H1 'Permissions Levels' vs title 'Permission Levels', 'Workspace Owner/Manager' names vs 'Level 1' wording on access-request page; he/his and it's/its errors; no guidance on choosing levels or verifying |
| `docs/embeddable-uis/troubleshooting.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | 1 | 0 | **11** | 11 | 'In this page, we will cover'; hyphen-as-dash separators, headings with trailing ' -' and emojis; blocked-cookie fix tells reader to change browser settings (end-user action); Login Errors link lacks anchor |
| `docs/embeddable-uis/user-preview.mdx` | admin | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | image alt text says 'Audit Logs Element' for a preview screenshot; H1 'Live Element Preview' differs from title; 'Our embeddable UI elements', tagline 'See it before you use it' |
| `docs/embeddable-uis/webhooks.mdx` | implementer | mixed | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | **7** | 7 | 'Current flow' vs 'new approve invite flow' dated language, unclear which flow is live; no signature verification detail or handler example, schemas in pseudo-Python; skipped levels (H4-H6 then H3), 'leverage', 'array of functionalities', 'essentially' |
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
| `docs/how-to/deploy/on-prem/change-organization-tier.mdx` | admin | how-to | 1 | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | **12** | 12 | 'As of the latest version' undated claim; H1 duplicates title and 'Overview'/'Prerequisites' appear after the Manual section; manual DB edit of internal schema with bold/checkmark/exclamation styling |
| `docs/how-to/deploy/on-prem/installation.mdx` | operator | mixed | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | **6** | 6 | 450 lines of internals before Step 1 and 'What happens' repeated twice; internal contradictions (help output lacks --gke, postgres 20GB vs 10Gi PVC, 'Infrastructure (10 services)' lists 11, '12 images' vs 35, Policy Sync required vs 'if configured'); 'As of January 2026', emojis, 'comprehensive', 'That's it!' |
| `docs/how-to/deploy/on-prem/landing.mdx` | decision maker | landing | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | hype bullets ('enterprise-grade security', 'Enhanced security') and emojis; ASCII-art architecture instead of coded diagram, '~20+ microservices' conflicts with 35 services elsewhere; H1 duplicates title, misused table headers |
| `docs/how-to/deploy/on-prem/management.mdx` | operator | reference | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | **9** | 9 | duplicate H2 'Configuration Management'; helm upgrade for all 3 releases points at charts/permit-platform and uses deprecated 'kubectl get componentstatuses'; credential secret names conflict with troubleshooting page |
| `docs/how-to/deploy/on-prem/pdp-deployment.mdx` | operator | how-to | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 1 | 2 | 1 | **13** | 13 | health check uses /health while deploy overview says /healthy, and service name permitio-pdp does not match release 'pdp'; 'API token' vs API key, no link on where to get the key; /allowed curl payload unexplained, no expected response |
| `docs/how-to/deploy/on-prem/prerequisites.mdx` | operator | mixed | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | **6** | 6 | mixes architecture marketing, TLS config and troubleshooting into prereqs; inconsistent figures (35 vs 26 services, 51GB storage, '50-500 users'), repo sync called required then 'If you want to enable'; hype + emojis + CRITICAL caps, hardcoded usage numbers will rot |
| `docs/how-to/deploy/on-prem/quick-start.mdx` | operator | how-to | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | **7** | 7 | description says 5-10 minutes, body says 10-15; nested 'Step 1/2/3' inside Step 2 makes headings ambiguous; uses --gke flag missing from installer help, no download source, emojis and 'just a few minutes' |
| `docs/how-to/deploy/on-prem/reference.mdx` | operator | reference | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | **8** | 8 | values.yaml schema conflicts with installation page (global.postgres vs thirdPartyServices.postgres, 10Gi vs 20Gi) and backup/restore/certificateFiles keys look unverified; hardcoded image versions (opal-server 0.7.5-rc.7, keycloak 20.0.5); duplicates command lists from management/troubleshooting |
| `docs/how-to/deploy/on-prem/troubleshooting.mdx` | operator | how-to | 1 | 1 | 2 | 0 | 2 | 1 | 1 | 2 | 1 | 1 | **12** | 12 | secret names (keycloak-admin-secret, postgres-secret, policy-sync-ssh-key) not in the installer's secret list; port-forward to frontend 3000 while service exposes 80; ':::danger' misused for problem labels, emojis, closing sales line |
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
| `docs/how-to/permit-cli/permit-cli-api.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 1 | 1 | 2 | 1 | 1 | **11** | 11 | examples use undocumented flags (--userid, --firstName) and '\\' plus missing line continuations; '--api-Key' casing, proxy '--key' described as user ID; no prerequisites (login) |
| `docs/how-to/permit-cli/permit-cli-envs.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **12** | 12 | examples use camelCase flags (--envKey, --environmentId) vs documented kebab-case; env select lists --api-key as required yet optional; ':bulb:' note, blank sections, no prerequisites |
| `docs/how-to/permit-cli/permit-cli-gitops.mdx` | implementer | reference | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **7** | 7 | stub: final 'Custom Rego' section is empty (permit opa policy lives on policy page); --inactive marked Required with default, example missing 'permit' prefix; no title frontmatter, no clone example |
| `docs/how-to/permit-cli/permit-cli-pdp.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 1 | 2 | 2 | 1 | 1 | **12** | 12 | --pdpurl default port 7676 vs 7766 elsewhere, '-resource-attributes' single dash; attribute format '=' vs ':' across commands; untagged code blocks, H3 without H2 |
| `docs/how-to/permit-cli/permit-cli-policy.mdx` | implementer | reference | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | **9** | 9 | openapi example uses --key not --api-key, '-x-permit' vs 'x-permit'; simple example missing line continuation; no intro, H2 'Arguments'/'Example' under OPA section not self-contained |
| `docs/how-to/permit-cli/permit-cli-test.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **12** | 12 | examples wrap URLs in <> and use camelCase --pdpUrl/--timeFrame; untagged code blocks; no expected output shown |
| `docs/how-to/permit-cli/permit-cli.mdx` | new user | landing | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | multiple H1s and duplicate intros; 'powerful', 'empowers', emoji bullets, em dash; index points permit opa policy to gitops page but it is on policy page |
| `docs/how-to/policy-guard/policy_guard.mdx` | admin | explanation | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | UI and ReBAC support 'on the roadmap' + Slack EAP ask; use cases vague, no concrete example; 'Easily', 'streamlined' |
| `docs/how-to/policy-guard/policy_guard_api.mdx` | implementer | how-to | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 2 | 1 | 1 | **9** | 9 | invalid JSON (key" missing quote, trailing commas) and proj_id vs project_id; no Content-Type header, no expected responses; bold sentences stand in for intros, let's/we |
| `docs/how-to/sync-users.mdx` | implementer | mixed | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **19** | 9 | visible SDK sample is an untagged object with no call (pending code fix); API sample untagged |
| `docs/how-to/use-audit-logs/audit-log-replay.mdx` | operator | reference | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | **8** | 8 | table says concurrency_limit but example uses concurrency; graceful_shutdown_s described as filters object; no auth/curl, list numbering skips 3; 'powerful', 'friendly support team', 'VIP whitelist' |
| `docs/how-to/use-audit-logs/debug-mode.mdx` | operator | how-to | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | **9** | 9 | hierarchy note says no config shows debug info, contradicting PDP_DEBUG=None default; curl -H lines lack backslashes; typos ('do se', 'There available'), no verify step |
| `docs/how-to/use-audit-logs/errors/cloud_pdp_not_supporting_abac.mdx` | implementer | how-to | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | **7** | 7 | three-sentence stub with no fix steps or PDP URL change example; 'unfortunately', 'effectively utilize'; no link to Cloud PDP capabilities |
| `docs/how-to/use-audit-logs/errors/no_matching_resourcesets.mdx` | implementer | how-to | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | says resource sets match user attributes (should be resource attributes); no check example; heading 'A Solution to the issue' generic, 'utilizing'/'crafted' |
| `docs/how-to/use-audit-logs/errors/no_matching_rules.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | same title as no_permission page; no example check or API payload; 'Simply', heading 'A solution to the issue' generic |
| `docs/how-to/use-audit-logs/errors/no_matching_usersets.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | near-duplicate of resource sets page; no check example; generic 'A Solution to the issue' heading, 'utilizing' |
| `docs/how-to/use-audit-logs/errors/no_permission.mdx` | implementer | how-to | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | API link points to role assignment, not granting permissions to a role; duplicate title with no_matching_rules; 'Simply', no example |
| `docs/how-to/use-audit-logs/errors/no_role_in_tenant.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | headings 'Assign roles to User Roles' nonsensical; UI step has no link; no example check with tenant |
| `docs/how-to/use-audit-logs/errors/no_such_action.mdx` | implementer | how-to | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | API link points to assign_permissions_to_role, not updating resource actions; UI step describes selecting an action rather than adding one; no example |
| `docs/how-to/use-audit-logs/errors/no_such_resource.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | one-line fixes with no steps or example; grammar ('create resource'); generic solution heading |
| `docs/how-to/use-audit-logs/errors/no_such_tenant.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | headings start at H3/H4 (skipped levels); no example; 'comprehensive', wordy ('Initiate by', 'Post creation') |
| `docs/how-to/use-audit-logs/errors/no_user_roles.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | grammar ('user that don't have any roles assignment'); API 'documentation' link as action; no example |
| `docs/how-to/use-audit-logs/errors/user_not_synced.mdx` | implementer | how-to | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | em dash; no syncUser snippet; 'permit' lowercase in headings, 'Leverage' |
| `docs/how-to/use-audit-logs/logs-forwarder.mdx` | operator | how-to | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | no values.yaml snippet or helm command, no verify step; broken numbering (2.1 flat), unused video imports; FluentBit/Fluent Bit and ElasticSearch casing inconsistent |
| `docs/how-to/use-audit-logs/troubleshooting.mdx` | implementer | how-to | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | 'Quickstart' links point to /overview/glossary; run-PDP anchor on connecting-your-app looks broken; no commands to verify (docker ps, sample check), 'simply' |
| `docs/how-to/use-audit-logs/types-and-filtering.mdx` | admin | mixed | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **9** | 9 | 'seamless', 'comprehensive', we/our, 'plain old'; reason sample in javascript block with broken string; retention vague, Trust Center link unrelated, two UI videos |
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
| `docs/permit-mcp-gateway/architecture.mdx` | maintainer | mixed | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 2 | 0 | 0 | **10** | 10 | 'Integration Patterns' says hosted only, conflicts with enterprise-deployment models; exposes internal ports, AWS ALB, rate-limit numbers, env vars (rot risk); 'Executive Summary'/'Key Advantages' marketing, 'full power', em dashes everywhere |
| `docs/permit-mcp-gateway/audit-logs.mdx` | operator | how-to | 1 | 2 | 1 | 1 | 1 | 2 | 1 | 2 | 1 | 0 | **12** | 12 | 'Common Scenarios' and 'Investigation Examples' overlap (two compliance-report recipes); 'Platform UI' vs 'Permit MCP Gateway dashboard' naming; heavy em dashes, 'Here's', 'Key insight' |
| `docs/permit-mcp-gateway/authentication-methods.mdx` | admin | reference | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 1 | 1 | **15** | 15 | third-party console click-paths (Google, Azure, Okta) will drift; 'Azure AD' vs 'Entra ID' mixed; em dashes, 'seamless SSO experience' |
| `docs/permit-mcp-gateway/consent-service.mdx` | implementer | explanation | 1 | 2 | 1 | 1 | 2 | 2 | 1 | 2 | 1 | 0 | **13** | 13 | 'enforces two TTLs' table lists three rows (manual revocation); duplicates guide step 7 and architecture sequence diagram; em dashes throughout, 'transparently', 'Reducing friction' |
| `docs/permit-mcp-gateway/demos/linear-mcp-gateway.mdx` | AI agent builder | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | about 20 volatile UI screenshots; host creation click path differs slightly from host-setup (Hosts vs Dashboard) |
| `docs/permit-mcp-gateway/demos/n8n-linear-mcp-gateway.mdx` | AI agent builder | tutorial | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 8 | per-tool trust screen vs consent slider conflict logged; webhook and fetcher nodes not shown |
| `docs/permit-mcp-gateway/enterprise-deployment.mdx` | decision maker | explanation | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 2 | 1 | 0 | **10** | 10 | says 'two enterprise deployment models' then 'three deployment models'; 'Permit does not claim certification under specific compliance frameworks' vs SOC 2 Type II/HIPAA elsewhere, 'under 5 minutes'; feature list duplicates advanced-features, Calendly link, em dashes |
| `docs/permit-mcp-gateway/guide.mdx` | admin | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 11 | many UI screenshots and trust keyword list are maintenance risk; long page |
| `docs/permit-mcp-gateway/host-setup.mdx` | admin | how-to | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **17** | 9 | rollout planning section still mixes planning with the how-to; client snippet style (mcp-remote vs url key) still differs from quickstart |
| `docs/permit-mcp-gateway/http-egress-proxy/authorization.mdx` | operator | explanation | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | **10** | 10 | consent how-to (asg proxy authorize) embedded in concept page with no expected output; em dashes throughout; 'This split'/'Even then' lean on prior paragraphs |
| `docs/permit-mcp-gateway/http-egress-proxy/cli.mdx` | operator | reference | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | 0 | **12** | 12 | asg run is referenced by other pages but not documented here; admin token source vague and 'no CLI command yet' dated wording; em dashes plus 'simply'/'quickest' |
| `docs/permit-mcp-gateway/http-egress-proxy/connecting-agents.mdx` | AI agent builder | how-to | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | **10** | 10 | asg run link goes to cli page that never documents it; no verify step beyond doctor, no output shown; em dashes throughout |
| `docs/permit-mcp-gateway/http-egress-proxy/credentials.mdx` | operator | mixed | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | **10** | 10 | mixes reference tables with how-to commands and no success output; AWS STS setup is dashboard-only prose with no example; em dashes and 'one of the most important properties' |
| `docs/permit-mcp-gateway/http-egress-proxy/egress-rules.mdx` | operator | reference | 1 | 1 | 1 | 1 | 2 | 2 | 1 | 1 | 1 | 0 | **11** | 11 | HITL section says approval is guardian-triggered, index lists it as a per-host option; 'no CLI yet' dated; em dashes throughout |
| `docs/permit-mcp-gateway/http-egress-proxy/index.mdx` | decision maker | landing | 1 | 1 | 1 | 1 | 2 | 2 | 1 | 1 | 1 | 0 | **11** | 11 | 'newer capability' dated language; hype tagline 'every API call' and heavy em dashes; capability table and ordered checks duplicate security/egress-rules content |
| `docs/permit-mcp-gateway/http-egress-proxy/quickstart.mdx` | implementer | tutorial | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 1 | 1 | 0 | **13** | 13 | step 3 attaches credential that is not injected until step 7 (confusing); asg run referenced but undocumented; cross-step refs ('step 4', 'step 7') and em dashes |
| `docs/permit-mcp-gateway/http-egress-proxy/security.mdx` | operator | explanation | 1 | 1 | 2 | 2 | 2 | 1 | 1 | 2 | 1 | 0 | **13** | 13 | hardcoded rate-limit defaults and 'twelve words' detail likely to rot; no config examples for vault settings; em dashes throughout |
| `docs/permit-mcp-gateway/human-in-the-loop.mdx` | admin | mixed | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 9 | keyboard shortcuts and 10 screenshots are volatile UI; behaviors not verified against source |
| `docs/permit-mcp-gateway/index.mdx` | decision maker | landing | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 15 | topic table mirrors the sidebar and needs updating when pages are added |
| `docs/permit-mcp-gateway/managing-humans-and-agents.mdx` | admin | mixed | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | **18** | 11 | agent identity sharing across humans unresolved (logged); mixes explanation with how-to procedures |
| `docs/permit-mcp-gateway/on-prem-installation.mdx` | operator | how-to | 1 | 2 | 2 | 1 | 2 | 2 | 1 | 1 | 1 | 1 | **14** | 14 | Step 3 recommends secret reference but Step 6 values template uses plaintext keycloakAdminPassword; hardcoded pod counts and K8s version; headings 'Step N — ...' and some em dashes |
| `docs/permit-mcp-gateway/overview.mdx` | decision maker | explanation | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 8 | explanation page with no example flow beyond prose; audit log event list (sign-in, session events) not source-verified |
| `docs/permit-mcp-gateway/permit-integration.mdx` | maintainer | explanation | 1 | 1 | 2 | 1 | 2 | 2 | 1 | 1 | 1 | 0 | **12** | 12 | 'Role assignments linking each action to trust level' misuses term (permissions, not role assignments); internal consent API routes likely to rot; 'full power', 'deep integration', em dashes, 'Step 1:' headings |
| `docs/permit-mcp-gateway/platform.mdx` | admin | reference | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 2 | **17** | 10 | UI labels and screenshots unverified against the gateway source (rate limited); revoke semantics logged for owner |
| `docs/permit-mcp-gateway/quickstart.mdx` | new user | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fix for Claude Code --url and Claude Desktop url key; VS Code has prose pointer only, no snippet; client config formats are volatile |
| `docs/quick-start/aspnet.mdx` | implementer | tutorial | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | **8** | 8 | Permit client hardcodes http://localhost:7766 and ignores pdpUrl/PDP_URL; 'Free Post resource set... This is a ReBAC setup' is wrong (ABAC); curl requests and outputs only in screenshots, 'we will', 'easily', Conclusion section |
| `docs/quick-start/django.mdx` | implementer | tutorial | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | **7** | 7 | code is non-runnable: urls map views.sync_user (defined as register), posts uses undefined Posts, second urlpatterns overwrites first; 'resource set is ReBAC' wrong; curl only in screenshots, SDK links inconsistent (quickstart_python_sync vs quickstart-python) |
| `docs/quick-start/express.mdx` | implementer | tutorial | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 0 | 1 | **11** | 11 | assignRole(JSON.stringify(...)) passes a string and app.listen never shown; curl commands and results only in screenshots, no copyable verify; 'Free Post' resource set called ReBAC (it is ABAC), 'we will', 'easily', near-duplicate of 7 sibling pages |
| `docs/quick-start/fastapi.mdx` | implementer | tutorial | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 0 | 1 | **11** | 11 | curl requests only in screenshots, no run command (uvicorn) or copyable verify; env vars PERMIT_API_KEY/PDP_URL never set explicitly; policy explanation digression + Conclusion recap, 'we will', duplicated with 7 sibling pages |
| `docs/quick-start/flask.mdx` | implementer | tutorial | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 0 | 1 | **11** | 11 | asyncio.run() around async SDK per request instead of permit.sync client; curl commands only in screenshots; Python screenshots shared across pages, 'we will', duplicated boilerplate |
| `docs/quick-start/gin.mdx` | implementer | tutorial | 2 | 1 | 1 | 0 | 2 | 1 | 1 | 1 | 0 | 1 | **10** | 10 | code does not compile: godotenv used but not imported, no package main; uses Python curl screenshots for a Go app and X-User header never shown; duplicated boilerplate with 7 sibling pages |
| `docs/quick-start/nest.mdx` | implementer | tutorial | 2 | 1 | 1 | 0 | 2 | 1 | 1 | 1 | 0 | 1 | **10** | 10 | assignRole(JSON.stringify(...)) passes string; controller/guard never registered in a module and guard on GET described as create; reuses Next.js screenshots, garbled sentence 'etc.,  /posts to demonstrate', fragment 'Just like a middleware.' |
| `docs/quick-start/nextjs.mdx` | implementer | tutorial | 2 | 0 | 1 | 1 | 2 | 1 | 1 | 1 | 0 | 1 | **10** | 10 | middleware placed at src/middleware/middleware.ts, which Next.js does not load; route file path contradictory (route.ts under posts.ts) and Edge runtime compatibility of permitio unaddressed; curl only in screenshots, duplicated boilerplate |
| `docs/quick-start/rails.mdx` | implementer | tutorial | 2 | 1 | 1 | 0 | 2 | 1 | 1 | 1 | 0 | 1 | **10** | 10 | Ruby calls PERMIT.api.users.assignRole (camelCase) and require 'permit' conflicts with Ruby quickstart require 'permit-sdk'; reuses Next.js register screenshot; curl only in screenshots, duplicated boilerplate |
| `docs/quick-start/spring-boot.mdx` | implementer | tutorial | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 0 | 1 | **11** | 11 | verify step curls /check-permission but code defines /posts; hardcoded SDK version 2.0.0 and screenshots of terminal/UI; 'robust', unused imports, dashboard step says 'Add Role' vs 'Add Instance Role' on siblings |
| `docs/quickstart.mdx` | new user | tutorial | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 1 | 1 | 2 | **16** | 16 | role/resource/user/permission steps are only videos with one-line captions, no text click path; no verify step (e.g. run a check or view audit log); videos of volatile UI |
| `docs/sdk/cpp/quickstart-cpp.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | **17** | 7 | no install or usage steps beyond the repository; beta sidebar label unverified |
| `docs/sdk/dotnet/quickstart-dotnet.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fixes (apiURL named arg, Dictionary type, fence languages); options table mirrors constructor defaults |
| `docs/sdk/dotnet/role/AssignRole.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return value or example output; H1 then H3 (skipped H2), generic 'Parameters'/'Implementation' headings; id vs key wording inconsistent, permitClient never initialized or linked |
| `docs/sdk/dotnet/role/CreateRole.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | payload shown as JS object literal tagged dotnet, not valid C#; no return value; H1->H3 skip, 'i.e: slug', 'will be able to' |
| `docs/sdk/dotnet/role/GetRole.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | 'Get a single tenant role' is misleading (roles are environment-level); no return type or output; H1->H3 skip, variable named roles for one role |
| `docs/sdk/dotnet/role/ListAssignedRoles.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | C# sample uses JS 'const'; garbled 'If no is tenant provided, all tenants will fetch'; no return type, H1->H3 skip |
| `docs/sdk/dotnet/role/ListRoles.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no parameters, pagination, or return type documented; one-line stub; H1->H3 skip |
| `docs/sdk/dotnet/role/UnassignRole.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return value or example output; H1 then H3 (skipped H2), generic 'Parameters'/'Implementation' headings; id vs key wording inconsistent, permitClient never initialized or linked |
| `docs/sdk/dotnet/tenant/CreateTenant.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | payload is JS object literal tagged dotnet, not valid C# (no TenantCreate type named); no return value; placeholder values 'key'/'name' unexplained |
| `docs/sdk/dotnet/tenant/DeleteTenant.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return value or effect on users/role assignments explained; H1->H3 skip; permitClient never initialized |
| `docs/sdk/dotnet/tenant/GetTenant.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return value or example output; H1 then H3 (skipped H2), generic 'Parameters'/'Implementation' headings; id vs key wording inconsistent, permitClient never initialized or linked |
| `docs/sdk/dotnet/tenant/UpdateTenant.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | payload is JS object literal tagged dotnet, not valid C#; no return value; H1->H3 skip |
| `docs/sdk/dotnet/user/CreateUser.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | 'Attributes = {}' not valid C# initializer for a dictionary; key must be 'url-friendly' but email suggested as key; no return value, H1->H3 skip |
| `docs/sdk/dotnet/user/DeleteUser.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return value or example output; H1 then H3 (skipped H2), generic 'Parameters'/'Implementation' headings; id vs key wording inconsistent, permitClient never initialized or linked |
| `docs/sdk/dotnet/user/GetUser.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return value or example output; H1 then H3 (skipped H2), generic 'Parameters'/'Implementation' headings; id vs key wording inconsistent, permitClient never initialized or linked |
| `docs/sdk/dotnet/user/SyncUser.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | C# implementation block tagged js; payload text duplicated verbatim from CreateUser; bold 'should be'/'should not' note wordy, H1->H3 skip |
| `docs/sdk/erlang/quickstart-erlang.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 1 | **16** | 7 | repository is a generated server stub with no usage path; beta sidebar label unverified |
| `docs/sdk/golang/quickstart-golang.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 9 | pending code fixes (permit.New, JS line in tenant block, map type); prose workarounds to delete after fix |
| `docs/sdk/golang/resource/Create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 'Create' (no SDK or object named); sample passes 'resource-name' then SetName('document') overrides it, confusing; 'A actions definition block', indented fragments |
| `docs/sdk/golang/resource/Delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | 'unique resource key or the resource Key' typo; bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip |
| `docs/sdk/golang/resource/Update.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip; 'A actions definition block' |
| `docs/sdk/golang/role/Create.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | **9** | 9 | role Key description copied from user key (mentions user email and permit.check); bare H1 'Create'; Name marked optional while NewRoleCreate requires it |
| `docs/sdk/golang/role/Delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip |
| `docs/sdk/golang/role/Get.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | two H1s on one page (Get / GetByKey, GetById); GetById sample uses undefined uuid; 'single tenant role' misleading |
| `docs/sdk/golang/role/Update.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | **8** | 8 | Update sample calls Permit.Api.Roles.Create instead of Update; bare H1 'Update'; Name line missing <br/> so payload lines run together |
| `docs/sdk/golang/tenant/Create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | sample creates 'tenant-name' then SetName overrides it, confusing; bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip |
| `docs/sdk/golang/tenant/Delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | H1 'deleteTenant' inconsistent with Go method name Delete and sibling pages; param named tenantKey but described as id; no return info |
| `docs/sdk/golang/tenant/Get.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | two H1s, GetById section has no description; GetById sample uses undefined uuid; bare H1 |
| `docs/sdk/golang/tenant/List.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | no max perPage or return type; bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip |
| `docs/sdk/golang/tenant/Update.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | constructor models.NewUpdateTenant() naming unverified vs NewTenantUpdate pattern; bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip |
| `docs/sdk/golang/user/AssignResourceRole.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no explanation of resource instance format beyond one example or of return type; stray space before period; H1->H3 skip |
| `docs/sdk/golang/user/AssignRole.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | no return type or error handling; Permit client never initialized; H1->H3 skip |
| `docs/sdk/golang/user/Create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 'Create'; heading 'userCreate Payload' and field casing inconsistent (key vs Email); key must be url-friendly yet email suggested |
| `docs/sdk/golang/user/Delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 not self-contained for retrieval (no SDK/object name); Permit client variable never initialized, no return type; H1->H3 skip |
| `docs/sdk/golang/user/Get.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | **9** | 9 | GetById sample calls Users.Get, not GetById, with undefined uuid; two H1s; userId described as 'the unique key of the user' |
| `docs/sdk/golang/user/GetAssignedRoles.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | sample passes 'role-key' as the userKey argument; userKey described as 'user to assign the role to' (copy-paste); no return type |
| `docs/sdk/golang/user/SyncUser.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | payload duplicated from Create despite 'same as' note; ctx line missing <br/>; wordy bold should/should-not note |
| `docs/sdk/golang/user/UnassignRole.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | sample calls misspelled UnasignRole; Parameters list an object while sample takes positional args, ctx repeated in payload; descriptions say 'assign' |
| `docs/sdk/java/quickstart-java.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fixes (user.key before declare, undefined tenant/resourceAttributes, staging API URL); pinned version 2.0.0 |
| `docs/sdk/java/resource/create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | sample uses undefined actions and attributes variables; roles/relations fields omitted vs other SDK pages; 'A actions definition block' |
| `docs/sdk/java/resource/delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | resourceKey described as 'The id of the resource'; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/resource/get.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | new UUID("...") is not valid Java (UUID.fromString); UUID import missing; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/resource/list.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | page/perPage documented but sample passes neither and return type differs from users.list (array vs paginated); no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/resource/update.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | name listed without optional though sample omits it; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/role/assign-role.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | real person/company in sample (elon@tesla.com, tesla) against style guide; missing RoleAssignmentRead import; H1->H3 skip |
| `docs/sdk/java/role/create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | ArrayList/Arrays imports missing; extends field omitted vs other SDKs; 'i.e: slug' |
| `docs/sdk/java/role/delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | roleKey described as 'The id of the role'; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/role/get-assigned-roles.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | tenant filter and pagination not documented (other SDKs accept tenant); no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/role/get.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | new UUID("...") invalid Java; UUID import missing; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/role/list.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | page/perPage documented but not shown in sample; RoleRead import missing; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/role/unassign-role.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | awkward 'unassigned to'/'unassociated with' wording; real person/company in sample (elon@tesla.com); no return info |
| `docs/sdk/java/role/update.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | name listed as required though sample omits it; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/tenant/create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | builds tenantAttributes but never passes them; real company (Tesla Inc) in sample; HashMap import missing |
| `docs/sdk/java/tenant/delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | tenantKey described as 'The id of the tenant'; no warning about deleting users/assignments; H1->H3 skip |
| `docs/sdk/java/tenant/get.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | new UUID("...") invalid Java; UUID import missing; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/tenant/list.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | page/perPage documented but not shown; TenantRead import missing; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/tenant/update.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | parameter written 'tenantkey' (casing) described as id; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/user/create.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | second sample has syntax error ('.withRoleAssignments(roleAssignments);' then ');') and missing UserRoleCreate import; real person data (Elon Musk, elonmusk@tesla.com) against style guide; heading 'Implementation(with roles assignment)' |
| `docs/sdk/java/user/delete.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | userKey described as 'The id of the user'; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/user/get.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | new UUID("...") invalid Java; UUID import missing; no return/exception documentation; H1->H3 skip, generic Parameters/Implementation headings |
| `docs/sdk/java/user/list.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | returns PaginatedResultUserRead while sibling list pages return arrays, unexplained; page/perPage not shown; H1->H3 skip |
| `docs/sdk/java/user/sync.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | sync uses enforcement User.Builder while create uses UserCreate, unexplained; real person data (Elon Musk); HashMap import missing |
| `docs/sdk/kotlin/quickstart-kotlin.mdx` | implementer | landing | 2 | 1 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | **17** | 7 | no install or usage steps beyond the repository; beta sidebar label unverified |
| `docs/sdk/nodejs/all-tenants.mdx` | implementer | mixed | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **7** | 7 | page titled Node.js but shows only a curl GET with -D (dump-header flag) as body and prose inside the code block; response example (allowed/message) looks fabricated vs all-tenants response listing tenants; names nonexistent 'permit.AllTenantsCheck' instead of SDK method |
| `docs/sdk/nodejs/bulk-requests-examples.mdx` | implementer | mixed | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **7** | 7 | curl samples broken: -D instead of -d, missing line-continuation backslash, no -X on tuple POST/DELETE, trailing comma JSON; titled Node.js but no Node SDK calls; describes 'users array' with username/password fields while payload uses operations |
| `docs/sdk/nodejs/quickstart-nodejs.mdx` | implementer | tutorial | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | 8 | pending code fixes (resources.create, malformed role fence, deprecated syncUser, undefined user/role); API-management section is a digression from the check tutorial |
| `docs/sdk/nodejs/relationship-tuple/list-relationship-tuples.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | **9** | 9 | intro says 'List resource instances' on a relationship tuples page; bare H1 'list'; mixes include_total_count snake_case with camelCase params, sample result uses 'stripe-inc' real company |
| `docs/sdk/nodejs/resource-instance/list-resource-instances.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 'list' not self-contained; no return shape; H1->H3 skip |
| `docs/sdk/nodejs/resource/create-resource.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/resource/delete-resource.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | flat permit.api.deleteResource naming inconsistent with permit.api.resources.* elsewhere; no return info; H1->H3 skip |
| `docs/sdk/nodejs/resource/update-resource.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/role/assign-role.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/role/create-role.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/role/delete-role.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | flat permit.api.deleteRole naming inconsistent with permit.api.roles.*; no return info; H1->H3 skip |
| `docs/sdk/nodejs/role/get-assigned-roles.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | 'Payload' object shown although the method takes positional args; garbled 'If no is tenant provided, all tenants will fetch'; no return shape |
| `docs/sdk/nodejs/role/get-role.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | 'single tenant role' misleading; variable 'roles' for one role; flat API naming inconsistent |
| `docs/sdk/nodejs/role/unassign-role.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/role/update-role.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/sync-policy-script/sync-policy.mdx` | implementer | how-to | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **10** | 10 | skeleton steps are empty placeholders ('// Implementation here') then full code repeated; first example role references employee_doc resource that is never defined; H4 subtitle and colon-suffixed headings, prereqs not a list |
| `docs/sdk/nodejs/tenant/create-tenant.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/tenant/delete-tenant.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | flat permit.api.deleteTenant naming inconsistent with permit.api.tenants.list on sibling page; no return info; H1->H3 skip |
| `docs/sdk/nodejs/tenant/get-tenant.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | flat permit.api.getTenant naming inconsistent with permit.api.tenants.*; no return info; H1->H3 skip |
| `docs/sdk/nodejs/tenant/list-all-tenant-users.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | parameter lines lack <br/> so they render as one run-on paragraph; no return shape; file name list-all-tenant-users vs H1 listTenantUsers |
| `docs/sdk/nodejs/tenant/list-tenants.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 'list' not self-contained; no return shape; H1->H3 skip |
| `docs/sdk/nodejs/tenant/update-tenant.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | passes JSON.stringify(obj) to SDK method that takes an object; uses flat permit.api.X naming inconsistent with permit.api.<entity>.X pages in same section; H1->H3 skip |
| `docs/sdk/nodejs/user/create-user.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | passes object correctly while sibling pages use JSON.stringify (inconsistent); key must be url-friendly yet email suggested; no return shape |
| `docs/sdk/nodejs/user/delete-user.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** | 11 | flat permit.api.deleteUser naming inconsistent with permit.api.users.get/list; no return info; H1->H3 skip |
| `docs/sdk/nodejs/user/get-user.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 'get' not self-contained; result not assigned or described; Parameters line missing <br/> |
| `docs/sdk/nodejs/user/list-users.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | **10** | 10 | bare H1 'list' not self-contained; result not assigned, no return shape; H1->H3 skip |
| `docs/sdk/nodejs/user/sync-user.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | **10** | 10 | 'const user = await permit.api.syncUser(user)' redeclares user and throws; deprecated flat syncUser vs permit.api.users.sync; wordy bold should/should-not note |
| `docs/sdk/permit-prisma-extension.mdx` | implementer | mixed | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **12** | 12 | PermitError used but never imported and manual check example skips setUser context; Installation before Prerequisites plus RBAC/ABAC/ReBAC explainer digression; 'Seamlessly', 'true row-level security', TL;DR hype |
| `docs/sdk/php/quickstart-php.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 9 | sample has unused React imports and an employee name (optional fix logged); *@dev dependency on a generated client |
| `docs/sdk/python/quickstart-python.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | **19** | 10 | pending code fix for firstName keys in FastAPI example; version-gated timeout options |
| `docs/sdk/python/quickstart_python_sync.mdx` | implementer | tutorial | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | **18** | 8 | pending code fixes (await in sync samples, 1.0.0rc1 full example with permit.write); warning admonition is a stopgap |
| `docs/sdk/python/sync-policy-script/sync-policy.mdx` | implementer | how-to | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | **9** | 9 | Notes claim the script checks for existing resources/roles but code never does (re-run gives 409); full code builds resource_obj and ignores it, snippet uses asyncio without import; 'Defining Resources' rendered as plain text, not a heading |
| `docs/sdk/python/usage-example.mdx` | implementer | reference | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | **12** | 12 | top-level await and List used without import, update sample description 'wat'; real person/company data (Elon Musk, Tesla) against style guide; no intro saying what the page covers or return shapes |
| `docs/sdk/ruby/quickstart-ruby.mdx` | implementer | tutorial | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **18** | 10 | pending code fixes (require 'permit-sdk' vs lib/permit.rb, PDP URL scheme, resource key vs type); require fix needs a run to confirm |
| `docs/sdk/ruby/user/sync_user.mdx` | implementer | reference | 1 | 1 | 2 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | **9** | 9 | Ruby sample uses Go ':=' assignment; commented-out assignRole link leaves note ending 'you should not use...' with no alternative; 'An Hash object' |
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
