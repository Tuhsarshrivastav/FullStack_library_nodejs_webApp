//dependecys
require("dotenv").config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//imports
const Router = require("./routes/index");
const ConnectDb = require("./Db");
//setup
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// Db config
ConnectDb();

// middlewares
app.use(express.json());

//Routes
app.use("/", Router);

// Server is listen
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});
