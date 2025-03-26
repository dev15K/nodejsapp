const express = require("express");
const router = express.Router();

const auth = require("./actions/auth");
const user = require("./actions/user");
const admin = require("./actions/admin");
const open = require("./actions/open");

router.use("/", open);
router.use("/auth", auth);
router.use("/users", user);
router.use("/admin", admin);

module.exports = router;
