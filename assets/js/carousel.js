// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
//   autoPlay: 12000, // Or a number in ms
//
// });
var isMoving = false
var compareVal = 4

$(document).ready(function(){
  $('.first').slick({
    vertical: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 12000,
    verticalSwiping: true,
    pauseOnFocus: false,
    slide: 'div',
    swipe: true,
    // draggable: true,
  });
  // $('.second').slick({
  //   vertical: true,
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 11000,
  // });
  $('.first').on('wheel', (function(e) {
    var scroll = e.originalEvent.deltaY;
    var scroll_log = Math.sqrt(Math.abs(scroll))
    console.log(scroll_log);
    if (Math.abs(scroll_log) > 6 && !isMoving) {
      isMoving = true;
      compareVal = 10
      if (scroll < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
      setTimeout(function() {
        isMoving=false;
        compareVal = 8
      }, 800);
    }

  }));
});
