var express = require("express");
var app = express();
var timeController = require("./timeController");

app.use("*", timeController);

module.exports = app;
