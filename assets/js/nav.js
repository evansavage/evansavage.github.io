$(document).ready(function() {
  // console.log("peepee poopoo 2!!")
  // $('.social-links').addClass('home-social');
  var width = window.outerWidth;
  var open = 0
  $('.menu').on('click', function() {
    $(this).toggleClass('open');
    console.log($(this).hasClass('open'));
    if ($('.music-content-container').css('display') != 'none') {

      $('.social-links').toggle(300);
    }

    $('.mobile-nav-wrapper').toggleClass('open');
    // if ($('.social-links').css('display') == 'none') {
    //   $('.social-links').toggle(300);
    // }
    open += 1;
    open %= 2;
    if (open == 1) {
      $('body').css('overflow', 'hidden');
    }
    else {
      $('body').css('overflow', 'scroll');
    }

  });
  $('.home-title').on('click', function() {
    if ($('.home-content-container').css('display') == 'none') {
      $('.about-content-container').fadeOut('fast');
      $('.music-content-container').fadeOut('fast');
      $('.research-content-container').fadeOut('fast');
      $('.dev-content-container').fadeOut('fast');
      $('.social-links').addClass('home-social');
      $('html').removeClass('not-home');
      $('.home-content-container').fadeIn('medium');
    }
    if (width < 768 && $('.mobile-nav-wrapper').hasClass('open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
      open = 0;
      $('body').css('overflow', 'scroll');
    }

  });
  $('.about-nav').on('click', function() {
    if ($('.about-content-container').css('display') == 'none') {
      $('.home-content-container').fadeOut('fast');
      $('.music-content-container').fadeOut('fast');
      $('.research-content-container').fadeOut('fast');
      $('.dev-content-container').fadeOut('fast');
      $('.social-links').removeClass('home-social');
      $('html').addClass('not-home');
      $('.about-content-container').css('display', 'flex').hide().fadeIn('medium');
    }
    if (width < 768 && $('.mobile-nav-wrapper.open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
      open = 0;
      $('body').css('overflow', 'scroll');
    }
  });
  $('.music-nav').on('click', function() {
    if ($('.music-content-container').css('display') == 'none') {
      $('.home-content-container').fadeOut('fast');
      $('.about-content-container').fadeOut('fast');
      $('.research-content-container').fadeOut('fast');
      $('.dev-content-container').fadeOut('fast');
      $('.social-links').removeClass('home-social');
      $('html').addClass('not-home');
      $('.music-content-container').fadeIn('medium');
      $('.music-content-container').css('display', 'flex');
    }
    if (width < 768 && $('.mobile-nav-wrapper.open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
      open = 0;
      $('body').css('overflow', 'scroll');
    }
    if (width <= 576) {
      $('.social-links').toggle(300);
    }
    $('.music-inner.carousel').flickity('resize');
  });
  $('.research-nav').on('click', function() {
    if ($('.research-content-container').css('display') == 'none') {
      $('.home-content-container').fadeOut('fast');
      $('.about-content-container').fadeOut('fast');
      $('.music-content-container').fadeOut('fast');
      $('.dev-content-container').fadeOut('fast');
      $('.social-links').removeClass('home-social');
      $('html').addClass('not-home');
      $('.research-content-container').fadeIn('medium');
    }
    if (width < 768 && $('.mobile-nav-wrapper.open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
      open = 0;
      $('body').css('overflow', 'scroll');
    }
  });
  $('.dev-nav').on('click', function() {
    if ($('.dev-content-container').css('display') == 'none') {
      $('.home-content-container').fadeOut('fast');
      $('.about-content-container').fadeOut('fast');
      $('.music-content-container').fadeOut('fast');
      $('.research-content-container').fadeOut('fast');
      $('.social-links').removeClass('home-social');
      $('html').addClass('not-home');
      $('.dev-content-container').fadeIn('medium');
    }
    if (width < 768 && $('.mobile-nav-wrapper').hasClass('open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
      open = 0;
      $('body').css('overflow', 'scroll');
    }
  });
})
