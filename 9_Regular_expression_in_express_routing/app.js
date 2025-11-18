const express = require("express");
const app = express();

app.get("/products/:id",(req,res) => {
    const id = req.params.id;

    if(!/^[0-9]+$/.test(id)){
        return res.status(400).send("Invalid ID, must be in number");
    }
    res.send(`<h2>ID = ${id}</h2>`);

    
    // if(!/^[0-9]{3}$/.test(id)){
    //     return res.status(400).send("Invalid ID, must be in number");
    // }

    // if(!/^[a-zA-Z]+$/.test(id)){
    //     return res.status(400).send("Invalid ID, must be in number");
    // }
    // res.send(`<h2>ID = ${id}</h2>`);
})

module.exports = app;    