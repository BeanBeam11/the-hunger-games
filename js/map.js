/* map */ 

$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();

	/* popup window */
	// $('area').on('click', function() {
	// 	alert($(this).attr('alt') + 'clicked');
	// 	});
});

$(document).ready(function(){
	// for(let i=1; i<=13; i++){
	// 	$('.district_'+i).click(function(){
	// 		$('.box_map_explain').toggleClass('menu-click')
	// 	});
	// 	$('.district_c').click(function(){
	// 		$('.box_map_explain').toggleClass('menu-click')
	// 	});
	//  }
	// $('.district_9').click(function(){
	// 	$('.word_map_12').html("District 9 - Grain")
	// 	$('.box_map_explain').toggleClass('menu-click')
	// });
	$('.district_1').click(function(){
		$('.word_map_12').html("District 1 - Luxury")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_1.jpg' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_2').click(function(){
		$('.word_map_12').html("District 2 - Masonry")
		$('.box_district_img').css('background-image', 'url(' + '../img/2.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_3').click(function(){
		$('.word_map_12').html("District 3 - Technology")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_3.jpg' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_4').click(function(){
		$('.word_map_12').html("District 4 - Fishing")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_4.jpg' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_5').click(function(){
		$('.word_map_12').html("District 5 - Power")
		$('.box_district_img').css('background-image', 'url(' + '../img/5.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_6').click(function(){
		$('.word_map_12').html("District 6 - Transportation")
		$('.box_district_img').css('background-image', 'url(' + '../img/6.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_7').click(function(){
		$('.word_map_12').html("District 7 - Lumber")
		$('.box_district_img').css('background-image', 'url(' + '../img/7.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_8').click(function(){
		$('.word_map_12').html("District 8 - Textiles")
		$('.box_district_img').css('background-image', 'url(' + '../img/8.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_9').click(function(){
		$('.word_map_12').html("District 9 - Grain")
		$('.box_district_img').css('background-image', 'url(' + '../img/9.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_10').click(function(){
		$('.word_map_12').html("District 10 - Livestock")
		$('.box_district_img').css('background-image', 'url(' + '../img/10.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_11').click(function(){
		$('.word_map_12').html("District 11 - Agriculture")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_11.png' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_12').click(function(){
		$('.word_map_12').html("District 12 - Coal")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_12.jpg' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_13').click(function(){
		$('.word_map_12').html("District 13 - Nuclear")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_13.jpg' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_c').click(function(){
		$('.word_map_12').html("The Capitol")
		$('.box_district_img').css('background-image', 'url(' + '../img/district_c.jpg' + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});


	/* map hover - maphilight */ 
	$.fn.maphilight.defaults = {
		fill: true,
		fillColor: '000000',
		fillOpacity: 0.2,
		stroke: true,
		strokeColor: 'ff0000',
		strokeOpacity: 0,
		strokeWidth: 1,
		fade: true,
		alwaysOn: false
	}
	$(function() {
		$('.map').maphilight();
	});
	/* */
});
