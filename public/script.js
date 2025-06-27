const form = document.querySelector("form");
const platformSelection = document.getElementById("platformSelection");

// fix cors
function getAllPlatforms() {
    const url = "http://127.0.0.1:3000/games/";

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

form.addEventListener("submit", (e) => e.preventDefault());

platformSelection.addEventListener("click", () => {
    getAllPlatforms();
});
