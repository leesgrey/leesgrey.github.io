'use strict';

let refPoint = document.querySelector('h1').getBoundingClientRect();
console.log(refPoint)

document.querySelector('.outer-wrapper').addEventListener('scroll', function(e) {
  refPoint = document.querySelector('h1').getBoundingClientRect();
  var scrolled = refPoint.x;
  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background')
  foreground.style.left= - (scrolled * 0.2) + 'px';
  background.style.left= + (scrolled * 0.2) + 'px';
})

document.addEventListener('click', function(e) {
  refPoint = document.querySelector('h1').getBoundingClientRect();
  console.log(refPoint);
})
