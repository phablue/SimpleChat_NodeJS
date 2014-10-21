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

    setDataAttributes: function () {
      return {  name: this.userNickNameSetting(),
                message: this.getValue('[data-id="message"]'),
                date: new Date().toUTCString()};
    },

    userNickNameSetting: function () {
      if (this.checkHavingNickName()) {
        return this.getValue('[data-id="nick-name"]');
      }
      else {
        return 'Anonymous';
      }
    },

    checkHavingNickName: function () {
      return this.getValue('[data-id="nick-name"]') != "";
    },

    getValue: function (element) {
      return $(element).val();
    },

    resetInputBox: function () {
      $('input').val('');
    }
  };

  window.UI = UI;
})();
