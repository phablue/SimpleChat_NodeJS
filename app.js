var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.Router());
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/chat.html');
});

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    io.sockets.emit('message', data);
  });
});
