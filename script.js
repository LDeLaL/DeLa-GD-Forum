const levels = [

    {
        name: "Qlixsyn",
        difficulty: "Extreme Demon",

        date: "2026.10.03",
        number: "#001",
        first: "Qlixsyn",

        absolute: "Extreme Demon",
        length: "미정",
        objects: "미정",
        framePerfects: "미정",
        design: "미정",
        song: "미정",

        history: [
            {
                date: "2026.10.03",
                rank: "#1"
            }
        ]
    },


    {
        name: "EYESwork",
        difficulty: "Extreme Demon",

        date: "미정",
        number: "#002",
        first: "미정",

        absolute: "Extreme Demon",
        length: "미정",
        objects: "미정",
        framePerfects: "미정",
        design: "미정",
        song: "미정",

        history: [
            {
                date: "등재",
                rank: "#2"
            }
        ]
    },


    {
        name: "Unnerfed Glamorous",
        difficulty: "Extreme Demon",

        date: "미정",
        number: "#003",
        first: "미정",

        absolute: "Extreme Demon",
        length: "미정",
        objects: "미정",
        framePerfects: "미정",
        design: "미정",
        song: "미정",

        history: [
            {
                date: "등재",
                rank: "#3"
            }
        ]
    },


    {
        name: "DELUSION",
        difficulty: "Extreme Demon",

        date: "미정",
        number: "#004",
        first: "미정",

        absolute: "Extreme Demon",
        length: "미정",
        objects: "미정",
        framePerfects: "미정",
        design: "미정",
        song: "미정",

        history: [
            {
                date: "등재",
                rank: "#4"
            }
        ]
    },


    {
        name: "D",
        difficulty: "Extreme Demon",

        date: "미정",
        number: "#005",
        first: "미정",

        absolute: "Extreme Demon",
        length: "미정",
        objects: "미정",
        framePerfects: "미정",
        design: "미정",
        song: "미정",

        history: [
            {
                date: "등재",
                rank: "#5"
            }
        ]
    },


    {
        name: "5",
        difficulty: "Extreme Demon",

        date: "미정",
        number: "#006",
        first: "미정",

        absolute: "Extreme Demon",
        length: "미정",
        objects: "미정",
        framePerfects: "미정",
        design: "미정",
        song: "미정",

        history: [
            {
                date: "등재",
                rank: "#6"
            }
        ]
    }

];


const list = document.getElementById("level-list");

const search = document.getElementById("search");

const difficulty =
    document.getElementById("difficulty");

const rankingPage =
    document.getElementById("ranking-page");

const detailPage =
    document.getElementById("detail-page");

const backButton =
    document.getElementById("back-button");


/* DISPLAY LEVELS */

function displayLevels() {

    const searchText =
        search.value.toLowerCase();

    const selectedDifficulty =
        difficulty.value;


    const filtered =
        levels.filter(level => {

            const matchesSearch =
                level.name
                    .toLowerCase()
                    .includes(searchText);

            const matchesDifficulty =
                selectedDifficulty === "all" ||
                level.difficulty === selectedDifficulty;

            return matchesSearch &&
                   matchesDifficulty;

        });


    list.innerHTML = "";


    filtered.forEach((level) => {

        const originalRank =
            levels.indexOf(level) + 1;


        const element =
            document.createElement("div");


        element.className = "level";


        element.innerHTML = `

            <div class="rank">
                ${originalRank}
            </div>

            <div class="level-name">
                ${level.name}
            </div>

            <div class="difficulty">
                ${level.difficulty}
            </div>

        `;


        element.addEventListener(
            "click",
            () => openLevel(level)
        );


        list.appendChild(element);

    });

}


/* OPEN LEVEL */

function openLevel(level) {

    rankingPage.classList.add("hidden");

    detailPage.classList.remove("hidden");


    document.getElementById(
        "detail-rank"
    ).textContent =
        "RANK #" + (levels.indexOf(level) + 1);


    document.getElementById(
        "detail-name"
    ).textContent =
        level.name;


    document.getElementById(
        "detail-difficulty"
    ).textContent =
        level.difficulty;


    document.getElementById(
        "detail-date"
    ).textContent =
        level.date;


    document.getElementById(
        "detail-number"
    ).textContent =
        level.number;


    document.getElementById(
        "detail-first"
    ).textContent =
        level.first;


    document.getElementById(
        "detail-absolute"
    ).textContent =
        level.absolute;


    document.getElementById(
        "detail-length"
    ).textContent =
        level.length;


    document.getElementById(
        "detail-objects"
    ).textContent =
        level.objects;


    document.getElementById(
        "detail-frame"
    ).textContent =
        level.framePerfects;


    document.getElementById(
        "detail-design"
    ).textContent =
        level.design;


    document.getElementById(
        "detail-song"
    ).textContent =
        level.song;


    const history =
        document.getElementById(
            "rank-history"
        );


    history.innerHTML = "";


    level.history.forEach(entry => {

        const item =
            document.createElement("div");


        item.className =
            "rank-history-item";


        item.innerHTML = `

            <span class="history-date">
                ${entry.date}
            </span>

            <span class="history-rank">
                ${entry.rank}
            </span>

        `;


        history.appendChild(item);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* BACK BUTTON */

backButton.addEventListener(
    "click",
    () => {

        detailPage.classList.add("hidden");

        rankingPage.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* SEARCH */

search.addEventListener(
    "input",
    displayLevels
);


/* DIFFICULTY */

difficulty.addEventListener(
    "change",
    displayLevels
);


/* INITIAL DISPLAY */

displayLevels();
