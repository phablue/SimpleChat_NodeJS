$(document).ready(function () {
  var socket = io.connect();

  socket.on('message', function (data) {
    UI.setContents(data);
  });

  $('button').click(function () {
    socket.emit('message', { 
      name: $('[data-id="nick-name"]').val(),
      message: $('[data-id="message"]').val(),
      date: new Date().toUTCString()});
  });
});
