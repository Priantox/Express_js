const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

app.get("/register", (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/register", (req,res) =>{
    const fullname = req.body.fullname;
    res.send(`<h2>Your name is ${fullname}<h2>`);
})

module.exports = app;    