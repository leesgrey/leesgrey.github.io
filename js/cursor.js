// fun cursor :)
export function cursor() {
   console.log('cursor')
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