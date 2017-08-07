var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var url = require("url");
var moment = require("moment");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:time", function(req, res){
  var time = req.params.time;
  res.send(formatTime(time));
});

function formatTime(time){
  if(checkTimeFormat(time) === "unix"){
    return getFormattedTime(time, getNaturalTime(time));
  } else if(checkTimeFormat(time) === "natural"){
    return "natural";
  }
}

function checkTimeFormat(time){
  if (time.split(" ").length === 1){
    return "unix";
  } else if (time.split(" ").length > 1){
    return "natural";
  }
}

function getFormattedTime(unix, natural){
  return {
    "unix": unix,
    "natural": natural
  }
}

function getNaturalTime(unixTimestamp){
  var naturalDate = moment.unix(1502115677);
  return naturalDate.format('LL');
}

module.exports = router;
