'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  /* element selection */
  const wrapper = document.querySelector('.outer-wrapper');
  const content = document.getElementsByClassName('content');
  const pages = $(".content");

  // tracks page
  let current = 0;

  // set page to landing upon load
  ChangePage(0);

  // scroll to landing on moon click
  document.querySelector("#moon").addEventListener('click', function(e) {
    wrapper.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    ChangePage(0);
  })

  // menu buttons
  Array.from(document.getElementsByClassName('about')).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(1); });
  })
  Array.from(document.getElementsByClassName('projects')).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(2); });
  })
  Array.from(document.getElementsByClassName('art')).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(3); });
  })
  Array.from(document.getElementsByClassName('contact')).forEach(function(x){
    x.addEventListener('click', function() { ChangePage(4); });
  })

  // arrow buttons
  document.querySelector('#leftarrow').addEventListener('click', function(e) { ChangePage(current - 1); });
  document.querySelector('#rightarrow').addEventListener('click', function(e) { ChangePage(current + 1); });

  // fun cursor :)
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

    const left_arrow = document.querySelector('#leftarrow');
    const right_arrow = document.querySelector('#rightarrow');

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
