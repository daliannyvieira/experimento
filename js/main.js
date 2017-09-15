// Move background

const wrap = document.querySelector('.intro-img');

document.body.addEventListener('mousemove', function (event) {
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;
  const dX = -(halfWidth - event.clientX) * 0.015;
  const dY = (halfHeight - event.clientY) * 0.015;

  wrap.style.transform = 'rotateX(' + dY + 'deg) rotateY(' + dX + 'deg)';
});


// Move intro-text

const purpose = anime({
 targets: '.intro-text',
 translateY: {
   value: ['4vh', 0],
   duration: 800
 },
 delay: 400
});


// Hover logo

const startAnimation = function(event){

  event.preventDefault();

  const basicTimeline = anime.timeline();

  basicTimeline
    .add({
      targets: '.logo',
      translateY: {
       value: [-15, 0],
       easing: 'easeOutExpo',
       duration: 800
      },
      scaleX: {
       value: [1.05, 1],
       easing: 'easeOutExpo',
       duration: 800
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