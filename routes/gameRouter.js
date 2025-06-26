const { Router } = require("express");
const { getAllGames, getGameById, createNewGame, updateGame, deleteGame } = require("../controllers/gameController");
const gameRouter = Router();

gameRouter.get("/", getAllGames);
gameRouter.get("/:id", getGameById);
gameRouter.post("/new", createNewGame);
gameRouter.put("/edit/:id", updateGame);
gameRouter.delete("/:id", deleteGame);

module.exports = gameRouter;
