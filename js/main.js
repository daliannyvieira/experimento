window.addEventListener("load", function load(event){

    const showPurpose = anime({
     targets: '.intro-text',
     translateY: {
       value: ['5vh', 0],
       easing: 'easeOutExpo',
       duration: 700
     },
     delay: 250
    });

    const showLogo = anime({
      targets: '.logo',
      translateY: {
       value: [0, '3vh'],
       easing: 'easeOutExpo',
       duration: 700
      },
      scaleX: {
       value: [1.05, 1],
       easing: 'easeOutExpo',
       duration: 700
      },
      delay: 750
    });

    const showContact = anime({
      targets: '.contact',
      translateX: {
       value: [0, '-1vw'],
       easing: 'easeOutExpo',
       duration: 700
      },
      opacity: {
        value: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 1000
      },
      delay: 900
    });

    window.removeEventListener("load", load, false); //remove listener, no longer needed
},false);


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


// Hover logo
const startAnimation = function(event){
  event.preventDefault();

  const basicTimeline = anime.timeline();

  basicTimeline
    .add({
      targets: '.logo-img-2',
      translateX: -100,
      easing: 'easeOutExpo',
      duration: 600
    })
    .add({
      targets: '.logo-img-3',
      translateX: -200,
      easing: 'easeOutExpo',
      rotate: 360,
      duration: 600
    })
    .add({
      targets: '.logo-img-4',
      translateX: -300,
      easing: 'easeOutExpo',
      duration: 600,
      rotate: 360
    })
    .add({
      targets: '.logo-img-5',
      translateX: -400,
      easing: 'easeOutExpo',
      duration: 600,
      rotate: 360,
    });
  }

document.querySelector('.logo').addEventListener('mouseenter', startAnimation);

document.querySelector('.logo').addEventListener('mouseout', function(event){
  document.querySelector('.logo').removeEventListener('mouseenter', startAnimation)
});

