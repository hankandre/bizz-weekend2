var express = require("express");
var path = require("path");
var app = express();
var port = 5000;

console.log("im a server");

app.get("/getsomeinfo", function cbForGetSomeInfo(request, response) {
  response.sendFile(path.join(__dirname, "assets/pexels-photo-399636.jpeg"));
});

app.get("/*", function catchall(request, response) {
  response.sendFile(path.join(__dirname, "views/index.html"));
});

app.use(express.static("public"));

// app.get("/", function cb(res, req) {
//   res.sendFile(path.resolve("client/index.html"));
// });
// app.get("/getsomeinfo", function cbForGetSomeInfo(request, response) {
//   response.sendFile(path.join(__dirname, "assets/pexels-photo-399636.jpeg"));
// });

// app.get("/*", function catchall(request, response) {
//   response.sendFile(path.join(__dirname, "client/index.html"));
// });

app.listen(5000);

console.log("running on port 3000");

// app.get("/", function(req, res) {
//   res.sendFile(path.resolve("./public/index.html"));
//   console.log("base url");
// });
