/* hamburger menu */ 
$(document).ready(function(){
	$('.burger').click(function(){
		$('.float-nav').toggleClass('menu-click')
	});
});

/* dots */
let j=1;
for(let i=1; i<=5; i++){
	$(document).ready(function(){
		$('.dots_'+i).click(function(){
			while(j<=5){
				$('.dots_'+j+'.icon_dots_2').css('display','none')
				$('.dots_'+j+'.icon_dots_1').css('display','block')
				j++;
			}
			j=1;
			$('.dots_'+i+'.icon_dots_1').css('display','none')
			$('.dots_'+i+'.icon_dots_2').css('display','block')
		});
	});
}

/* map */ 

$(document).ready(function(){
	for(let i=1; i<=13; i++)
	$('.district_'+i).click(function(){
		$('.box_map_explain').toggleClass('menu-click')
	});
	$('.district_c').click(function(){
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
});

