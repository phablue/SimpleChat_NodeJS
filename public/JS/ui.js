$(document).ready(function () {
  var socket = io.connect();

  socket.on('message', function (data) {
    var output = '';
    output += '<li>';
    output += '    <h3>' + data.name + '</h3>';
    output += '    <p>' + data.message + '</p>';
    output += '    <p>' + data.date + '</p>';
    output += '</li>';

    $(output).prependTo('#content');
    $('#content').listview('refresh');
  });

  $('button').click(function () {
    socket.emit('message', {
      name: $('#name').val(),
      message: $('#message').val(),
      date: new Date().toUTCString()
    });
  });
});
