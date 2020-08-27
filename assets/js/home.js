// $(document).ready(function() {
//   var last_selection = -1
//   var backgrounds = $('.home-background-image')
//   var selection = Math.floor(Math.random() * backgrounds.length);
//   // console.log(backgrounds.eq(selection));
//   // backgrounds.eq(selection).fadeToggle('medium');
//   // window.setInterval(function(){
//   //   /// call your function here
//   //   var selection = Math.floor(Math.random() * backgrounds.length);
//   //   if (selection == last_selection) {
//   //     selection += 1
//   //     selection %= backgrounds.length
//   //   }
//   //
//   //   if (last_selection != -1) {
//   //     backgrounds.eq(last_selection).fadeToggle('slow');
//   //   }
//   //   backgrounds.eq(selection).fadeToggle('slow');
//   //   last_selection = selection
//   // }, 3000);
//   $('.home-content-container').slick({
//     initialSlide: selection - 1,
//     easing: 'swing',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     arrows: false,
//     pauseOnHover: false,
//     // vertical: true,
//     speed: 700,
//   });
//   $('.home-content-container').on('beforeChange', function(event, slick, direction){
//     var html_backgrounds = ['#8e9285', '#fcfcfa', '#7e8c75'];
//     if (!$('html').hasClass('not-home')) {
//       $('html').css('background-color', html_backgrounds[selection]);
//     }
//     selection += 1
//     selection %= backgrounds.length
//     // left
//   });
// })
