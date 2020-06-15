'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  /* element selection */
  const wrapper = document.querySelector('.outer-wrapper');

  const moon = document.querySelector('#moon');

  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');

  const content = document.getElementsByClassName('content');

  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  const name = document.querySelector("#about");
  const menu = document.querySelector("#menu");

  const star = document.querySelector("#cursor");
  console.log(star)

  /* keep track of section */
  let current = 0;
  console.log(content)

  /* arrow click */
  left_arrow.addEventListener('click', function(e) {
    content[current].style.opacity = 0;
    current--;
    ArrowUpdate();
    MountainUpdate();
  })

  right_arrow.addEventListener('click', function(e) {
    content[current].style.opacity = 0;
    if (right_arrow.classList.contains('fadedIn')) {
      right_arrow.classList.remove('fadedIn');
    }
    current++;
    ArrowUpdate(current);
    MountainUpdate();
  })

  $(document).bind('mousemove', function(e){
      $('#tail').css({
         left:  e.pageX - 10,
         top:   e.pageY - 10
      });
  });

  function ArrowUpdate() {
    if (current == 0) {
      left_arrow.classList.remove("active");
      menu.style.left = ''
    }
    else if (current == 5) {
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
    console.log(current)
    content[current].style.opacity = 1;
    wrapper.scrollBy({
      left: $(".content").eq(current).offset().left,
      behavior: 'smooth'
    })
    console.log($(".content").eq(0).offset().left)
  }

}

/*
if(window.pageYOffset != 0)
  alert("You are at the top of this window");
}
*/
