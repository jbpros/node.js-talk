var http = require("http");
var fs = require("fs");
var SocketIo = require("socket.io");

var server = http.createServer(function(request, response) {
  fs.readFile(__dirname + "/index.html", function (err, data) {
    if (err) {
      response.writeHead(500);
      return response.end("Failed loading index file: " + err);
    }

    response.end(data);
  });
});

var io = SocketIo.listen(server);

io.sockets.on("connection", function (socket) {
  socket.emit("hello", { target: "world" });
  socket.on("waving", function (data) {
    console.log("got a waving", data);
  });
});

server.listen(7890);