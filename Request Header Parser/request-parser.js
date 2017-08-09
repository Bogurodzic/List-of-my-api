const requestIp = require('request-ip');
const os = require('os');


let requestParser = {
  getIp: function(req, res, next){
    const clientIp = requestIp.getClientIp(req);
    res.locals.clientIp = clientIp;
    //console.log(clientIp);
    next();
  },

  getLanguage: function(req, res, next){
    let language = req.headers["accept-language"];
    res.locals.language = language.split(",")[0];
    next();
  },

  getOs: function(req, res, next){
    let browser = req.get('User-Agent');
    res.locals.browser = formatOsName(browser);
    next();
  },

  getOutput: function(req, res, next){
    res.send({
      ipaddress: res.locals.clientIp,
      language: res.locals.language,
      software: res.locals.browser
    });
    res.end();
  }
}

function formatOsName(osName) {
  let name = osName.split(" ")[1] + osName.split(" ")[2] + osName.split(" ")[3] + osName.split(" ")[4] + osName.split(" ")[5];
  name = name.slice(1, (name.length-1));
  name = name.split(";").join("; ");
  return name;
}

module.exports = requestParser;
