var http = require("http");

var server = http.createServer(function(request, response) {
  response.end("hello world");
  console.log("We said hi.");
});

server.listen(7890);