const { Router } = require("express");
const { getAllGames, getGameById, createNewGame, updateGame, deleteGame } = require("../controllers/gameController");
const path = require('path');
const gameRouter = Router();

gameRouter.get("/", getAllGames);
gameRouter.get("/new", (_req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "newGame.html"));
});
gameRouter.get("/game/:id", getGameById);
gameRouter.post("/new", createNewGame);
gameRouter.put("/edit/:id", updateGame);
gameRouter.delete("/:id", deleteGame);

module.exports = gameRouter;
