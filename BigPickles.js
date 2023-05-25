javascript:(function() {
  var textboxes = document.querySelectorAll('input[type="text"], textarea');
  for (var i = 0; i < textboxes.length; i++) {
    var originalValue = textboxes[i].value;
    textboxes[i].addEventListener('input', function() {
      var currentValue = this.value;
      var diff = currentValue.length - originalValue.length;
      if (diff > 0) {
        var phrase = 'I love big pickles'.repeat(diff);
        this.value = currentValue.slice(0, -diff) + phrase;
        originalValue = this.value;
      } else {
        originalValue = currentValue;
      }
    });
  }
})();
