const levels = [

    {
        name: "Qlixsyn",
        difficulty: "Extreme Demon"
    },

    {
        name: "EYESwork",
        difficulty: "Extreme Demon"
    },

    {
        name: "Unnerfed Glamorous",
        difficulty: "Extreme Demon"
    },

    {
        name: "DELUSION",
        difficulty: "Extreme Demon"
    },

    {
        name: "D",
        difficulty: "Extreme Demon"
    },

    {
        name: "5",
        difficulty: "Extreme Demon"
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

            <div class="difficulty">
                ${level.difficulty}
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
