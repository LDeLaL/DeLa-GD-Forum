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


const impossibleLevels = [
    {
        rank: 1,
        name: "Beyond Luck",
        image: "images/file_0000000059c482068cee01a230a4e1ce.png",

        registrationDate: "2026년 10월 4일",
        registrationNumber: "《1》",
        registrationRank: "#1",
        forumFirst: "Beyond Luck",

        length: "∞",
        objects: "744",
        designScale: "3.8",
        song: "Promise (Reprise)",
        songStrikethrough: true,

        history: [
            {
                date: "2026년 10월 4일",
                change: "−",
                rank: "#1",
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
const impossibleRankingPage = document.getElementById("impossible-ranking-page");
const detailPage = document.getElementById("detail-page");
const recordsPage = document.getElementById("records-page");
const aboutPage = document.getElementById("about-page");

const rankingGrid = document.getElementById("ranking-grid");
const impossibleRankingGrid = document.getElementById("impossible-ranking-grid");

const searchInput = document.getElementById("search-input");
const impossibleSearchInput = document.getElementById("impossible-search-input");
const difficultyFilter = document.getElementById("difficulty-filter");
const themeToggle = document.getElementById("theme-toggle");
const cubesToggle = document.getElementById("cubes-toggle");

const appPages = [
    rankingPage,
    impossibleRankingPage,
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
let lastListPage = rankingPage;
let queuedPage = null;
let cardClickAudioContext = null;
let cardClickCompressor = null;
let cardClickMasterGain = null;
let cardClickLimiter = null;
let themeTransitionTimeout = null;
let rankOneTransitionTimeout = null;


/* =========================================================
   DISPLAY PREFERENCES
   ========================================================= */

function readDisplayPreference(key) {
    try {
        return window.localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}


function saveDisplayPreference(key, value) {
    try {
        window.localStorage.setItem(key, value);
    } catch (error) {
        // Keep display controls usable when storage is unavailable.
    }
}


function applyColorTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);

    if (!themeToggle) {
        return;
    }

    const nextModeLabel = isLight ? "다크" : "라이트";
    const accessibleLabel = `${nextModeLabel} 모드로 전환`;

    themeToggle.innerHTML = `
        <span aria-hidden="true">${isLight ? "☾" : "☼"}</span>
        <span class="display-option-label">${nextModeLabel}</span>
    `;
    themeToggle.setAttribute("aria-label", accessibleLabel);
    themeToggle.title = accessibleLabel;
    themeToggle.setAttribute("aria-pressed", String(isLight));
}


function applyMovingCubes(enabled) {
    document.body.classList.toggle("cubes-hidden", !enabled);

    if (!cubesToggle) {
        return;
    }

    const actionLabel = enabled ? "움직이는 큐브 끄기" : "움직이는 큐브 켜기";

    cubesToggle.innerHTML = `
        <span aria-hidden="true">${enabled ? "✦" : "◇"}</span>
        <span class="display-option-label">${enabled ? "큐브 끄기" : "큐브 켜기"}</span>
    `;
    cubesToggle.setAttribute("aria-label", actionLabel);
    cubesToggle.title = actionLabel;
    cubesToggle.setAttribute("aria-pressed", String(enabled));
}


function startThemeTransition() {
    if (themeTransitionTimeout) {
        window.clearTimeout(themeTransitionTimeout);
    }

    document.body.classList.remove("theme-transition");
    void document.body.offsetWidth;
    document.body.classList.add("theme-transition");

    themeTransitionTimeout = window.setTimeout(() => {
        document.body.classList.remove("theme-transition");
        themeTransitionTimeout = null;
    }, 760);
}


function showRankOneTransition(isRankOne) {
    if (rankOneTransitionTimeout) {
        window.clearTimeout(rankOneTransitionTimeout);
        rankOneTransitionTimeout = null;
    }

    document.body.classList.remove("rank-one-transition-active");

    if (!isRankOne) {
        return;
    }

    void document.body.offsetWidth;
    document.body.classList.add("rank-one-transition-active");

    rankOneTransitionTimeout = window.setTimeout(() => {
        document.body.classList.remove("rank-one-transition-active");
        rankOneTransitionTimeout = null;
    }, 900);
}


function initializeDisplayPreferences() {
    const savedTheme = readDisplayPreference("dela-gd-theme");
    const savedCubes = readDisplayPreference("dela-gd-moving-cubes");

    applyColorTheme(savedTheme === "light" ? "light" : "dark");
    // Keep the moving background on by default unless it was explicitly turned off.
    applyMovingCubes(savedCubes !== "off");

    themeToggle?.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("light-theme")
            ? "dark"
            : "light";
        startThemeTransition();
        applyColorTheme(nextTheme);
        saveDisplayPreference("dela-gd-theme", nextTheme);
    });

    cubesToggle?.addEventListener("click", () => {
        const shouldEnable = document.body.classList.contains("cubes-hidden");
        applyMovingCubes(shouldEnable);
        saveDisplayPreference("dela-gd-moving-cubes", shouldEnable ? "on" : "off");
    });
}


function playCardClickSound() {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
        return;
    }

    try {
        if (!cardClickAudioContext) {
            cardClickAudioContext = new AudioContextClass();
        }

        if (cardClickAudioContext.state === "suspended") {
            cardClickAudioContext.resume().catch(() => {});
        }

        const now = cardClickAudioContext.currentTime;
        const sampleRate = cardClickAudioContext.sampleRate;

        if (!cardClickCompressor) {
            cardClickCompressor = cardClickAudioContext.createDynamicsCompressor();
            cardClickCompressor.threshold.setValueAtTime(-14, now);
            cardClickCompressor.knee.setValueAtTime(6, now);
            cardClickCompressor.ratio.setValueAtTime(8, now);
            cardClickCompressor.attack.setValueAtTime(0.001, now);
            cardClickCompressor.release.setValueAtTime(0.045, now);

            cardClickMasterGain = cardClickAudioContext.createGain();
            cardClickMasterGain.gain.setValueAtTime(24, now);

            cardClickLimiter = cardClickAudioContext.createDynamicsCompressor();
            cardClickLimiter.threshold.setValueAtTime(-1, now);
            cardClickLimiter.knee.setValueAtTime(0, now);
            cardClickLimiter.ratio.setValueAtTime(20, now);
            cardClickLimiter.attack.setValueAtTime(0.001, now);
            cardClickLimiter.release.setValueAtTime(0.05, now);

            cardClickCompressor.connect(cardClickMasterGain);
            cardClickMasterGain.connect(cardClickLimiter);
            cardClickLimiter.connect(cardClickAudioContext.destination);
        }

        // A brief, bright transient gives the key switch a crisp keyboard-like attack.
        const clickDuration = 0.028;
        const clickBuffer = cardClickAudioContext.createBuffer(
            1,
            Math.ceil(sampleRate * clickDuration),
            sampleRate
        );
        const clickSamples = clickBuffer.getChannelData(0);

        for (let index = 0; index < clickSamples.length; index++) {
            const fade = Math.pow(1 - index / clickSamples.length, 2.2);
            clickSamples[index] = (Math.random() * 2 - 1) * fade;
        }

        const noise = cardClickAudioContext.createBufferSource();
        noise.buffer = clickBuffer;

        const highPass = cardClickAudioContext.createBiquadFilter();
        highPass.type = "highpass";
        highPass.frequency.setValueAtTime(700, now);

        const lowPass = cardClickAudioContext.createBiquadFilter();
        lowPass.type = "lowpass";
        lowPass.frequency.setValueAtTime(9000, now);

        const noiseVolume = cardClickAudioContext.createGain();
        noiseVolume.gain.setValueAtTime(0.0001, now);
        noiseVolume.gain.exponentialRampToValueAtTime(0.9, now + 0.001);
        noiseVolume.gain.exponentialRampToValueAtTime(0.0001, now + clickDuration);

        noise.connect(highPass);
        highPass.connect(lowPass);
        lowPass.connect(noiseVolume);
        noiseVolume.connect(cardClickCompressor);

        noise.start(now);
        noise.stop(now + clickDuration);

        // The high switch snap makes the sound feel like a keyboard key press.
        const oscillator = cardClickAudioContext.createOscillator();
        const toneVolume = cardClickAudioContext.createGain();

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(2850, now);
        oscillator.frequency.exponentialRampToValueAtTime(1450, now + 0.008);

        toneVolume.gain.setValueAtTime(0.0001, now);
        toneVolume.gain.exponentialRampToValueAtTime(0.2, now + 0.001);
        toneVolume.gain.exponentialRampToValueAtTime(0.0001, now + 0.014);

        oscillator.connect(toneVolume);
        toneVolume.connect(cardClickCompressor);

        oscillator.start(now);
        oscillator.stop(now + 0.016);

        // The short, lower clack adds the keycap's physical bottom-out sound.
        const clackStart = now + 0.008;
        const clackDuration = 0.045;
        const clackBuffer = cardClickAudioContext.createBuffer(
            1,
            Math.ceil(sampleRate * clackDuration),
            sampleRate
        );
        const clackSamples = clackBuffer.getChannelData(0);

        for (let index = 0; index < clackSamples.length; index++) {
            const fade = Math.pow(1 - index / clackSamples.length, 2.1);
            clackSamples[index] = (Math.random() * 2 - 1) * fade;
        }

        const clack = cardClickAudioContext.createBufferSource();
        clack.buffer = clackBuffer;

        const clackFilter = cardClickAudioContext.createBiquadFilter();
        clackFilter.type = "lowpass";
        clackFilter.frequency.setValueAtTime(2800, clackStart);

        const clackVolume = cardClickAudioContext.createGain();
        clackVolume.gain.setValueAtTime(0.0001, clackStart);
        clackVolume.gain.exponentialRampToValueAtTime(0.78, clackStart + 0.001);
        clackVolume.gain.exponentialRampToValueAtTime(
            0.0001,
            clackStart + clackDuration
        );

        clack.connect(clackFilter);
        clackFilter.connect(clackVolume);
        clackVolume.connect(cardClickCompressor);

        clack.start(clackStart);
        clack.stop(clackStart + clackDuration);

        // A restrained low tap rounds out the keyboard clack without a pop.
        const thump = cardClickAudioContext.createOscillator();
        const thumpVolume = cardClickAudioContext.createGain();

        thump.type = "sine";
        thump.frequency.setValueAtTime(620, now);
        thump.frequency.exponentialRampToValueAtTime(360, now + 0.045);

        thumpVolume.gain.setValueAtTime(0.0001, now);
        thumpVolume.gain.exponentialRampToValueAtTime(0.2, now + 0.001);
        thumpVolume.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

        thump.connect(thumpVolume);
        thumpVolume.connect(cardClickCompressor);

        thump.start(now);
        thump.stop(now + 0.058);
    } catch (error) {
        // Keep the card interaction working if audio is unavailable.
    }
}


function playPageTurnSound() {

    // The level click already creates and unlocks this shared audio chain.
    if (!cardClickAudioContext || !cardClickCompressor) {
        return;
    }

    try {
        if (cardClickAudioContext.state === "suspended") {
            cardClickAudioContext.resume().catch(() => {});
        }

        const now = cardClickAudioContext.currentTime;
        const sampleRate = cardClickAudioContext.sampleRate;
        const turnDuration = 0.62;
        const turnBuffer = cardClickAudioContext.createBuffer(
            1,
            Math.ceil(sampleRate * turnDuration),
            sampleRate
        );
        const turnSamples = turnBuffer.getChannelData(0);
        let softenedNoise = 0;

        for (let index = 0; index < turnSamples.length; index++) {
            const whiteNoise = Math.random() * 2 - 1;
            softenedNoise = softenedNoise * 0.88 + whiteNoise * 0.12;
            turnSamples[index] = softenedNoise * 3;
        }

        const turnNoise = cardClickAudioContext.createBufferSource();
        turnNoise.buffer = turnBuffer;

        const turnHighPass = cardClickAudioContext.createBiquadFilter();
        turnHighPass.type = "highpass";
        turnHighPass.frequency.setValueAtTime(180, now);

        const turnLowPass = cardClickAudioContext.createBiquadFilter();
        turnLowPass.type = "lowpass";
        turnLowPass.frequency.setValueAtTime(1500, now);
        turnLowPass.frequency.exponentialRampToValueAtTime(4200, now + 0.22);
        turnLowPass.frequency.exponentialRampToValueAtTime(
            1700,
            now + turnDuration
        );

        const turnVolume = cardClickAudioContext.createGain();
        turnVolume.gain.setValueAtTime(0.0001, now);
        turnVolume.gain.exponentialRampToValueAtTime(0.32, now + 0.08);
        turnVolume.gain.exponentialRampToValueAtTime(0.58, now + 0.22);
        turnVolume.gain.exponentialRampToValueAtTime(0.0001, now + turnDuration);

        turnNoise.connect(turnHighPass);
        turnHighPass.connect(turnLowPass);
        turnLowPass.connect(turnVolume);
        turnVolume.connect(cardClickCompressor);

        // A lower, airy layer adds the soft "whoosh" under the paper swish.
        const whooshLowPass = cardClickAudioContext.createBiquadFilter();
        whooshLowPass.type = "lowpass";
        whooshLowPass.frequency.setValueAtTime(700, now);
        whooshLowPass.frequency.exponentialRampToValueAtTime(1150, now + 0.2);
        whooshLowPass.frequency.exponentialRampToValueAtTime(
            420,
            now + turnDuration
        );

        const whooshVolume = cardClickAudioContext.createGain();
        whooshVolume.gain.setValueAtTime(0.0001, now);
        whooshVolume.gain.exponentialRampToValueAtTime(0.2, now + 0.12);
        whooshVolume.gain.exponentialRampToValueAtTime(0.34, now + 0.25);
        whooshVolume.gain.exponentialRampToValueAtTime(
            0.0001,
            now + turnDuration
        );

        turnNoise.connect(whooshLowPass);
        whooshLowPass.connect(whooshVolume);
        whooshVolume.connect(cardClickCompressor);

        turnNoise.start(now);
        turnNoise.stop(now + turnDuration);
    } catch (error) {
        // Keep list navigation working if audio is unavailable.
    }
}


/* =========================================================
   PAGE TRANSITIONS
   ========================================================= */

function syncPageTheme(targetPage) {

    const isImpossibleTheme =
        targetPage === impossibleRankingPage ||
        (targetPage === detailPage && lastListPage === impossibleRankingPage);

    const isListTheme =
        targetPage === rankingPage ||
        (targetPage === detailPage && lastListPage === rankingPage);

    document.body.classList.toggle("impossible-theme", isImpossibleTheme);
    document.body.classList.toggle("list-theme", isListTheme);
}


function changePage(targetPage) {

    if (!targetPage) {
        return;
    }

    if (isChangingPage) {
        queuedPage = targetPage;
        return;
    }

    const currentPage = appPages.find(
        page => !page.classList.contains("hidden")
    );

    if (currentPage === targetPage) {
        syncPageTheme(targetPage);
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

        syncPageTheme(targetPage);
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

            const nextPage = queuedPage;
            queuedPage = null;

            if (nextPage && nextPage !== targetPage) {
                changePage(nextPage);
            }
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


function displayImpossibleLevels() {

    const searchText = impossibleSearchInput.value
        .trim()
        .toLowerCase();

    const filteredLevels = impossibleLevels.filter(level =>
        level.name.toLowerCase().includes(searchText)
    );

    impossibleRankingGrid.innerHTML = "";

    if (filteredLevels.length === 0) {
        impossibleRankingGrid.innerHTML = `
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
            openLevel(level.rank, card, impossibleLevels);
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
                    <div class="level-rank">#${level.rank}</div>
                    <div class="level-name">${level.name}</div>
                </div>
            </div>
        `;

        impossibleRankingGrid.appendChild(card);
    });
}


/* =========================================================
   OPEN LEVEL
   ========================================================= */

function openLevel(rank, clickedCard, sourceLevels = levels) {

    if (isOpeningLevel || isChangingPage) {
        return;
    }

    const level = sourceLevels.find(
        item => item.rank === rank
    );

    if (!level) {
        return;
    }

    lastListPage = sourceLevels === impossibleLevels
        ? impossibleRankingPage
        : rankingPage;
    detailPage.classList.toggle("rank-one-entry", level.rank === 1);
    document.body.classList.toggle(
        "impossible-theme",
        lastListPage === impossibleRankingPage
    );
    showRankOneTransition(level.rank === 1);

    playCardClickSound();
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

        const detailDifficulty = document.getElementById("detail-difficulty");
        detailDifficulty.textContent = level.difficulty || "";
        detailDifficulty.classList.toggle("hidden", !level.difficulty);


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
            level.absoluteDifficulty || "";
        document.getElementById("detail-absolute-card").classList.toggle(
            "hidden",
            !level.absoluteDifficulty
        );

        document.getElementById("detail-length").textContent =
            level.length;

        document.getElementById("detail-objects").textContent =
            level.objects;

        document.getElementById("detail-design").textContent =
            level.designScale;

        const detailSong = document.getElementById("detail-song");
        detailSong.textContent = level.song;
        detailSong.style.textDecoration = level.songStrikethrough
            ? "line-through"
            : "";


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


function showImpossibleList() {
    changePage(impossibleRankingPage);
}


function goBackToList() {
    changePage(lastListPage);
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

impossibleSearchInput.addEventListener(
    "input",
    displayImpossibleLevels
);


/* =========================================================
   DIFFICULTY FILTER
   ========================================================= */

difficultyFilter.addEventListener(
    "change",
    displayLevels
);


/* =========================================================
   DETAIL BACK BUTTON SOUND
   ========================================================= */

const detailBackButton = detailPage.querySelector(".back-button");

if (detailBackButton) {
    detailBackButton.addEventListener("click", playCardClickSound);
}

document.querySelectorAll(".nav button").forEach(button => {
    button.addEventListener("click", playCardClickSound);
});


/* =========================================================
   INITIAL LOAD
   ========================================================= */

initializeDisplayPreferences();
displayLevels();
displayImpossibleLevels();
animateInitialPage();
