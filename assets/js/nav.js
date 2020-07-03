$(document).ready(function() {
  // console.log("peepee poopoo 2!!")
  // $('.social-links').addClass('home-social');
  $('.menu').on('click', function() {
    $(this).toggleClass('open');
    $('.mobile-nav-wrapper').toggleClass('open');
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
    if ($('.mobile-nav-wrapper').hasClass('open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
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
      $('.about-content-container').fadeIn('medium');
    }
    if ($('.mobile-nav-wrapper.open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
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
    }
    if ($('.mobile-nav-wrapper.open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
    }
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
    if ($('.mobile-nav-wrapper.open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
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
    if ($('.mobile-nav-wrapper').hasClass('open')) {
      $('.mobile-nav-wrapper').toggleClass('open');
      $('.menu').toggleClass('open');
    }
  });
})
