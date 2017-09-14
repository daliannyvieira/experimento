var logo = anime({
  targets: '.logo',
  translateY: {
    value: '4vh',
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  delay: 250
});

var purpose = anime({
 targets: '.oi',
 translateY: {
   value: '-4vh',
   duration: 800
 },
 delay: 2250
});