window.EagerChatra = {
  init: function(options) {
    if (!options || !options.id) {
      return;
    }

    window.ChatraID = options.id;
    (function(d, w, c) {
      var n = d.getElementsByTagName('script')[0],
          s = d.createElement('script');
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
        + '//chat.chatra.io/chatra.js';
      n.parentNode.insertBefore(s, n);
    })(document, window, 'Chatra');
  }
};
