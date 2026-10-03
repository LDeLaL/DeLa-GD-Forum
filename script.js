const levels = [

    {
        name: "Firework",
        creator: "Trick",
        difficulty: "Extreme Demon",
        score: 100
    },

    {
        name: "Arctic Lights",
        creator: "APTeam",
        difficulty: "Extreme Demon",
        score: 99
    },

    {
        name: "Acheron",
        creator: "Ryamu",
        difficulty: "Extreme Demon",
        score: 98
    },

    {
        name: "Tidal Wave",
        creator: "OniLink",
        difficulty: "Extreme Demon",
        score: 97
    },

    {
        name: "DeLa Circles",
        creator: "Dira",
        difficulty: "Extreme Demon",
        score: 96
    },

    {
        name: "Bloodbath",
        creator: "Riot",
        difficulty: "Extreme Demon",
        score: 95
    },

    {
        name: "Sonic Wave",
        creator: "APTeam",
        difficulty: "Extreme Demon",
        score: 94
    },

    {
        name: "Slaughterhouse",
        creator: "icedcave",
        difficulty: "Extreme Demon",
        score: 93
    }

];


const list = document.getElementById("level-list");
const search = document.getElementById("search");
const difficulty = document.getElementById("difficulty");


function displayLevels() {

    const searchText =
        search.value.toLowerCase();

    const selectedDifficulty =
        difficulty.value;


    const filtered = levels.filter(level => {

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


    filtered.forEach((level, index) => {

        const element =
            document.createElement("div");

        element.className = "level";


        element.innerHTML = `

            <div class="rank">
                ${index + 1}
            </div>

            <div class="level-name">
                ${level.name}
            </div>

            <div class="creator">
                ${level.creator}
            </div>

            <div class="difficulty">
                ${level.difficulty}
            </div>

            <div class="score">
                ${level.score}
            </div>

        `;


        list.appendChild(element);

    });

}


search.addEventListener(
    "input",
    displayLevels
);


difficulty.addEventListener(
    "change",
    displayLevels
);


displayLevels();
