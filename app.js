const express = require("express");
const app = express();

// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.post("/user",(req,res) => {
    const name = req.body.name;
    res.send(`welcome ${name}`);
});

module.exports = app;    