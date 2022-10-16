require('dotenv').config()
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_req, res) => {
  const path = __dirname + "/views/index.html";
  res.sendFile(path);
});

app.get('/json', (_req, res) => {
  let message = 'Hello json'
  console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase()
  }
  res.json({message})
})

module.exports = app;
