var purpose = anime({
 targets: '.oi',
 translateY: {
   value: ['4vh', 0],
   duration: 800
 },
 delay: 5000
});

var wrap = document.querySelector('.intro-img');

document.body.addEventListener('mousemove', function (event) {
  var halfWidth = window.innerWidth / 2;
  var halfHeight = window.innerHeight / 2;
  var dX = -(halfWidth - event.clientX) * 0.015;
  var dY = (halfHeight - event.clientY) * 0.015;

  wrap.style.transform = 'rotateX(' + dY + 'deg) rotateY(' + dX + 'deg)';
});

var startAnimation = function(event){

  event.preventDefault();

  var basicTimeline = anime.timeline();

  basicTimeline
    .add({
      targets: '.logo',
      translateY: {
       value: ['-2.5vh', 0],
       duration: 1200
      },
      delay: 250
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
      rotate: 360,
    });
  }

document.querySelector('.logo').addEventListener('mouseenter', startAnimation);

document.querySelector('.logo').addEventListener('mouseout', function(event){
  document.querySelector('.logo').removeEventListener('mouseenter', startAnimation)
});



