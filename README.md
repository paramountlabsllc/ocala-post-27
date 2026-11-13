# American Legion Ocala Memorial Post 27

A static, responsive Post 27 website built with HTML, CSS, and vanilla JavaScript.

## Live site

The latest published version is live at [paramountlabsllc.github.io/ocala-post-27](https://paramountlabsllc.github.io/ocala-post-27/).

## Run locally

From the project directory:

```sh
python3 -m http.server 4173
```

Open [http://localhost:4173/](http://localhost:4173/) in a browser. The site should be served through HTTP so the bulletin JSON request works reliably; do not open `index.html` directly from the file system.

Stop the temporary server with `Ctrl-C` in the terminal running it.

## How the site works

- `index.html` contains the page structure, content, forms, navigation, and accessible labels.
- `styles.css` contains the original layout and visual system.
- `ocala.css`, `leadership.css`, `services.css`, `forms.css`, and `bulletin.css` contain focused Post 27 and feature-specific styles.
- `script.js` controls the mobile navigation and loads/filter bulletin items.
- `assets/christy-moore.jpg` is the local Service Officer portrait.

The site has no application server or build step. Forms use FormSubmit to send inquiries and newsletter signups to the configured Post 27 inbox.

## Recent updates

The latest GitHub changes include:

- Added a Service Officer intake form with veteran contact details, service selection, supporting-document upload, and privacy guidance.
- Connected the Service Officer request flow to the Post 27 contact inbox.
- Improved form styling and increased contrast across the page for clearer reading and keyboard use.
- Updated the hero to use the animated Post 27 flag video and refreshed the supporting image treatments.
- Kept the bulletin board, leadership details, newsletter signup, and join forms as part of the responsive one-page experience.

## Publishing bulletin items

The public bulletin board is read-only. It loads the published array from `bulletins.json` and does not allow visitors to create or edit items in the browser.

To publish an item in the current prototype:

1. Edit `bulletins.json`.
2. Add an object with `title`, `type`, `date`, and `description`.
3. Set `type` to one of `event`, `announcement`, or `resource` so the filters include it.
4. Validate the JSON before deployment:

```sh
python3 -m json.tool bulletins.json >/dev/null
```

5. Deploy the changed file with the rest of the site.

The current JSON file is the admin-managed source, not a secure authenticated backend. For staff editing without direct file access, connect the frontend to a private CMS, Supabase, Airtable, or a serverless API and preserve the same published data shape.

## Accessibility and QA checklist

Before publishing a change:

- Run the JSON validation command above when bulletin data changes.
- Check the page at desktop and mobile widths.
- Navigate with `Tab` and confirm visible focus, usable menu controls, filter state, form labels, and expandable leadership details.
- Confirm images have meaningful alternative text or are decorative.
- Confirm every link goes to a real section or destination.
- Confirm the browser console has no errors and the bulletin items load.
- Test the Join the Team and newsletter forms without sending sensitive Veteran information.

The page uses semantic headings, labeled navigation and form fields, keyboard-operable native `details` elements, live bulletin error text in the page, and responsive layouts. A future production release should add a dedicated privacy notice and authenticated bulletin administration.
