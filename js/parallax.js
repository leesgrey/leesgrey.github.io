'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  /* element selection */
  const wrapper = document.querySelector('.outer-wrapper');

  const moon = document.querySelector('#moon');

  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');

  const fades = document.getElementsByClassName('fades');

  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  const name = document.querySelector("#about");

  /* arrow click */
  left_arrow.addEventListener('click', function(e) {
    wrapper.animate({
      scrollTop: 100
    }, 1);
    console.log($("#about").offset().left)
  })

  right_arrow.addEventListener('click', function(e) {
    wrapper.scrollBy({
      left: window.innerWidth / 2,
      behavior: 'smooth'
    });
  })

  moonshadow.addEventListener('click', function(e) {
    wrapper.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  })

  /* stop scroll setup timer */
  var timer;
/*
  let refPoint = document.querySelector('h1').getBoundingClientRect();

  document.querySelector('.outer-wrapper').addEventListener('scroll', function(e) {
    refPoint = document.querySelector('.wrapper').getBoundingClientRect();
    var scrolled = refPoint.x;

    clearTimeout(timer);
    timer = setTimeout(function(){
      heehee()
    }, 80);

    foreground.style.left = (scrolled * 0.15) + 'px';
    midground.style.left = (scrolled * 0.1) + 'px';
    background.style.left = (scrolled * 0.05) + 'px';
  })

  function heehee(){
    console.log("heehee")
    for (var i = 0; i < fades.length; i++) {
      if (Math.abs(fades[i].getBoundingClientRect().x - (window.innerWidth / 3)) < (window.innerWidth / 4)) {
        fades[i].style.opacity = 1;
      }
      else {
        fades[i].style.opacity = 0.3;
      }
    }
  }
*/
}

