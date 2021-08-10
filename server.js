//dependecys
require("dotenv").config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//imports
const Router = require("./routes/index");
const authorRouter = require("./routes/author");
const ConnectDb = require("./Db");
//setup
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
// middlewares
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

// Db config
ConnectDb();

//Routes
app.use("/", Router);
app.use("/authors", authorRouter);

// Server is listen
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});
