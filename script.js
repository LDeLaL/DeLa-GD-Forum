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
const timeMachinePage = document.getElementById("time-machine-page");
const detailPage = document.getElementById("detail-page");
const aboutPage = document.getElementById("about-page");

const rankingGrid = document.getElementById("ranking-grid");
const impossibleRankingGrid = document.getElementById("impossible-ranking-grid");
const timeMachineGrid = document.getElementById("time-machine-grid");

const searchInput = document.getElementById("search-input");
const impossibleSearchInput = document.getElementById("impossible-search-input");
const difficultyFilter = document.getElementById("difficulty-filter");
const sortSelect = document.getElementById("sort-select");
const impossibleSortSelect = document.getElementById("impossible-sort-select");
const timeMachineYearSelect = document.getElementById("time-machine-year");
const timeMachineMonthSelect = document.getElementById("time-machine-month");
const timeMachineDaySelect = document.getElementById("time-machine-day");
const timeMachineListSelect = document.getElementById("time-machine-list");
const timeMachineSortSelect = document.getElementById("time-machine-sort");
const timeMachineSummary = document.getElementById("time-machine-summary");
const themeToggle = document.getElementById("theme-toggle");
const cubesToggle = document.getElementById("cubes-toggle");
const viewModeToggle = document.getElementById("view-mode-toggle");
const transitionSelect = document.getElementById("transition-select");
const thumbnailLightbox = document.getElementById("thumbnail-lightbox");
const thumbnailLightboxImage = document.getElementById("thumbnail-lightbox-image");
const thumbnailLightboxClose = document.getElementById("thumbnail-lightbox-close");

const appPages = [
    rankingPage,
    impossibleRankingPage,
    timeMachinePage,
    detailPage,
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
let timeMachineLevels = [];
let thumbnailLightboxTrigger = null;
let thumbnailLightboxCloseTimeout = null;
const gridRenderAnimations = new WeakMap();
const listModeAnimations = new WeakMap();
const listModeContentAnimations = new WeakMap();
let listModeTransitionId = 0;


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


function cancelListModeAnimation(element, animationRegistry) {
    const activeAnimation = animationRegistry.get(element);

    if (activeAnimation) {
        activeAnimation.cancel();
        animationRegistry.delete(element);
    }
}


function playListModeAnimation(element, keyframes, options, animationRegistry) {
    if (!element || typeof element.animate !== "function") {
        return null;
    }

    cancelListModeAnimation(element, animationRegistry);

    const animation = element.animate(keyframes, options);
    animationRegistry.set(element, animation);
    animation.onfinish = () => {
        if (animationRegistry.get(element) === animation) {
            animationRegistry.delete(element);
        }
    };

    return animation;
}


async function applySimpleListView(enabled, animate = false) {
    const transitionId = ++listModeTransitionId;
    const shouldAnimate = animate && !prefersReducedMotion;
    const visibleCards = shouldAnimate
        ? [...document.querySelectorAll(".ranking-grid .level-card")]
            .filter(card => card.getClientRects().length > 0)
        : [];

    visibleCards.forEach(card => {
        cancelListModeAnimation(card, listModeAnimations);
        card.querySelectorAll(".level-thumbnail, .level-preview-row").forEach(element => {
            cancelListModeAnimation(element, listModeContentAnimations);
        });
    });

    const previousRects = new Map(
        visibleCards.map(card => [card, card.getBoundingClientRect()])
    );

    if (viewModeToggle) {
        const label = enabled ? "썸네일 보기" : "간단 보기";
        const accessibleLabel = enabled
            ? "썸네일이 있는 목록으로 전환"
            : "순위와 이름만 간단히 보기";

        viewModeToggle.innerHTML = `
            <span aria-hidden="true">${enabled ? "▣" : "☷"}</span>
            <span class="display-option-label">${label}</span>
        `;
        viewModeToggle.setAttribute("aria-label", accessibleLabel);
        viewModeToggle.title = accessibleLabel;
        viewModeToggle.setAttribute("aria-pressed", String(enabled));
    }

    let fadeOutAnimations = [];
    if (shouldAnimate && enabled && visibleCards.length > 0) {

        visibleCards.forEach(card => {
            card.querySelectorAll(".level-thumbnail, .level-preview-row").forEach(element => {
                if (!element.getClientRects().length) {
                    return;
                }

                const currentOpacity = Number.parseFloat(
                    window.getComputedStyle(element).opacity
                );
                const animation = playListModeAnimation(element, [
                    { opacity: Number.isFinite(currentOpacity) ? currentOpacity : 1 },
                    { opacity: 0 }
                ], {
                    duration: 190,
                    easing: "ease-out",
                    fill: "forwards"
                }, listModeContentAnimations);

                if (animation) {
                    fadeOutAnimations.push(animation);
                }
            });
        });

        await Promise.all(fadeOutAnimations.map(animation =>
            animation.finished.catch(() => null)
        ));

        if (transitionId !== listModeTransitionId) {
            return;
        }
    }

    document.body.classList.toggle("simple-list-view", enabled);

    if (enabled) {
        fadeOutAnimations.forEach(animation => animation.cancel());
        visibleCards.forEach(card => {
            card.querySelectorAll(".level-thumbnail, .level-preview-row").forEach(element => {
                cancelListModeAnimation(element, listModeContentAnimations);
            });
        });
    }

    let animationIndex = 0;
    previousRects.forEach((previousRect, card) => {
        const index = animationIndex++;
        const nextRect = card.getBoundingClientRect();

        if (!nextRect.width || !nextRect.height) {
            return;
        }

        const translateX = previousRect.left - nextRect.left;
        const translateY = previousRect.top - nextRect.top;
        const scaleX = previousRect.width / nextRect.width;
        const scaleY = previousRect.height / nextRect.height;

        if (
            Math.abs(translateX) < 0.5 &&
            Math.abs(translateY) < 0.5 &&
            Math.abs(scaleX - 1) < 0.01 &&
            Math.abs(scaleY - 1) < 0.01
        ) {
            return;
        }

        playListModeAnimation(card, [
            {
                transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
                transformOrigin: "top left"
            },
            {
                transform: "translate(0, 0) scale(1, 1)",
                transformOrigin: "top left"
            }
        ], {
            duration: 520,
            delay: Math.min(index, 8) * 24,
            easing: "cubic-bezier(0.2, 0.75, 0.25, 1)"
        }, listModeAnimations);
    });

    if (shouldAnimate && !enabled) {
        visibleCards.forEach((card, index) => {
            card.querySelectorAll(".level-thumbnail, .level-preview-row").forEach(element => {
                if (!element.getClientRects().length) {
                    return;
                }

                playListModeAnimation(element, [
                    { opacity: 0, transform: "translateY(7px) scale(0.985)" },
                    { opacity: 1, transform: "translateY(0) scale(1)" }
                ], {
                    duration: 360,
                    delay: Math.min(index, 8) * 24,
                    easing: "cubic-bezier(0.2, 0.75, 0.25, 1)"
                }, listModeContentAnimations);
            });
        });
    }
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


function applyPageTransition(style) {
    const allowedStyles = ["default", "fade", "slide", "zoom"];
    const selectedStyle = allowedStyles.includes(style) ? style : "default";

    document.body.classList.remove(
        "page-transition-fade",
        "page-transition-slide",
        "page-transition-zoom"
    );
    if (selectedStyle !== "default") {
        document.body.classList.add(`page-transition-${selectedStyle}`);
    }

    if (transitionSelect) {
        transitionSelect.value = selectedStyle;
    }
}


function initializeDetailParticles() {
    const particleField = document.querySelector(".detail-particles");

    if (!particleField || particleField.childElementCount > 0) {
        return;
    }

    for (let index = 0; index < 18; index++) {
        const particle = document.createElement("span");
        const x = (index * 47 + 13) % 100;
        const y = (index * 67 + 19) % 100;
        const size = 3 + (index % 4) * 2;
        const duration = 6 + (index % 6) * 1.3;
        const delay = -((index * 1.7) % duration);
        const driftX = ((index % 5) - 2) * 22;
        const driftY = -34 - (index % 4) * 16;

        particle.className = "detail-particle";
        particle.style.setProperty("--particle-x", `${x}%`);
        particle.style.setProperty("--particle-y", `${y}%`);
        particle.style.setProperty("--particle-size", `${size}px`);
        particle.style.setProperty("--particle-duration", `${duration}s`);
        particle.style.setProperty("--particle-delay", `${delay}s`);
        particle.style.setProperty("--particle-drift-x", `${driftX}px`);
        particle.style.setProperty("--particle-drift-y", `${driftY}px`);
        particleField.appendChild(particle);
    }
}


function applyThumbnailPalette(image) {
    const particleField = document.querySelector(".detail-particles");

    if (!particleField || !image) {
        return;
    }

    const useFallbackColor = () => {
        particleField.style.setProperty("--detail-accent-rgb", "168, 85, 247");
    };

    const sampleImageColor = () => {
        if (!image.complete || !image.naturalWidth || !image.naturalHeight) {
            useFallbackColor();
            return;
        }

        try {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d", { willReadFrequently: true });

            if (!context) {
                useFallbackColor();
                return;
            }

            canvas.width = 12;
            canvas.height = 12;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
            const colorTotal = [0, 0, 0];
            let samples = 0;

            for (let y = 3; y < 9; y++) {
                for (let x = 3; x < 9; x++) {
                    const pixelIndex = (y * canvas.width + x) * 4;

                    if (pixels[pixelIndex + 3] < 100) {
                        continue;
                    }

                    colorTotal[0] += pixels[pixelIndex];
                    colorTotal[1] += pixels[pixelIndex + 1];
                    colorTotal[2] += pixels[pixelIndex + 2];
                    samples++;
                }
            }

            if (!samples) {
                useFallbackColor();
                return;
            }

            const accent = colorTotal.map(channel =>
                Math.max(70, Math.min(245, Math.round((channel / samples) * 1.28)))
            );

            particleField.style.setProperty(
                "--detail-accent-rgb",
                accent.join(", ")
            );
        } catch (error) {
            // Keep the ambient particles working if canvas sampling is unavailable.
            useFallbackColor();
        }
    };

    useFallbackColor();

    if (image.complete) {
        sampleImageColor();
    } else {
        image.addEventListener("load", sampleImageColor, { once: true });
    }
}


function initializeDisplayPreferences() {
    const savedTheme = readDisplayPreference("dela-gd-theme");
    const savedCubes = readDisplayPreference("dela-gd-moving-cubes");
    const savedTransition = readDisplayPreference("dela-gd-page-transition");

    applyColorTheme(savedTheme === "light" ? "light" : "dark");
    applyPageTransition(savedTransition || "default");
    // Keep the moving background on by default unless it was explicitly turned off.
    applyMovingCubes(savedCubes !== "off");
    applySimpleListView(false);

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

    viewModeToggle?.addEventListener("click", () => {
        const shouldEnable = viewModeToggle.getAttribute("aria-pressed") !== "true";
        applySimpleListView(shouldEnable, true);
    });

    transitionSelect?.addEventListener("change", () => {
        applyPageTransition(transitionSelect.value);
        saveDisplayPreference("dela-gd-page-transition", transitionSelect.value);
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

    const isTimeMachineTheme =
        targetPage === timeMachinePage ||
        (targetPage === detailPage && lastListPage === timeMachinePage);

    document.body.classList.toggle("impossible-theme", isImpossibleTheme);
    document.body.classList.toggle("list-theme", isListTheme);
    document.body.classList.toggle("time-machine-theme", isTimeMachineTheme);
    document.body.classList.toggle("map-particles-active", targetPage === detailPage);
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

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}


function highlightedLevelName(name, searchText = "") {
    const safeName = String(name);
    const query = searchText.trim();

    if (!query) {
        return escapeHTML(safeName);
    }

    const matchStart = safeName.toLowerCase().indexOf(query.toLowerCase());

    if (matchStart < 0) {
        return escapeHTML(safeName);
    }

    const matchEnd = matchStart + query.length;
    return `${escapeHTML(safeName.slice(0, matchStart))}` +
        `<mark class="search-highlight">${escapeHTML(safeName.slice(matchStart, matchEnd))}</mark>` +
        `${escapeHTML(safeName.slice(matchEnd))}`;
}


function numericValue(value) {
    const parsed = Number.parseFloat(String(value ?? "").replace(/[^0-9.-]/g, ""));
    return Number.isFinite(parsed) ? parsed : 0;
}


function sortLevels(levelItems, sortMode = "rank") {
    const sorted = [...levelItems];

    if (sortMode === "objects") {
        sorted.sort((left, right) =>
            numericValue(right.objects) - numericValue(left.objects) || left.rank - right.rank
        );
    } else if (sortMode === "designScale") {
        sorted.sort((left, right) =>
            numericValue(right.designScale) - numericValue(left.designScale) || left.rank - right.rank
        );
    } else {
        sorted.sort((left, right) => left.rank - right.rank);
    }

    return sorted;
}


function createLevelCard(level, sourceLevels, searchText = "") {
    const card = document.createElement("article");
    const safeImage = escapeHTML(level.image);
    const safeName = escapeHTML(level.name);
    const safeRegistrationNumber = escapeHTML(level.registrationNumber || "—");
    const safeDifficulty = escapeHTML(level.difficulty || "");

    card.className = "level-card";
    card.onclick = () => openLevel(level.rank, card, sourceLevels);
    card.innerHTML = `
        <div class="level-thumbnail">
            <button class="thumbnail-zoom-button" type="button" aria-label="${safeName} 썸네일 크게 보기">
                <img src="${safeImage}" alt="" loading="lazy">
            </button>
        </div>
        <div class="level-info">
            <div class="level-title-row">
                <div class="level-rank">#${level.rank}</div>
                <div class="level-name">${highlightedLevelName(level.name, searchText)}</div>
            </div>
            <div class="level-preview-row">
                <div class="level-registration-number" title="등재 번호">등재 ${safeRegistrationNumber}</div>
                ${safeDifficulty ? `<div class="level-difficulty-preview">${safeDifficulty}</div>` : ""}
            </div>
        </div>
    `;

    const thumbnailButton = card.querySelector(".thumbnail-zoom-button");
    thumbnailButton?.addEventListener("click", event => {
        event.stopPropagation();
        openThumbnailLightbox(level, thumbnailButton);
    });

    return card;
}


function renderLevelCards(grid, levelItems, sourceLevels, searchText = "", animateTransition = false) {
    const renderImmediately = () => {
        grid.innerHTML = "";

        if (levelItems.length === 0) {
            grid.innerHTML = `
                <div class="empty-message">
                    No levels found.
                </div>
            `;
            return;
        }

        levelItems.forEach((level, index) => {
            const card = createLevelCard(level, sourceLevels, searchText);

            if (animateTransition) {
                card.classList.add("list-card-entering");
                card.style.setProperty("--card-order", String(Math.min(index, 8)));
                card.addEventListener("animationend", event => {
                    if (event.target === card && event.animationName === "level-card-list-enter") {
                        card.classList.remove("list-card-entering");
                        card.style.removeProperty("--card-order");
                    }
                }, { once: true });
            }

            grid.appendChild(card);
        });
    };

    if (
        !animateTransition ||
        prefersReducedMotion ||
        grid.dataset.cardTransition !== "true" ||
        typeof grid.animate !== "function"
    ) {
        const activeAnimation = gridRenderAnimations.get(grid);
        if (activeAnimation) {
            activeAnimation.cancel();
            gridRenderAnimations.delete(grid);
        }
        renderImmediately();
        return;
    }

    const previousAnimation = gridRenderAnimations.get(grid);
    if (previousAnimation) {
        previousAnimation.cancel();
    }

    const currentStyle = window.getComputedStyle(grid);
    const fadeOut = grid.animate([
        {
            opacity: currentStyle.opacity,
            transform: currentStyle.transform === "none" ? "translateY(0)" : currentStyle.transform,
            filter: currentStyle.filter === "none" ? "blur(0px)" : currentStyle.filter
        },
        { opacity: 0.28, transform: "translateY(9px)", filter: "blur(2px)" }
    ], {
        duration: 135,
        easing: "cubic-bezier(0.4, 0, 1, 1)"
    });

    gridRenderAnimations.set(grid, fadeOut);
    fadeOut.onfinish = () => {
        if (gridRenderAnimations.get(grid) !== fadeOut) {
            return;
        }

        renderImmediately();

        const fadeIn = grid.animate([
            { opacity: 0.28, transform: "translateY(-8px)", filter: "blur(2px)" },
            { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }
        ], {
            duration: 300,
            easing: "cubic-bezier(0.18, 0.7, 0.24, 1)"
        });

        gridRenderAnimations.set(grid, fadeIn);
        fadeIn.onfinish = () => {
            if (gridRenderAnimations.get(grid) === fadeIn) {
                gridRenderAnimations.delete(grid);
            }
        };
    };
}


function displayLevels(animateTransition = false) {
    const searchText = searchInput.value.trim();
    const selectedDifficulty = difficultyFilter.value;
    const filteredLevels = levels.filter(level => {
        const matchesSearch = level.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesDifficulty =
            selectedDifficulty === "all" || level.difficulty === selectedDifficulty;
        return matchesSearch && matchesDifficulty;
    });

    renderLevelCards(
        rankingGrid,
        sortLevels(filteredLevels, sortSelect.value),
        levels,
        searchText,
        animateTransition
    );
}


function displayImpossibleLevels(animateTransition = false) {
    const searchText = impossibleSearchInput.value.trim();
    const filteredLevels = impossibleLevels.filter(level =>
        level.name.toLowerCase().includes(searchText.toLowerCase())
    );

    renderLevelCards(
        impossibleRankingGrid,
        sortLevels(filteredLevels, impossibleSortSelect.value),
        impossibleLevels,
        searchText,
        animateTransition
    );
}


function koreanDateToISO(dateText) {
    const parts = String(dateText || "").match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);

    if (!parts) {
        return "";
    }

    return `${parts[1]}-${parts[2].padStart(2, "0")}-${parts[3].padStart(2, "0")}`;
}


function isoDateToKorean(dateISO) {
    const parts = String(dateISO || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return parts ? `${parts[1]}년 ${Number(parts[2])}월 ${Number(parts[3])}일` : dateISO;
}


function allRankingLists() {
    return [levels, impossibleLevels];
}


function initializeTimeMachineDates() {
    if (!timeMachineYearSelect || !timeMachineMonthSelect || !timeMachineDaySelect) {
        return;
    }

    const eventDates = allRankingLists()
        .flatMap(list => list.flatMap(level => [
            koreanDateToISO(level.registrationDate),
            ...level.history.map(entry => koreanDateToISO(entry.date))
        ]))
        .filter(Boolean);
    const uniqueDates = [...new Set(eventDates)].sort();
    const years = [...new Set(uniqueDates.map(dateISO => dateISO.slice(0, 4)))];

    timeMachineYearSelect.innerHTML = years.map(year =>
        `<option value="${year}">${year}년</option>`
    ).join("");

    timeMachineMonthSelect.innerHTML = Array.from({ length: 12 }, (_, index) => {
        const month = String(index + 1).padStart(2, "0");
        return `<option value="${month}">${index + 1}월</option>`;
    }).join("");

    if (uniqueDates.length > 0) {
        const [year, month, day] = uniqueDates[uniqueDates.length - 1].split("-");
        timeMachineYearSelect.value = year;
        timeMachineMonthSelect.value = month;
        updateTimeMachineDayOptions(Number(day));
    }
}


function updateTimeMachineDayOptions(preferredDay) {
    if (!timeMachineYearSelect || !timeMachineMonthSelect || !timeMachineDaySelect) {
        return;
    }

    const year = Number(timeMachineYearSelect.value);
    const month = Number(timeMachineMonthSelect.value);

    if (!year || !month) {
        timeMachineDaySelect.innerHTML = "";
        return;
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = Number(timeMachineDaySelect.value);
    const dayToSelect = Math.min(
        Math.max(Number(preferredDay) || currentDay || 1, 1),
        daysInMonth
    );

    timeMachineDaySelect.innerHTML = Array.from({ length: daysInMonth }, (_, index) => {
        const day = String(index + 1).padStart(2, "0");
        return `<option value="${day}">${index + 1}일</option>`;
    }).join("");
    timeMachineDaySelect.value = String(dayToSelect).padStart(2, "0");
}


function getSelectedTimeMachineDate() {
    const year = timeMachineYearSelect?.value;
    const month = timeMachineMonthSelect?.value;
    const day = timeMachineDaySelect?.value;

    return year && month && day ? `${year}-${month}-${day}` : "";
}


function handleTimeMachineCalendarChange() {
    updateTimeMachineDayOptions();
    displayTimeMachine(true);
}


function levelRankAsOfDate(level, dateISO) {
    if (!dateISO || koreanDateToISO(level.registrationDate) > dateISO) {
        return null;
    }

    const datedHistory = level.history
        .map(entry => ({
            ...entry,
            isoDate: koreanDateToISO(entry.date)
        }))
        .filter(entry => entry.isoDate && entry.isoDate <= dateISO)
        .sort((left, right) => left.isoDate.localeCompare(right.isoDate));

    if (datedHistory.length === 0) {
        return null;
    }

    const rankMatch = String(datedHistory[datedHistory.length - 1].rank).match(/\d+/);
    return rankMatch ? Number(rankMatch[0]) : null;
}


function buildTimeMachineSnapshot(sourceList, dateISO) {
    return sourceList
        .map(level => {
            const historicalRank = levelRankAsOfDate(level, dateISO);
            return historicalRank === null ? null : { ...level, rank: historicalRank };
        })
        .filter(Boolean)
        .sort((left, right) => left.rank - right.rank);
}


function displayTimeMachine(animateTransition = false) {
    const dateISO = getSelectedTimeMachineDate();
    const isImpossibleList = timeMachineListSelect.value === "impossible";
    const sourceList = isImpossibleList ? impossibleLevels : levels;
    const selectedDateLevels = buildTimeMachineSnapshot(sourceList, dateISO);
    const sortMode = timeMachineSortSelect.value;

    timeMachineLevels = sortLevels(selectedDateLevels, sortMode);
    timeMachineSummary.textContent = dateISO
        ? `${isoDateToKorean(dateISO)} 기준 · ${isImpossibleList ? "IMPOSSIBLE LIST" : "LIST"} · ${timeMachineLevels.length}개 맵`
        : `날짜를 선택해 주세요 · ${isImpossibleList ? "IMPOSSIBLE LIST" : "LIST"}`;

    renderLevelCards(timeMachineGrid, timeMachineLevels, timeMachineLevels, "", animateTransition);
}


function showTimeMachine() {
    displayTimeMachine();
    changePage(timeMachinePage);
}


function openThumbnailLightbox(level, trigger) {
    if (!thumbnailLightbox || !thumbnailLightboxImage) {
        return;
    }

    if (thumbnailLightboxCloseTimeout) {
        window.clearTimeout(thumbnailLightboxCloseTimeout);
        thumbnailLightboxCloseTimeout = null;
    }

    thumbnailLightboxTrigger = trigger || null;
    thumbnailLightboxImage.src = level.image;
    thumbnailLightboxImage.alt = level.name;
    thumbnailLightbox.classList.remove("hidden");
    document.body.classList.add("thumbnail-lightbox-open");

    window.requestAnimationFrame(() => {
        thumbnailLightbox.classList.add("is-open");
    });

    thumbnailLightboxClose?.focus({ preventScroll: true });
}


function closeThumbnailLightbox() {
    if (!thumbnailLightbox || thumbnailLightbox.classList.contains("hidden")) {
        return;
    }

    thumbnailLightbox.classList.remove("is-open");
    document.body.classList.remove("thumbnail-lightbox-open");

    if (thumbnailLightboxCloseTimeout) {
        window.clearTimeout(thumbnailLightboxCloseTimeout);
    }

    thumbnailLightboxCloseTimeout = window.setTimeout(() => {
        thumbnailLightbox.classList.add("hidden");
        thumbnailLightboxImage.removeAttribute("src");

        if (thumbnailLightboxTrigger?.isConnected) {
            thumbnailLightboxTrigger.focus({ preventScroll: true });
        }

        thumbnailLightboxTrigger = null;
        thumbnailLightboxCloseTimeout = null;
    }, 360);
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

    if (sourceLevels === impossibleLevels) {
        lastListPage = impossibleRankingPage;
    } else if (sourceLevels === timeMachineLevels) {
        lastListPage = timeMachinePage;
    } else {
        lastListPage = rankingPage;
    }
    detailPage.classList.toggle("rank-one-entry", level.rank === 1);
    document.body.classList.toggle(
        "impossible-theme",
        lastListPage === impossibleRankingPage
    );
    document.body.classList.toggle("list-theme", lastListPage === rankingPage);
    document.body.classList.toggle("time-machine-theme", lastListPage === timeMachinePage);
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
        applyThumbnailPalette(detailImage);


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

sortSelect.addEventListener("change", () => displayLevels(true));
impossibleSortSelect.addEventListener("change", () => displayImpossibleLevels(true));
timeMachineYearSelect.addEventListener("change", handleTimeMachineCalendarChange);
timeMachineMonthSelect.addEventListener("change", handleTimeMachineCalendarChange);
timeMachineDaySelect.addEventListener("change", () => displayTimeMachine(true));
timeMachineListSelect.addEventListener("change", () => displayTimeMachine(true));
timeMachineSortSelect.addEventListener("change", () => displayTimeMachine(true));


/* =========================================================
   DIFFICULTY FILTER
   ========================================================= */

difficultyFilter.addEventListener(
    "change",
    () => displayLevels(true)
);


/* =========================================================
   DETAIL BACK BUTTON SOUND
   ========================================================= */

const detailBackButton = detailPage.querySelector(".back-button");

if (detailBackButton) {
    detailBackButton.addEventListener("click", playCardClickSound);
}

thumbnailLightboxClose?.addEventListener("click", closeThumbnailLightbox);
thumbnailLightbox?.addEventListener("click", event => {
    if (event.target === thumbnailLightbox) {
        closeThumbnailLightbox();
    }
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && thumbnailLightbox && !thumbnailLightbox.classList.contains("hidden")) {
        closeThumbnailLightbox();
    }
});
document.querySelectorAll(".nav button").forEach(button => {
    button.addEventListener("click", playCardClickSound);
});


/* =========================================================
   INITIAL LOAD
   ========================================================= */

initializeDisplayPreferences();
initializeTimeMachineDates();
initializeDetailParticles();
displayLevels();
displayImpossibleLevels();
displayTimeMachine();
animateInitialPage();
