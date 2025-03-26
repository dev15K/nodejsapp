const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List");
});

router.get("/:id", (req, res) => {
    res.send(`User Detail: ${req.params.id}`);
});

module.exports = router;
