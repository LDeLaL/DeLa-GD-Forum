/* =========================================================
   DeLa GD Forum
   Main JavaScript
   ========================================================= */


/* =========================================================
   LEVEL DATA
   ========================================================= */

const levels = [

    {
        rank: 1,
        name: "Qlixsyn",
        difficulty: "Hard Demon",

        image: "images/1000007894.jpg",

        registrationDate: "2026년 10월 3일",
        registrationNumber: "《1》",
        registrationRank: "#1",
        forumFirst: "Qlixsyn",

        absoluteDifficulty: "14.8",
        length: "19초",
        objects: "24,657",
        designScale: "2.1",
        song: "Classical VIP",

        history: [
            {
                date: "2026년 10월 3일",
                change: "−",
                rank: "#1",
                reason: "등재됨",
                type: "entry"
            }
        ]
    },


    {
        rank: 2,
        name: "EYESwork",
        difficulty: "Hard Demon",

        image: "images/1000006550.jpg",

        registrationDate: "2026년 10월 3일",
        registrationNumber: "《2》",
        registrationRank: "#2",
        forumFirst: "Qlixsyn",

        absoluteDifficulty: "14",
        length: "16초",
        objects: "3,408",
        designScale: "1.9",
        song: "Society",

        history: [
            {
                date: "2026년 10월 3일",
                change: "−",
                rank: "#2",
                reason: "등재됨",
                type: "entry"
            }
        ]
    },


    {
        rank: 3,
        name: "Unnerfed Glamorous",
        difficulty: "Hard Demon",

        image: "images/1000006513.jpg",

        registrationDate: "2026년 10월 3일",
        registrationNumber: "《3》",
        registrationRank: "#3",
        forumFirst: "Qlixsyn",

        absoluteDifficulty: "10.3",
        length: "42초",
        objects: "2,077",
        designScale: "1.3",
        song: "Eden",

        history: [
            {
                date: "2026년 10월 3일",
                change: "−",
                rank: "#3",
                reason: "등재됨",
                type: "entry"
            }
        ]
    },


    {
        rank: 4,
        name: "DELUSION",
        difficulty: "Medium Demon",

        image: "images/1000009821.jpg",

        registrationDate: "2026년 10월 3일",
        registrationNumber: "《4》",
        registrationRank: "#4",
        forumFirst: "Qlixsyn",

        absoluteDifficulty: "10",
        length: "22초",
        objects: "23,863",
        designScale: "1.9",
        song: "Turn The Lights Off",

        history: [
            {
                date: "2026년 10월 3일",
                change: "−",
                rank: "#4",
                reason: "등재됨",
                type: "entry"
            }
        ]
    },


    {
        rank: 5,
        name: "D",
        difficulty: "Insane",

        image: "images/1000009785.jpg",

        registrationDate: "2026년 10월 3일",
        registrationNumber: "《5》",
        registrationRank: "#5",
        forumFirst: "Qlixsyn",

        absoluteDifficulty: "9",
        length: "3초",
        objects: "27",
        designScale: "1.6",
        song: "Creo - Flow",

        history: [
            {
                date: "2026년 10월 3일",
                change: "−",
                rank: "#5",
                reason: "등재됨",
                type: "entry"
            }
        ]
    },


    {
        rank: 6,
        name: "5",
        difficulty: "Insane",

        image: "images/1000009784.jpg",

        registrationDate: "2026년 10월 3일",
        registrationNumber: "《6》",
        registrationRank: "#6",
        forumFirst: "Qlixsyn",

        absoluteDifficulty: "5",
        length: "3초",
        objects: "207",
        designScale: "3",
        song: "—",

        history: [
            {
                date: "2026년 10월 3일",
                change: "−",
                rank: "#6",
                reason: "등재됨",
                type: "entry"
            }
        ]
    }

];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const rankingPage = document.getElementById("ranking-page");
const detailPage = document.getElementById("detail-page");
const recordsPage = document.getElementById("records-page");
const aboutPage = document.getElementById("about-page");

const rankingGrid = document.getElementById("ranking-grid");

const searchInput = document.getElementById("search-input");
const difficultyFilter = document.getElementById("difficulty-filter");

const appPages = [
    rankingPage,
    detailPage,
    recordsPage,
    aboutPage
];

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

const PAGE_LEAVE_DURATION = prefersReducedMotion ? 0 : 240;
const PAGE_ENTER_DURATION = prefersReducedMotion ? 0 : 1150;

let isChangingPage = false;
let isOpeningLevel = false;


/* =========================================================
   PAGE TRANSITIONS
   ========================================================= */

function changePage(targetPage) {

    if (!targetPage || isChangingPage) {
        return;
    }

    const currentPage = appPages.find(
        page => !page.classList.contains("hidden")
    );

    if (currentPage === targetPage) {
        return;
    }

    isChangingPage = true;

    if (currentPage) {
        currentPage.classList.remove("page-entering");
        currentPage.classList.add("page-leaving");
    }

    window.setTimeout(() => {

        if (currentPage) {
            currentPage.classList.add("hidden");
            currentPage.classList.remove("page-leaving");
        }

        targetPage.classList.remove("hidden", "page-leaving", "page-entering");

        // Restart the entrance animation whenever a page is shown again.
        void targetPage.offsetWidth;
        targetPage.classList.add("page-entering");

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });

        window.setTimeout(() => {
            targetPage.classList.remove("page-entering");
            isChangingPage = false;
        }, PAGE_ENTER_DURATION);

    }, currentPage ? PAGE_LEAVE_DURATION : 0);
}


function animateInitialPage() {

    if (prefersReducedMotion) {
        return;
    }

    const initialElements = [
        document.querySelector(".site-header"),
        rankingPage,
        document.querySelector("footer")
    ];

    initialElements.forEach(element => {
        if (element) {
            element.classList.add("page-entering");
        }
    });

    window.setTimeout(() => {
        initialElements.forEach(element => {
            if (element) {
                element.classList.remove("page-entering");
            }
        });
    }, PAGE_ENTER_DURATION);
}


/* =========================================================
   DISPLAY LEVELS
   ========================================================= */

function displayLevels() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const selectedDifficulty = difficultyFilter.value;


    const filteredLevels = levels.filter(level => {

        const matchesSearch =
            level.name
                .toLowerCase()
                .includes(searchText);

        const matchesDifficulty =
            selectedDifficulty === "all" ||
            level.difficulty === selectedDifficulty;

        return matchesSearch && matchesDifficulty;

    });


    rankingGrid.innerHTML = "";


    if (filteredLevels.length === 0) {

        rankingGrid.innerHTML = `
            <div class="empty-message">
                No levels found.
            </div>
        `;

        return;
    }


    filteredLevels.forEach(level => {

        const card = document.createElement("article");

        card.className = "level-card";

        card.onclick = () => {
            openLevel(level.rank, card);
        };


        card.innerHTML = `

            <div class="level-thumbnail">

                <img
                    src="${level.image}"
                    alt="${level.name}"
                    loading="lazy"
                >

            </div>


            <div class="level-info">

                <div class="level-title-row">
                    <div class="level-rank">
                        #${level.rank}
                    </div>

                    <div class="level-name">
                        ${level.name}
                    </div>
                </div>

                <div class="level-difficulty">
                    ${level.difficulty}
                </div>

            </div>

        `;


        rankingGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN LEVEL
   ========================================================= */

function openLevel(rank, clickedCard) {

    if (isOpeningLevel || isChangingPage) {
        return;
    }

    const level = levels.find(
        item => item.rank === rank
    );

    if (!level) {
        return;
    }

    isOpeningLevel = true;

    if (clickedCard && !prefersReducedMotion) {
        clickedCard.classList.add("is-opening");

        window.setTimeout(() => {
            clickedCard.classList.remove("is-opening");
        }, 460);
    }

    const flashDelay = prefersReducedMotion ? 0 : 180;

    window.setTimeout(() => {
        changePage(detailPage);

        /* Image */

        const detailImage =
            document.getElementById("detail-image");

        detailImage.src = level.image;
        detailImage.alt = level.name;


        /* Title */

        document.getElementById("detail-rank").textContent =
            `#${level.rank}`;

        document.getElementById("detail-name").textContent =
            level.name;

        document.getElementById("detail-difficulty").textContent =
            level.difficulty;


        /* Registration */

        document.getElementById("detail-date").textContent =
            level.registrationDate;

        document.getElementById("detail-number").textContent =
            level.registrationNumber;

        document.getElementById("detail-registration-rank").textContent =
            level.registrationRank;

        document.getElementById("detail-forum-first").textContent =
            level.forumFirst;


        /* Level Information */

        document.getElementById("detail-absolute").textContent =
            level.absoluteDifficulty;

        document.getElementById("detail-length").textContent =
            level.length;

        document.getElementById("detail-objects").textContent =
            level.objects;

        document.getElementById("detail-design").textContent =
            level.designScale;

        document.getElementById("detail-song").textContent =
            level.song;


        /* Rank History */

        const historyContainer =
            document.getElementById("rank-history");

        historyContainer.innerHTML = "";


        level.history.forEach(entry => {

            const row = document.createElement("div");

            row.className = "rank-history-item";


            row.innerHTML = `

                <span>${entry.date}</span>

                <span class="history-change ${entry.type}">
                    ${entry.change}
                </span>

                <span>${entry.rank}</span>

                <span>${entry.reason}</span>

            `;


            historyContainer.appendChild(row);

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        isOpeningLevel = false;

    }, flashDelay);
}


/* =========================================================
   GO HOME
   ========================================================= */

function goHome() {
    changePage(rankingPage);
}


/* =========================================================
   RECORDS
   ========================================================= */

function showRecords() {
    changePage(recordsPage);
}


/* =========================================================
   ABOUT
   ========================================================= */

function showAbout() {
    changePage(aboutPage);
}


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    displayLevels
);


/* =========================================================
   DIFFICULTY FILTER
   ========================================================= */

difficultyFilter.addEventListener(
    "change",
    displayLevels
);


/* =========================================================
   INITIAL LOAD
   ========================================================= */

displayLevels();
animateInitialPage();
