$(document).ready(function () {
  var socket = io.connect();

  socket.on('message', function (data) {
    UI.setContents(data);
  });

  $('button').click(function () {
    socket.emit('message', UI.setDataAttributes());
    UI.resetInputBox();
  });
});
