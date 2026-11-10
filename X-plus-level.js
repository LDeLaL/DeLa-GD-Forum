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
                <div class="hero-small">DeLa GD Forum</div>

                <h1>LIST X+</h1>

                <p>Geometry Dash Level Ranking</p>
            </div>

            <div
                id="x-plus-level-space"
                aria-label="LIST X+ level area">
            </div>
        `;

        const main = document.querySelector("main");

        const timeMachinePage = document.getElementById(
            "time-machine-page"
        );

        if (timeMachinePage && timeMachinePage.parentElement === main) {
            main.insertBefore(page, timeMachinePage);
        } else {
            main.appendChild(page);
        }

        return page;
    }


    /* =====================================================
       CREATE NAVIGATION BUTTON
       ===================================================== */

    function createXPlusButton() {
        let button = document.getElementById(BUTTON_ID);

        if (button) {
            return button;
        }

        const navigation = document.querySelector(".site-header .nav");

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
            navigation.insertBefore(button, timeMachineButton);
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
            originalSyncPageTheme.call(this, targetPage);

            document.body.classList.toggle(
                "x-plus-theme",
                targetPage === page
            );
        };

        updatedSyncPageTheme.__xPlusThemeWrapper = true;

        window.syncPageTheme = updatedSyncPageTheme;
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
        const originalDisplayTimeMachine = window.displayTimeMachine;

        if (
            typeof originalDisplayTimeMachine !== "function" ||
            originalDisplayTimeMachine.__xPlusTimeMachineWrapper
        ) {
            return;
        }

        // Extend the original function.
        const updatedDisplayTimeMachine = function (
            animateTransition = false
        ) {
            const selectedList = document.getElementById(
                "time-machine-list"
            );

            if (selectedList && selectedList.value === "x-plus") {

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

                const hasDate = Boolean(year && month && day);

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

            document.querySelectorAll("main > section").forEach(section => {
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

            if (typeof window.playCardClickSound === "function") {
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

        console.log("LIST X+ initialized successfully.");
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
