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
function glitchRand() {
  var titles = ['.music-title', '.producer-title', '.research-title', '.web-title']
  // while ($('.about-content-container').css('display') == 'block') {
  //   var length = 2000
  //   console.log('yeet');
  //   var burst = Math.floor(Math.random() * 10)
  //   var selection = titles[Math.floor(Math.random() * titles.length)];
  //   // var length = Math.floor(Math.random() * 2000)
  //   setTimeout(
  //     $(selection).addClass('glitch')
  //   , Math.floor(length / burst));
  //   $(selection).removeClass('glitch');
  // }


}
// document.fonts.ready.then(function() {
//   var aboutHeaderText = ['MUSIC TECHNOLOGIST', 'PRODUCER', 'AI RESEARCHER', 'DEVELOPER']
//   var aboutSelectors = ['.music-title', '.producer-title', '.research-title', '.web-title']
//   $.each(aboutHeaderText, function(i, value) {
//     var text = new Blotter.Text(value, {
//       family : "microgramma, serif",
//       size : 27,
//       fill : "#36413E"
//     })
//     var material = new Blotter.LiquidDistortMaterial();
//
//     // Play with the value for uSpeed. Lower values slow
//     // down animation, while higher values speed it up. At
//     // a speed of 0.0, animation is stopped entirely.
//     material.uniforms.uSpeed.value = 0.25;
//     var blotter = new Blotter(material, {
//       texts : text
//     });
//     var elem = $(aboutSelectors[i]);
//     var scope = blotter.forText(text);
//     scope.appendTo(elem);
//   });
// }.bind(this));
$(document).ready(function(){
  // console.log('yes');
  // glitchRand();
  var titles = ['.music-title', '.producer-title', '.research-title', '.web-title']
  if ($('.about-content-container').css('display') == 'block') {

  }
  window.setInterval(function(){
    /// call your function here
    var selection = titles[Math.floor(Math.random() * titles.length)];
    // setTimeout(
    $(selection).toggleClass('glitch')
    // , Math.floor(Math.random() * 1500));
    // $(selection).removeClass('glitch')
  }, Math.floor(Math.random() * 300));
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
