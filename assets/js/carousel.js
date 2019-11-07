// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
//   autoPlay: 12000, // Or a number in ms
//
// });


$(document).ready(function(){
  $('.first').slick({
    vertical: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 12000,
  });
  $('.second').slick({
    vertical: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 11000,
  });
});
