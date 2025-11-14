const express = require("express");
const app = express();


app.get("/userId/:id/userAge/:age", (req, res) => {
    const id = req.params.id;
    const age = req.params.age;

    res.send(`<h1>Student id: ${id}, age: ${age}<h1>`);
});



module.exports = app;    