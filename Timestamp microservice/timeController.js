var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", function(req, res){
  res.end("test");
})

router.get("/", function(req, res){
  res.send("test");
})

module.exports = router;
