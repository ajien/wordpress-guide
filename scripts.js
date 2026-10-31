(() => {
	"use strict";

	const content = window.COURSE_CONTENT;
	if (!content || !Array.isArray(content.lessons)) return;

	const storageKey = "csi-wordpress-guide-v1";
	const lessonContent = document.querySelector("#lesson-content");
	const lessonNav = document.querySelector("#lesson-nav-list");
	const mainContent = document.querySelector("#main-content");
	const breadcrumb = document.querySelector("#breadcrumb-current");
	const progressCount = document.querySelector("#progress-count");
	const progressBar = document.querySelector("#progress-bar");
	const progressFill = document.querySelector("#progress-fill");
	const themeToggle = document.querySelector("#theme-toggle");
	const textSizeControl = document.querySelector(".text-size-control");
	const textSizeValue = document.querySelector("#text-size-value");
	const menuToggle = document.querySelector(".menu-toggle");
	const sidebar = document.querySelector("#course-sidebar");
	const sidebarScrim = document.querySelector(".sidebar-scrim");
	const dialog = document.querySelector(".image-dialog");
	const toast = document.querySelector(".toast");
	let toastTimer;
	let activeImageButton;
	let state = loadState();

	function loadState() {
		try {
			const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
			const layoutVersion = 3;
			const toLayout2 = (id) => {
				if (id === "elementor-guide") id = "module-8";
				else if (id === "module-8") id = "module-9";
				else if (id === "module-9") id = "module-10";
				const match = /^module-(\d+)$/.exec(id);
				// Module 5 (Manage your content) was inserted, shifting later lessons by one.
				return match && Number(match[1]) >= 5 ? `module-${Number(match[1]) + 1}` : id;
			};
			const toLayout3 = (id) => {
				const match = /^module-(\d+)$/.exec(id);
				if (!match) return id;
				// Plan your site became Module 2; SEO and security lessons were added before the last lesson.
				const number = Number(match[1]);
				if (number === 11) return "module-14";
				return number >= 2 && number <= 10 ? `module-${number + 1}` : id;
			};
			const remapLessonId = (id) => {
				if (saved.layout === layoutVersion) return id;
				return saved.layout === 2 ? toLayout3(id) : toLayout3(toLayout2(id));
			};
			const completed = Array.isArray(saved.completed) ? [...new Set(saved.completed.map(remapLessonId))] : [];
			const checks = {};
			if (saved.checks && typeof saved.checks === "object") {
				Object.entries(saved.checks).forEach(([id, items]) => {
					const newId = remapLessonId(id);
					checks[newId] = [...new Set([...(checks[newId] || []), ...(Array.isArray(items) ? items : [])])];
				});
			}
			return {
				layout: layoutVersion,
				completed,
				checks,
				theme: saved.theme === "dark" || saved.theme === "light" ? saved.theme : null,
				fontSize: [14, 16, 18, 20].includes(saved.fontSize) ? saved.fontSize : 16
			};
		} catch {
			return { layout: 3, completed: [], checks: {}, theme: null, fontSize: 16 };
		}
	}

	function saveState() {
		try {
			localStorage.setItem(storageKey, JSON.stringify(state));
		} catch {
			announce("Progress could not be saved in this browser.");
		}
	}

	function escapeHtml(value) {
		return String(value ?? "").replace(/[&<>"']/g, (character) => ({
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		})[character]);
	}

	function safeUrl(value) {
		try {
			const url = new URL(value, window.location.href);
			return url.protocol === "https:" || url.protocol === "http:" ? url.href : "#";
		} catch {
			return "#";
		}
	}

	function announce(message) {
		toast.textContent = message;
		toast.classList.add("is-visible");
		window.clearTimeout(toastTimer);
		toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
	}

	function renderNavigation() {
		lessonNav.innerHTML = content.lessons.map((lesson) => `
			<li><a class="lesson-link" href="#${escapeHtml(lesson.id)}" data-lesson-link="${escapeHtml(lesson.id)}">
				<span class="nav-number">${escapeHtml(lesson.number)}</span>
				<span>${escapeHtml(lesson.title)}</span>
				<span class="nav-check" aria-hidden="true">${state.completed.includes(lesson.id) ? "&#10003;" : ""}</span>
			</a></li>`).join("");
	}

	function renderFlow(visual) {
		return `<figure class="visual-panel">
			<p class="visual-label">REQUEST FLOW / INTERACTIVE</p>
			<div class="flow-list" role="group" aria-label="Stages of a WordPress page request">
				${visual.nodes.map((node, index) => `<button class="flow-node" type="button" data-flow-index="${index}" aria-pressed="${index === 0}">
					<strong>${escapeHtml(node.label)}</strong><span>STAGE ${String(index + 1).padStart(2, "0")}</span>
				</button>`).join("")}
			</div>
			<p class="flow-detail" aria-live="polite">${escapeHtml(visual.nodes[0]?.detail || "")}</p>
			<figcaption>${escapeHtml(visual.caption)}</figcaption>
		</figure>`;
	}

	function renderExplorer(visual) {
		return `<figure class="visual-panel">
			<p class="visual-label">DASHBOARD EXPLORER / INTERACTIVE</p>
			<div class="explorer-list" role="group" aria-label="WordPress dashboard areas">
				${visual.items.map((item, index) => `<button class="explorer-button" type="button" data-explorer-index="${index}" aria-pressed="${index === 0}">${escapeHtml(item.label)}</button>`).join("")}
			</div>
			<p class="flow-detail" data-explorer-detail aria-live="polite">${escapeHtml(visual.items[0]?.detail || "")}</p>
			<figcaption>${escapeHtml(visual.caption)}</figcaption>
		</figure>`;
	}

	function renderScreenshotItem(item) {
		return `<div class="screenshot-item"><button class="real-screenshot" type="button" data-image-src="${escapeHtml(safeUrl(item.src))}" data-image-alt="${escapeHtml(item.alt || item.caption || "Instructional screenshot")}" data-image-caption="${escapeHtml(item.caption || "")}">
					<img src="${escapeHtml(safeUrl(item.src))}" alt="${escapeHtml(item.alt || "")}" loading="lazy">
				</button><p class="screenshot-caption">${escapeHtml(item.caption || "")}</p></div>`;
	}

	function renderStepMedia(step) {
		const images = step.images || (step.image ? [step.image] : []);
		const media = images.map(renderScreenshotItem).join("");
		const needed = step.imageNeeded ? `<div class="screenshot-placeholder step-placeholder"><span class="placeholder-badge">SCREENSHOT NEEDED</span><p>${escapeHtml(step.imageNeeded)}</p></div>` : "";
		return media || needed ? `<div class="step-media">${media}${needed}</div>` : "";
	}

	function stepImageSources(lesson) {
		return new Set(lesson.steps.flatMap((step) => (step.images || (step.image ? [step.image] : [])).map((image) => image.src)));
	}

	function withoutStepImages(visual, used) {
		if (!visual?.items) return visual;
		const items = visual.items.filter((item) => !(item.src && used.has(item.src)));
		return items.length ? { ...visual, items } : null;
	}

	function renderPlaceholders(visual) {
		const hasScreenshots = visual.items.some((item) => item.src);
		const items = visual.items.map((item) => {
			if (item.src) return renderScreenshotItem(item);
			return `<div class="screenshot-placeholder"><span class="placeholder-badge">SCREENSHOT PLACEHOLDER</span><p>${escapeHtml(item)}</p></div>`;
		}).join("");
		return `<figure class="visual-panel">
			<p class="visual-label">VISUAL REFERENCE / ${hasScreenshots ? "SCREENSHOTS" : "CAPTURE PROMPTS"}</p>
			<div class="${hasScreenshots ? "screenshot-list" : "placeholder-list"}">${items}</div>
			<figcaption>${escapeHtml(visual.caption)}</figcaption>
		</figure>`;
	}

	function renderVisual(visual) {
		if (!visual) return "";
		if (visual.type === "flow") return renderFlow(visual);
		if (visual.type === "explorer") return renderExplorer(visual);
		if (visual.type === "placeholders") return renderPlaceholders(visual);
		return "";
	}

	function renderChecklist(id, items, className = "checklist") {
		const checkedItems = state.checks[id] || [];
		return `<ul class="${className}" aria-label="${id === "final-project" ? "Final project checklist" : "Module task checklist"}">
			${items.map((item, index) => `<li class="checklist-item">
				<input type="checkbox" id="check-${escapeHtml(id)}-${index}" data-check-group="${escapeHtml(id)}" data-check-index="${index}" ${checkedItems.includes(index) ? "checked" : ""}>
				<label for="check-${escapeHtml(id)}-${index}"><span>${escapeHtml(item)}</span></label>
			</li>`).join("")}
		</ul>`;
	}

	function renderQuiz(quiz, lessonId) {
		if (!quiz) return "";
		return `<section class="section-block" aria-labelledby="quiz-heading">
			<h2 class="section-heading" id="quiz-heading"><span class="section-index">CHECK</span> Knowledge check</h2>
			<div class="quiz" data-quiz="${escapeHtml(lessonId)}">
				<p class="quiz-question">${escapeHtml(quiz.question)}</p>
				<div class="quiz-choices" role="group" aria-label="Answer choices">
					${quiz.choices.map((choice, index) => `<button class="quiz-choice" type="button" data-choice-index="${index}" aria-pressed="false">${escapeHtml(choice)}</button>`).join("")}
				</div>
				<p class="quiz-feedback" aria-live="polite"></p>
			</div>
		</section>`;
	}

	function renderTroubleItems(items) {
		return `<div class="lesson-trouble">${items.map((item) => `<article class="trouble-item">
			<h3>${escapeHtml(item.issue)}</h3><p>${escapeHtml(item.fix)}</p>
		</article>`).join("")}</div>`;
	}

	function renderReferences(references, heading = "Go a little deeper") {
		if (!references?.length) return "";
		return `<section class="aside-card references-card"><h2>${escapeHtml(heading)}</h2><div class="references">
			${references.map((reference) => `<a href="${escapeHtml(safeUrl(reference.url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(reference.label)} <span aria-hidden="true">&#8599;</span></a>`).join("")}
		</div></section>`;
	}

	function renderLessonVideo(video) {
		if (!video?.id || !/^[\w-]+$/.test(video.id)) return "";
		const url = safeUrl(video.url);
		return `<figure class="video-panel" aria-labelledby="lesson-video-caption">
			<p class="visual-label">VIDEO WALKTHROUGH</p>
			<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}" title="${escapeHtml(video.title || "Lesson video")}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
			<figcaption id="lesson-video-caption">If the embedded player is unavailable, <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">watch the video on YouTube</a>.</figcaption>
		</figure>`;
	}

	function renderLessonTime(lesson) {
		const times = [];
		if (lesson.readingTime) times.push(`<span>${escapeHtml(lesson.readingTime)} READING</span>`);
		if (lesson.handsOnTime) times.push(`<span>${escapeHtml(lesson.handsOnTime)} HANDS-ON</span>`);
		return times.join(`<span class="meta-dot" aria-hidden="true">&#9679;</span>`);
	}

	function renderCopyExample(lessonId) {
		const examples = {
			"module-4": [{ label: "Sample admin route", value: "https://your-site.example/wp-admin" }],
			"module-9": [
				{ label: "Sample homepage opening", value: "Welcome to [Organization Name]. We bring [audience] together through [service or activity]. Explore our work, meet the team, or get in touch." },
				{ label: "HTML link example", value: "<a href=\"https://example.org/contact/\">Contact our team</a>" }
			]
		};
		const lessonExamples = examples[lessonId];
		if (!lessonExamples) return "";
		return lessonExamples.map((example) => `<div class="copy-row"><div><span class="mini-label">${escapeHtml(example.label)}</span><br><code>${escapeHtml(example.value)}</code></div>
			<button class="copy-button" type="button" data-copy="${escapeHtml(example.value)}">Copy</button></div>`).join("");
	}

	function renderLessonScreenshots(lesson, used) {
		if (!lesson.screenshots?.length) return "";
		const visual = withoutStepImages({ items: lesson.screenshots }, used);
		if (!visual) return "";
		return renderPlaceholders({
			items: visual.items,
			caption: lesson.screenshotCaption || "Screenshots from the course demonstration. Interface details may vary by WordPress version and configuration."
		});
	}

	function renderLearningPaths(paths, heading, description) {
		if (!paths?.length) return "";
		return `<section class="learning-paths" aria-labelledby="learning-paths-heading">
			<div class="learning-paths-heading"><p class="mini-label">COURSE PATHS</p><h2 id="learning-paths-heading">${escapeHtml(heading || "Learn Gutenberg first. Continue with Elementor.")}</h2><p>${escapeHtml(description || "Both editors arrange content. Structure, hierarchy, readability, and usability matter in either one.")}</p></div>
			<div class="learning-path-grid">${paths.map((path) => `<article class="learning-path"><p class="mini-label">${escapeHtml(path.label)}</p><h3>${escapeHtml(path.title)}</h3><p>${escapeHtml(path.description)}</p>${path.href ? `<a class="nav-button" href="${escapeHtml(path.href)}">${escapeHtml(path.linkText || "Open guide")} <span aria-hidden="true">&#8594;</span></a>` : ""}</article>`).join("")}</div>
		</section>`;
	}

	function renderLesson(lesson) {
		const completed = state.completed.includes(lesson.id);
		const concepts = lesson.concepts.map((concept) => `<article class="concept-item"><h3>${escapeHtml(concept.title)}</h3><p>${escapeHtml(concept.text)}</p></article>`).join("");
		const usedImages = stepImageSources(lesson);
		const steps = lesson.steps.map((step, index) => `<article class="step-card"><span class="step-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.body)}</p>${renderStepMedia(step)}${step.checkpoint ? `<p class="step-checkpoint"><strong>Show me:</strong> ${escapeHtml(step.checkpoint)}</p>` : ""}</div></article>`).join("");
		const activity = lesson.activitySteps?.length ? `<section class="section-block" aria-labelledby="activity-heading"><h2 class="section-heading" id="activity-heading"><span class="section-index">04</span> ${escapeHtml(lesson.activityTitle || "Guided activity")}</h2><p class="activity-intro">${escapeHtml(lesson.activity)}</p><ol class="activity-step-list">${lesson.activitySteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></section>` : "";
		const optionalActivity = lesson.optionalActivity ? `<section class="optional-activity" aria-labelledby="optional-activity-heading"><p class="mini-label">${escapeHtml(lesson.optionalActivityLabel || "OPTIONAL EXTENSION")}</p><h2 id="optional-activity-heading">Optional activity</h2><p>${escapeHtml(lesson.optionalActivity)}</p>${lesson.optionalActivitySteps?.length ? `<ol class="optional-activity-steps">${lesson.optionalActivitySteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>` : ""}</section>` : "";
		const takeaways = lesson.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

		lessonContent.innerHTML = `<article class="lesson" aria-labelledby="lesson-title">
			<header class="lesson-header">
				<p class="eyebrow">MODULE ${escapeHtml(lesson.number)} <span aria-hidden="true">/</span> ${escapeHtml(lesson.eyebrow)}</p>
				<h1 class="lesson-title" id="lesson-title">${escapeHtml(lesson.title)}</h1>
				<p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
				<div class="lesson-meta">${renderLessonTime(lesson)}<span class="meta-dot" aria-hidden="true">&#9679;</span><span>${lesson.steps.length} STEPS</span><span class="timing-note">PLANNING ESTIMATE</span>
					<button class="complete-toggle" type="button" data-complete="${escapeHtml(lesson.id)}" aria-pressed="${completed}"><span class="check-glyph" aria-hidden="true">${completed ? "&#10003;" : ""}</span>${completed ? "Lesson complete" : "Mark lesson complete"}</button>
				</div>
			</header>
			${lesson.notice ? `<div class="callout warning lesson-notice"><h3>Before you start</h3><p>${escapeHtml(lesson.notice)}</p></div>` : ""}
				${renderLearningPaths(lesson.learningPaths, lesson.learningPathsHeading, lesson.learningPathsIntro)}
			<div class="lesson-body">
				<div class="lesson-main">
					<section class="section-block" aria-labelledby="objectives-heading">
						<h2 class="section-heading" id="objectives-heading"><span class="section-index">01</span> What you will learn</h2>
						<ul class="checklist">${lesson.objectives.map((objective) => `<li class="checklist-item"><span class="check-glyph" aria-hidden="true">&#8594;</span><span>${escapeHtml(objective)}</span></li>`).join("")}</ul>
					</section>
					${renderLessonVideo(lesson.video)}
					<section class="section-block" aria-labelledby="concepts-heading">
						<h2 class="section-heading" id="concepts-heading"><span class="section-index">02</span> The idea</h2>
						<div class="concept-list">${concepts}</div>
						${renderCopyExample(lesson.id)}
					</section>
					<section class="section-block" aria-labelledby="steps-heading">
						<h2 class="section-heading" id="steps-heading"><span class="section-index">03</span> Try it step by step</h2>
						<div class="step-list">${steps}</div>
					</section>
					${renderVisual(lesson.visual?.type === "placeholders" ? withoutStepImages(lesson.visual, usedImages) : lesson.visual)}
					${renderLessonScreenshots(lesson, usedImages)}
					${activity}
					${optionalActivity}
					<section class="section-block" aria-labelledby="troubleshooting-heading">
						<h2 class="section-heading" id="troubleshooting-heading"><span class="section-index">05</span> When something goes wrong</h2>
						${renderTroubleItems(lesson.troubleshooting)}
					</section>
					${renderQuiz(lesson.quiz, lesson.id)}
				</div>
				<aside class="lesson-aside" aria-label="Lesson activity and notes">
					${lesson.activitySteps?.length ? "" : `<section class="aside-card activity-card"><p class="mini-label">YOUR TURN</p><h2>Put it into practice</h2><p>${escapeHtml(lesson.activity)}</p></section>`}
					<section class="aside-card checkpoint-card"><p class="mini-label">CHECKPOINT</p><h2>How to know it worked</h2><p>${escapeHtml(lesson.checkpoint)}</p></section>
					<section class="aside-card"><p class="mini-label">TASK LIST</p><h2>Track this module</h2>${renderChecklist(lesson.id, lesson.checklist)}</section>
					<section class="aside-card takeaway-card"><p class="mini-label">KEEP IN MIND</p><h2>Key takeaways</h2><ul>${takeaways}</ul></section>
					${renderReferences(lesson.optionalReferences, "Optional references")}
					${renderReferences(lesson.references)}
				</aside>
			</div>
			<nav class="lesson-nav-footer" aria-label="Lesson navigation">
				${lesson.index > 0 ? `<a class="nav-button" href="#${escapeHtml(content.lessons[lesson.index - 1].id)}"><span aria-hidden="true">&#8592;</span> Previous</a>` : `<span></span>`}
				<div class="prev-next">${lesson.index < content.lessons.length - 1 ? `<a class="nav-button primary" href="#${escapeHtml(content.lessons[lesson.index + 1].id)}">Next lesson <span aria-hidden="true">&#8594;</span></a>` : `<a class="nav-button primary" href="#final-project">Go to final project <span aria-hidden="true">&#8594;</span></a>`}</div>
			</nav>
		</article>`;
	}

	function renderGlossary() {
		lessonContent.innerHTML = `<section class="tool-view" aria-labelledby="tool-title">
			<p class="eyebrow">YOUR TOOLKIT / QUICK REFERENCE</p><h1 class="tool-title" id="tool-title">Glossary</h1>
			<p class="tool-intro">Plain-language definitions for the terms you will meet while building a WordPress site.</p>
			<div class="search-wrap"><label for="glossary-search">SEARCH TERMS</label><input class="search-input" id="glossary-search" type="search" placeholder="Try: domain, plugin, permalink" autocomplete="off"></div>
			<div class="glossary-list">${content.glossary.map((entry) => `<article class="glossary-item" data-searchable="${escapeHtml(`${entry.term} ${entry.definition}`.toLowerCase())}"><h2>${escapeHtml(entry.term)}</h2><p>${escapeHtml(entry.definition)}</p></article>`).join("")}</div>
			<p class="empty-state" hidden>No matching terms yet. Try a shorter search.</p>
		</section>`;
	}

	function renderTroubleshooting() {
		lessonContent.innerHTML = `<section class="tool-view" aria-labelledby="tool-title">
			<p class="eyebrow">YOUR TOOLKIT / FIND A NEXT STEP</p><h1 class="tool-title" id="tool-title">Troubleshooting</h1>
			<p class="tool-intro">Start with what changed, check the current host and WordPress documentation, and protect account details while asking for help.</p>
			<div class="search-wrap"><label for="trouble-search">SEARCH PROBLEMS</label><input class="search-input" id="trouble-search" type="search" placeholder="Try: HTTPS, database, menu" autocomplete="off"></div>
			<div class="troubleshooting-list">${content.troubleshooting.map((item) => `<details data-searchable="${escapeHtml(`${item.title} ${item.tags} ${item.cause} ${item.fix}`.toLowerCase())}"><summary>${escapeHtml(item.title)}</summary><p><strong>Possible cause:</strong> ${escapeHtml(item.cause)}</p><p><strong>Try this:</strong> ${escapeHtml(item.fix)}</p></details>`).join("")}</div>
			<p class="empty-state" hidden>No matching issues. Try a different word or ask your instructor.</p>
		</section>`;
	}

	function renderProject() {
		const pagePaths = (content.project.pagePaths || []).map((path) => `<article class="learning-path"><p class="mini-label">EXAMPLE PAGE PLAN</p><h3>${escapeHtml(path.title)}</h3><ul class="project-page-list">${path.pages.map((page) => `<li>${escapeHtml(page)}</li>`).join("")}</ul></article>`).join("");
		const rubricRows = content.project.rubric.map((row) => `<tr><td>${escapeHtml(row.category)}</td><td>${escapeHtml(row.description)}</td><td>${row.points}</td></tr>`).join("");
		const reflection = (content.project.reflection || []).map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("");
		lessonContent.innerHTML = `<section class="tool-view" aria-labelledby="tool-title">
			<p class="eyebrow">THE CAPSTONE / SHOW WHAT YOU CAN DO</p><h1 class="tool-title" id="tool-title">${escapeHtml(content.project.title)}</h1>
			<p class="tool-intro">${escapeHtml(content.project.intro)}</p>
			<div class="callout warning"><h3>Keep your account private</h3><p>Share the public site URL for review, not your dashboard password. Never put private client, school, or personal data in a class project.</p></div>
			<section class="section-block" aria-labelledby="project-paths-heading"><h2 class="section-heading" id="project-paths-heading"><span class="section-index">01</span> Example page plans</h2><div class="learning-path-grid">${pagePaths}</div></section>
			<section class="section-block" aria-labelledby="pages-posts-heading"><h2 class="section-heading" id="pages-posts-heading"><span class="section-index">02</span> Pages and Posts</h2><p>${escapeHtml(content.project.postGuidance)}</p></section>
			<section class="section-block"><h2 class="section-heading"><span class="section-index">03</span> Project checklist</h2>${renderChecklist("final-project", content.project.checklist, "project-checklist")}</section>
			<section class="section-block" aria-labelledby="reflection-heading"><h2 class="section-heading" id="reflection-heading"><span class="section-index">04</span> Reflection</h2><ol class="reflection-prompts">${reflection}</ol></section>
			<section class="section-block"><h2 class="section-heading"><span class="section-index">05</span> Grading rubric / 100 points</h2><div class="rubric-wrap"><table class="rubric"><thead><tr><th>Area</th><th>Evidence</th><th>Points</th></tr></thead><tbody>${rubricRows}<tr><td colspan="2"><strong>Total</strong></td><td><strong>100</strong></td></tr></tbody></table></div></section>
			<a class="nav-button" href="#module-1">Return to the course <span aria-hidden="true">&#8592;</span></a>
		</section>`;
	}

	function renderIntro() {
		const intro = content.introPage;
		const moduleLinks = content.lessons.map((lesson) => `<li><a class="course-map-link" href="#${escapeHtml(lesson.id)}"><span class="course-map-number">${escapeHtml(lesson.number)}</span><span class="course-map-copy"><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.readingTime || "")} reading <span aria-hidden="true">/</span> ${escapeHtml(lesson.handsOnTime || "")} hands-on</small></span><span class="course-map-arrow" aria-hidden="true">&#8594;</span></a></li>`).join("");
		lessonContent.innerHTML = `<article class="tool-view intro-view" aria-labelledby="tool-title">
			<p class="eyebrow">${escapeHtml(intro.eyebrow)}</p>
			<h1 class="tool-title" id="tool-title">${escapeHtml(intro.title)}</h1>
			<p class="tool-intro">${escapeHtml(intro.summary)}</p>
			<div class="callout success"><h2>Your goal</h2><p>${escapeHtml(intro.goal)}</p></div>
			<div class="intro-details">
				<section class="section-block"><h2 class="section-heading"><span class="section-index">01</span> What you need</h2><ul class="intro-list">${intro.whatYouNeed.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
				<section class="section-block"><h2 class="section-heading"><span class="section-index">02</span> Choose a page-building path</h2><p>${escapeHtml(intro.paths)}</p><p class="intro-estimate">${escapeHtml(intro.estimate)}</p></section>
			</div>
			<p class="source-note">${escapeHtml(intro.wpStat)}</p>
			<section class="section-block course-map-section" aria-labelledby="course-map-heading">
				<h2 class="section-heading" id="course-map-heading"><span class="section-index">03</span> Your course map</h2>
				<ol class="course-map">${moduleLinks}</ol>
			</section>
			<a class="nav-button primary" href="#module-1">Start Learning <span aria-hidden="true">&#8594;</span></a>
		</article>`;
	}

	function updateProgress() {
		const total = content.lessons.length;
		const completed = content.lessons.filter((lesson) => state.completed.includes(lesson.id)).length;
		progressCount.textContent = `${completed} / ${total}`;
		progressBar.setAttribute("aria-valuemax", String(total));
		progressBar.setAttribute("aria-valuenow", String(completed));
		progressFill.style.width = `${total ? (completed / total) * 100 : 0}%`;
		renderNavigation();
	}

	function closeMenu(returnFocus = false) {
		sidebar.classList.remove("is-open");
		sidebarScrim.hidden = true;
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Open course navigation");
		document.body.classList.remove("menu-open");
		if (returnFocus) menuToggle.focus();
	}

	function openMenu() {
		sidebar.classList.add("is-open");
		sidebarScrim.hidden = false;
		menuToggle.setAttribute("aria-expanded", "true");
		menuToggle.setAttribute("aria-label", "Close course navigation");
		document.body.classList.add("menu-open");
		sidebar.querySelector(".start-link")?.focus();
	}

	function setTheme(theme) {
		document.documentElement.dataset.theme = theme;
		themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
		themeToggle.querySelector("span:last-child").textContent = theme === "dark" ? "Use light theme" : "Use dark theme";
		themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "\u2600" : "\u263d";
		state.theme = theme;
		saveState();
	}

	function setFontSize(fontSize) {
		state.fontSize = Math.min(20, Math.max(14, fontSize));
		document.documentElement.style.setProperty("--reading-size", `${state.fontSize}px`);
		textSizeValue.value = `${state.fontSize}px`;
		textSizeValue.textContent = `${state.fontSize}px`;
		textSizeControl.querySelector('[data-font-delta="-2"]').disabled = state.fontSize === 14;
		textSizeControl.querySelector('[data-font-delta="2"]').disabled = state.fontSize === 20;
		saveState();
	}

	function currentRoute() {
		const route = decodeURIComponent(window.location.hash.slice(1));
		const lesson = content.lessons.find((item) => item.id === route);
		if (lesson) return { type: "lesson", value: lesson };
		if (["intro", "glossary", "troubleshooting", "final-project"].includes(route)) return { type: route };
		return { type: "lesson", value: content.lessons[0] };
	}

	function renderRoute(shouldFocus = false) {
		const route = currentRoute();
		document.querySelectorAll("[data-lesson-link], [data-view]").forEach((link) => {
			link.removeAttribute("aria-current");
		});
		if (route.type === "lesson") {
			const lesson = route.value;
			lesson.index = content.lessons.indexOf(lesson);
			renderLesson(lesson);
			const activeLink = document.querySelector(`[data-lesson-link="${lesson.id}"]`);
			activeLink?.setAttribute("aria-current", "page");
			breadcrumb.textContent = lesson.title;
			document.title = `${lesson.title} | WordPress Setup Guide`;
		} else {
			if (route.type === "intro") renderIntro();
			if (route.type === "glossary") renderGlossary();
			if (route.type === "troubleshooting") renderTroubleshooting();
			if (route.type === "final-project") renderProject();
			document.querySelector(`[data-view="${route.type}"]`)?.setAttribute("aria-current", "page");
			const viewTitles = { intro: "Start here", "final-project": "Final project" };
			breadcrumb.textContent = viewTitles[route.type] || route.type[0].toUpperCase() + route.type.slice(1);
			document.title = `${breadcrumb.textContent} | WordPress Setup Guide`;
		}
		if (shouldFocus) {
			window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
			mainContent.focus({ preventScroll: true });
		}
		closeMenu();
	}

	function filterSearch(input) {
		const container = input.closest(".tool-view");
		const query = input.value.trim().toLowerCase();
		const entries = [...container.querySelectorAll("[data-searchable]")];
		let visible = 0;
		entries.forEach((entry) => {
			const matches = !query || entry.dataset.searchable.includes(query);
			entry.hidden = !matches;
			if (matches) visible += 1;
		});
		container.querySelector(".empty-state").hidden = visible > 0;
	}

	async function copyText(value) {
		try {
			await navigator.clipboard.writeText(value);
			announce("Copied to clipboard.");
		} catch {
			const field = document.createElement("textarea");
			field.value = value;
			field.setAttribute("readonly", "");
			field.style.position = "fixed";
			field.style.opacity = "0";
			document.body.append(field);
			field.select();
			const copied = document.execCommand("copy");
			field.remove();
			announce(copied ? "Copied to clipboard." : "Copy was blocked by the browser.");
		}
	}

	lessonContent.addEventListener("change", (event) => {
		const input = event.target.closest("input[data-check-group]");
		if (!input) return;
		const group = input.dataset.checkGroup;
		const index = Number(input.dataset.checkIndex);
		const checked = new Set(state.checks[group] || []);
		if (input.checked) checked.add(index);
		else checked.delete(index);
		state.checks[group] = [...checked].sort((a, b) => a - b);
		saveState();
	});

	lessonContent.addEventListener("input", (event) => {
		if (event.target.matches("#glossary-search, #trouble-search")) filterSearch(event.target);
	});

	lessonContent.addEventListener("click", (event) => {
		const completeButton = event.target.closest("[data-complete]");
		if (completeButton) {
			const id = completeButton.dataset.complete;
			state.completed = state.completed.includes(id) ? state.completed.filter((item) => item !== id) : [...state.completed, id];
			saveState();
			updateProgress();
			renderRoute();
			return;
		}

		const flowButton = event.target.closest("[data-flow-index]");
		if (flowButton) {
			const lesson = currentRoute().value;
			const index = Number(flowButton.dataset.flowIndex);
			lessonContent.querySelectorAll("[data-flow-index]").forEach((button) => button.setAttribute("aria-pressed", String(button === flowButton)));
			lessonContent.querySelector(".flow-detail").textContent = lesson.visual.nodes[index].detail;
			return;
		}

		const explorerButton = event.target.closest("[data-explorer-index]");
		if (explorerButton) {
			const lesson = currentRoute().value;
			const index = Number(explorerButton.dataset.explorerIndex);
			lessonContent.querySelectorAll("[data-explorer-index]").forEach((button) => button.setAttribute("aria-pressed", String(button === explorerButton)));
			lessonContent.querySelector("[data-explorer-detail]").textContent = lesson.visual.items[index].detail;
			return;
		}

		const choice = event.target.closest("[data-choice-index]");
		if (choice) {
			const quiz = choice.closest("[data-quiz]");
			const lesson = content.lessons.find((item) => item.id === quiz.dataset.quiz);
			const index = Number(choice.dataset.choiceIndex);
			const correct = index === lesson.quiz.answer;
			quiz.querySelectorAll("[data-choice-index]").forEach((button) => button.setAttribute("aria-pressed", String(button === choice)));
			const feedback = quiz.querySelector(".quiz-feedback");
			feedback.textContent = lesson.quiz.explanations[index];
			feedback.dataset.correct = String(correct);
			return;
		}

		const copyButton = event.target.closest("[data-copy]");
		if (copyButton) {
			copyText(copyButton.dataset.copy);
			return;
		}

		const imageButton = event.target.closest("[data-image-src]");
		if (imageButton) {
			activeImageButton = imageButton;
			const image = dialog.querySelector("img");
			image.src = imageButton.dataset.imageSrc;
			image.alt = imageButton.dataset.imageAlt;
			dialog.querySelector(".dialog-caption").textContent = imageButton.dataset.imageCaption;
			dialog.showModal();
		}
	});

	lessonNav.addEventListener("click", (event) => {
		if (event.target.closest("a")) closeMenu();
	});
	document.querySelector(".lesson-nav").addEventListener("click", (event) => {
		if (event.target.closest("a")) closeMenu();
	});

	menuToggle.addEventListener("click", () => {
		if (menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
		else openMenu();
	});
	sidebarScrim.addEventListener("click", () => closeMenu(true));
	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") return;
		if (dialog.open) {
			event.preventDefault();
			dialog.close();
			return;
		}
		if (sidebar.classList.contains("is-open")) closeMenu(true);
	});

	themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
	textSizeControl.addEventListener("click", (event) => {
		const button = event.target.closest("button");
		if (!button) return;
		if (button.hasAttribute("data-font-reset")) setFontSize(16);
		else setFontSize(state.fontSize + Number(button.dataset.fontDelta));
	});
	dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) dialog.close();
	});
	dialog.addEventListener("close", () => {
		dialog.querySelector("img").removeAttribute("src");
		activeImageButton?.focus();
	});
	window.addEventListener("hashchange", () => renderRoute(true));

	content.lessons.forEach((lesson, index) => { lesson.index = index; });
	const initialTheme = state.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
	setTheme(initialTheme);
	setFontSize(state.fontSize);
	updateProgress();
	if (!window.location.hash) history.replaceState(null, "", "#intro");
	renderRoute();
})();
