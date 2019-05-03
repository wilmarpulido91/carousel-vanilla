window.onload = function() {
	var carousels = document.querySelectorAll('.carousel-inner > *');
	var arrCarosuels = Array.from(carousels);
	var controls = document.querySelectorAll('.arrow');
	var arrControls = Array.from(controls);

	arrControls.forEach(function(arrow, key){
		arrow.addEventListener('click', function() {

			if(arrCarosuels.length > 1) {
				const direction = arrow.getAttribute('data-value');
				const currCarousel = document.querySelector('.carousel-item.active');

				if(direction == "left") {
					setNavigation(currCarousel, '', 'left', true);

					if(arrCarosuels[arrCarosuels.length - 1] == currCarousel) {
						setNavigation(arrCarosuels[0], 'next', 'left', false);
					} else {
						setNavigation(currCarousel.nextElementSibling, 'next', 'left', false);
					}
				} else if(direction == "right") {
					setNavigation(currCarousel, '', 'right', true);

					if(arrCarosuels[0] == currCarousel) {
						setNavigation(arrCarosuels[arrCarosuels.length - 1], 'prev', 'right', false);
					}else {
						setNavigation(currCarousel.previousElementSibling, 'prev', 'right', false);
					}
				}
			}
		});
	});
}

function setNavigation(elm, espace, direction, current) {
	if(current) {
		elm.classList.add('carousel-item-' + direction);
		setTimeout(function(){
			elm.classList.remove('active');
			elm.classList.remove('carousel-item-' + direction);
		}, 300);
	}else {
		elm.classList.add('carousel-item-' + espace);
		elm.classList.add('carousel-item-' + direction);
		setTimeout(function(){
			elm.classList.add('active');
			elm.classList.remove('carousel-item-' + espace);
			elm.classList.remove('carousel-item-' + direction);
		}, 300);	
	}
}