// fun cursor :)
document.addEventListener('DOMContentLoaded', init, false);
function init(){
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
}
