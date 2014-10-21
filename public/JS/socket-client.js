$(document).ready(function () {
  var socket = io.connect();

  socket.on('message', function (data) {
    if (data.message != "") {
      UI.setContents(data);
    }
    else {
      alert('You should enter message.');
    };
  });

  $('button').click(function () {
    socket.emit('message', UI.setDataAttributes());
    UI.resetInputBox();
  });
});
