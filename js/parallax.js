'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  console.log("initializing")

  const wrapper = document.querySelector('.outer-wrapper');

  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');

  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  /* scroll to menu page */
  const menuLinks = document.getElementsByClassName("menuLink");
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      let target = e.target.href;
      document.querySelector('.outer-wrapper').animate({scrollLeft: 900}, 300)
      console.log("dfsfa")
    })
  }

  /* arrow click */
  left_arrow.addEventListener('click', function(e) {
    console.log('left');
    wrapper.scrollBy({
      left: -window.innerWidth / 2,
      behavior: 'smooth'
    })
  })
  right_arrow.addEventListener('click', function(e) {
    console.log('right')
    wrapper.scrollBy({
      left: window.innerWidth / 2,
      behavior: 'smooth'
    });
  })

  /* parallel scroll */
  let refPoint = document.querySelector('h1').getBoundingClientRect();
  document.querySelector('.outer-wrapper').addEventListener('scroll', function(e) {
    refPoint = document.querySelector('.wrapper').getBoundingClientRect();
    var scrolled = refPoint.x;

    foreground.style.left = (scrolled * 0.15) + 'px';
    midground.style.left = (scrolled * 0.1) + 'px';
    background.style.left = (scrolled * 0.05) + 'px';
  })
}
