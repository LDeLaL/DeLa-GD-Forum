const levels = [

    {
        name: "Qlixsyn",
        difficulty: "Hard Demon",

        date: "미정",
        number: "《1》",
        first: "미정",

        absolute: "14.8",
        length: "19초",
        objects: "24,657",
        design: "2.1",
        song: "Classical VIP"
    },


    {
        name: "EYESwork",
        difficulty: "Hard Demon",

        date: "미정",
        number: "《2》",
        first: "미정",

        absolute: "14",
        length: "16초",
        objects: "3,408",
        design: "1.9",
        song: "Society"
    },


    {
        name: "Unnerfed Glamorous",
        difficulty: "Hard Demon",

        date: "미정",
        number: "《3》",
        first: "미정",

        absolute: "10.3",
        length: "42초",
        objects: "2,077",
        design: "1.3",
        song: "Eden"
    },


    {
        name: "DELUSION",
        difficulty: "Medium Demon",

        date: "미정",
        number: "《4》",
        first: "미정",

        absolute: "10",
        length: "22초",
        objects: "23,863",
        design: "1.9",
        song: "Turn The Lights Off"
    },


    {
        name: "D",
        difficulty: "Insane Demon",

        date: "미정",
        number: "《5》",
        first: "미정",

        absolute: "9",
        length: "3초",
        objects: "27",
        design: "1.6",
        song: "Creo - Flow"
    },


    {
        name: "5",
        difficulty: "Insane Demon",

        date: "미정",
        number: "《6》",
        first: "미정",

        absolute: "5",
        length: "3초",
        objects: "207",
        design: "3",
        song: ""
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
        "detail-design"
    ).textContent =
        level.design;


    document.getElementById(
        "detail-song"
    ).textContent =
        level.song;


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
