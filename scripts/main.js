bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true
});


(function(){

  bespoke.plugins.backgroundElement = function(deck) {
    var el = document.createElement('div');
    el.className = 'background';
    deck.parent.appendChild(el);
  };

  (function preloadBackgroundImages() {

    var matches, image,
      forEach = function(arrayLike, fn) {
        [].slice.call(arrayLike, 0).forEach(fn);
      };

    forEach(document.styleSheets, function(sheet) {
      forEach(sheet.rules, function(rule) {
        if (rule.style && rule.style.backgroundImage) {
          matches = rule.style.backgroundImage.match(/url\(\"(.*)\"\)/);
          if (matches) {
            image = new Image();
            image.src = matches[1];
          }
        }
      });
    });

  }());

}());
