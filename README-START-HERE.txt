ARCHIVE DIGITAL — PHASE 1 STARTER WEBSITE

FILES
  index.html     Main website structure and text
  style.css      Colors, layout, responsive design
  script.js      Mobile menu, year, draft-email contact form
  assets/favicon.svg  Browser tab icon

START ON YOUR MACBOOK (VS CODE)
  1. Unzip this folder.
  2. Open VS Code > File > Open Folder > archive-digital-starter.
  3. Open index.html in browser (right click > Reveal in Finder > double-click)
     or use a local development preview extension.
  4. Edit and save the files. Refresh browser to view changes.
  5. Check the site on a narrow mobile-width browser window.

BEFORE PUBLISHING
  - In index.html, edit the introduction and course details to be accurate.
  - In script.js, replace YOUR_EMAIL@example.com with an email inbox you own.
    The form prepares a message in the visitor's email application. It is NOT
    a PHP email sender and does NOT save or transmit messages by itself.
  - Do not put passwords, API tokens, real customer data, or server credentials in front-end files.
  - All sample and planned projects are labeled; replace them with finished case studies over time.

UPLOAD WITHOUT ALTERING YOUR SCHOOL WEBSITE
  1. Sign into your existing hosting dashboard.
  2. Open File Manager / site root for the exact intended domain.
  3. DO NOT replace the existing index.html in your school site's root.
  4. If your provider supports subfolders, create a new folder such as archive-digital.
  5. Upload index.html, style.css, script.js, and the assets folder into that folder.
  6. Verify the folder contains index.html directly, not an extra nested folder.
  7. Open https://YOUR-EXISTING-DOMAIN/archive-digital/ in a browser.
  8. Test Home / Services / Portfolio / About / Contact navigation, including mobile.
  9. If the browser shows old content, hard-refresh (Cmd+Shift+R) or use private browsing.
 10. If you see a 404, check folder name, case, URL, and where files were uploaded.

NOTE: Exact labels and URLs vary by host. Some providers do not allow a second
site/subfolder or have different public roots. Check the host's site settings.
A separate folder makes a development copy; a custom subdomain or domain may
require additional host support and DNS configuration.

PHP / DATABASES (PHASE 2)
  - No PHP is necessary for this first version.
  - Later add a properly validated server-side contact or booking form if hosting supports PHP.
  - If storing submissions, use MySQL with prepared statements, spam protection,
    authentication for admin views, and appropriate privacy/security safeguards.
  - Never deploy code with hard-coded database passwords or expose config files.

BRANDING
  Main purple: #5C2C7A | Gold: #E9C77B | Dark background: #120C1B

CONTACT FORM NOTE
  mailto: depends on whether a visitor has an email app configured.
  A reliable in-browser submission form is a future server-side task.
