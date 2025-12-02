$(window).load(function () {
	$('.loader').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	//responsibe balloon float positions
	function getRandomPosition() {
		const ww = $(window).width();
		const wh = $(window).height();

		const maxLeft = ww > 768 ? ww - 200 : ww - 120;   // smaller on mobile
		const maxBottom = wh > 768 ? wh - 300 : wh - 150; // smaller on mobile

		return {
			left: Math.random() * maxLeft,
			bottom: Math.random() * maxBottom
		};
	}



	//balloons
	var vw;
	$(window).resize(function () {
		positionCenteredBalloons();
	});
	// bulbs
	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});





	function loopOne() {
		const pos = getRandomPosition();
		$('#b1').animate(pos, 10000, loopOne);
	}

	function loopTwo() { const pos = getRandomPosition(); $('#b2').animate(pos, 10000, loopTwo); }
	function loopThree() { const pos = getRandomPosition(); $('#b3').animate(pos, 10000, loopThree); }
	function loopFour() { const pos = getRandomPosition(); $('#b4').animate(pos, 10000, loopFour); }
	function loopFive() { const pos = getRandomPosition(); $('#b5').animate(pos, 10000, loopFive); }
	function loopSix() { const pos = getRandomPosition(); $('#b6').animate(pos, 10000, loopSix); }
	function loopSeven() { const pos = getRandomPosition(); $('#b7').animate(pos, 10000, loopSeven); }
	function loopEight() { const pos = getRandomPosition(); $('#b8').animate(pos, 10000, loopEight); }



	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();

		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});


	function positionCenteredBalloons() {
    const vw = $(window).width();
    
    // get actual balloon width from DOM
    const balloonWidth = $('#b11').outerWidth();
    const spacing = balloonWidth * 0.9; // 10% extra padding per balloon

    const balloonCount = 8;
    const totalWidth = balloonCount * balloonWidth + (balloonCount - 1) * (spacing - balloonWidth);
    const startX = (vw - totalWidth) / 2;

    const ids = ['b11','b22','b33','b44','b55','b66','b77','b88'];

    ids.forEach((id, idx) => {
        $('#' + id).animate({
            top: 240,
            left: startX + (idx * spacing)
        }, 500);
    });
}



	$('#wish_message').click(function () {
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22');
		$('#b3').attr('id', 'b33');
		$('#b4').attr('id', 'b44');
		$('#b5').attr('id', 'b55');
		$('#b6').attr('id', 'b66');
		$('#b7').attr('id', 'b77');
		$('#b8').attr('id', 'b88');

		positionCenteredBalloons();

		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);

		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});


	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(1500).promise().done(function () {
				i = i + 1;
				$("p:nth-child(" + i + ")").fadeIn('slow').delay(1500);
				if (i == 50) {
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});

				}
				else {
					msgLoop(i);
				}

			});
			// body...
		}

		msgLoop(0);

	});
});

