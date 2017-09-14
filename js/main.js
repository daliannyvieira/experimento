var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '.logo',
    translateY: {
     value: ['-4vh', 0],
     duration: 1200
    },
  })
  .add({
    targets: '.logo-img-2',
    translateX: -100,
    easing: 'easeOutExpo',
  })
  .add({
    targets: '.logo-img-3',
    translateX: -200,
    easing: 'easeOutExpo',
    rotate: 360
  })
  .add({
    targets: '.logo-img-4',
    translateX: -300,
    easing: 'easeOutExpo',
    rotate: 360
  })
  .add({
    targets: '.logo-img-5',
    translateX: -400,
    easing: 'easeOutExpo',
    rotate: 360
  })
  .add({
    targets: '.logo-img-1',
    rotate: {
     value: 360,
     duration: 3000,
     easing: 'easeOutExpo'
    },
  });

var purpose = anime({
 targets: '.oi',
 translateY: {
   value: ['4vh', 0],
   duration: 800
 },
 delay: 5000
});