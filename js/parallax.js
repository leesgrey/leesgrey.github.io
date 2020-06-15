'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  /* element selection */
  const wrapper = document.querySelector('.outer-wrapper');

  const moon = document.querySelector('#moon');

  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');

  const content = document.getElementsByClassName('fades');

  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  const name = document.querySelector("#about");
  const menu = document.querySelector("#menu");

  /* keep track of section */
  let current = 0;

  console.log(current);
  /* arrow click */
  left_arrow.addEventListener('click', function(e) {
    current--;
    ArrowUpdate();
    MountainUpdate();
  })

  right_arrow.addEventListener('click', function(e) {
    if (right_arrow.classList.contains('fadedIn')) {
      right_arrow.classList.remove('fadedIn');
    }
    current++;
    ArrowUpdate(current);
    MountainUpdate();
  })


  function ArrowUpdate() {
    if (current == 0) {
      left_arrow.classList.remove("active");
      menu.style.left = ''
    }
    else if (current == 4) {
      right_arrow.classList.remove("active");
    }
    else {
      left_arrow.classList.add("active");
      right_arrow.classList.add("active");
    }

    if (left_arrow.classList.contains("active")) {
      left_arrow.style.display = 'inline';
    }
    else {
      left_arrow.style.display = 'none';
    }

    if (right_arrow.classList.contains("active")) {
      right_arrow.style.display = 'inline';
    }
    else {
      right_arrow.style.display = 'none';
    }
  }

  function MountainUpdate() {
    wrapper.scrollBy({
      left: $(".content").eq(current).offset().left,
      behavior: 'smooth'
    })
    console.log($(".content").eq(0).offset().left)
  }
}


