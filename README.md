# WordPress Website Setup Guide

A static, self-paced learning guide for beginner web design students. Students follow the course to build a basic blog or portfolio; WordPress can also power many other kinds of websites. It uses semantic HTML, CSS, vanilla JavaScript, and browser LocalStorage. There is no build step, backend, database, paid dependency, or student login.

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
- Screenshot assets are grouped by lesson topic: `images/installation-steps/` contains six InfinityFree/Softaculous captures, including a setup form with its administrator username, password, and email blurred; `images/wordpress-dashboard/` contains dashboard and settings captures used in Modules 5, 6, 7, 8, 11, and 14; `images/block-theme-editor/` contains Site Editor captures used in Module 7; `images/wordpress-page/` contains Gutenberg/page captures used in Module 9; `images/wordpress-plugins/` contains plugin/contact-form captures used in Module 8; `images/wordpress-theme/` contains Astra and Elementor plugin installation examples used in Module 10; and `images/wordpress-elementor/` contains Elementor editor, settings, template-library, image-widget, and preview captures used in Module 10. Root-level `images/file-manager.png`, `images/access-db.png`, `images/backup-plugin.png`, `images/backup-db.png`, `images/backup-htdocs.png`, `images/reading-settings.png`, `images/menu-setup.png`, `images/responsive-checking.png`, and `images/https-checking.png` support Modules 3, 11, and 14. The database screenshots illustrate finding database tools and configuring an export; neither demonstrates a completed, restorable backup. The backup-plugin image shows search results only, not a completed backup or restore. The File Manager screenshots show file locations, not complete database backups. The Elementor library captures include Pro-badged designs; those are optional paid items. Astra is the class theme and Hello Elementor is the free alternative. Images have captions and open in the viewer. The setup capture's example domain remains visible; some other screenshots show demo account names. Review these details and confirm permission before wider public distribution. Remaining capture prompts are labeled. To add a capture, give it a descriptive filename in the appropriate folder and add its `src`, `alt`, and `caption` to the lesson data.
- Hosting plans and WordPress dashboards can change. Module 3 follows InfinityFree as the primary classroom path: free subdomain, hosting dashboard, then Softaculous in Module 4. Check that the current free plan and WordPress requirements still fit before class. AwardSpace remains an optional provider-comparison activity; verify its current terms rather than treating advertised features as guaranteed.
- Screenshots sit under the step they illustrate. In `content/lessons.js`, give a step `image: shot("file.png", "alt")` or `images: [shot(...), ...]` (paths are relative to `images/`). Add `imageNeeded: "what to capture"` to show a "SCREENSHOT NEEDED" box until you add the file; replace it with `image:` afterward. Images used in a step are automatically removed from the lesson's lower gallery.
- The course has fourteen required modules. Module 2 plans the site (audience, five pages, a Home sketch, and permitted content) before hosting. Module 6 covers managing content (add, edit, trash, and delete) for pages, posts, categories, media, comments, and users. Modules 9 and 10 teach two methods for designing content: students design a complete Home page with Gutenberg in Module 9, then complete the Elementor page-building workflow in Module 10. Elementor Pro features are optional and are not required. Configuration is Module 11, writing for the web and SEO basics is Module 12, security, privacy, and permissions is Module 13, and publishing/maintenance is Module 14. Reading and hands-on times are planning estimates, not measured completion times. Lesson IDs and numbers come from array order in `content/lessons.js`, so inserting a lesson renumbers later ones; update hard-coded "Module N" text and links when you do. Saved progress is migrated by the `layout` version in `scripts.js`; bump it and add a mapping when lessons are inserted.

Progress, checked tasks, theme preference, and reading text size are saved in the student's browser only. The reading-size control ranges from 14px to 20px in 2px steps and starts at 16px. The site does not collect or store hosting credentials, passwords, contact form submissions, or WordPress content.

## Deploy

The MySQL screenshots are used in Modules 3 and 14 to illustrate the database tools and export workflow. Before publishing, confirm their visible account details are appropriate for public release; static hosts can serve image files directly whether or not a lesson displays them.

Upload the contents of this directory, preserving the `content/` folder, to any static web host that serves HTML, CSS, and JavaScript. Publish `index.html` as the entry point. No PHP, WordPress, or database is required to host this guide. Test the deployed URL on desktop and mobile, and check that all JavaScript and stylesheet files load over HTTPS.
