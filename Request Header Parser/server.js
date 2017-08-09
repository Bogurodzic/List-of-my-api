let app = require("./app.js")
let port = process.env.PORT || 3000;

let server = app.listen(port, function(){
  console.log("Server is running on " + port)
});
