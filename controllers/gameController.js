const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db/db");

const getAllGames = asyncHandler(async(_req, res) => {
    const games = await db.getAll("games");
    if (!games) {
        throw new CustomNotFoundError("Games not found!");
    }
    res.status(200).json(games);
});

const getGameById = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const [ game ] = await db.getById(id, "games");
    console.log(game);
    if (!game) {
        throw new CustomNotFoundError("Game not found!");
    }
    res.status(200).json(game);
    return;
});

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
