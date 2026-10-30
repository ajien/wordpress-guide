# WordPress Website Setup Guide

A static, self-paced learning guide for beginner web design students. It uses semantic HTML, CSS, vanilla JavaScript, and browser LocalStorage. There is no build step, backend, database, paid dependency, or student login.

## Run locally

From this directory, start Python's built-in static server:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Stop the server with Ctrl+C. A static server is recommended so browser storage and local assets behave consistently.

You can also use a VS Code static-server extension. Open `index.html` directly only as a quick preview; browser behavior for LocalStorage on `file:` URLs varies.

## Edit course content

- Edit lesson copy, activities, quizzes, glossary entries, troubleshooting items, and project criteria in `content/lessons.js`.
- Edit the page shell and navigation landmarks in `index.html`.
- Edit colors, typography, responsive rules, and component styles in `style.css`.
- Edit interactions and reusable renderers in `scripts.js`.
- Screenshot assets are grouped by lesson topic: `images/installation-steps/` for the six InfinityFree/Softaculous captures used in Module 3; `images/wordpress-dashboard/` for fourteen dashboard and settings captures used in Modules 4, 5, 6, 9, and 10; `images/block-theme-editor/` for six Site Editor captures used in Module 5; `images/wordpress-page/` for fourteen Gutenberg/page captures used in Module 7; `images/wordpress-plugins/` for five plugin/contact-form captures used in Module 6; `images/wordpress-theme/` for Astra and Elementor plugin installation examples used in Module 8; and `images/wordpress-elementor/` for Elementor editor, settings, template-library, image-widget, and preview captures used in Module 8. The Elementor library captures include Pro-badged designs; the lesson identifies those as optional paid items. Astra is the class theme and Hello Elementor is the free alternative. Images have captions and open in the viewer. The account owner confirmed the administrator credential visible in the installation setup capture is no longer valid; students must never reuse credentials shown in screenshots. Some captures include demo account details; review or replace these before wider public distribution. Other screenshot tiles remain explicitly labeled prompts. To add a capture, give it a descriptive filename in the appropriate folder and add its `src`, `alt`, and `caption` to the lesson data.
- Hosting plans and WordPress dashboards can change. Module 2 follows InfinityFree as the primary classroom path: free subdomain, hosting dashboard, then Softaculous in Module 3. Check that the current free plan and WordPress requirements still fit before class. AwardSpace remains an optional provider-comparison activity; verify its current terms rather than treating advertised features as guaranteed.
- The course has ten modules. Students learn Gutenberg and build a complete Home page in Module 7, then explore Elementor in Module 8. Configuration is Module 9 and publishing/maintenance is Module 10. Reading and hands-on times are planning estimates, not measured completion times.

Progress, checked tasks, theme preference, and reading text size are saved in the student's browser only. The reading-size control ranges from 14px to 20px in 2px steps and starts at 16px. The site does not collect or store hosting credentials, passwords, contact form submissions, or WordPress content.

## Deploy

Upload the contents of this directory, preserving the `content/` folder, to any static web host that serves HTML, CSS, and JavaScript. Publish `index.html` as the entry point. No PHP, WordPress, or database is required to host this guide. Test the deployed URL on desktop and mobile, and check that all JavaScript and stylesheet files load over HTTPS.
