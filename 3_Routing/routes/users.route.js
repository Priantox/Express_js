const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Its okay<h1>");
});

router.get("/login", (req, res) => {
    res.send("<h1>Its login<h1>");
});

module.exports = router;