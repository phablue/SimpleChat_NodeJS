(function () {
  var UI = {
    setContents: function (data) {
      var output = '';
      output += '<li>';
      output += '    <h3>' + data.name + '</h3>';
      output += '    <p>' + data.message + '</p>';
      output += '    <p>' + data.date + '</p>';
      output += '</li>';

      $(output).prependTo('[data-id="contents"]');
      $('[data-id="contents"]').listview('refresh');
    },

    resetInputBox: function () {
      $('input').val('');
    }
  };

  window.UI = UI;
})();
