var express = require("express");
var path = require("path");
var app = express();
var port = 3000;

console.log("im a server");

app.get("/getsomeinfo", function cbForGetSomeInfo(request, response) {
  response.sendFile(path.join(__dirname, "assets/pexels-photo-399636.jpeg"));
});

app.get("/*", function catchall(request, response) {
  response.sendFile(path.join(__dirname, "./public/views/index.html"));
});

// app.get("/", function cb(res, req) {
//   res.sendFile(path.resolve("client/index.html"));
// });
// app.get("/getsomeinfo", function cbForGetSomeInfo(request, response) {
//   response.sendFile(path.join(__dirname, "assets/pexels-photo-399636.jpeg"));
// });

// app.get("/*", function catchall(request, response) {
//   response.sendFile(path.join(__dirname, "client/index.html"));
// });

app.listen(port);

console.log("listening on port" + port);

// app.get("/", function(req, res) {
//   res.sendFile(path.resolve("./public/index.html"));
//   console.log("base url");
// });
