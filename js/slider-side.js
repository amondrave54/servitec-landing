/** @format */
var home1 = document.querySelector('#home1');
var home2 = document.querySelector('#home2');
var home3 = document.querySelector('#home3');

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000,
	speedAsDuration: true,
	selector: '[data-scroll]',
	ignore: '[data-scroll-ignore]',
});
