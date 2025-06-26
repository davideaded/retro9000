require("dotenv").config();
const express = require("express");
const app = express();

const serverAddress = process.env.ADDRESS || "127.0.0.1";
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    res.send(200);
    console.log("Connected");
});
app.listen(port, serverAddress, () => console.log(`Listening on ${serverAddress}:${port}`));
