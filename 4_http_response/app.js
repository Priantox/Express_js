const express = require("express");
const app = express();

//Json
app.use("/register",(req, res) =>{
    res.status(200).json({
        "name" : "Ahamudul Hasan",
        "message": "I am register page",
        statusCode: 200
    });
});

app.get("/contact", (req, res) => {
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/about", (req, res) => {
    res.cookie("name", 'Prianto');
    //res.cookie("Age","24");
    res.clearCookie("Age");
    res.end();
});

module.exports = app;    