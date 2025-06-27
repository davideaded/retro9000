require("dotenv").config();
const express = require("express");
const gameRouter = require("./routes/gameRouter");
const app = express();
const path = require('path');

const serverAddress = process.env.ADDRESS || "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use("/games/", gameRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});
app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(port, serverAddress, () => console.log(`Listening on ${serverAddress}:${port}`));
