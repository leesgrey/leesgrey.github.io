'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  console.log("initializing")

  const wrapper = document.querySelector('.outer-wrapper');
  const moonshadow = document.querySelector('#moonshadow');
  const moon = document.querySelector('#moon');

  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');

  const fades = document.getElementsByClassName('fades');
  console.log(fades)

  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  const name = document.querySelector("#about");

  /*
  /* scroll to menu page
  const menuLinks = document.getElementsByClassName("menuLink");
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      let target = e.target.href;
      document.querySelector('.outer-wrapper').animate({scrollLeft: 900}, 300)
      console.log("dfsfa")
    })
  }
  */

  /* arrow click */
  left_arrow.addEventListener('click', function(e) {
    wrapper.scrollBy({
      left: -window.innerWidth / 2,
      behavior: 'smooth'
    })
  })
  right_arrow.addEventListener('click', function(e) {
    wrapper.scrollBy({
      left: window.innerWidth / 2,
      behavior: 'smooth'
    });
  })

  moon.addEventListener('click', function(e) {
    wrapper.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  })

  moonshadow.style.left = (moon.offsetLeft + moon.offsetWidth) + 'px';

  /* stop scroll setup timer */
  var timer;

  /* parallel scroll */
  let refPoint = document.querySelector('h1').getBoundingClientRect();
  
  document.querySelector('.outer-wrapper').addEventListener('scroll', function(e) {
    refPoint = document.querySelector('.wrapper').getBoundingClientRect();
    var scrolled = refPoint.x;

    clearTimeout(timer);
    timer = setTimeout(function(){
      heehee()
    }, 30);

    foreground.style.left = (scrolled * 0.15) + 'px';
    midground.style.left = (scrolled * 0.1) + 'px';
    background.style.left = (scrolled * 0.05) + 'px';

    moonshadow.style.left = (moon.offsetLeft + moon.offsetWidth) + (scrolled * 0.02) + 'px'
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
}

