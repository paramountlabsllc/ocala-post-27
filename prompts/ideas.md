# Ocala Memorial Post 27 Website and AI Platform

## Next steps

Start with a short discovery and proof-of-concept cycle before committing to a platform or migration.

### Within the first week

1. Confirm that Post 27 authorizes the rebuild and owns or can access the domain, Wix account, written content, images, logos, forms, documents, newsletter list, and integrations.
2. Name one owner each for public content, newsletter operations, general forms, Service Officer requests, and chatbot knowledge.
3. Interview the site owner, a Service Officer, and a communications or newsletter volunteer.
4. Agree on the top three outcomes for the next 6-12 months: for example, more members, more service requests, better event attendance, or easier publishing.
5. Inventory the current site's pages, forms, documents, external links, accounts, and current workflows.

### During weeks two and three

6. Document the top visitor tasks: find a meeting, contact the post, request help, learn about membership, find a document, and ask a question.
7. Decide what information may be collected publicly. Treat DD-214s, medical records, Social Security numbers, claim numbers, and similar records as sensitive.
8. Test whether Wix can meet the clarified needs after ownership, navigation, content, and form workflows are fixed.
9. Compare an improved Wix site with managed WordPress. Do not compare only visual templates; compare editing, ownership, forms, exports, accessibility, and maintenance.
10. Build a disposable prototype with fake data: one homepage, one event, one bulletin item, one low-risk form, and a read-only chatbot.

### Before a production decision

11. Have a qualified Post Service Officer review the benefits-assistant scope, language, sources, and escalation behavior.
12. Choose a separate secure workflow for veteran case intake before accepting documents.
13. Confirm newsletter consent, unsubscribe, notification routing, response-time expectations, retention, deletion, and backups.
14. Set an AWS budget alert and decide whether AWS will host only the AI/integration layer or the public site too.
15. Select the platform only after the post can answer who will maintain it and what happens when that person is unavailable.

## Executive recommendation

Do not begin with a full custom AWS rebuild. The current site is already a useful source of public requirements, but the main risks are unclear ownership, weak workflow definition, and sensitive Service Officer data rather than the visual design alone.

The recommended target is:

**Improved Wix or managed WordPress -> public pages and content**

**Dedicated email/form services -> newsletter and low-risk inquiries**

**Separate secure intake system -> veteran case information and documents**

**AWS Lambda/API Gateway + Bedrock + MCP -> source-grounded chatbot and benefits navigation**

For a volunteer organization with very low traffic, managed WordPress is the best migration candidate if Wix cannot be fixed. Hosting WordPress or a custom CMS directly in AWS is possible, but it transfers patching, backups, plugin security, and recovery work to the organization. AWS is still a good home for the custom chatbot and MCP integration.

## Current site baseline

The existing site is a public information hub for American Legion Ocala Memorial Post 27. It includes:

- A homepage with post history, leadership, meeting information, social links, and a call to join.
- Newsletter signup.
- A general Get Involved form with contact information and an interest field.
- A Post Service Officer page covering housing, healthcare, VA disability, education, employment, legal assistance, entrepreneurship, and mental health.
- A Service Officer intake form that requests contact information, address, branch of service, service interest, additional information, and file uploads. Examples mention DD-214s and resumes.
- A Bulletin Board that links to Google Drive folders for general information and newsletters, plus external Legion resources.
- Accessibility, privacy, and terms pages.
- Responsive Wix-hosted pages and media.

The site has a credible mission and represents veterans, members, volunteers, and the general public. Its major opportunities are clearer visitor paths, more visible contact and meeting details, better content ownership, and safer form workflows.

### Current friction

- The homepage is long and profile-heavy, so visitors may need to scan to find help, meetings, membership, or contact information.
- Join, get involved, request assistance, read current information, and contact the post are different workflows but are not clearly separated.
- Meeting details need a time, location, calendar link, cancellation process, and last-updated date.
- Bulletin-board links need titles, categories, publication dates, owners, and archive status.
- Newsletter ownership, consent, confirmation, unsubscribe behavior, and list access are unclear.
- The Get Involved form needs defined interest choices and routing.
- The Service Officer form may collect more information than is needed for initial triage and allows sensitive uploads.
- It is unclear who receives submissions, what response time is expected, where data is stored, who can access it, and when it is deleted.
- It is not yet clear whether Post 27 owns the Wix account, domain, content, form data, newsletter list, media, and integrations.

## Product direction

The site should be a trustworthy community hub that gets each visitor to the correct next step quickly.

Primary visitor paths:

1. **I need help** - learn about Service Officer assistance and request human follow-up.
2. **I want to join** - understand eligibility, benefits, dues, and application steps.
3. **I want to get involved** - volunteer, attend an event, donate, or support the post.
4. **I need post information** - find meetings, location, contact details, announcements, and documents.
5. **I have a question** - ask the assistant or contact a person.

## Recommended information architecture

### Homepage

- Short mission statement and welcoming community image.
- Four prominent actions: Get help, Join the Legion, Attend an event, and Contact the post.
- Next meeting or upcoming event with date, time, location, and calendar link.
- Short explanation of Service Officer support.
- Latest announcements or bulletin items.
- Volunteer and newsletter calls to action.
- Location, office availability, phone, email, and map near the footer.

### Core pages

- **About the Post** - history, mission, leadership, facilities, and community impact.
- **Veteran Assistance** - supported topics, what to expect, response expectations, and a secure request path.
- **Membership** - eligibility, benefits, dues, application steps, and contact information.
- **Events and Meetings** - recurring meetings, special events, cancellations, and add-to-calendar links.
- **News and Bulletin Board** - searchable announcements, newsletters, public documents, and publication dates.
- **Get Involved** - volunteering, donations, sponsorships, fundraising, and partnerships.
- **Contact** - location, directions, general inquiries, and accessibility information.
- **Policies** - accessibility, privacy, terms, and AI disclosure.

### Structured content

Events, announcements, documents, FAQs, leadership profiles, and contact options should be records with owners and review dates rather than repeated blocks of page text.

The bulletin board can continue using Google Drive if desired, but the website should provide context around each link:

- Title and description.
- Category.
- Publication or last-reviewed date.
- Owner.
- Current or archived status.
- Canonical destination.

## Forms and operational workflows

Keep separate workflows for:

- Newsletter signup.
- General contact.
- Membership or Get Involved inquiries.
- Service Officer assistance.

Every form should define:

- Minimum fields and why each field is needed.
- Destination owner and backup owner.
- Confirmation message.
- Expected response time.
- Spam protection.
- Storage location and access permissions.
- Retention and deletion date.
- Export and audit process.

The public website should not become a general-purpose repository for veteran records. Use fake data during development and testing. Do not submit real veteran documents while evaluating a platform.

## Accessibility and trust

- Use semantic headings, descriptive links, alt text, keyboard focus, strong contrast, and mobile-first layouts.
- Keep forms short and explain why each field is requested.
- Clearly distinguish official Post 27 information from external American Legion, VA, state, and county resources.
- Show source dates and last-reviewed dates for changing information.
- Make human contact options visible even when the chatbot is present.
- Publish privacy, terms, accessibility, data-retention, and AI-use disclosures.

## AI chatbot

### Positioning

The assistant should be a **Post 27 information guide** and **veterans benefits navigator**, not a replacement for a Service Officer, VA decision-maker, attorney, clinician, financial adviser, or emergency service.

Possible names:

- Ask Post 27
- Post 27 Guide
- The Legion Helper
- Ocala Post 27 Assistant

### Initial questions

The first version should answer:

- When and where are meetings held?
- What are the address, phone, email, and office availability?
- How can someone join?
- What does the Service Officer help with?
- How does someone request assistance?
- What events and announcements are current?
- Where are newsletters, forms, and official resources?
- How can someone volunteer, donate, or get involved?
- How can someone reach a person?

### Knowledge sources

Use retrieval from approved sources rather than model memory:

- Approved Post 27 pages, FAQs, events, and contact records.
- Current bulletin-board items and public documents.
- Approved Post 27 history, leadership, and service descriptions.
- Reviewed American Legion, VA, federal, state, and county resources.
- A maintained answer sheet for response times, policies, and escalation.

Every source should have an owner, URL or identifier, publication date, review date, status, and citation metadata. Remove or archive expired events and superseded documents.

### Answer behavior

The assistant should:

- Answer briefly, then provide relevant links and next steps.
- Cite the page or official document used.
- Mention uncertainty and source dates when information may change.
- Ask a clarifying question when a request is ambiguous.
- Offer human escalation when uncertain or when a decision requires a qualified person.
- Never fabricate schedules, contact details, eligibility decisions, deadlines, forms, or benefits outcomes.
- Avoid collecting sensitive personal information in chat.
- Direct emergencies to appropriate emergency services.

Useful interface features include suggested question chips, source links, feedback, deep links, reset/delete controls, visible human contact, and anonymized question-category analytics. Do not store full chat transcripts by default.

## Benefits-navigation specialist

The assistant may help visitors understand possible benefits paths, prepare for a conversation with an accredited representative, and locate current official resources. It should not promise to optimize, maximize, or guarantee a person's benefits.

### Appropriate capabilities

- Explain benefit programs in plain language using current official sources.
- Ask broad, non-sensitive context such as branch, service era, general topic, and state.
- Create a checklist of questions or documents to discuss with a qualified representative.
- Compare publicly documented rules at a general level with citations and effective dates.
- Explain the general difference between filing, appealing, requesting an increase, and seeking accredited representation.
- Identify areas to investigate, including healthcare, disability, education, housing, employment, survivor, and state benefits.
- Link to official VA, Department of Defense, state, county, and American Legion resources.
- Suggest contacting a VA-accredited representative or Post Service Officer.
- Prepare a concise, non-sensitive summary for a human appointment.

Use terms such as **benefits navigation**, **opportunity screening**, and **preparation support** instead of promising optimization.

The assistant must not:

- Determine eligibility.
- Guarantee an award, rating, deadline, or outcome.
- Recommend a legally binding claim strategy.
- Calculate a final award or promise to maximize benefits.
- Replace an accredited representative, attorney, clinician, or qualified Service Officer.
- Ask for or retain Social Security numbers, claim numbers, medical records, DD-214 files, or other sensitive documents.

### Benefits conversation flow

1. Explain that the assistant provides general information, not a decision or representation.
2. Identify the broad topic.
3. Gather only broad context.
4. Retrieve current official sources.
5. Separate known rules from factors requiring human review.
6. Provide links, questions to ask, and a next-step checklist.
7. Escalate complex, disputed, or case-specific requests to a qualified person.

### Required disclosure

> **Important:** Post 27's AI assistant provides general veterans-benefits information and navigation based on cited public sources. It is not a VA decision-maker, attorney, healthcare provider, financial adviser, or substitute for a VA-accredited representative or Post Service Officer. It cannot determine eligibility, guarantee benefits, recommend a claim strategy, or replace professional advice. Do not enter Social Security numbers, claim numbers, medical records, DD-214 files, or other sensitive personal information. For case-specific help, contact the Post Service Officer or an accredited representative.

Show this before the first benefits-focused exchange, keep a short version visible, and require acknowledgement before enabling benefits mode. Acknowledgement is not permission to collect sensitive case data.

## MCP server for Post 27

The website chatbot can call a private, site-specific MCP server for structured context and narrowly scoped tools. The MCP server should be an integration layer, not a general database or unrestricted agent.

### Resources

- Current contact details, location, hours, and accessibility information.
- Meeting and event records with dates, status, location, and source timestamps.
- Approved Service Officer descriptions and intake instructions.
- Membership, volunteer, donation, and newsletter FAQs.
- Current bulletin items and public documents.
- Approved American Legion and VA resource links.
- Assistant disclosure, escalation, and prohibited-data policy.

### Read-only tools

- `search_post_content(query, audience, limit)`
- `get_upcoming_events(start_date, end_date, category)`
- `get_current_contact_options(topic)`
- `get_benefits_resources(topic, branch, state)`
- `get_source_metadata(source_id)`

### Consent-controlled tools

- `create_general_inquiry_draft(...)`
- `request_human_follow_up(...)`
- `report_outdated_content(source_id, note)`

These tools must not silently submit a sensitive case. The server must reject unrestricted SQL, arbitrary URL fetching, shell access, document uploads, and direct access to private form submissions.

### MCP security

- Separate public knowledge from private submissions.
- Require authentication and role checks for non-public resources.
- Allowlist external domains, especially VA and American Legion resources.
- Validate tool arguments and return source IDs and timestamps.
- Apply rate, timeout, input-size, and output-size limits.
- Detect, redact, or reject sensitive information before tool calls.
- Log request IDs, tool names, consent state, source IDs, and outcomes without unnecessary chat text.
- Version sources and record review dates.
- Return "no authoritative result found" rather than allowing a guess.
- Test prompt injection, stale content, data exfiltration, and unauthorized tool calls.

Keep the MCP connection server-side. The browser must never receive AWS, model-provider, or MCP credentials.

## Current-state discovery and reverse engineering

Reverse-engineer the site's public information architecture and behavior, not Wix's private implementation. Use the site as a black-box requirements reference and build an independently maintained implementation.

### Authorization

Confirm that the post authorizes the rebuild and has permission to reuse text, photographs, logos, documents, and third-party resources. Do not attempt to extract private Wix configuration, form submissions, credentials, unpublished assets, or proprietary source code.

### Inventory

Create a page/resource inventory containing:

- URL, title, audience, and visitor goal.
- Main calls to action and destination.
- Content sections and reusable content types.
- Forms, fields, uploads, validation, and confirmation behavior.
- External links and the owner of each destination.
- Image, logo, and document reuse status.
- Mobile and accessibility observations.
- Content owner, last-reviewed date, and proposed update frequency.

Capture representative desktop and mobile screenshots as design references. Test public flows with fake information only.

### Behavioral baseline

Record navigation, form validation, confirmations, event presentation, bulletin links, responsive behavior, accessibility basics, and current content. Use this baseline to verify useful behavior in the replacement without treating every current design choice as a requirement.

## Platform decision

### Preferred: improved Wix or managed WordPress

Stay on Wix if the post owns the account and domain, a volunteer can edit it, low-risk forms can be routed correctly, and the needed integrations are available.

If Wix remains limiting, choose managed WordPress with:

- Automatic updates, backups, HTTPS, staging, and malware protection.
- A supported forms solution for low-risk inquiries.
- A dedicated newsletter provider such as MailerLite or Brevo.
- A separate secure Service Officer intake system.
- A server-side AWS chatbot and MCP integration.

Managed WordPress is likely easier for volunteers than a custom AWS CMS and cheaper in total effort than self-hosting.

### Avoid self-hosting WordPress in AWS initially

WordPress on Lightsail, EC2, ECS, or another AWS service may have low infrastructure cost, but someone must handle WordPress/PHP/plugin updates, database patching, backups, malware, spam, uptime, monitoring, email delivery, and access recovery.

### AWS-first option

If AWS hosting is mandatory, use Amplify Hosting or S3/CloudFront for the public frontend and a simple headless CMS such as Decap CMS or a hosted headless CMS. This can be inexpensive and fast, but content editing, authentication, previews, media management, and publishing workflows require more technical setup.

| Option | Volunteer editing | AWS alignment | Maintenance | Recommendation |
|---|---|---|---|---|
| Improve Wix | High | Low-medium | Low | Best if ownership and workflows can be fixed |
| Managed WordPress | High | Medium | Low-medium | Best migration choice |
| WordPress on AWS | High initially | High | High | Avoid without a dedicated administrator |
| Amplify plus headless CMS | Medium | High | Medium-high | Good for a technical maintainer |
| Fully custom AWS application | Low without training | Highest | High | Only after requirements are proven |

Do not select a CMS because it advertises an AI feature. The assistant needs separate source governance, guardrails, privacy rules, and a budget.

## AWS architecture

### Public site

For an AWS-first public site:

- S3 for versioned static assets.
- CloudFront for delivery, HTTPS, and caching.
- ACM for certificates.
- Route 53 for DNS if the domain is delegated to AWS.
- WAF when the threat profile justifies its recurring cost.
- Amplify Hosting as a simpler alternative with Git-based deploys and previews.

S3/CloudFront does not provide a volunteer-friendly editor by itself. Pair it with a headless CMS, structured content, or a protected publishing workflow.

### Dynamic services

- Lambda and API Gateway for low-volume form and content APIs.
- DynamoDB for events, announcements, FAQs, contact routing, and submission metadata.
- SES for transactional email.
- EventBridge and SQS for reliable notifications and retries.
- Cognito or an equivalent identity service for protected administration.
- CloudWatch for logs and alarms.
- Secrets Manager or Parameter Store for secrets.

Do not place sensitive veteran documents in a public S3 bucket or chatbot knowledge base. A separate private workflow needs encryption, restrictive IAM, malware scanning, retention, deletion, audit logging, and reviewed access—or a specialized secure case-management service.

### Chatbot and MCP

A practical AWS chatbot can use a server-side chat API, Bedrock, approved S3 content, Bedrock Knowledge Bases or controlled retrieval, and CloudWatch metrics.

Run the MCP server on Lambda for small stateless read-only tools or ECS/Fargate for a long-running endpoint. Start with read-only search, event lookup, contact routing, benefits-resource lookup, and source metadata. Add human follow-up tools only after consent and audit behavior are tested.

Avoid an always-on vector database for a small FAQ corpus until its regional minimum charges are understood. A curated FAQ set, structured records, or on-demand retrieval may be cheaper.

## Minimal data model

Start with explicit, small records:

- `site_settings`: mission, contact channels, location, social links, and review dates.
- `pages`: slug, title, sections, audience, status, owner, and review date.
- `events`: title, category, dates, location, description, status, and source.
- `announcements`: title, body, publication date, expiry, category, and source.
- `documents`: title, description, category, public URL, dates, and owner.
- `faqs`: question, answer, audience, source, review date, and approval status.
- `contacts`: topic, destination, response expectation, and visibility.
- `form_definitions`: fields, routing owner, confirmation, and retention.
- `submissions`: minimal metadata, status, assignee, timestamps, and deletion date.

Keep public content separate from operational records. Public FAQs and events may be indexed for retrieval; private submissions must not be indexed or made available to the assistant.

## Delivery plan

### Phase 0: discovery and ownership

- Confirm goals, audiences, owners, response times, and privacy requirements.
- Inventory accounts, integrations, forms, documents, and data.
- Determine whether Service Officer intake belongs on the site or in a separate secure service.

### Phase 1: public MVP

- Build the homepage around visitor paths.
- Add About, Veteran Assistance, Membership, Events, Bulletin Board, Get Involved, Contact, and Policies.
- Add structured events, contact details, current documents, and low-risk forms.
- Migrate only approved content and assets.

### Phase 2: content operations

- Add editor roles, review dates, search, newsletter integration, event publishing, exports, backups, and account recovery.
- Verify that a volunteer can publish an event or bulletin item without developer help.

### Phase 3: chatbot pilot

- Index approved public pages, FAQs, events, and contact records.
- Launch read-only answers with citations and visible human contact.
- Test stale facts, ambiguity, hallucination, sensitive input, prompt injection, and escalation.

### Phase 4: secure service workflow

- Select a secure intake or case-management system.
- Define least-privilege access, consent, retention, deletion, auditability, and response ownership.
- Link to the workflow from the site without storing case documents in the chatbot or CMS.

## Migration and cutover checklist

- Domain and DNS ownership confirmed.
- Redirect map created for important old URLs.
- Approved content, media, and documents imported.
- Links and document permissions tested.
- Forms reach the correct owner and show correct confirmations.
- Newsletter consent and unsubscribe behavior verified.
- Mobile, accessibility, and security checks completed.
- Privacy, terms, AI disclosure, and retention language approved.
- Chatbot tested against stale facts, unsupported questions, sensitive input, and prompt injection.
- Backups, export, rollback, and account recovery tested.
- Staff can update content without developer access.
- Current site remains available until the replacement is accepted.

## Cost estimate for barely used traffic

These are planning ranges, not an AWS quote. The public site should be inexpensive; chatbot usage, security products, email, and sensitive workflows are the main variables.

| Component | Approximate monthly range | Notes |
|---|---:|---|
| Static hosting and storage | $0-$3 | S3, CloudFront, or Amplify at low traffic |
| DNS | About $0.50 | Route 53 hosted zone; domain registration is usually $10-$25/year |
| TLS certificate | $0 | ACM certificates are generally no-cost with supported services |
| Lambda/API Gateway | $0-$2 | Low-volume forms and APIs |
| DynamoDB | $0-$3 | Small event, FAQ, and metadata records |
| Email delivery | $0-$5 | SES is inexpensive; newsletter providers may cost more |
| Logs and alarms | $0-$5 | Keep retention bounded |
| WAF | $0-$15+ | Add based on risk and managed-rule needs |
| Low-volume chatbot | $1-$20 | Model, prompt length, retrieval, and conversations determine cost |
| Lambda MCP server | $0-$5 | ECS/Fargate can cost more if always running |
| Secure document workflow | $25-$150+ | Security controls and case-management tools matter more than storage |

Practical totals:

- Static site only: approximately $2-$15/month plus the domain.
- Site with low-volume forms and a modest chatbot: approximately $5-$35/month.
- Site with chatbot, WAF, monitoring, and MCP: approximately $20-$75/month.
- Secure veteran-document intake: budget separately.

These figures exclude development, migration, design, support, paid CMS/newsletter products, payment processing, and administration time. A reasonable first budget target is $10-$30/month for the public site and modest chatbot, with a separate decision for sensitive intake.

### Cost controls

- Set AWS Budget alerts at $10, $25, and $50.
- Add separate Bedrock usage alerts.
- Rate-limit chatbot sessions and cap conversation length.
- Limit retrieved documents and cache stable answers.
- Use a less expensive model for simple FAQ work.
- Set S3 lifecycle and CloudWatch retention rules.
- Avoid full transcript storage by default.
- Turn off unused development resources.
- Review the bill after the first week and first month.

## Minimal proof of concept

Build a disposable prototype before a full migration:

1. Homepage deployed to Amplify or S3/CloudFront.
2. Structured events and announcements in JSON or DynamoDB.
3. A protected content-editing path.
4. A general contact form through API Gateway, Lambda, and SES using fake data.
5. An approved public FAQ and contact knowledge base.
6. A Bedrock chatbot with citations and sensitive-data refusal.
7. A read-only MCP server for page search, events, contacts, and source metadata.
8. CloudWatch logging, a budget alarm, and tests for the core visitor flows.

The prototype should answer whether volunteers can maintain the content, whether the chatbot is trustworthy, and whether AWS administration and operating costs are acceptable.

## Success measures

- Visitors find meeting and contact information within one or two clicks.
- Visitors choose the correct path instead of submitting the wrong form.
- Staff publish events and bulletin items without developer help.
- Submissions reach the correct owner and receive acknowledgement.
- No sensitive documents enter the chatbot.
- Chatbot answers are cited, current, and escalated when uncertain.
- Content owners review time-sensitive pages on schedule.
- The post can export content and recover every critical account.

## Open decisions

1. What are the top three outcomes for the next 6-12 months?
2. Who owns content, newsletter, forms, Service Officer requests, and chatbot sources?
3. What is the approved contact and response process for veteran assistance?
4. Is there already a secure case-management or document-upload service?
5. Which public documents may the chatbot use, and who approves them?
6. Should the assistant cover only Post 27 or also navigate official VA and Legion resources?
7. What content must volunteers update, and how often?
8. What budget and maintenance time are available after launch?
