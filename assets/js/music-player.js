var el = document.getElementById('sc-iframe'),
widget = SC.Widget(el);
var listener = new window.keypress.Listener();

window.addEventListener("load", pageFullyLoaded, false);


function pageFullyLoaded(e) {

			window._total_duration = 0;
      var toggleVar = 0;
      var seekVar = 0;
			widget.bind(SC.Widget.Events.READY, function(){
				widget.getDuration(function(duration){
					var seconds = duration / (1000),
					minutes = Math.floor(seconds / 60);
					seconds = Math.floor(seconds % 60);
					document.getElementById('total').innerHTML = minutes + ':' + seconds;
					window._total_duration = duration;
				});
			});

			widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
				widget.getPosition(function(position){
					var seconds = position / (1000),
					minutes = Math.floor(seconds / 60);
					seconds = Math.floor(seconds % 60);
					document.getElementById('position').innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
					document.getElementById('progress').value = (position / window._total_duration) * 100;
				});
			});


			document.getElementById('progress').addEventListener('mousedown', function(){
				widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
			});

			document.getElementById('progress').addEventListener('mouseup', function(){

				widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
					widget.getPosition(function(position){
						var seconds = position / (1000),
						minutes = Math.floor(seconds / 60);
						seconds = Math.floor(seconds % 60);
						document.getElementById('position').innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
						document.getElementById('progress').value = (position / window._total_duration) * 100;
					});
				});
			});

			document.getElementById('progress').addEventListener('input', function(){
				var newPos = (this.value * window._total_duration)/ 100;
				var seconds = newPos / (1000),
				minutes = Math.floor(seconds / 60);
				seconds = Math.floor(seconds % 60);
				document.getElementById('position').innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
				widget.seekTo(newPos);
			});
      // document.getElementById('toggle-play').className = "toggle-play play";
      // widget.skip('2');
      $('#toggle-play').on('click', function(){
        if (toggleVar % 2 == 0) {
          widget.play();
          $('#toggle-play').toggleClass("play pause");
        }
        else if (toggleVar % 2 == 1) {
          widget.pause();
          $('#toggle-play').toggleClass("pause play");
        }
        toggleVar += 1;
        toggleVar = toggleVar % 2;
      });

      $('#sc-prev').on('click', function() {
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
    					document.getElementById('total').innerHTML = minutes + ':' + seconds;
    					window._total_duration = duration;
    				});
    			});
          $('#sc-photo-container').slick('slickPrev');
          widget.skip(seekVar);
          console.log(seekVar);
      });

      $('#sc-next').on('click', function() {
          seekVar += 1;
          seekVar = seekVar % 6;
          widget.bind(SC.Widget.Events.READY, function(){
    				widget.getDuration(function(duration){
    					var seconds = duration / (1000),
    					minutes = Math.floor(seconds / 60);
    					seconds = Math.floor(seconds % 60);
              if (seconds < 10) {
                document.getElementById('total').innerHTML = minutes + ':0' + seconds;
              } else {
                document.getElementById('total').innerHTML = minutes + ':' + seconds;
              }
    					// document.getElementById('total').innerHTML = minutes + ':' + seconds;
    					window._total_duration = duration;
    				});
    			});
          $('#sc-photo-container').slick('slickNext');
          widget.skip(seekVar);
          console.log(seekVar);
      });

      listener.simple_combo("space", function(e) {
        e.preventDefault();
        if (toggleVar % 2 == 0) {
          widget.play();
          $('#toggle-play').toggleClass("play pause");
        }
        else if (toggleVar % 2 == 1) {
          widget.pause();
          $('#toggle-play').toggleClass("pause play");
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
