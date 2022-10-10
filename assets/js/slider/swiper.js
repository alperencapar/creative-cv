var swiper = new Swiper(".swiper", {
	loop: true,
	pagination: {
		el: ".slider-indicators"
	},
	autoplay: {
		delay: 4000
	}
});

export default swiper;