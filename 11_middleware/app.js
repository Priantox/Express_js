const express = require("express");
const app = express();

const myMiddleWare = (req, res, next) =>{
    console.log("MiddleWare function");
    req.currentTime = new Date(Date.now());
    next();
}

app.use(myMiddleWare);

app.use((req,res,next) =>{
    res.send("404 bad url request");
})

app.use((err,req,res,next) =>{
    res.status(500).send("Something broke!");
})

app.get("/", (req, res) => {
    console.log("I am Home " + req.currentTime);
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