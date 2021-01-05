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
		let src_img = $('.img_d_1').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_2').click(function(){
		$('.word_map_12').html("District 2 - Masonry")
		let src_img = $('.img_d_2').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_3').click(function(){
		$('.word_map_12').html("District 3 - Technology")
		let src_img = $('.img_d_3').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_4').click(function(){
		$('.word_map_12').html("District 4 - Fishing")
		let src_img = $('.img_d_4').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_5').click(function(){
		$('.word_map_12').html("District 5 - Power")
		let src_img = $('.img_d_5').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_6').click(function(){
		$('.word_map_12').html("District 6 - Transportation")
		let src_img = $('.img_d_6').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_7').click(function(){
		$('.word_map_12').html("District 7 - Lumber")
		let src_img = $('.img_d_7').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_8').click(function(){
		$('.word_map_12').html("District 8 - Textiles")
		let src_img = $('.img_d_8').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_9').click(function(){
		$('.word_map_12').html("District 9 - Grain")
		let src_img = $('.img_d_9').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_10').click(function(){
		$('.word_map_12').html("District 10 - Livestock")
		let src_img = $('.img_d_10').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_11').click(function(){
		$('.word_map_12').html("District 11 - Agriculture")
		let src_img = $('.img_d_11').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_12').click(function(){
		$('.word_map_12').html("District 12 - Coal")
		let src_img = $('.img_d_12').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_13').click(function(){
		$('.word_map_12').html("District 13 - Nuclear")
		let src_img = $('.img_d_13').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_c').click(function(){
		$('.word_map_12').html("The Capitol")
		let src_img = $('.img_d_c').attr("src")
		$('.box_district_img').css('background-image', 'url(' + src_img + ')');
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
