const express = require("express");
const app = express();


app.get("/", (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    res.send(`Student id is: ${id}`);
    res.send(`Student name is: ${name}`);
});



module.exports = app;    