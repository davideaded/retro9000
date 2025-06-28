const form = document.querySelector("form");
const platformSelection = document.getElementById("platformSelection");

async function getAll(items) {
    const acceptableItems = ["games", "platforms"];
    if (!acceptableItems.includes(items)) return undefined;

    const url = "http://127.0.0.1:3000/" + items;
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

function elt(type, props, ...children) {
    let dom = document.createElement(type);
    if (props) Object.assign(dom, props);
    for (let child of children) {
        if (typeof child !== "string") dom.appendChild(child);
        else dom.appendChild(document.createTextNode(child));
    }

    return dom;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function addGamesToDom() {
    const games = await getAll("games");
    const allGamesDiv = document.getElementById("gamesDiv");
    for (let game of games) {
        const gameCard = elt("div", { className: "game-card" }, elt("img", { src: `/uploads/${game.game_image}` }));
        gameCard.appendChild(
            elt("div", null,
                elt("h2", null, capitalize(game.game_name)),
                elt("p", null, game.genre),
            ));
        gameCard.appendChild(
            elt("div", { className: "game-card-inner" }, 
                elt("p", null, game.publisher + ","),
                elt("p", null, game.game_year.toString()),
            )
        );
        allGamesDiv.appendChild(gameCard);
    }
}

const currentUrl = document.URL.split("/").pop();
if (currentUrl === "") {
    addGamesToDom();
} else if (currentUrl === "new") {

    async function handleSelectClick() {
        const myGames = await getAll("games");
        if (!myGames[0]) {
            const opt = document.createElement("option");
            opt.innerText = "ERROR! Couldn't fetch options!"
            platformSelection.appendChild(opt);
        } else {
            myGames.forEach( ({game_name}) => {
                const opt = document.createElement("option");
                opt.value = game_name;
                opt.innerText = game_name[0].toUpperCase() + game_name.slice(1);
                platformSelection.appendChild(opt);
            });
        }

        platformSelection.removeEventListener("click", handleSelectClick);
    }

    form.addEventListener("submit", (e) => e.preventDefault());
    platformSelection.addEventListener("click", handleSelectClick);
}
