const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const todoRouter = require("./routes/todo");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:athirach30@cluster0.glbl2w7.mongodb.net/?retryWrites=true&w=majority/todos"
);




app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todos", todoRouter);

module.exports = app;
