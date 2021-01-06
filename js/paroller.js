$(".paroller, [data-paroller-factor]").paroller({
	factor: 0.1,            // multiplier for scrolling speed and offset
	factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
	factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
	factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
	factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
	type: 'foreground',     // background, foreground
	direction: 'vertical', // vertical, horizontal
	transition: 'transform 0.2s ease-in'
});

/* ScollTrigger */
// gasp.registerPlugin(ScrollTrigger);

// gsap.to("#quote_3",{
// 	scrollTrigger:{
// 		trigger: "#quote_3",
// 		pin: true,
// 		start: "center center",
// 		end: "+=200",
// 		scrub: true,
// 		markers: true,
// 		id: "quote_1",
// 		toggleClass: {
// 			targets: "#quote_3",
// 			className: "jumbotron"}
// 	}
// });

// let timeLine = new gsap.timeline({
// 	scollTrigger:{
// 		trigger: "#quote_1",
// 		pin: true,
// 		start: "center center",
// 		end: "+=200",
// 		scrub: true,
// 		markers: true,
// 		id: "quote_1",
// 	},
// });
// timeLine.to('#quote_1',1,{})