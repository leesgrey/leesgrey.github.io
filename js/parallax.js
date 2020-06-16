'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  /* element selection */
  const wrapper = document.querySelector('.outer-wrapper');
  const moon = document.querySelector('#moon');

  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');

  const content = document.getElementsByClassName('content');
  const pages = $(".content");

  const foreground = document.querySelector('.foreground');
  const background = document.querySelector('.background');
  const midground = document.querySelector('.midground');

  const menu = document.querySelector("#menu");

  const star = document.querySelector("#cursor");

  const about = document.getElementsByClassName('about');
  const projects = document.getElementsByClassName('projects');
  const art = document.getElementsByClassName('art');
  const contact = document.getElementsByClassName('contact');

  // tracks page
  let current = 0;

  ChangePage(0);

  moon.addEventListener('click', function(e) {
    wrapper.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    ChangePage(0);
  })

  // menu buttons
  Array.from(about).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(1); });
  })

  Array.from(projects).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(2); });
  })

  Array.from(art).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(3); });
  })

  Array.from(contact).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(4); });
  })

  /* arrow click */
  left_arrow.addEventListener('click', function(e) { ChangePage(current - 1); });

  right_arrow.addEventListener('click', function(e) { ChangePage(current + 1); });

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

  function ChangePage(pagenum){
    // make old page invisible
    content[current].style.opacity = 0;

    current = pagenum;
    console.log(current);

    let topref;
    let leftref;

    // update visible arrows
    if (current == 0) {
      left_arrow.classList.remove("active");
      right_arrow.classList.add("active");
    }
    else if (current == 4) {
      left_arrow.classList.add("active");
      right_arrow.classList.remove("active");
    }
    else {
      left_arrow.classList.add("active");
      right_arrow.classList.add("active");
    }
    // scroll to page
    wrapper.scrollBy({
      top: pages.eq(current).offset().top,
      left: pages.eq(current).offset().left,
      behavior: 'smooth'
    })
    // make new page visible
    content[current].style.opacity = 1;
  }
}
