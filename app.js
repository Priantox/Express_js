const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use(userRouter);

app.use((req, res) =>{
    res.send("<h1>404! Not Found<h1>");
});

module.exports = app;    