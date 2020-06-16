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

  const about = document.getElementsByClassName('about');
  const projects = document.getElementsByClassName('projects');
  const art = document.getElementsByClassName('art');
  const contact = document.getElementsByClassName('contact');
  let current = 0;


  moon.addEventListener('click', function(e) {
    wrapper.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    current = 0;
    MountainUpdate();
    ArrowUpdate();
  })
  Array.from(about).forEach(function(x){
    x.addEventListener('click', function(e) {
      wrapper.scrollBy({
        top: $("#about").offset().top,
        left: $("#about").offset().left,
        behavior: 'smooth'
      })
      content[current].style.opacity = 0;
      current = 1;
      MountainUpdate()
      ArrowUpdate()
    })
  })

  Array.from(projects).forEach(function(x){
    x.addEventListener('click', function(e) {
      wrapper.scrollBy({
        top: $("#projects").offset().top,
        left: $("#projects").offset().left,
        behavior: 'smooth'
      })
      content[current].style.opacity = 0;
      current = 2;
      MountainUpdate()
      ArrowUpdate()
    })
  })
  Array.from(art).forEach(function(x){
    x.addEventListener('click', function(e) {
      wrapper.scrollBy({
        top: $("#art").offset().top,
        left: $("#art").offset().left,
        behavior: 'smooth'
      })
      content[current].style.opacity = 0;
      current = 3;
      MountainUpdate()
      ArrowUpdate()
    })
  })
  Array.from(contact).forEach(function(x){
    x.addEventListener('click', function(e) {
      wrapper.scrollBy({
        top: $("#contact").offset().top,
        left: $("#contact").offset().left,
        behavior: 'smooth'
      })
      content[current].style.opacity = 0;
      current = 4;
      MountainUpdate()
      ArrowUpdate()
    })
  })

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
      $('#tail1').css({
         left:  e.pageX - 10,
         top:   e.pageY - 10
      });
      $('#tail2').css({
         left:  e.pageX - 5,
         top:   e.pageY - 5
      });
  });

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
    content[current].style.opacity = 1;
    wrapper.scrollBy({
      top: $(".content").eq(current).offset().top,
      left: $(".content").eq(current).offset().left,
      behavior: 'smooth'
    })
  }

}

/*
if(window.pageYOffset != 0)
  alert("You are at the top of this window");
}
*/
