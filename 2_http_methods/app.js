const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("You are in home router");
    res.end();
});

app.post("/about", (req, res) => {
    res.send("You are post req");
});

app.put("/about", (req, res) => {
    res.send("You are put req");
});

app.delete("/about", (req, res) => {
    res.send("You are delete req");
});


module.exports = app; 