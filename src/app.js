const express = require("express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

module.exports = app;
