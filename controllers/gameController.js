const db = require("../db/db");

async function getAllGames(req, res) {
    const games = await db.getAll("games");
    console.log(games);
}

function getGameById(_req, _res, id) {
    return;
}

function createNewGame(_req, _res) {
    return;
}

function getAllGames(_req, _res) {
    return;
}

function updateGame(_req, _res) {
    return;
}

function deleteGame(_req, _res, id) {
    return;
}

module.exports = {
    getAllGames,
    getGameById,
    createNewGame,
    updateGame,
    deleteGame
};
