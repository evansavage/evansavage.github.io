$(".slide-btn").click(function(){
  var parent = $(this).parent();
  console.log(parent);
  var siblings = parent.siblings();
  console.log(siblings);
  $(this).parent().siblings().slideDown();
  // console.log(select);
  // select.css("background-color", "red");
});
$(".exit-button").click(function(){
  $(this).parent().parent().slideUp();
  // console.log(select);
  // select.css("background-color", "red");
});

$(".open-nav-button, .bottom-player-photo-container").on('click', function() {
    $('.bottom-player-wrapper').slideUp(100);
});
$(".closebtn").on('click', function() {
  setTimeout(function () {
      $('.bottom-player-wrapper').slideDown(200);
  }, 350);
});
