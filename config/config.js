const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/socally_db");
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error in connection to DB"));
db.once("open", () => console.log("Successfully connected to DB"));
