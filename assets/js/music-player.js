

var screenWidth =  screen.width;
var screenHeight = screen.height;

var parentContainer = $('.tracks-content');

var el = document.getElementById('sc-iframe');

if (screenWidth < 600) {
	el = document.getElementById('sc-iframe-overlay');
	parentContainer = $('#myNav');
}

var total = parentContainer.find('.total')[0];
var position_value = parentContainer.find('.position')[0];
var progress = parentContainer.find('.progress')[0];
var togglePlay = parentContainer.find('.toggle-play')[0];
var pauseSVG = parentContainer.find('.pause-svg')[0];
var playSVG = parentContainer.find('.play-svg')[0];
var scPrev = parentContainer.find('.sc-prev')[0];
var scNext = parentContainer.find('.sc-next')[0];
var photoContainer = parentContainer.find('.sc-photo-container')[0];
// console.log('Parent container: ', parentContainer);
// console.log(total, position, progress, togglePlay, pauseSVG, playSVG);

var listener = new window.keypress.Listener();

window.addEventListener("load", pageFullyLoaded, false);


function pageFullyLoaded(e) {

			widget = SC.Widget(el);
			window._total_duration = 0;
      var toggleVar = 0;
      var seekVar = 0;
			widget.bind(SC.Widget.Events.READY, function(){
				widget.getDuration(function(duration){
					var seconds = duration / (1000),
					minutes = Math.floor(seconds / 60);
					seconds = Math.floor(seconds % 60);
					total.innerHTML = minutes + ':' + seconds;
					window._total_duration = duration;
				});
			});

			widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
				widget.getPosition(function(position){
					var seconds = position / (1000),
					minutes = Math.floor(seconds / 60);
					seconds = Math.floor(seconds % 60);
					position_value.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
					progress.value = (position / window._total_duration) * 100;
				});
			});


			progress.addEventListener('mousedown', function(){
				widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
			});

			progress.addEventListener('mouseup', function(){

				widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
					widget.getPosition(function(position){
						var seconds = position / (1000),
						minutes = Math.floor(seconds / 60);
						seconds = Math.floor(seconds % 60);
						position_value.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
						progress.value = (position / window._total_duration) * 100;
					});
				});
			});

			progress.addEventListener('input', function(){
				var newPos = (this.value * window._total_duration)/ 100;
				var seconds = newPos / (1000),
				minutes = Math.floor(seconds / 60);
				seconds = Math.floor(seconds % 60);
				position_value.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
				widget.seekTo(newPos);
			});
      // document.getElementById('toggle-play').className = "toggle-play play";
      // widget.skip('2');
      parentContainer.find('.toggle-play').on('click', function(){
        if (toggleVar % 2 == 0) {
          widget.play();
          parentContainer.find('.pause-svg').css('display', 'block');
					parentContainer.find('.play-svg').css('display', 'none');
        }
        else if (toggleVar % 2 == 1) {
          widget.pause();
					parentContainer.find('.pause-svg').css('display', 'none');
					parentContainer.find('.play-svg').css('display', 'block');
        }
        toggleVar += 1;
        toggleVar = toggleVar % 2;
      });

      parentContainer.find('.sc-prev').on('click', function() {
          if (seekVar === 0) {
            seekVar = 5;
          } else {
            seekVar -= 1;
            // seekVar = seekVar % 6;
          }

          widget.bind(SC.Widget.Events.READY, function(){
    				widget.getDuration(function(duration){
    					var seconds = duration / (1000),
    					minutes = Math.floor(seconds / 60);
    					seconds = Math.floor(seconds % 60);
    					total.innerHTML = minutes + ':' + seconds;
    					window._total_duration = duration;
    				});
    			});
          parentContainer.find('.sc-photo-container').slick('slickPrev');
					if (screenWidth < 600) {
						$('.bottom-player-photo-container').slick('slickPrev');
					}
          widget.skip(seekVar);
          console.log(seekVar);
      });

      parentContainer.find('.sc-next').on('click', function() {
          seekVar += 1;
          seekVar = seekVar % 6;
          widget.bind(SC.Widget.Events.READY, function(){
    				widget.getDuration(function(duration){
    					var seconds = duration / (1000),
    					minutes = Math.floor(seconds / 60);
    					seconds = Math.floor(seconds % 60);
              if (seconds < 10) {
                total.innerHTML = minutes + ':0' + seconds;
              } else {
                total.innerHTML = minutes + ':' + seconds;
              }
    					// document.getElementById('total').innerHTML = minutes + ':' + seconds;
    					window._total_duration = duration;
    				});
    			});
          parentContainer.find('.sc-photo-container').slick('slickNext');
					if (screenWidth < 600) {
						$('.bottom-player-photo-container').slick('slickNext');
					}
          widget.skip(seekVar);
          console.log(seekVar);
      });

      listener.simple_combo("space", function(e) {
        e.preventDefault();
        if (toggleVar % 2 == 0) {
          widget.play();
					parentContainer.find('.pause-svg').css('display', 'block');
					parentContainer.find('.play-svg').css('display', 'none');
					$('.bottom-player-wrapper .music-control-wrapper').find('.pause-svg').css('display', 'block');
					$('.bottom-player-wrapper .music-control-wrapper').find('.play-svg').css('display', 'none');
        }
        else if (toggleVar % 2 == 1) {
          widget.pause();
					parentContainer.find('.pause-svg').css('display', 'none');
					parentContainer.find('.play-svg').css('display', 'block');
					$('.bottom-player-wrapper .music-control-wrapper').find('.pause-svg').css('display', 'none');
					$('.bottom-player-wrapper .music-control-wrapper').find('.play-svg').css('display', 'block');
        }
        toggleVar += 1;
        toggleVar = toggleVar % 2;
      });

      // $(window).keyup(function(e){
      //
      //     if((e.target == document.body) && (e.which === 32 || e.keyCode === 32)){
      //         e.preventDefault();
      //         if (toggleVar % 2 == 0) {
      //           widget.play();
      //           $('#toggle-play').toggleClass("play pause");
      //         }
      //         else if (toggleVar % 2 == 1) {
      //           widget.pause();
      //           $('#toggle-play').toggleClass("pause play");
      //         }
      //         toggleVar += 1;
      //         toggleVar = toggleVar % 2;
      //         // if ($('#toggle-play').hasClass('play')) {
      //         //     widget.play();
      //         //     $('#toggle-play').toggleClass("play pause");
      //         // }
      //         // else {
      //         //     widget.pause();
      //         //     $('#toggle-play').toggleClass("pause play");
      //         //     // document.getElementById('toggle-play').className = "toggle-play play";
      //         // }
      //     }
      // });
		}
