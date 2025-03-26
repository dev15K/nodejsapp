const express = require("express");
const router = express.Router();

const mainController = require("../../controllers/mainController");

router.get("/", mainController.home);
router.get("/send", mainController.showMessage);
router.post("/send", mainController.sendMessage);

module.exports = router;
