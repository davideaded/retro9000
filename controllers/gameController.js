const asyncHandler = require("express-async-handler");
const db = require("../db/db");

const getAllGames = asyncHandler(async(_req, res) => {
    const games = await db.getAll("games");
    res.status(200).json(games);
});

function getGameById(_req, _res, id) {
    return;
}

function createNewGame(_req, _res) {
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
