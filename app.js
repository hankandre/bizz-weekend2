var express = require("express");
var path = require("path");
var port = 3000;
var app = express();

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

app.listen(port, function() {
  console.log("server working", port);
});

app.get("/", function(req, res) {
  res.sendFile(path.resolve("./public/index.html"));
  console.log("base url");
});
