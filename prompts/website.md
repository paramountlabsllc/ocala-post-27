 # Post 27 Ocala Website Analysis

## Executive assessment

The current site is a public-facing information hub for American Legion Ocala Memorial Post 27. It communicates the post's identity, history, leadership, services, meeting information, and ways to get involved. It is built with Wix Studio and appears to be maintained or branded by Vetbizbuilder.

The site may be difficult to manage, but the platform is not yet proven to be the root problem. The larger unknown is what the post needs the website to accomplish and who is responsible for keeping information current. A replacement could improve control and customization, but it could also reproduce the same operational problems on a different platform if ownership, workflows, and goals remain unclear.

## What exists today

- Homepage for the post, including history, leadership profiles, meeting information, Facebook link, and a call to join.
- Newsletter signup with an email field and a subscribe action.
- General “Get Involved” form with first name, last name, email, and an “Interested In” field.
- Post Service Officer page describing support areas including housing, healthcare, VA disability, education, employment, legal assistance, entrepreneurship, and mental health.
- Service Officer intake form requesting contact information, address, branch of service, service of interest, additional information, and file uploads. The example specifically mentions DD-214 and resumes.
- Bulletin Board page that links outward to Google Drive folders for general information and newsletters, plus external Legion resources for meeting minutes, Legion Link, and My Legion.
- Accessibility statement, privacy policy, and terms pages.
- Responsive public site and Wix-hosted media/assets.

## Strengths

- The site presents a clear organization and a credible mission.
- Important audiences are represented: veterans seeking assistance, potential members/volunteers, current members, and people looking for post information.
- The service categories make the Post Service Officer offering easy to understand at a high level.
- The bulletin board avoids requiring the website owner to rebuild a page for every document; linking to Google Drive can be a practical publishing workflow.
- A basic accessibility statement and privacy/terms pages are present.

## Concerns and likely friction

### Content and user experience

- The homepage is long and heavily profile-oriented. A visitor looking for the next meeting, help from a service officer, membership, or contact information may have to scan through substantial leadership content.
- The primary actions are not clearly separated by audience. “Join,” “get involved,” “request service assistance,” “read current information,” and “contact the post” are different workflows and should be treated as such.
- Some wording and presentation appear unfinished or inconsistent, including visible spacing/grammar issues and repeated or awkward profile content.
- Meeting information is very limited: the page states that meetings occur on the first Tuesday of each month, but visitors may still need time, location, calendar details, cancellation notices, or contact instructions.
- The bulletin board depends on external links and appears to have limited context about what is current, who maintains each resource, and when it was last updated.
- The site does not make the post's complete contact/location details an obvious primary action from the captured content.

### Forms and operations

- The newsletter form is only an intake point from the public site's perspective. It is not clear what email service receives subscribers, who can manage the list, whether confirmation is sent, or whether unsubscribe/consent handling is configured correctly.
- The “Get Involved” form is underspecified. “Interested In” needs a defined list of options and a clear process for routing submissions to the right person.
- The Service Officer form collects sensitive personal information and permits file uploads, potentially including DD-214 and other documents. This creates a higher privacy and security requirement than an ordinary contact form.
- It is not clear who receives form notifications, where submissions are stored, how long they are retained, who can access them, or how a veteran is told what happens after submitting.
- The service intake asks for a full address and uploaded files before the actual minimum information needed for triage has been established. The form should be reviewed with the service officer and, if possible, a privacy-minded workflow owner.
- The current forms may be technically functional while still failing operationally if no one owns the inbox, list, follow-up, and response-time expectations.

### Platform and ownership

- Wix Studio provides a reasonable fit for a small organization that needs hosted pages and forms, but the site's footer identifies a third-party builder. It is not yet clear whether the post owns the Wix account, domain, content, form data, newsletter list, media, and external integrations.
- “More control” could mean several different things: editing content without outside help, controlling form data, changing layouts, integrating email/CRM tools, reducing subscription costs, owning the code, or having a reliable backup/export process. Each points to a different solution.
- A move away from Wix would add migration and ongoing maintenance work. A self-hosted or custom site would require someone to manage hosting, updates, backups, spam protection, accessibility, security, and form delivery.

## Requirement discovery comes first

Before recommending Wix improvements, WordPress, a static/custom site, or another hosted platform, determine the site's actual goal. The first meeting should answer:

1. What should the site help people do most often?
2. Who are the primary audiences: veterans seeking help, post members, prospective members, volunteers, donors, family members, or the general public?
3. What does success look like over the next 6–12 months: more members, more service requests, better event attendance, newsletter growth, easier publishing, or something else?
4. Which pages and information must staff be able to update themselves?
5. Who owns and performs updates today, and how much time and technical comfort do they have?
6. Who receives each submission, what response time is expected, and what happens after a form is submitted?
7. What newsletter provider and email account are connected to the site, and who owns those accounts and subscriber data?
8. What information may be collected through the Service Officer form? Is file upload necessary, and what privacy/retention rules apply to those documents?
9. Does the post need event calendars, online membership/payment, donations, volunteer scheduling, document publishing, appointment requests, or member-only content?
10. Which accounts, domains, content, images, forms, integrations, and data must be retained or transferred?
11. What budget, timeline, and maintenance capacity exist after launch?
12. Is the real need a redesign, a simpler editing workflow, better form routing, account ownership, or a full platform change?

## Recommended next steps

1. Interview the person responsible for the site and at least one person responsible for newsletters, service-officer requests, and post communications. Start with the site's goal and the top three user tasks.
2. Inventory all current accounts and dependencies: Wix owner/admin access, domain registrar, email account, newsletter provider, form notifications, Google Drive folders, Facebook, analytics, and any payment or membership systems.
3. Map each current workflow from visitor action to human follow-up. Include newsletter signup, general involvement, Service Officer intake, document publishing, meeting updates, and leadership/content updates.
4. Decide what data the site should collect. Treat Service Officer uploads as sensitive and avoid moving that workflow to a new platform until access, storage, notifications, retention, and deletion are understood.
5. Create a small prioritized content model: primary calls to action, required pages, page owners, update frequency, and approval process.
6. Only then compare solutions. First evaluate whether the current Wix site can meet the clarified requirements with better ownership and configuration. Compare alternatives against editing ease, data control, form security, integrations, accessibility, cost, backups, and ongoing maintenance.
7. Build a small proof of concept for the highest-risk workflow, likely Service Officer intake or newsletter management, before committing to a full rebuild.

## Initial recommendation

Do not commit to replacing Wix yet. Treat this as a requirements and ownership project first. The likely best outcome may be a simpler, better-organized site with clear account ownership and reliable form/email workflows; that could be achieved within Wix or through a migration. The platform decision should follow the post's goals, staffing, sensitivity of collected information, and desired level of control.

## Run platform evaluation in parallel

It is reasonable to evaluate another tool while gathering requirements. Keep the two activities connected: every platform test should answer a requirement question, and every new requirement should change what gets tested.

### Track A: understand the organization

- Confirm the site's primary goal and top user tasks.
- Identify who owns content, submissions, newsletter data, domain, and accounts.
- Document response and publishing workflows.
- Establish privacy requirements for Service Officer requests and uploaded documents.
- Define budget, launch timing, maintenance capacity, and desired control.

### Track B: test the candidate tool

Build a small, disposable prototype rather than a full redesign. Test:

1. A clear homepage with separate paths for service assistance, membership/involvement, bulletin-board information, and newsletter signup.
2. A newsletter signup connected to the intended email provider, including confirmation, unsubscribe, list ownership, and export.
3. The “Get Involved” form with routing, spam protection, notification, confirmation, and submission storage.
4. A bulletin-board update workflow that a nontechnical owner can perform without developer help.
5. A Service Officer intake prototype using fake data only. Test fields, file handling, permissions, notifications, retention, and deletion. Do not upload real veteran documents during evaluation.
6. Mobile layout, accessibility basics, page speed, search visibility, backups/exports, and account recovery.

### Evaluation questions

Score the candidate against the actual needs, not its template gallery:

- Can the post own and administer every important account?
- Can the designated person update pages, documents, leadership, and meeting information easily?
- Can submissions reach the right person with a clear audit trail?
- Does the tool provide appropriate controls for sensitive form data and uploads, or should that workflow remain in a separate secure system?
- Can the newsletter provider, Google Drive, Facebook, calendar, analytics, and any future membership/payment tools integrate cleanly?
- What can be exported if the organization leaves?
- What are the recurring costs, vendor dependencies, and maintenance responsibilities?
- Can the site remain accessible and usable without custom code?

### Suggested evaluation output

After the first interview and prototype session, produce a short decision note containing:

- Requirements confirmed and still unknown
- Candidate tool tested and workflows completed
- Workflow failures or missing capabilities
- Account/data ownership plan
- Estimated build, migration, and yearly maintenance effort
- Recommendation: improve Wix, migrate, or keep evaluating

This allows the organization to learn about a new tool immediately without turning an early platform preference into an expensive commitment.
