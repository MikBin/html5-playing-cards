$(document).ready(function() {

    $('.spades').addClass('crd_zoomIn');

    $('.diams').addClass('crd_zoomInDown');
    $('.hearts').addClass('crd_zoomInUp');
    $('.clubs').addClass('crd_zoomInLeft');

let cards = [`<div class="card-wrapper-normal spades the-ace" rank="1">
			<div class="backgrd-suit"><div>&spades;</div></div>
				<div class="left-column">
					<div class="left-rank"><div class="digit">A</div></div>
					<div class="left-suit"><div>&spades;</div></div>
				</div>
				<div class="center-column">
					<div class="central-rank"><div>&spades;</div></div>
					
				</div>
				<div class="right-column">
					<div class="right-suit"><div>&spades;</div></div>
					<div class="right-rank"><div class="digit">A</div></div>
					
				</div>
			</div>`];
});
