const express = require("express");
const cookie = require("cookie-parser");
const app = express();
const port = 8000;
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport");
const db = require("./config/config");
const MongoStore = require("connect-mongo");

app.use(express.static("assets"));
app.use(express.urlencoded());
app.use(cookie());


app.set("view engine", "ejs");
app.set("views", "./views");



app.use(session({
    name: "socially",
    secret: "hello",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100),
    },
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost/socally_db",
        autoRemove: "disabled"
    },
    function(err){
        console.log(err || "connection mongoose store estaiblished");
    }),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use("/", require("./routes"));
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Successfully connected to ", port);
});