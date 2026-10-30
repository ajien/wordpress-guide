window.COURSE_CONTENT = {
  lessons: [
    {
      id: "module-1",
      number: "01",
      title: "How websites work",
      eyebrow: "THE BIG PICTURE",
      summary: "Learn how websites work, then follow a visitor's request through WordPress. This course will help you publish a basic blog or portfolio.",
      readingTime: "8 MIN",
      handsOnTime: "10-15 MIN",
      objectives: ["Tell the internet apart from the Web.", "Explain what a domain, host, server, database, and CMS each do.", "Understand how WordPress creates a webpage using saved content.", "Know that WordPress can build blogs, portfolios, business sites, online stores, news sites, and many other kinds of websites.", "Choose between WordPress.org software and WordPress.com hosting."],
      concepts: [
        { title: "The internet and the Web", text: "The internet is the worldwide network that connects computers. The World Wide Web is one service that uses that network: linked pages and media requested with web addresses. Email and file transfers also use the internet, but they are not the Web." },
        { title: "An address and a place to live", text: "A domain name such as example.org is a readable address. DNS is like the internet's contact list: it helps a browser find the server associated with that name. Web hosting is rented space and services on an always-connected computer. The web server software answers requests for files or application pages." },
        { title: "WordPress and its database", text: "WordPress is a content management system (CMS): software for creating and organizing a site without hand-writing every page. It uses PHP code and a MySQL-compatible database to save settings, pages, posts, and other information. A theme controls presentation; plugins add optional capabilities." },
        { title: "From blogs to many kinds of websites", text: "WordPress began as a blogging tool. Today, people also use it for portfolios, business sites, news sites, online stores, membership sites, and more. This course focuses on a blog or portfolio, but the skills you learn can be used for many kinds of websites." },
        { title: "How widely WordPress is used", text: "W3Techs estimated that WordPress was used by 39.5% of all websites on October 30, 2026. Among websites whose content system W3Techs could identify, the share was 58.2%. These figures change over time and depend on how the survey measures websites." },
        { title: "Two WordPress choices", text: "WordPress.org distributes the open-source WordPress software you can install on a host you choose. WordPress.com is a hosted service operated by Automattic, with plans and features managed by that service. They are related, but accounts, hosting, support, and available controls are not interchangeable. This guide focuses on self-hosted WordPress.org software." }
      ],
      steps: [
        { title: "Start with a visitor", body: "A person types a web address or follows a link. The browser asks DNS where that domain points, then requests a page from the server." },
        { title: "Let WordPress build the response", body: "The server runs WordPress code. WordPress reads the requested content and settings from the database, combines them with the active theme and plugins, and sends HTML, CSS, images, and other files back." },
        { title: "Render and inspect", body: "The browser turns those files into the page a person sees. HTML describes structure, CSS describes presentation, and JavaScript can add behavior. A WordPress theme produces much of the HTML and CSS for you; the browser still uses the same web standards." }
      ],
      visual: { type: "flow", caption: "Select a stage to see what happens during a page request.", nodes: [{ label: "Visitor", detail: "A person enters a URL or clicks a link." }, { label: "Browser", detail: "The browser asks DNS for the domain's server address." }, { label: "Web server", detail: "The host receives the request and runs the site software." }, { label: "WordPress + database", detail: "WordPress reads content and settings, then assembles a response." }, { label: "Browser renders", detail: "HTML, CSS, images, and scripts become the page on screen." }] },
      activity: "On paper, draw the request flow for a page on your future site. Label where the domain, DNS, host, server, WordPress, database, and browser fit. Then explain one job in your own words to a classmate.",
      checkpoint: "You can explain why a domain is not the website itself, and why WordPress needs both a server and stored content to respond to a visitor.",
      troubleshooting: [{ issue: "A domain opens a page you did not expect.", fix: "The domain may point to a different host, be newly changed, or be cached by a browser. Confirm the domain's DNS/hosting assignment before changing WordPress." }],
      takeaways: ["The Web is a service that runs on the internet.", "DNS connects a human-readable domain to a server address.", "WordPress combines code, a database, a theme, and plugins to generate pages.", "WordPress can be used for blogs, portfolios, and many other site types.", "WordPress.org software and WordPress.com hosting are different choices."],
      checklist: ["I can define a domain and DNS.", "I can describe the job of hosting and a web server.", "I can trace a request through WordPress and its database.", "I can explain the difference between WordPress.org and WordPress.com."],
      quiz: { question: "Which statement best describes a domain name?", choices: ["It is the readable address people use to find a site.", "It is the database that stores WordPress pages.", "It is a theme that controls page colors."], answer: 0, explanations: ["Correct. DNS helps connect that readable address to the server.", "A database stores information; a domain is an address.", "A theme affects presentation; a domain is an address."] },
      references: [{ label: "WordPress.org: WordPress features", url: "https://wordpress.org/about/features/" }, { label: "WordPress.org: Support documentation", url: "https://wordpress.org/documentation/" }, { label: "W3Techs: WordPress usage statistics", url: "https://w3techs.com/technologies/details/cm-wordpress" }]
    },
    {
      id: "module-2",
      number: "02",
      title: "Create a free hosting account",
      eyebrow: "A PLACE FOR YOUR SITE",
      summary: "Follow the classroom path: InfinityFree account, free subdomain, control panel, then Softaculous in the next lesson.",
      readingTime: "10 MIN",
      handsOnTime: "20-40 MIN",
      objectives: ["Create a practice hosting account using the class provider path.", "Choose a free subdomain and locate the hosting account dashboard.", "Find the file, database, and script-installer areas without guessing controls.", "Recognize free-hosting limits before using the account."],
      concepts: [
        { title: "Check the fit before signing up", text: "WordPress needs a server environment that supports the current WordPress requirements, PHP, and a compatible database. A host may also restrict resource use, software installation, email, backups, traffic, or support. Check the current WordPress requirements and the hosting provider's own terms before committing class time." },
        { title: "Classroom path: InfinityFree", text: "For the class demonstration, start with InfinityFree, create a free subdomain, then use its hosting account dashboard. Module 3 follows the captured Softaculous route to WordPress. These screenshots document one interface version; confirm the current free plan and account steps before class. If InfinityFree no longer offers the needed feature, your instructor can substitute a verified provider without changing the concepts." },
        { title: "A free subdomain is a practice address", text: "A subdomain places your site under a domain controlled by another organization, such as student.example-host.test. It is not a custom domain you own. The provider can change or retire the service, and the address may be less portable than a domain you control." }
      ],
      steps: [
        { title: "Open the official InfinityFree site", body: "Use the provider's official website and confirm with your instructor that its free plan is currently available for the class. Follow the live registration flow; button names and verification steps can change.", checkpoint: "Show the official provider page and the current free-plan terms your instructor approved." },
        { title: "Register with an email you control", body: "Complete the provider's current account-registration steps and verify your email if asked. Use a unique password stored in your password manager. Do not reuse your school or email password, and never enter a real password in this guide or class worksheet.", checkpoint: "Confirm you can sign in to the provider account. Keep the password private; do not show it to the instructor or capture it in a screenshot." },
        { title: "Create a hosting account", body: "From the provider account area, start a new hosting account using the current workflow. Choose the free option intended for practice. Confirm the account is active before moving on.", checkpoint: "The new hosting account appears as active in your provider account area." },
        { title: "Choose a free subdomain", body: "Select an available subdomain for your project and record its public address in your own notes. This is a practice address under the provider's domain, not a custom domain you own.", checkpoint: "Open the subdomain in a browser and confirm it reaches the hosting account or its expected starter page." },
        { title: "Open the account dashboard", body: "Open the control panel for the hosting account you just created. Use the screenshot prompts to orient yourself, but follow current provider help if the layout or labels differ.", checkpoint: "Show the hosting account dashboard with its account name or domain visible; hide account IDs and personal contact details in any class capture." },
        { title: "Locate the tools for the next lesson", body: "Find the file manager, database tools, and script installer area. Do not edit or delete files just to explore. In Module 3, use the currently documented Softaculous route if it remains available on the class plan.", checkpoint: "Point out the file manager, database area, and installer entry point. If one is missing, record the provider's documented alternative and ask the instructor before proceeding." }
      ],
      visual: { type: "placeholders", caption: "The next lesson contains the authentic InfinityFree and Softaculous installation captures. These are prompts for any new provider screens the class wants to document; do not present placeholders as screenshots.", items: ["Current InfinityFree signup and email verification", "Create a hosting account and choose its free subdomain", "Account dashboard with the control panel entry", "File manager and database tools, with private details hidden"] },
      activity: "Complete the InfinityFree classroom path. Keep a note of the public subdomain and identify the hosting account dashboard. Never write your password in the class worksheet or share it with classmates.",
      optionalActivityLabel: "OPTIONAL HOST COMPARISON",
      optionalActivity: "Compare InfinityFree with AwardSpace after completing the setup path. Check each provider's current official plan, WordPress/PHP/database support, HTTPS, backup/export options, resource limits, inactivity policy, and support. Add the source and date checked; do not treat advertised limits as unlimited service.",
      checkpoint: "Demonstrate the active hosting account dashboard, show the selected free subdomain, and point out where the file manager, database tools, and script installer are located. If any item is unavailable, record the provider's current documented alternative and ask the instructor before proceeding.",
      troubleshooting: [{ issue: "You cannot find an installer.", fix: "Do not assume it exists. Check the host's current help center for manual installation instructions and confirm the plan permits it. Ask your instructor before entering database details." }, { issue: "A free plan's limits are unclear.", fix: "Treat unclear limits as unknown, not unlimited. Check official terms and support pages; avoid storing important or sensitive data on a practice host." }, { issue: "An account or site is suspended after inactivity.", fix: "Check the current inactivity and retention policy, then contact the provider through its official support route. Keep independent copies of files and database exports where permitted." }],
      takeaways: ["The class demonstration starts with InfinityFree and a free subdomain.", "Module 3 continues from the hosting dashboard to Softaculous and WordPress.", "Free hosting can limit resources, performance, support, backups, and uptime.", "A free subdomain is controlled by the provider, not owned by the student.", "Follow current provider documentation if the captured interface has changed."],
      checklist: ["I created and opened my hosting account.", "I recorded my free subdomain privately.", "I located the file manager, database tools, and script installer area.", "I reviewed the current free-plan limitations.", "I kept my password out of class notes and screenshots."],
      quiz: { question: "A tutorial's hosting-panel labels do not match your account. What should you do?", choices: ["Click similar-looking controls until something works.", "Check the host's current official help and confirm the feature is available on your plan.", "Assume the account is broken and pay for a plan."], answer: 1, explanations: ["Guessing in a hosting panel can alter or delete data.", "Correct. Provider interfaces and plan features vary; verify before acting.", "First confirm the current feature and plan. A paid upgrade is not automatically necessary."] },
      references: [{ label: "InfinityFree official website (confirm current plan before class)", url: "https://www.infinityfree.com/" }, { label: "WordPress.org: Requirements", url: "https://wordpress.org/about/requirements/" }],
      optionalReferences: [{ label: "AwardSpace official free hosting page", url: "https://www.awardspace.com/free-hosting/" }]
    },
    {
      id: "module-3",
      number: "03",
      title: "Install WordPress",
      eyebrow: "FIRST BUILD",
      summary: "Install the software using the route supported by your host, make a secure administrator account, and distinguish your public site from its controls.",
      readingTime: "10 MIN",
      handsOnTime: "20-30 MIN",
      objectives: ["Choose an installation URL that matches the intended site address.", "Set basic site details and a secure administrator account.", "Tell the public-facing site apart from the admin dashboard.", "Use a calm troubleshooting sequence when installation fails."],
      concepts: [
        { title: "InfinityFree + Softaculous example", text: "The screenshots below show one captured InfinityFree dashboard and its Softaculous script installer. Provider menus, available software, and setup fields can change or vary by plan. If your account does not show the same route, stop and check the host's current help pages; do not guess. A manual installation may be an option if the host supports it." },
        { title: "The front end and the back end", text: "The public-facing website is the front end: pages visitors can see. The administration area is the back end: an authenticated space for publishing and configuring the site. In a standard WordPress installation, the login and administration route is usually your site address followed by /wp-admin, but a security plugin or host configuration can change access behavior." },
        { title: "Use a real secret, not a classroom example", text: "Choose a unique administrator username that is not easy to guess, a long unique password, and an email account you can access. Use a password manager. The sample text in a guide is never a password to reuse." }
      ],
      steps: [
        { title: "Open your hosting account overview", body: "Sign in to your hosting provider and open the correct hosting account. In this example, the first screenshot shows an InfinityFree account overview. Confirm that the domain and account are the ones you intend to use." },
        { title: "Open Script Installer", body: "In the captured InfinityFree interface, Script Installer is available from the account overview. Provider controls can move or be renamed; follow current provider documentation if your screen differs. The service-status notice in the example capture is time-specific, not a normal installation step." },
        { title: "Choose WordPress", body: "In the Softaculous script catalog, locate WordPress and choose its install action. Check the software name and version before proceeding. If WordPress is unavailable on your plan, confirm current host support rather than selecting a different script." },
        { title: "Set the URL and site details", body: "Choose the correct protocol and domain, and leave the directory blank only if WordPress should load at the domain root. Set a working site name and description. These values can be changed later." },
        { title: "Create your administrator account", body: "Choose a unique username, generate a strong password that is not shown in these demo screenshots, and use an email address you control. Store the credentials privately in a password manager. Never reuse or copy credentials visible in a screenshot." },
        { title: "Wait, confirm, then test", body: "Keep the installer open until it reports success; the captured progress percentage and wait time are examples, not guarantees. Use the completion screen to open your own public site and admin URLs. Test the public site signed out, then sign in through your own admin URL and sign out on shared devices." }
      ],
      visual: { type: "placeholders", caption: "Original classroom demonstration captures of InfinityFree and Softaculous from October 30, 2026. Interfaces can change. Select an image to enlarge it. The administrator credential visible in the setup capture has been invalidated; never copy credentials from screenshots.", items: [
        { src: "images/installation-steps/step1-main-dashboard.png", alt: "InfinityFree hosting-account overview with account navigation and Script Installer shortcut", caption: "1. Open the hosting account overview. Confirm you are working in the intended account." },
        { src: "images/installation-steps/step2-click-script-installer.png", alt: "InfinityFree account overview with Script Installer highlighted and a temporary service notice", caption: "2. Open Script Installer. The orange service notice shown here is specific to the capture date." },
        { src: "images/installation-steps/step3-softaculous-wp-install.png", alt: "Softaculous Top Scripts catalog with WordPress and its Install action", caption: "3. Locate WordPress in Softaculous and choose its Install action." },
        { src: "images/installation-steps/step4-wp-installation-setup.png", alt: "Softaculous WordPress setup form with URL, site settings, and administrator account sections", caption: "4. Set the installation URL and site details, then create your own unique administrator credentials. Do not reuse the visible demo credentials." },
        { src: "images/installation-steps/step5-wait-to-finish.png", alt: "Softaculous installation progress screen showing a WordPress setup in progress", caption: "5. Wait for the process to finish. The percentage and duration shown are not guaranteed timings." },
        { src: "images/installation-steps/step6-installation-complete.png", alt: "Softaculous success message with public website and administrative URLs", caption: "6. Open your own public and admin URLs from the success screen; the addresses in this example belong to the demonstration account." }
      ] },
      activity: "Plan a safe installation using a fictional site title and URL. List the decisions you must make, but do not write a real username, password, or personal email address in the plan. Then follow the host's current documentation alongside the matching screenshot captions.",
      checkpoint: "The public URL opens for a signed-out visitor, and you can reach the dashboard by signing in with credentials kept only in your password manager.",
      troubleshooting: [{ issue: "The installer reports a database connection error.", fix: "Check the host's current database instructions, database name, user, password, and server value for typos. Do not guess credentials or publish them in a screenshot." }, { issue: "The site shows a blank page or a server error.", fix: "Check the host's supported PHP requirements and installation logs, if available. Temporarily disable only a recently added component if you understand the risk; ask the instructor or host support before changing server settings." }, { issue: "The admin URL redirects or does not load.", fix: "Confirm the public site URL and installation folder. Try the host's documented login route and check whether a security or caching plugin changed access behavior." }, { issue: "The site loads over HTTP, not HTTPS.", fix: "Check whether the host currently provides HTTPS and whether its certificate is active. Do not enter sensitive information until the secure connection is confirmed." }],
      takeaways: ["Use only a host-supported installation route.", "Confirm the site URL before installation.", "A public website and its admin dashboard serve different audiences.", "Never store real login secrets in this guide or shared class materials."],
      checklist: ["I confirmed the correct install URL and folder.", "I set a working title and tagline.", "I created unique admin credentials and stored them privately.", "I opened the public website while signed out.", "I signed in through the documented admin route and signed out safely."],
      quiz: { question: "Where should a real WordPress administrator password be stored?", choices: ["In this guide's checklist so it is not forgotten.", "In a password manager controlled by the account owner.", "In the public site tagline."], answer: 1, explanations: ["A shared checklist can expose credentials.", "Correct. Use a private password manager and never add secrets to the guide.", "A tagline is public content and must never contain a password."] },
      references: [{ label: "WordPress.org: Install WordPress", url: "https://developer.wordpress.org/advanced-administration/before-install/howto-install/" }, { label: "WordPress.org: Requirements", url: "https://wordpress.org/about/requirements/" }]
    },
    {
      id: "module-4",
      number: "04",
      title: "Explore the dashboard",
      eyebrow: "LEARN THE WORKSPACE",
      summary: "Map the main administration areas to common tasks, while remembering that roles, plugins, and themes can change what you see.",
      readingTime: "8 MIN",
      handsOnTime: "15-20 MIN",
      objectives: ["Find the main WordPress administration areas.", "Choose the right area for a content or site task.", "Recognize why dashboards can differ between installations."],
      concepts: [
        { title: "The dashboard is a workspace, not a website builder by itself", text: "The dashboard gives authenticated users access to content, media, appearance, plugins, users, and settings. The public site is what visitors see. Menu items can differ with WordPress version, user role, active theme, installed plugins, host restrictions, or custom configuration. Learn the purpose of an area rather than memorizing its exact position." }
      ],
      steps: [
        { title: "Dashboard", body: "A home screen with site activity and useful notices. Start here for a quick status check, but verify important claims on the actual settings or content screen." },
        { title: "Posts and Categories/Tags", body: "Posts are typically time-based updates such as news or articles. Categories group posts into broad topics; tags describe more specific details. A site may use posts differently, but Pages are usually used for stable sections." },
        { title: "Media and Pages", body: "Media is the library for uploaded images, audio, video, and documents. Pages hold durable content such as About or Contact. Add useful alternative text to meaningful images and avoid uploading files you do not have permission to use." },
        { title: "Comments and Appearance", body: "Comments are visitor responses that may need moderation. Appearance controls themes and site presentation. The available editor depends partly on whether the active theme is a block theme or a classic theme." },
        { title: "Plugins, Users, Tools, and Settings", body: "Plugins manage optional features; Users manages accounts and roles; Tools offers specific import/export or maintenance utilities; Settings controls site-wide choices. Access to these areas may be limited for non-administrator roles or by the host." }
      ],
      visual: { type: "explorer", caption: "Choose an area to reveal a typical task. Your menu may differ.", items: [{ label: "Dashboard", detail: "Check status notices and recent activity." }, { label: "Posts", detail: "Draft or publish time-based articles and organize them with categories and tags." }, { label: "Media", detail: "Review uploaded files and edit their titles, captions, and alternative text." }, { label: "Pages", detail: "Create stable sections such as About, Services, or Contact." }, { label: "Comments", detail: "Review visitor responses and moderate spam." }, { label: "Appearance", detail: "Choose a theme and adjust site presentation where the theme permits." }, { label: "Plugins", detail: "Install or manage optional site features when your role and host allow it." }, { label: "Users", detail: "Manage accounts and assign only the access each person needs." }, { label: "Tools", detail: "Use available import/export and maintenance utilities carefully." }, { label: "Settings", detail: "Review site identity, reading, discussion, media, and URL behavior." }] },
      screenshotCaption: "Original WordPress admin captures from the course demo. They show one installation and version; menu items and sample account details vary.",
      screenshots: [
        { src: "images/wordpress-dashboard/welcome.png", alt: "WordPress admin Dashboard with the welcome panel, site status widgets, and left navigation", caption: "Dashboard welcome screen. The panel and widgets can be customized or dismissed." },
        { src: "images/wordpress-dashboard/all-pages.png", alt: "WordPress Pages list with published and draft pages", caption: "Pages lists stable site content and its publication status." },
        { src: "images/wordpress-dashboard/all-posts.png", alt: "WordPress Posts list with a published post and category information", caption: "Posts lists time-based updates and their categories and tags." },
        { src: "images/wordpress-dashboard/media-library.png", alt: "WordPress Media Library with filters and search controls", caption: "Media Library is where uploaded images and other files can be reviewed." },
        { src: "images/wordpress-dashboard/media-library-upload-panel.png", alt: "WordPress Media Library with the Add Media File upload panel open above existing thumbnails", caption: "Use Add Media File or the drop area to upload permitted images. The file-size limit shown is specific to this demo host." },
        { src: "images/wordpress-dashboard/all-users.png", alt: "WordPress Users list showing an account and its Administrator role", caption: "Users shows account roles. Use the least powerful role needed for each person." }
      ],
      activity: "Use the dashboard explorer. For each task, name the area you would inspect: create an About section, update a photo, publish a news story, change a site-wide title, and invite a trusted editor.",
      checkpoint: "Demonstrate where Pages, Posts, Media, Appearance, Plugins, Users, and Settings appear in your dashboard. Explain one difference between your menu and a classmate's, if there is one.",
      troubleshooting: [{ issue: "A menu item in a tutorial is missing.", fix: "Check your account role, active theme, WordPress version, plugins, and host restrictions. Search current WordPress documentation for the task rather than assuming your site is broken." }, { issue: "A plugin adds a menu item you do not recognize.", fix: "Open the plugin's official documentation and determine whether you need that feature. Do not change unfamiliar settings just to explore." }],
      takeaways: ["Use dashboard areas by task and purpose.", "Pages, posts, and media have different jobs.", "Menu differences are normal across roles, themes, versions, and hosts."],
      checklist: ["I located the main dashboard sections available to my account.", "I can explain when to use a Page versus a Post.", "I can find media and identify basic image metadata.", "I know that some menus vary by role, theme, plugin, and host."],
      references: [{ label: "WordPress.org Documentation", url: "https://wordpress.org/documentation/" }]
    },
    {
      id: "module-5",
      number: "05",
      title: "Choose a theme",
      eyebrow: "SHAPE THE EXPERIENCE",
      summary: "Pick a free theme that supports your content, then customize the design without confusing theme styling with page content.",
      readingTime: "10 MIN",
      handsOnTime: "30-45 MIN",
      objectives: ["Explain what a theme controls.", "Preview, install, and activate a free directory theme when the host permits it.", "Distinguish block themes from classic themes.", "Check desktop and mobile layouts before sharing a site."],
      concepts: [
        { title: "A theme is a design system for your WordPress site", text: "A theme controls how site content is presented: layout, typography, colors, templates, and often headers and footers. Your pages and posts are separate content. Switching themes usually changes presentation, not the underlying words, but theme-specific blocks or settings may need adjustment." },
        { title: "Block themes and classic themes", text: "Block themes let you edit site-wide templates and design with blocks, typically through the Site Editor when available. Classic themes use older template structures and often expose customization through a Customizer or theme-specific settings. The names and controls depend on the theme and WordPress version." },
        { title: "Choose for people and content", text: "Look for a theme that is readable, responsive, accessible, recently maintained, and suited to your content. A theme demo is only a preview; it will not automatically populate your site with the same pages and images." }
      ],
      steps: [
        { title: "Browse the free theme directory", body: "In WordPress, open the theme management area if your host and role allow it, or browse the official WordPress.org theme directory. Read the theme details and recent update information. The current interface may use different labels." },
        { title: "Preview with your own content", body: "Preview the theme and look at typography, contrast, navigation, and how long headings wrap. Check small screens and pages with real images, not just the demo." },
        { title: "Install and activate", body: "Install from the official directory when available, then activate after reviewing the preview. Keep the existing theme until the new one looks acceptable. Host restrictions may prevent installing themes from the dashboard." },
        { title: "Customize in the editor the theme provides", body: "For a block theme, explore the Site Editor and its templates, styles, and navigation tools if present. For a classic theme, options may appear under Customize or a theme panel. Change one item at a time and preview your result." },
        { title: "Review headers, footers, and menus", body: "Confirm the site name, logo or site icon, header, footer, and navigation are consistent across pages. Theme customization options differ; if an option is absent, use current documentation for that theme." }
      ],
      visual: { type: "placeholders", caption: "These captures show one block theme and WordPress version. Site Editor options differ by theme; a classic theme follows a different customization path.", items: [
        { src: "images/wordpress-dashboard/appearance-themes.png", alt: "WordPress Appearance Themes screen showing an active theme and installed alternatives", caption: "Appearance > Themes shows installed themes. Preview before switching." },
        { src: "images/block-theme-editor/pages.png", alt: "Block Theme Site Editor Pages view with page list and a live site preview", caption: "The Site Editor Pages area combines page selection with a live preview; regular page content is also available from the Pages admin screen." },
        { src: "images/block-theme-editor/navigation.png", alt: "Block Theme Site Editor Navigation view showing the current navigation links", caption: "Edit site navigation in the Site Editor when the active block theme provides this workflow." },
        { src: "images/block-theme-editor/design-identity.png", alt: "Block Theme Site Editor identity controls for site title, tagline, logo, and site icon", caption: "Site identity controls include the title, tagline, logo, and site icon. Use your own project details." },
        { src: "images/block-theme-editor/design-styles.png", alt: "Block Theme Site Editor Styles panel with typography, colors, background, layout, and block controls", caption: "Styles applies global typography, colors, layout, and block styling. Preview changes before saving." },
        { src: "images/block-theme-editor/patterns.png", alt: "Block Theme Site Editor Patterns library showing available site patterns", caption: "Patterns can provide reusable page sections. Replace demo content and check the license of any imported media." },
        { src: "images/block-theme-editor/templates.png", alt: "Block Theme Site Editor Templates list including archive, blog, page, search, and post templates", caption: "Templates control shared page structures. Edit them carefully because one template can affect many pages." }
      ] },
      activity: "Compare two free themes using a short scorecard: text readability, mobile layout, navigation, useful template patterns, recent maintenance, and how easy it is to undo a change. Use the active bundled default theme as a low-friction first option; Twenty Twenty-Five is an example, but the bundled default can change by release.",
      checkpoint: "Show the active theme in Appearance > Themes. Change one global color or typography setting if your theme supports it, then reload the public site signed out and point out the visible change. If the theme uses another workflow, show its equivalent saved result.",
      troubleshooting: [{ issue: "Your new theme does not show the customization option in a tutorial.", fix: "Confirm whether it is a block or classic theme and follow documentation for that theme. Some options appear in the Site Editor, some in a Customizer, and some are unavailable." }, { issue: "The layout changes after activation.", fix: "Preview the pages and restore the previous theme if navigation or content becomes hard to use. Check whether templates or theme-specific blocks need replacement." }],
      takeaways: ["Themes affect presentation; pages and posts hold content.", "Block and classic themes offer different editing workflows.", "Theme controls are not universal.", "Preview real content at narrow widths before committing."],
      checklist: ["I compared free themes using readability and maintenance, not only appearance.", "I activated the selected theme (Astra for the Elementor class path) and confirmed it is active.", "I changed one global style setting when available and confirmed it on the public site.", "I identified whether it is a block or classic theme.", "I checked its header, footer, navigation, and mobile layout.", "I know how to restore the previous theme if needed."],
      references: [{ label: "WordPress.org: Themes screen", url: "https://wordpress.org/documentation/article/appearance-themes-screen/" }, { label: "WordPress.org Theme Directory", url: "https://wordpress.org/themes/" }]
    },
    {
      id: "module-6",
      number: "06",
      title: "Add plugins carefully",
      eyebrow: "EXTEND WITH INTENTION",
      summary: "Add only features the site needs. Learn how to evaluate a plugin, test it, and keep it maintained.",
      readingTime: "8 MIN",
      handsOnTime: "20-30 MIN",
      objectives: ["Explain how a plugin extends WordPress.", "Evaluate a plugin's source, maintenance, compatibility, and permissions.", "Install, configure, update, deactivate, and remove plugins safely.", "Choose a small set of free plugins that the host can support."],
      concepts: [
        { title: "A plugin adds behavior", text: "A plugin is software that adds or changes features, such as a contact form, search optimization tools, or an image gallery. Plugins can affect the editor, public pages, performance, and security, so each one should have a clear job." },
        { title: "Check before installing", text: "Prefer the official WordPress plugin directory when possible. Review what the plugin does, when it was updated, its compatibility information, reviews, support activity, privacy practices, and permissions. A high rating alone is not a security guarantee." },
        { title: "Free does not mean unlimited", text: "A plugin may offer a free core and paid add-ons. Free hosting may restrict resources, outgoing email, file operations, or background tasks. Confirm compatibility with the actual host, then test one plugin at a time." }
      ],
      steps: [
        { title: "Write down the need", body: "State the visitor problem the plugin should solve. If the theme or WordPress already provides the feature, avoid adding a duplicate." },
        { title: "Review the plugin listing", body: "Read the listing, update history, compatibility notes, privacy policy, and support information. Check whether it is available on your host and whether it sends data to another service." },
        { title: "Install and activate only what you selected", body: "Use the official directory or the vendor's trusted instructions. Some hosts restrict installation. Install one plugin at a time so a conflict is easier to identify." },
        { title: "Configure and test", body: "Use the plugin's official documentation. Test both the admin workflow and the public site, including a phone-sized layout. For forms, verify delivery without sending real personal data." },
        { title: "Maintain or remove", body: "Update plugins from a trusted source after checking backups and compatibility. Deactivate a plugin to turn off its behavior; delete it only after confirming you no longer need its data or configuration. Keep a backup before significant changes." }
      ],
      visual: { type: "placeholders", caption: "These captures show one Contact Form 7 setup. Plugin availability and email delivery vary by host; verify current compatibility and never copy demo form details into a live site.", items: [
        { src: "images/wordpress-dashboard/installed-plugins.png", alt: "WordPress Plugins screen listing installed plugins, activation status, and update information", caption: "Installed Plugins shows active or inactive state and available updates. This demo list is not a recommendation to install the same set." },
        { src: "images/wordpress-plugins/add-plugin-search-results.png", alt: "WordPress Add Plugins search results for form plugins including Contact Form 7", caption: "Search results list multiple form plugins. Compare authors, compatibility, maintenance, and privacy before choosing one." },
        { src: "images/wordpress-plugins/contact-form-plugin-details.png", alt: "Contact Form 7 plugin details dialog with description, compatibility, and installation information", caption: "Review the plugin details and compatibility before installation; these version details change over time." },
        { src: "images/wordpress-plugins/contact-form-installed.png", alt: "Contact Form 7 plugin card with an Activate action after installation", caption: "After installation, activate the plugin only if it fits the site and host. This capture shows an example, not a required plugin." },
        { src: "images/wordpress-plugins/contact-form-settings.png", alt: "Contact Form 7 form editor with sample name, email, subject, and message fields", caption: "A form plugin may provide editable fields. Keep only the information the site actually needs and use clear labels." },
        { src: "images/wordpress-plugins/contact-form-shortcode.png", alt: "Contact Form 7 editor displaying the generated shortcode for a contact form", caption: "The plugin provides a shortcode that can be inserted into a page. The block editor may also offer a dedicated plugin block." }
      ] },
      activity: "Select one needed feature for the final project. Compare two free plugins for that job using source, recent maintenance, compatibility, privacy, host support, and whether a lighter option exists. Keep only one unless you can explain why both are needed.",
      checkpoint: "Show the chosen plugin as active in Plugins, then demonstrate its intended feature on the public site. For a form, submit harmless test data and confirm the expected response; do not assume email delivery works until tested.",
      troubleshooting: [{ issue: "A plugin cannot be installed or activated.", fix: "Check host restrictions, WordPress/PHP compatibility, missing dependencies, and the plugin's support notes. Do not repeatedly activate a plugin that causes an error." }, { issue: "The public site breaks after adding a plugin.", fix: "If you still have access, deactivate the most recently added plugin and check the site. If not, follow the host's recovery guidance and ask for help before editing files." }, { issue: "A contact form submits but no email arrives.", fix: "The host may limit outgoing mail. Check spam, the plugin's delivery logs, and host documentation; use a privacy-conscious test address. Do not promise that email delivery works until it is tested." }],
      takeaways: ["Every plugin adds code and maintenance responsibility.", "Check compatibility, privacy, maintenance, and host support first.", "Test one plugin at a time and keep a backup.", "A contact form is not proven until delivery is tested."],
      checklist: ["I wrote down the user need before choosing a plugin.", "I checked the listing, compatibility, maintenance, and privacy details.", "I installed only plugins allowed by the host and needed by the site.", "I tested the feature on the public site.", "I know how to update and safely deactivate the plugin."],
      references: [{ label: "WordPress.org: Plugins screen", url: "https://wordpress.org/documentation/article/plugins-screen/" }, { label: "WordPress.org Plugin Directory", url: "https://wordpress.org/plugins/" }]
    },
    {
      id: "module-7",
      number: "07",
      title: "Create useful content",
      eyebrow: "PAGES, POSTS, AND MEDIA",
      summary: "Build and publish one complete Home page in Gutenberg first. Then use the same design principles as you create the rest of the site or experiment with Elementor.",
      readingTime: "12 MIN",
      handsOnTime: "60-90 MIN",
      objectives: ["Build a complete Home page using the built-in Gutenberg block editor.", "Set heading levels, add an image with alternative text, make a three-column section, and link a button to Contact.", "Preview at mobile width and verify the published page as a visitor.", "Understand that Elementor is an optional page-builder path using the same design principles."],
      concepts: [
        { title: "Blocks are content building pieces", text: "The WordPress block editor organizes content as blocks: headings, paragraphs, images, lists, buttons, columns, groups, and many other items. The block editor is the default editor in current WordPress. Available blocks may be extended by the theme or plugins." },
        { title: "Pages and posts answer different needs", text: "Use a Page for stable information such as Home, About, Services, Gallery, or Contact. Use Posts for dated updates such as news or articles. Categories group posts broadly; tags can describe details. Avoid creating many empty categories or tags." },
        { title: "Media belongs to people, not only layouts", text: "Use images you created, have permission to use, or obtained with a license that allows your purpose. Write alternative text for informative images; leave it empty for decorative images where the editor supports that choice. Compress large files and credit sources as required." }
      ],
      steps: [
        { title: "Create Home and Contact drafts", body: "Open Pages > Add Page. Create a page titled Contact and save it as a draft. Add another page titled Home and open it in the block editor. If your WordPress version uses different labels, use the page list's Add New action.", checkpoint: "The Pages list shows Home and Contact as drafts, and the Home editor is open." },
        { title: "Add the main heading and introduction", body: "In Home, select the block inserter (+), search for Heading, and insert a Heading block. Select the heading level in the block toolbar or settings and set it to Heading 1. Type your organization or project name. Insert a Paragraph block below it and write one sentence explaining who the site serves and what visitors can do.", checkpoint: "The page outline contains one main Heading 1 followed by an introductory paragraph." },
        { title: "Insert a hero image and describe it", body: "Use the inserter to add an Image block near the introduction. Choose a permitted image from the Media Library or upload one. Enter alternative text that explains the image's purpose; do not copy the filename or include text baked into the image. Add a credit when the license requires it.", checkpoint: "The image appears in Home, has appropriate alternative text, and its source is permitted for this project." },
        { title: "Create three columns", body: "Use the inserter to add a Columns block and choose the three-column layout. Add a Heading block and a short Paragraph block inside each column. Use three useful topics such as Services, Projects, and Community. Keep each heading at Heading 2 or below so the page outline stays in order.", checkpoint: "The editor shows three populated columns, each with a heading and a short description." },
        { title: "Add a Contact button", body: "Insert a Buttons block after the columns. Add one Button labeled Contact us. Select its link control and choose the Contact page if available, or enter its URL after Contact is published. Use a descriptive label rather than 'Click here'.", checkpoint: "The button has a descriptive label and a link that resolves to the Contact page." },
        { title: "Preview the mobile layout", body: "Open Preview and choose a phone-sized viewport. Confirm the three columns stack in a useful order, text remains readable, the hero image fits, and the button is easy to activate. Return to the editor and adjust block settings only where needed.", checkpoint: "The mobile preview has no clipped text or horizontal scrolling, and the Contact button remains visible and usable." },
        { title: "Publish and verify Home", body: "Publish Home, then open its public URL in a private window or while signed out. Test the button, inspect the image and headings, and confirm the page looks as expected. Publish Contact too if the button should be usable by visitors.", checkpoint: "A signed-out visitor can open Home and follow its Contact button to the public Contact page." },
        { title: "Continue with the rest of the site", body: "Use the same workflow to build About, Gallery or Resources, and Services or Projects. Then create one dated Post and give it a category and relevant tag. Add video only after verifying the embed and providing a descriptive fallback link.", checkpoint: "The remaining page drafts have a clear purpose; your published Post appears in the expected blog area." }
      ],
      visual: { type: "placeholders", caption: "These are captures from one WordPress installation. Editor controls and patterns vary by version and theme; use the prompts below to capture the remaining editing tasks.", items: [
        { src: "images/wordpress-page/new-page-created.png", alt: "WordPress Pages list with an Add Page button and sample pages", caption: "Start from Pages and choose Add Page. The existing page names here are demo content." },
        { src: "images/wordpress-page/page-editing.png", alt: "WordPress block editor with a Home Page open and its Page settings sidebar", caption: "The block editor canvas is in the center; page-level settings are in the sidebar." },
        { src: "images/wordpress-page/patterns.png", alt: "WordPress Choose a pattern dialog with starter layouts for a new page", caption: "Patterns provide a starting layout. Replace their sample text and media with content suited to your site." },
        { src: "images/wordpress-page/media-attachment-details.png", alt: "WordPress media attachment details showing an image and Alternative Text, Title, Caption, and Description fields", caption: "Attachment details hold alternative text and other media information. Describe the image's purpose for this page rather than copying its filename." },
        { src: "images/wordpress-page/image-alt-text.png", alt: "WordPress Image block settings with the alternative text field visible", caption: "Add concise alternative text to an informative image. Leave it empty only when the image is decorative and your workflow supports that choice." },
        { src: "images/wordpress-page/block-editor-quick-inserter.png", alt: "WordPress block editor with the quick inserter open beside a new block position", caption: "The quick inserter offers common blocks near the current cursor position." },
        { src: "images/wordpress-page/block-editor-inserter-panel.png", alt: "WordPress block inserter panel open with Blocks, Patterns, and Media tabs", caption: "The full inserter groups blocks, patterns, and media. Search for a block by the content it creates." },
        { src: "images/wordpress-page/block-options-menu.png", alt: "WordPress block editor options menu for a selected block, including copy, duplicate, group, and delete", caption: "The block options menu includes actions such as duplicate, group, and delete. Review the selected block before using destructive actions." },
        { src: "images/wordpress-page/mobile-responsive-preview.png", alt: "WordPress block editor showing a page in mobile responsive preview", caption: "Preview the page at a narrow viewport and check that columns, images, and text remain usable." },
        { src: "images/wordpress-page/video-block-inserter.png", alt: "WordPress block inserter filtered for video and embed blocks, including YouTube Embed", caption: "Search for a video or embed block. Available blocks can differ by WordPress version, theme, and plugins." },
        { src: "images/wordpress-page/replace-image.png", alt: "WordPress block editor image toolbar with the Replace menu open and options to open Media Library, upload, or reset", caption: "Use Replace to choose another Media Library image or upload a permitted image. Review its alternative text after replacing it." },
        "YouTube Embed block with a public video URL entered before embedding",
        { src: "images/wordpress-page/youtube-embed-preview.png", alt: "WordPress page editor with an embedded YouTube video preview", caption: "Confirm the embed preview and provide a descriptive heading or link so visitors know what the video contains." },
        { src: "images/wordpress-page/contact-form-shortcode-block.png", alt: "WordPress page editor with a Contact Form 7 shortcode block inserted into a page", caption: "A shortcode block can display a form when the plugin is active. Preview the page and verify the form works on your host." },
        { src: "images/wordpress-page/contact-page-preview.png", alt: "Public Contact Us page displaying name, email, subject, message, and submit fields", caption: "Public contact page example. Use a harmless test submission and confirm delivery before relying on a form." }
      ] },
      learningPaths: [
        { label: "PATH A / START HERE", title: "Gutenberg", description: "The built-in WordPress block editor. Start here to learn native content structure, heading hierarchy, media, and blocks." },
        { label: "PATH B / MODULE 8", title: "Elementor", description: "After the Gutenberg exercise, try a visual page builder for layout and design. The same hierarchy and usability principles still apply.", href: "#module-8", linkText: "Open Module 8" }
      ],
      activity: "Complete the guided Home page exercise above before building the other required pages. Then create About, Services or Projects, Gallery or Resources, and Contact, plus one dated blog post with a category and relevant tag.",
      checkpoint: "Demonstrate the published Home page while signed out: one Heading 1, an introductory paragraph, a permitted hero image with alt text, three populated columns, a working Contact button, and a mobile preview with no overflow.",
      troubleshooting: [{ issue: "The video does not embed.", fix: "Check the URL, provider support, network restrictions, and privacy settings. Link to the video as a fallback and add a descriptive title; do not assume autoplay works." }, { issue: "An image looks cropped or distorted.", fix: "Check the original image dimensions and block settings. Use a crop suited to the content and preview the page at different widths." }, { issue: "A page is published but hard to find.", fix: "Check its navigation links and page visibility, then verify the site homepage and menu settings. Publishing does not automatically add every page to navigation." }],
      takeaways: ["Blocks are the editor's content units.", "Pages hold stable information; posts are usually dated updates.", "Good content has clear hierarchy, useful media, and descriptive links.", "Preview and test content on a narrow screen before sharing."],
      checklist: ["I created Home and Contact pages.", "I added one Heading 1 and an introductory paragraph to Home.", "I added a permitted hero image with useful alternative text.", "I built and populated a three-column section.", "I added a Contact button that links to the Contact page.", "I previewed Home at mobile width and fixed any overflow.", "I published and checked Home and Contact while signed out.", "I created About, Services or Projects, and Gallery or Resources pages.", "I published a Post with a relevant category and tag."],
      quiz: { question: "Which content should usually be a Page rather than a Post?", choices: ["A dated weekly announcement.", "A stable About section describing the organization.", "A time-sensitive event recap."], answer: 1, explanations: ["A dated announcement is usually a Post.", "Correct. Stable reference information is commonly a Page.", "A dated recap is usually a Post."] },
      references: [{ label: "WordPress.org: WordPress Block Editor", url: "https://wordpress.org/documentation/article/wordpress-block-editor/" }, { label: "WordPress.org: Adding content with blocks", url: "https://wordpress.org/documentation/article/adding-content-with-blocks/" }]
    },
    {
      id: "module-9",
      number: "09",
      title: "Configure the site",
      eyebrow: "MAKE IT EASY TO USE",
      summary: "Set a useful home page, organize navigation, choose a stable URL structure, and check basic accessibility and user permissions.",
      readingTime: "10 MIN",
      handsOnTime: "30-45 MIN",
      objectives: ["Set and verify a static homepage when appropriate.", "Create useful navigation for the site's main pages.", "Choose readable permalinks and understand the risk of changing them later.", "Apply basic accessibility, responsiveness, and least-privilege checks."],
      concepts: [
        { title: "Navigation is an information map", text: "A navigation menu helps people predict where information lives. Put the most useful destinations first, use concise labels, and avoid making every page a top-level item. A block theme and a classic theme may have different menu-editing workflows." },
        { title: "Permalinks are lasting addresses", text: "A permalink is the URL for a particular post or page. Readable addresses help people understand and share links. Changing an address after publication can break old links unless redirects are set up." },
        { title: "Accessibility is part of usability", text: "Use descriptive link text, clear heading structure, sufficient color contrast, keyboard-accessible controls, useful image alternatives, and forms with labels. Responsive layout should work at narrow widths and when text is enlarged." },
        { title: "Give users only the access they need", text: "WordPress roles provide different capabilities. Administrators can change much more than authors or contributors. Use the least powerful role that still allows a person's work, and remove accounts that are no longer needed." }
      ],
      steps: [
        { title: "Choose the home page", body: "If the site should open on a designed Page, set a static homepage in the reading settings or the theme's Site Editor workflow. Choose a posts page only if the site needs a separate blog listing. Check the search-visibility option before publishing: do not discourage indexing for a public project unless that is intentional, and remember that this setting is not a privacy control. Verify the public root URL afterward." },
        { title: "Build a small, clear menu", body: "Add the pages visitors need most, such as Home, About, Services or Projects, Gallery, and Contact. Use the navigation controls available in your theme, and test every link while signed out." },
        { title: "Review the site identity", body: "Set a short site title and tagline that explain the site. Add a site icon if available. Avoid personal contact details unless they are meant to be public." },
        { title: "Choose permalinks before sharing", body: "Set a readable structure before publishing many links. If you later change a permalink, check whether WordPress or your host provides redirects and test old links." },
        { title: "Check mobile and accessibility", body: "Use keyboard navigation, zoom in, check heading order and contrast, inspect image text alternatives, and test at a narrow viewport. Ask another person to find a key page without hints." },
        { title: "Review accounts and roles", body: "Only create accounts for people who need access. Assign the least powerful role that supports their tasks, use unique credentials, and remove unused accounts." }
      ],
      visual: { type: "placeholders", caption: "These are examples from one WordPress installation. Settings and navigation routes can differ by version and theme.", items: [
        { src: "images/wordpress-dashboard/reading-settings.png", alt: "WordPress Reading Settings with a static homepage and posts page selected, and search engine visibility discouraged", caption: "Reading Settings selects a static Home Page and Blog page. The demo also has Discourage search engines checked; review this setting and turn it off for a public project unless intentionally private. It is not a privacy control." },
        { src: "images/wordpress-dashboard/general-settings.png", alt: "WordPress General Settings showing site title, tagline, site URLs, and language settings", caption: "General Settings includes the site title and tagline. Enter your own values; do not copy demo account details." },
        { src: "images/wordpress-dashboard/permalinks-settings.png", alt: "WordPress Permalink Settings with common URL structure choices", caption: "Permalink Settings controls post and page URL patterns. Choose a readable structure before sharing links." },
        "Reading settings with a static homepage and optional posts page selected",
        "Navigation editor for the active theme with the main pages arranged",
        "Public site checked with keyboard navigation at a phone-sized viewport"
      ] },
      activity: "Ask a classmate to find your Gallery and Contact pages using only the menu. Watch without giving hints. Simplify the menu labels or order if they pause. Then test the same task with keyboard only and at a narrow viewport.",
      checkpoint: "Show the Reading setting that selects the intended homepage, then open the public root URL signed out. Demonstrate that the main navigation reaches the required pages and that keyboard and mobile checks pass.",
      troubleshooting: [{ issue: "The homepage still shows a list of posts.", fix: "Check the reading settings and active theme's homepage controls. Confirm the intended page is published and then reload the public root URL." }, { issue: "A menu editor is missing or different.", fix: "Check whether the active theme is a block theme or classic theme and follow its current documentation. The controls are not identical." }, { issue: "A page link returns not found after changing its address.", fix: "Restore the previous permalink if possible or configure a redirect through a host-supported method. Update every menu and internal link." }],
      takeaways: ["Navigation should reflect the visitor's tasks.", "Choose readable permalinks before sharing links widely.", "Check keyboard, contrast, headings, and mobile layout.", "Give each user only the permissions needed."],
      checklist: ["I selected the intended homepage and showed it at the public root URL while signed out.", "I created a concise menu and tested each destination.", "I checked the title, tagline, and site icon.", "I selected readable permalinks before sharing.", "I reviewed keyboard access, contrast, image alternatives, mobile layout, and user roles."],
      references: [{ label: "WordPress.org Documentation", url: "https://wordpress.org/documentation/" }, { label: "W3C: Easy Checks for Web Accessibility", url: "https://www.w3.org/WAI/test-evaluate/preliminary/" }]
    },
    {
      id: "module-10",
      number: "10",
      title: "Publish and maintain",
      eyebrow: "READY FOR VISITORS",
      summary: "Test the public experience, keep software current, make independent backups, and understand where a practice host is not production-ready.",
      readingTime: "12 MIN",
      handsOnTime: "30-45 MIN",
      objectives: ["Run a signed-out launch check across pages, links, forms, and HTTPS.", "Plan updates and independent backups.", "Recognize basic security and incident response practices.", "Explain when free hosting is not suitable for a real production site."],
      concepts: [
        { title: "Published is not the same as tested", text: "A page can be public and still have broken links, forms that never deliver, missing images, or an unreadable phone layout. Test as a visitor, not only while logged in. Use sample information when testing forms." },
        { title: "Backups need to be independent", text: "A useful WordPress backup includes both site files and the database. A backup stored only on the same host may be lost with the site. Learn the host's export process, keep a separate copy where allowed, and test that you can locate it. Never place private student information in a class demo backup." },
        { title: "Free hosting has real tradeoffs", text: "Free services can be useful for learning, but may impose changing resource, uptime, support, backup, mail, or inactivity limits. They may not offer contractual availability or recovery guarantees. Do not use a free practice account for sensitive, mission-critical, or high-traffic production work without evaluating the risks." }
      ],
      steps: [
        { title: "Check the public site signed out", body: "Open the public URL in a private window. Visit every page and check the navigation, images, text, buttons, and video. Test on a phone or responsive browser view." },
        { title: "Check HTTPS and forms", body: "Confirm the browser shows a secure HTTPS connection without certificate warnings. If there is a form, submit a harmless test with permission and confirm the expected response. Do not collect sensitive information in a classroom demo." },
        { title: "Review links and accessibility", body: "Test internal and external links, keyboard order, heading structure, image alternatives, contrast, and enlarged text. Fix confusing errors before sharing the URL." },
        { title: "Update with a recovery plan", body: "Keep WordPress, themes, and plugins maintained. Before a major update, check current compatibility information and make a backup. Update from trusted sources, then retest key pages and features." },
        { title: "Back up files and database", body: "Use the host's current documented export or a trusted backup method. Keep the files and database export separately from the hosting account, label the date, and follow privacy rules. Confirm that you know how restoration help works before relying on a backup." },
        { title: "Respond carefully to problems", body: "Record what changed and when. If the site breaks after an update, use the host's official recovery instructions or ask an instructor. Do not paste passwords, database dumps, or private user details into public forums." }
      ],
      visual: { type: "placeholders", caption: "These captures are from one WordPress installation and version. They do not prove that your updates, links, forms, HTTPS, or backups are ready.", items: [
        { src: "images/wordpress-dashboard/frontend.png", alt: "Public-facing WordPress site using a theme with a blog post and site navigation", caption: "Public site example viewed as a visitor. Check your own site's pages while signed out." },
        { src: "images/wordpress-dashboard/wp-update.png", alt: "WordPress Updates screen listing a core update, plugin updates, and theme updates with a backup reminder", caption: "The Updates screen can offer WordPress, plugin, and theme updates. Back up files and the database first, then check compatibility." },
        { src: "images/wordpress-dashboard/update-progress.png", alt: "WordPress update progress screen showing download, unpack, verification, and file-copy steps", caption: "Wait for the update process to finish and show its result. Do not refresh or close the tab during an active update." },
        "Browser address showing the site's HTTPS connection without certificate warnings",
        "Form test completed with harmless sample data and its expected response",
        "Separate locations for a dated site-files backup and database export",
        "Update and recovery notes with the check date"
      ] },
      activity: "Ask a classmate to complete a launch audit: open the site signed out, find all five pages, test one link and one action, read the page at phone width, and report one improvement. Record the result without collecting personal data.",
      checkpoint: "Demonstrate the public site signed out, show HTTPS without a certificate warning when available, test the main navigation and form/fallback, and show where the dated files-and-database backup plan is recorded.",
      troubleshooting: [{ issue: "The site is unavailable to other people.", fix: "Check the exact public URL, account status, DNS, host status page, and whether the site is still within the provider's terms. Try another network before changing settings." }, { issue: "HTTPS shows a warning.", fix: "Do not ask visitors to ignore it. Check the host's certificate setup and current HTTPS instructions; wait for certificate provisioning if documented, then retest." }, { issue: "An update breaks a page or plugin.", fix: "Record the update and error, use the host's documented recovery process, and restore only from a known-good backup. Ask for help before editing production files." }, { issue: "You cannot restore a backup.", fix: "A backup is not proven until the restoration steps are understood. Ask the host or instructor to test a restore in a safe practice environment." }],
      takeaways: ["Test the site as a visitor before sharing it.", "Keep current backups of both files and database away from the host.", "Update from trusted sources and retest after changes.", "Free hosting is a learning tool with limits, not a promise of production service."],
      checklist: ["I checked all five pages while signed out.", "I tested navigation, links, media, and mobile layout.", "I verified HTTPS without ignoring certificate warnings.", "I tested the form or documented a non-form contact fallback.", "I know how to update WordPress, themes, and plugins.", "I recorded a separate files-and-database backup plan.", "I listed the host's support, performance, inactivity, and resource limitations."],
      quiz: { question: "What should a complete WordPress backup plan include?", choices: ["Only a screenshot of the homepage.", "Both the site files and database, with a copy kept separately from the host.", "The administrator password in a shared class document."], answer: 1, explanations: ["A screenshot cannot restore the site.", "Correct. Both files and database matter, and an independent copy reduces single-host risk.", "Never share or store account secrets in a class document."] },
      references: [{ label: "WordPress.org: Backing up your WordPress site", url: "https://wordpress.org/documentation/article/wordpress-backups/" }, { label: "WordPress.org: Updating WordPress", url: "https://wordpress.org/documentation/article/updating-wordpress/" }]
    }
  ],
  introPage: {
    eyebrow: "WELCOME / START HERE",
    title: "Build your first WordPress blog or portfolio",
    summary: "This free guide takes you from your first hosting account to a published website. You will build a basic blog or portfolio, one practical step at a time.",
    goal: "By the end, you will have a public WordPress site with useful pages, clear navigation, images, and a design that works on a phone.",
    whatYouNeed: ["A computer with internet access.", "An email address for the free hosting signup.", "A password manager for your private account passwords.", "No coding experience is required. Basic HTML and CSS knowledge can help, but this guide explains the WordPress terms as you go."],
    paths: "Start with Gutenberg in Module 7. It is built into WordPress and teaches the site's content structure. Module 8 introduces Elementor as an optional visual page builder. Both paths use the same design ideas: clear headings, readable text, helpful images, and easy navigation.",
    estimate: "The times shown are planning estimates, not measured finish times. Reading and practice times are listed separately. Hosting, installation, and page-building activities often take longer the first time.",
    wpStat: "WordPress can build blogs, portfolios, business websites, online stores, news sites, and more. W3Techs estimated that it powered 39.5% of all websites on October 30, 2026. This estimate changes over time and depends on how sites are measured."
  },
  elementorGuide: {
    title: "Create a page with Elementor",
    eyebrow: "OPTIONAL PAGE-BUILDER WORKFLOW",
    summary: "Build a WordPress page with Elementor's visual editor, then preview and publish it without mixing up free Core features and paid Pro add-ons.",
    readingTime: "10 MIN",
    handsOnTime: "30-45 MIN",
    video: { id: "d975dVX01ps", url: "https://www.youtube.com/watch?v=d975dVX01ps" },
    notice: "Elementor Core is the free plugin; Pro is a separate paid product. This walkthrough uses the free Core workflow and does not require a Pro license, Elementor hosting, or a paid template. Plugin access and performance still depend on your host. Confirm current requirements with your instructor before installing.",
    concepts: [
      { title: "A theme and a page builder do different jobs", text: "A WordPress theme provides the site's overall foundation and defaults. Elementor is an optional plugin used to lay out individual pages visually. Astra is the class theme; Hello Elementor is an alternative designed for Elementor. Check the theme workflow used by your instructor." },
      { title: "Start with Elementor Core", text: "Elementor Core is the free plugin. Elementor Pro adds paid widgets, templates, and site-building features. This lesson uses Core only; a Pro badge means that item is not required for the activity." },
      { title: "The editor is a design tool, not a shortcut around design", text: "Use containers and elements to build structure, then apply hierarchy, readable typography, useful spacing, descriptive links, and responsive checks. These principles are the same ones practiced in Gutenberg." }
    ],
    objectives: ["Install Astra as the class theme, or choose Hello Elementor as an alternative.", "Install and activate Elementor Core when the host allows it.", "Open a WordPress Page in the Elementor editor.", "Build a simple layout with containers and basic widgets.", "Preview at desktop and mobile sizes, then publish and check the public page."],
    steps: [
      { title: "Install the class theme", body: "In WordPress, open Appearance > Themes > Add New Theme and search the official directory for Astra. Install and activate Astra for this lesson. Hello Elementor is a good alternative designed specifically for the Elementor builder. Both themes are free to install from the directory, though their authors may offer paid upgrades or support. Only one theme can be active at a time; follow your instructor if your site already has a chosen theme.", checkpoint: "Show Astra (or Hello Elementor, if your instructor chose it) as the active theme in Appearance > Themes." },
      { title: "Check the host and install Elementor Core", body: "Confirm the host permits plugin installation and can meet Elementor's current system requirements. In WordPress, open Plugins > Add New Plugin, search for Elementor, then install and activate Elementor Website Builder. Labels may vary. Skip any Pro purchase or license prompt; Core is the free plugin.", checkpoint: "Show Elementor Core as active in Plugins. Do not purchase or activate Pro for this lesson." },
      { title: "Create a new WordPress Page", body: "Open Pages > Add New Page, enter a clear title such as Services, and save a draft. Choose a page template that works with your active theme; the available layout options vary by theme.", checkpoint: "Show the draft page in Pages with the intended title." },
      { title: "Open the Elementor editor", body: "Choose Edit with Elementor from the page editor. The visual editor opens with a page canvas and an elements or widgets panel. If the button is missing, verify Elementor is active, your user role can edit pages, and the host has not blocked the plugin.", checkpoint: "Show the Elementor canvas and its elements panel with your page open." },
      { title: "Build the page structure", body: "Add a container, then place a Heading, Text Editor, Image, and Button element. Drag an element onto the canvas or use the editor's current insertion controls. Keep the structure simple: one page title, clear section headings, short paragraphs, and one useful next action.", checkpoint: "Show a page outline with a main heading, supporting text, image, and a clear next-action button." },
      { title: "Edit content and styling", body: "Select each element to edit its content and style in the settings panel. Use a real heading level, descriptive button text, readable contrast, and appropriate image alternative text. Do not rely on color alone to communicate meaning.", checkpoint: "Show the selected image's alternative text and a button with descriptive link text." },
      { title: "Check responsive views", body: "Use the editor's device preview controls to inspect desktop, tablet, and mobile. Adjust spacing and typography only where necessary, then check the actual public page at a narrow viewport. Breakpoints and labels can vary by version or site settings.", checkpoint: "Show desktop and mobile previews, then demonstrate the public page at phone width without horizontal overflow." },
      { title: "Preview and publish", body: "Preview before publishing. Check links, spelling, headings, images, and mobile layout. Publish or update the page, open the public URL while signed out, and verify the result. Save credentials only in your own password manager.", checkpoint: "A signed-out visitor can open the page and follow its main button to the intended destination." }
    ],
    visual: { type: "placeholders", caption: "These captures show one WordPress, Astra, and Elementor setup. Interface labels can vary by version. Template-library screenshots include PRO-badged designs; those are optional paid items, not part of this free-Core exercise.", items: [
      { src: "images/wordpress-theme/astra-theme-installation.png", alt: "WordPress Add Themes results showing Astra with Install and Preview actions and Hello Elementor as another theme", caption: "Astra is the class theme; Hello Elementor is an alternative. Install one theme and activate it before building the page." },
      { src: "images/wordpress-theme/plugin-installation.png", alt: "WordPress plugin search results for Elementor Website Builder with an Activate button", caption: "Install Elementor Core from the plugin directory and activate it. Do not purchase or activate Pro for this lesson." },
      { src: "images/wordpress-elementor/page-entry.png", alt: "WordPress page editing screen with the Edit with Elementor entry point", caption: "Create a regular WordPress Page first, then open it with Edit with Elementor." },
      { src: "images/wordpress-elementor/elementor-editor.png", alt: "Elementor editor with its Elements panel, page canvas, device preview, and structure panel", caption: "The editor places available elements beside the page canvas. Some entries in the panel are marked as Pro-only." },
      { src: "images/wordpress-elementor/page-settings-panel.png", alt: "Elementor Page Settings panel showing page layout choices including Canvas and Full Width", caption: "Page layout choices depend on your theme. Canvas can remove the theme header and footer; choose deliberately and preview the result." },
      { src: "images/wordpress-elementor/template-library-pages.png", alt: "Elementor Pages template library with several designs marked PRO", caption: "Many designs in this capture carry a PRO badge. Skip paid templates and build the class page with free elements." },
      { src: "images/wordpress-elementor/template-library-blocks.png", alt: "Elementor Blocks template library showing reusable sections with PRO badges", caption: "This library also contains Pro-badged blocks. Treat them as examples of optional paid content, not required steps." },
      { src: "images/wordpress-elementor/image-widget-content.png", alt: "Elementor Image widget Content panel with a Choose Image control", caption: "Choose an image from the Media Library or upload permitted media, then set useful alternative text in WordPress media details." },
      { src: "images/wordpress-elementor/image-widget-style.png", alt: "Elementor Image widget Style panel with alignment, width, height, border, and shadow controls", caption: "Style controls affect how the image appears. Keep sizing responsive and avoid distortion." },
      { src: "images/wordpress-elementor/image-widget-advanced.png", alt: "Elementor Image widget Advanced panel showing spacing, width, position, and other layout controls", caption: "Advanced controls are optional. Beginners can leave these defaults unless a specific layout issue needs fixing." },
      { src: "images/wordpress-elementor/public-page-preview.png", alt: "Public Astra and Elementor sample page with a heading, contact button, and demonstration motorcycle image", caption: "Example of a published page viewed as a visitor. Replace all demo text and media with your own content, then test links and mobile layout." }
    ] },
    activity: "Create a draft Services page for your final-project site. Add a heading, a short introduction, three service or activity descriptions, one permitted image, and a button linking to Contact. Preview the page on mobile before publishing.",
    checkpoint: "The page appears at its public URL, the button works, the image has appropriate alternative text, and the layout is usable at desktop and phone widths.",
    checklist: ["I installed Astra, or chose Hello Elementor as the alternative theme.", "I confirmed the host permits Elementor and meets current requirements.", "I installed Elementor Core without purchasing or activating Pro.", "I created a Page and opened Edit with Elementor.", "I added and edited basic elements in a clear structure.", "I checked contrast, headings, alt text, links, and responsive previews.", "I previewed, published, and tested the public URL while signed out."],
    troubleshooting: [
      { issue: "Edit with Elementor is missing.", fix: "Confirm the Elementor Core plugin is active, your account can edit pages, and the host permits the plugin. Check Elementor's current compatibility requirements." },
      { issue: "The editor does not load or the preview is blank.", fix: "Check the host's PHP and memory limits, browser console only if instructed, plugin/theme compatibility, and Elementor's official troubleshooting guide. Do not repeatedly install unknown add-ons." },
      { issue: "A widget or template asks for Pro.", fix: "That feature may require a paid plan. Return to basic Core elements or choose a free alternative; this guide's activity does not require Pro." },
      { issue: "The page looks different on mobile.", fix: "Switch to the editor's mobile preview, adjust responsive spacing and element settings, then verify the public page on a phone-sized viewport." }
    ],
    takeaways: ["Elementor is an optional WordPress plugin, not a replacement for learning page structure.", "Elementor Core is free; Pro features and license prompts are optional and paid.", "Build with a few clear containers and elements before adding decorative effects.", "Always test the public page and responsive views after publishing."],
    references: [
      { label: "Elementor: Get started with the plugin", url: "https://elementor.com/help/get-started-with-the-elementor-plugin/" },
      { label: "Elementor: Responsive editing for mobile and tablets", url: "https://elementor.com/help/mobile-editing/" },
      { label: "Elementor: System requirements", url: "https://elementor.com/help/requirements/" },
      { label: "WordPress.org Theme Directory: Astra", url: "https://wordpress.org/themes/astra/" },
      { label: "WordPress.org Theme Directory: Hello Elementor", url: "https://wordpress.org/themes/hello-elementor/" }
    ]
  },
  glossary: [
    { term: "Accessibility", definition: "Designing and building a site so people with different abilities and ways of interacting can use it." },
    { term: "Block editor", definition: "WordPress content editor that builds pages and posts from blocks such as headings, paragraphs, images, and lists." },
    { term: "CMS", definition: "Content management system: software used to create, organize, and publish website content." },
    { term: "Database", definition: "An organized store of information. WordPress uses it for content, user records, settings, and other site data." },
    { term: "DNS", definition: "The Domain Name System, which helps find the server associated with a domain name." },
    { term: "Domain", definition: "A human-readable address used to reach a website, such as example.org." },
    { term: "Elementor", definition: "A WordPress page-builder plugin with a free Core version and optional paid Pro features." },
    { term: "Hosting", definition: "A service that provides storage and computing resources for a website on an internet-connected server." },
    { term: "HTTPS", definition: "The encrypted version of HTTP. A valid certificate helps protect information exchanged with a site." },
    { term: "MySQL", definition: "A relational database system. WordPress hosting commonly provides MySQL or a compatible database." },
    { term: "Permalink", definition: "The URL for a specific page or post. Changing it can break links that people already use." },
    { term: "PHP", definition: "A programming language WordPress uses on the server to build pages and process site behavior." },
    { term: "Plugin", definition: "An add-on that extends or changes WordPress functionality." },
    { term: "Server", definition: "A computer and software that respond to requests and deliver website files or application output." },
    { term: "Subdomain", definition: "A part of a larger domain, often used as a separate address under a provider's domain." },
    { term: "Theme", definition: "A set of design and template rules that controls how WordPress content is presented." },
    { term: "WordPress.com", definition: "A hosted WordPress service with plans and features managed by the service provider." },
    { term: "WordPress.org", definition: "The home of the open-source WordPress software and its themes, plugins, and documentation." }
  ],
  troubleshooting: [
    { title: "My hosting dashboard looks different", tags: "hosting panel provider account", cause: "Hosting panels change, and different plans can have different tools.", fix: "Use the provider's current official help pages. Confirm a feature exists on your plan before following a tutorial, and never guess before changing files or databases." },
    { title: "I cannot find a WordPress installer", tags: "install wordpress host installer", cause: "The host may not provide an automated installer, or your plan may not allow it.", fix: "Check the host's official installation guide. Manual setup may be possible, but confirm current WordPress requirements and ask an instructor before entering database settings." },
    { title: "The database connection failed", tags: "database mysql php install error", cause: "The database name, user, password, or server setting may be incorrect, or the database may not be ready.", fix: "Compare each value with the host's private database panel. Do not paste credentials into screenshots, chat, or this guide." },
    { title: "The site is blank or returns an error", tags: "blank page 500 plugin php theme", cause: "A plugin, theme, PHP incompatibility, incomplete upload, or host restriction may be involved.", fix: "Note when it started and what changed. Use host logs and official recovery instructions. Ask for help before changing server files or disabling unknown components." },
    { title: "My page does not appear in the menu", tags: "page navigation menu homepage", cause: "Publishing a page does not necessarily add it to the active theme's navigation.", fix: "Use the navigation editor for the active theme, add the page, save, then test the public menu while signed out." },
    { title: "The contact form does not send email", tags: "contact form email smtp plugin", cause: "The host may limit outgoing mail, or the form may need configuration.", fix: "Check spam, plugin delivery logs, privacy settings, and host documentation. Test with harmless data and provide a clear alternative contact route." },
    { title: "The video will not embed", tags: "youtube video embed block editor", cause: "The URL, provider, privacy tool, network, or host may block the embed.", fix: "Use the supported embed block and a public video URL. If it still fails, link to the video with a descriptive title and check privacy requirements." },
    { title: "HTTPS shows a certificate warning", tags: "https ssl certificate security", cause: "The certificate may not be provisioned, may be expired, or the URL may not match it.", fix: "Do not ask visitors to proceed through a warning. Follow the host's current certificate steps and test again after the documented setup time." },
    { title: "I lost access to the dashboard", tags: "login wp-admin password user", cause: "The URL may be wrong, credentials may not match, or a host/security setting may affect login.", fix: "Confirm the installation folder and use the host's official recovery instructions. Never send a password to someone helping you." },
    { title: "My site is slow", tags: "performance hosting image plugin speed", cause: "Large images, many plugins, limited host resources, or network conditions can slow a site.", fix: "Resize and compress images, remove unused plugins, test from more than one device/network, and compare the host's stated limits. Avoid installing unverified performance plugins." },
    { title: "My backup will not restore", tags: "backup restore files database migration", cause: "The backup may be incomplete, incompatible, or missing either files or database.", fix: "Test restoration in a safe environment and follow the host's current process. Keep a separate copy and ask for help rather than overwriting the live site." }
  ],
  project: {
    title: "Publish a WordPress blog or portfolio",
    intro: "Build a basic WordPress blog about a subject you care about, or a portfolio that shows your work. You can use a fictional business, school club, community group, or personal interest as your example. WordPress can power many other kinds of websites too. Use only information and media you have permission to publish.",
    checklist: ["A free hosting account that currently permits WordPress, with its limits recorded.", "WordPress installed and reachable at a public address.", "A free theme activated and customized for the intended readers or visitors.", "At least one useful, tested plugin; explain why it is needed.", "Five published pages suited to the site: Home, About, Blog or Projects, Gallery or Resources, and Contact.", "A working navigation menu with links to all five pages.", "Images with appropriate alternative text, formatted text, and at least one embedded video or a linked fallback.", "A layout checked on a phone-sized screen and with keyboard navigation.", "A public URL tested while signed out, HTTPS verified where available, and a backup/maintenance plan recorded."],
    rubric: [{ category: "Content and audience", points: 25, description: "Five useful pages for a clear audience, with writing and media suited to a blog or portfolio." }, { category: "Visual design and consistency", points: 20, description: "Readable typography, coherent theme customization, useful image choices, and consistent page patterns." }, { category: "Navigation and accessibility", points: 20, description: "Working menu, logical headings, descriptive links, alternative text, sufficient contrast, and keyboard/mobile checks." }, { category: "WordPress functionality", points: 15, description: "Theme and plugin work as intended; pages, posts, media, and any form/video behavior are tested." }, { category: "Publishing and maintenance", points: 10, description: "Public access verified; HTTPS checked; updates and separate file/database backup plan documented." }, { category: "Process and reflection", points: 10, description: "Student explains one design choice, one hosting limitation, and one improvement they would make next." }]
  }
};

(() => {
  const course = window.COURSE_CONTENT;
  const guide = course.elementorGuide;
  course.lessons.splice(7, 0, {
    ...guide,
    id: "module-8",
    number: "08"
  });
  course.lessons.forEach((lesson, index) => {
    lesson.id = `module-${index + 1}`;
    lesson.number = String(index + 1).padStart(2, "0");
  });
  delete course.elementorGuide;
})();
