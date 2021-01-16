$(document).ready(function() {
  var pageTopStart = $(document).scrollTop();

  var pageBottomStart = pageTopStart + $(window).height();
  
  $('.music-nav').on('click', function() {
    $(".carousel-card").each(function(i) {
      if ($(this).position().top < pageBottomStart - 250 && $(this).offset().top + $(this).height() - pageTopStart >= 200) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  })

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();

    var pageBottom = pageTop + $(window).height();
    console.log(pageTop, pageBottom, $(".carousel-card").first().offset().top - pageTop);
    $(".carousel-card").each(function(i) {
      if ($(this).position().top < pageBottom - 250 && $(this).offset().top + $(this).height() - pageTop >= 200) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  })

});
