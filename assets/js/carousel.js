// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
//   autoPlay: 12000, // Or a number in ms
//
// });
var isMoving = false
var compareVal = 0

$(document).ready(function(){
  $('.first').slick({
    vertical: true,
    dots: true,
    infinite: false,
    // initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 12000,
    verticalSwiping: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    slide: 'div',
    swipe: true,
    draggable: false,
  });
  $('.music-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    swipe: true,
    slide: 'div',
    swipeToSlide: true,
    touchMove: true,
    draggable: true
  });
  $('#sc-photo-container').slick({
    infinite: true,
    slidesToShow: 1,
    // dots: true,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    swipe: false,
    // slide: 'div',
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
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
    // console.log(scroll_log);
    if (Math.abs(scroll_log) > compareVal && !isMoving) {
      isMoving = true;
      compareVal = 10
      if (scroll < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
      setTimeout(function() {
        isMoving=false;
        compareVal = 5.5
      }, 800);
    }

  }));
  $('.music-carousel').on('wheel', (function(e) {
    var scroll = e.originalEvent.deltaX;
    var scroll_log = Math.sqrt(Math.abs(scroll))
    // console.log(scroll_log);
    if (Math.abs(scroll_log) > compareVal && !isMoving) {
      isMoving = true;
      compareVal = 10
      if (scroll < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
      setTimeout(function() {
        isMoving=false;
        compareVal = 5.5
      }, 800);
    }

  }));
});
