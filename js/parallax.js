'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  console.log("initializing")

  const left_arrow = document.querySelector('#leftarrow');
  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  const menuLinks = document.getElementsByClassName("menuLink");
  console.log(menuLinks)

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      let target = e.target.href;
      document.querySelector('.outer-wrapper').animate({scrollLeft: 900}, 300)
      console.log("dfsfa")
    })
  }

  let refPoint = document.querySelector('h1').getBoundingClientRect();

  document.querySelector('#name').addEventListener('click', function(e) {
    console.log(foreground.style.left)
  })

  document.querySelector('.outer-wrapper').addEventListener('scroll', function(e) {
    console.log("scrolling")
    refPoint = document.querySelector('.wrapper').getBoundingClientRect();
    var scrolled = refPoint.x;

    foreground.style.left =+ (scrolled * 0.15) + 'px';
    midground.style.left =+ (scrolled * 0.1) + 'px';
    background.style.left =+ (scrolled * 0.05) + 'px';
  })

  /*
  const labels = document.getElementsByClassName('label')
  const name = document.querySelector('#name')
  document.body.addEventListener('mousemove', function(e) {
    name.style.left =- (e.x / 40) + 'px'
    name.style.top =- (e.y / 40) + 'px'
  })
  */
}
