var homeWraps = $('.home-wrap');
var homeWrapClasses = ['m','p','r','w']
var start = Date.now();
var toggle = 0
function glitchload() {
  var selection = homeWrapClasses[Math.floor(Math.random() * homeWrapClasses.length)];
  // console.log(selection, $('.home-wrap.' + selection))
  var randomTranslate = Math.random() * 200
  $('.home-wrap.' + selection).fadeIn(Math.random() * 100);
  $('.home-wrap.' + selection).css('transform', `translateX(${randomTranslate}px)`);
  $('.home-wrap.' + selection).fadeOut(Math.random() * 100);
  // $('.home-wrap.' + selection).css('transform', `translateX(0px)`);
  // homeWraps[Math.floor(Math.random() * homeWraps.length)].fadeOut('fast');
  // console.log(homeWraps);
  // toggle = 1
}

$(document).ready(function(){
  console.log('yes');
  if (window.outerWidth > 769) {
    // $('.home-wrap').css('display', 'none');
    // $('.music-title').hover(function () {
    //   $('.home-wrap.m').fadeToggle('fast');
    // });
    // $('.producer-title').hover(function () {
    //   $('.home-wrap.p').fadeToggle('fast');
    // });
    // $('.research-title').hover(function () {
    //   $('.home-wrap.r').fadeToggle('fast');
    // });
    // $('.web-title').hover(function () {
    //   $('.home-wrap.w').fadeToggle('fast');
    // });
  }

  // $('.home-wrap').fadeIn('fast');
  // while (toggle != 8) {
  //   glitchload();
  //   toggle += 1;
  // }

  // setTimeout($('.home-wrap').css('left', '108%'), 10000);

});
