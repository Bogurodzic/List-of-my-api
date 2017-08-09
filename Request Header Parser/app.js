const express = require("express");

let app = express();
let requestParser = require("./request-parser");

app.use(requestParser.getIp);
app.use(requestParser.getLanguage);
app.use(requestParser.getOs);
app.use(requestParser.getOutput);

module.exports = app;
