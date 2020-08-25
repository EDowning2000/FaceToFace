const express = require("express");
const app = express();
const server = require("http").Server(app);
const PORT = 3030;

app.get("/", (req, res) => {
  res.status(200).send(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

server.listen(PORT);
