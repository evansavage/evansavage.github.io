$(document).ready(function(){
  console.log('yes');
  $('.home-wrap').css('display', 'none');
  $('.music-title').hover(function () {
    $('.home-wrap.m').animate({width: 'toggle'});
  });
  $('.producer-title').hover(function () {
    $('.home-wrap.p').animate({width: 'toggle'});
  });
  $('.research-title').hover(function () {
    $('.home-wrap.r').animate({width: 'toggle'});
  });
  $('.web-title').hover(function () {
    $('.home-wrap.w').animate({width: 'toggle'});
  });
});
