/* =========================================================
   DeLa GD Forum
   LIST X+ PAGE
   ========================================================= */

(function () {
    "use strict";

    const PAGE_ID = "x-plus-ranking-page";
    const BUTTON_ID = "x-plus-list-nav";

    const currentScript = document.currentScript;


    /* =====================================================
       LOAD CSS
       ===================================================== */

    function loadXPlusStyles() {

        const stylesheetURL = currentScript && currentScript.src
            ? new URL("X-plus.css", currentScript.src).href
            : "X-plus.css";

        const existingStylesheet = document.querySelector(
            'link[data-x-plus-styles="true"]'
        );

        if (existingStylesheet) {
            return;
        }

        const stylesheet = document.createElement("link");

        stylesheet.rel = "stylesheet";
        stylesheet.href = stylesheetURL;
        stylesheet.dataset.xPlusStyles = "true";

        document.head.appendChild(stylesheet);
    }


    /* =====================================================
       CREATE PAGE
       ===================================================== */

    function createXPlusPage() {

        let page = document.getElementById(PAGE_ID);

        if (page) {
            return page;
        }

        page = document.createElement("section");

        page.id = PAGE_ID;
        page.className = "hidden";

        page.innerHTML = `
            <div class="hero">

                <div class="hero-small">
                    DeLa GD Forum
                </div>

                <h1>LIST X+</h1>

                <p>Geometry Dash Level Ranking</p>

            </div>

            <div class="controls">
                <div class="search-box">
                    <input
                        type="text"
                        id="x-plus-search-input"
                        placeholder="Search levels..."
                        autocomplete="off">
                </div>

                <div class="filter-box">
                    <select id="x-plus-difficulty-filter" aria-label="난이도 필터">
                        <option value="all">All Difficulties</option>
                        <option value="Extreme Demon">Extreme Demon</option>
                        <option value="Insane Demon">Insane Demon</option>
                        <option value="Hard Demon">Hard Demon</option>
                        <option value="Medium Demon">Medium Demon</option>
                        <option value="Easy Demon">Easy Demon</option>
                        <option value="Insane">Insane</option>
                    </select>
                </div>

                <div class="filter-box sort-filter-box">
                    <select id="x-plus-sort-select" aria-label="맵 정렬 기준">
                        <option value="rank">랭킹 순</option>
                        <option value="objects">오브젝트 수</option>
                        <option value="designScale">디자인 척도</option>
                    </select>
                </div>
            </div>

            <div
                id="x-plus-level-space"
                class="ranking-grid"
                data-card-transition="true"
                aria-label="LIST X+ level area">
            </div>
        `;

        const main = document.querySelector("main");

        const timeMachinePage = document.getElementById(
            "time-machine-page"
        );

        if (!main) {
            console.error(
                "LIST X+: Main element could not be found."
            );

            return null;
        }

        if (
            timeMachinePage &&
            timeMachinePage.parentElement === main
        ) {
            main.insertBefore(page, timeMachinePage);

        } else {

            main.appendChild(page);

        }

        return page;
    }


    /* =====================================================
       SEARCH, DIFFICULTY FILTER, AND SORT
       ===================================================== */

    function displayXPlusLevels(page, animateTransition = false) {

        const levelSpace = page.querySelector(
            "#x-plus-level-space"
        );

        const searchInput = page.querySelector(
            "#x-plus-search-input"
        );

        const difficultyFilter = page.querySelector(
            "#x-plus-difficulty-filter"
        );

        const sortSelect = page.querySelector(
            "#x-plus-sort-select"
        );

        if (!levelSpace || !searchInput || !difficultyFilter || !sortSelect) {

            console.error(
                "LIST X+: Search and filter controls could not be found."
            );

            return;
        }

        if (
            typeof renderLevelCards !== "function" ||
            typeof sortLevels !== "function"
        ) {

            console.error(
                "LIST X+: Shared list functions could not be found."
            );

            return;
        }

        const xPlusLevels = Array.isArray(window.X_PLUS_LEVELS)
            ? window.X_PLUS_LEVELS
            : [];

        const searchText = searchInput.value.trim();
        const selectedDifficulty = difficultyFilter.value;

        const filteredLevels = xPlusLevels.filter(level => {

            const levelName = String(level.name || "");

            const matchesSearch = levelName
                .toLowerCase()
                .includes(searchText.toLowerCase());

            const matchesDifficulty =
                selectedDifficulty === "all" ||
                level.difficulty === selectedDifficulty;

            return matchesSearch && matchesDifficulty;

        });

        renderLevelCards(
            levelSpace,
            sortLevels(filteredLevels, sortSelect.value),
            xPlusLevels,
            searchText,
            animateTransition
        );
    }


    function registerXPlusControls(page) {

        if (page.dataset.xPlusControlsBound === "true") {
            return;
        }

        const searchInput = page.querySelector(
            "#x-plus-search-input"
        );

        const difficultyFilter = page.querySelector(
            "#x-plus-difficulty-filter"
        );

        const sortSelect = page.querySelector(
            "#x-plus-sort-select"
        );

        if (!searchInput || !difficultyFilter || !sortSelect) {

            console.error(
                "LIST X+: Search and filter controls could not be initialized."
            );

            return;
        }

        page.dataset.xPlusControlsBound = "true";

        // Match the main LIST search behavior.
        searchInput.addEventListener("input", () => {
            displayXPlusLevels(page);
        });

        // Match the main LIST difficulty filter behavior.
        difficultyFilter.addEventListener("change", () => {
            displayXPlusLevels(page, true);
        });

        // Match the main LIST sorting behavior.
        sortSelect.addEventListener("change", () => {
            displayXPlusLevels(page, true);
        });
    }


    /* =====================================================
       RENDER X+ LEVELS
       ===================================================== */

    function renderXPlusLevels(page) {

        const levelSpace = page.querySelector(
            "#x-plus-level-space"
        );

        if (!levelSpace) {

            console.error(
                "LIST X+: Level container could not be found."
            );

            return;
        }

        registerXPlusControls(page);
        displayXPlusLevels(page);

        const xPlusLevels = Array.isArray(window.X_PLUS_LEVELS)
            ? window.X_PLUS_LEVELS
            : [];

        console.log(
            `LIST X+: ${xPlusLevels.length} levels rendered successfully.`
        );
    }


    /* =====================================================
       CREATE NAVIGATION BUTTON
       ===================================================== */

    function createXPlusButton() {

        let button = document.getElementById(BUTTON_ID);

        if (button) {
            return button;
        }

        const navigation = document.querySelector(
            ".site-header .nav"
        );

        if (!navigation) {
            return null;
        }

        button = document.createElement("button");

        button.id = BUTTON_ID;
        button.type = "button";
        button.textContent = "LIST X+";

        const timeMachineButton = document.getElementById(
            "time-machine-nav"
        );

        if (timeMachineButton) {

            navigation.insertBefore(
                button,
                timeMachineButton
            );

        } else {

            navigation.appendChild(button);

        }

        return button;
    }


    /* =====================================================
       REGISTER PAGE
       ===================================================== */

    function registerXPlusPage(page) {

        try {

            if (
                typeof appPages !== "undefined" &&
                Array.isArray(appPages) &&
                !appPages.includes(page)
            ) {

                appPages.push(page);

            }

        } catch (error) {

            console.warn(
                "LIST X+ page registration failed.",
                error
            );

        }
    }


    /* =====================================================
       PAGE THEME
       ===================================================== */

    function registerXPlusTheme(page) {

        const originalSyncPageTheme = window.syncPageTheme;

        if (
            typeof originalSyncPageTheme !== "function" ||
            originalSyncPageTheme.__xPlusThemeWrapper
        ) {
            return;
        }

        const updatedSyncPageTheme = function (targetPage) {

            originalSyncPageTheme.call(
                this,
                targetPage
            );

            const detailPage = document.getElementById(
                "detail-page"
            );

            const isXPlusTheme =

                targetPage === page ||

                (
                    targetPage === detailPage &&
                    typeof lastListPage !== "undefined" &&
                    lastListPage === page
                );

            document.body.classList.toggle(
                "x-plus-theme",
                isXPlusTheme
            );

        };

        updatedSyncPageTheme.__xPlusThemeWrapper = true;

        window.syncPageTheme = updatedSyncPageTheme;
    }


    /* =====================================================
       X+ CARD NAVIGATION
       ===================================================== */

    function registerXPlusCardNavigation(page) {

        if (
            page.dataset.xPlusCardNavigationBound === "true"
        ) {
            return;
        }

        page.dataset.xPlusCardNavigationBound = "true";

        page.addEventListener("click", function (event) {

            const target = event.target;

            if (!(target instanceof Element)) {
                return;
            }

            const card = target.closest(
                "#x-plus-level-space .level-card"
            );

            if (!card) {
                return;
            }

            /*
               openLevel() runs on the card first.

               After it starts opening the level,
               this event reaches the page container.

               Restore the correct source page so that
               the detail page's Back button returns to LIST X+.
            */

            if (
                typeof isOpeningLevel !== "undefined" &&
                isOpeningLevel
            ) {

                lastListPage = page;

            }

        });
    }


    /* =====================================================
       TIME MACHINE - LIST X+
       ===================================================== */

    function registerXPlusTimeMachine() {

        const listSelect = document.getElementById(
            "time-machine-list"
        );

        if (!listSelect) {
            return;
        }

        // Add LIST X+ to the Time Machine dropdown.

        if (
            !Array.from(listSelect.options).some(
                option => option.value === "x-plus"
            )
        ) {

            const option = document.createElement("option");

            option.value = "x-plus";
            option.textContent = "LIST X+";

            listSelect.appendChild(option);

        }

        // Preserve the original Time Machine function.

        const originalDisplayTimeMachine =
            window.displayTimeMachine;

        if (
            typeof originalDisplayTimeMachine !== "function" ||
            originalDisplayTimeMachine.__xPlusTimeMachineWrapper
        ) {
            return;
        }

        const updatedDisplayTimeMachine = function (
            animateTransition = false
        ) {

            const selectedList = document.getElementById(
                "time-machine-list"
            );

            if (
                selectedList &&
                selectedList.value === "x-plus"
            ) {

                const year = document.getElementById(
                    "time-machine-year"
                )?.value;

                const month = document.getElementById(
                    "time-machine-month"
                )?.value;

                const day = document.getElementById(
                    "time-machine-day"
                )?.value;

                const summary = document.getElementById(
                    "time-machine-summary"
                );

                const grid = document.getElementById(
                    "time-machine-grid"
                );

                const hasDate = Boolean(
                    year && month && day
                );

                const dateLabel = hasDate
                    ? `${year}년 ${Number(month)}월 ${Number(day)}일 기준`
                    : "날짜를 선택해 주세요";

                if (summary) {

                    summary.textContent = hasDate
                        ? `${dateLabel} · LIST X+ · 0개 맵`
                        : `${dateLabel} · LIST X+`;

                }

                if (grid) {
                    grid.replaceChildren();
                }

                return;
            }

            // Keep LIST and IMPOSSIBLE LIST working normally.

            return originalDisplayTimeMachine.call(
                this,
                animateTransition
            );
        };

        updatedDisplayTimeMachine.__xPlusTimeMachineWrapper = true;

        window.displayTimeMachine = updatedDisplayTimeMachine;
    }


    /* =====================================================
       NAVIGATION FUNCTION
       ===================================================== */

    function registerXPlusNavigation(page, button) {

        window.showXPlusList = function () {

            if (typeof window.changePage === "function") {

                window.changePage(page);

                return;
            }

            document.querySelectorAll(
                "main > section"
            ).forEach(section => {

                section.classList.add("hidden");

            });

            page.classList.remove("hidden");

            document.body.classList.add("x-plus-theme");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };


        button.addEventListener("click", function () {

            if (
                typeof window.playCardClickSound === "function"
            ) {

                window.playCardClickSound();

            }

            window.showXPlusList();

        });

    }


    /* =====================================================
       INITIALIZATION
       ===================================================== */

    function initializeXPlus() {

        loadXPlusStyles();

        const page = createXPlusPage();

        if (!page) {

            console.error(
                "LIST X+: Page initialization failed."
            );

            return;
        }

        const button = createXPlusButton();

        if (!button) {

            console.error(
                "LIST X+: Navigation button could not be created."
            );

            return;
        }

        registerXPlusPage(page);

        registerXPlusTheme(page);

        registerXPlusTimeMachine();

        registerXPlusNavigation(page, button);

        // Render the actual X+ level cards.

        renderXPlusLevels(page);

        // Handle detail-page return navigation.

        registerXPlusCardNavigation(page);

        console.log(
            "LIST X+ initialized successfully."
        );

    }


    /* =====================================================
       START
       ===================================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initializeXPlus,
            { once: true }
        );

    } else {

        initializeXPlus();

    }

})();
