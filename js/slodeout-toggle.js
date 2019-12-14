  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 20
  });
  document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  	slideout.toggle();
  });