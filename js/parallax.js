'use strict';
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  // element selection
  const wrapper = document.querySelector('.outer-wrapper');
  const content = document.getElementsByClassName('content');
  const left_arrow = document.querySelector('#leftarrow');
  const right_arrow = document.querySelector('#rightarrow');
  const pages = $(".content");

  let currentPage = 0;

  function changePage(newPage){
    // make old page invisible
    content[currentPage].style.opacity = 0;

    // update visible arrows
    if (newPage == 0) {
      left_arrow.classList.remove("active");
      right_arrow.classList.add("active");
    }
    else if (newPage == pages.length - 1) {
      left_arrow.classList.add("active");
      right_arrow.classList.remove("active");
    }
    else {
      left_arrow.classList.add("active");
      right_arrow.classList.add("active");
    }

    // scroll to page
    wrapper.scrollBy({
      top: pages.eq(newPage).offset().top,
      left: pages.eq(newPage).offset().left,
      behavior: 'smooth'
    });
  
    // make new page visible
    content[newPage].style.opacity = 1;

    currentPage = newPage;
  }

  changePage(0); // set page to landing upon load

  // scroll to landing on moon click
  document.querySelector("#moon").addEventListener('click', () => {
    // TODO: revisit overlapping scrolls
    wrapper.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
    changePage(0);
  })

  // menu buttons
  Array.from(document.getElementsByClassName('about')).forEach((x) => {
    x.addEventListener('click', function() { changePage(1); });
  });
  Array.from(document.getElementsByClassName('projects')).forEach((x) => {
    x.addEventListener('click', function() { changePage(2); });
  });
  Array.from(document.getElementsByClassName('art')).forEach((x) => {
    x.addEventListener('click', function() { changePage(3); });
  });
  Array.from(document.getElementsByClassName('contact')).forEach((x) => {
    x.addEventListener('click', function() { changePage(4); });
  });

  // arrow buttons
  document.querySelector('#leftarrow').addEventListener('click', () => changePage(currentPage - 1));
  document.querySelector('#rightarrow').addEventListener('click', () => changePage(currentPage + 1));

  // project slideshow
  const slides = document.querySelectorAll('.slide');
  const slidemenu = document.querySelector('#slideshowmenu');

  const projects = ["Musichar", "Personal Site", "Study Aboard Matching", "Logic2020", "Team Garbage", "GameCentre"];
  let currentSlide = 0;

  for (let i = 0; i < projects.length; i++){
    let projectlink = document.createElement("li");
    projectlink.innerText = projects[i];

    projectlink.addEventListener('click', function(e) {
      // fade current page
      slides[currentSlide].style.opacity = 0;
      setTimeout(function() {
        // remove page from flow
        slides[currentSlide].classList.remove("active");
        // set add next page
        slides[i].classList.add("active");
        // fade in
        slides[i].style.opacity = 1;
        currentSlide = i;
      }, 500)
    })
    slidemenu.appendChild(projectlink)
  }

  // fun cursor :)
  $(document).bind('mousemove', function(e){
      $('#outer').css({
         left:  e.pageX - 10,
         top:   e.pageY - 10
      });
      $('#inner').css({
         left:  e.pageX - 5,
         top:   e.pageY - 5
      });
  });
};
