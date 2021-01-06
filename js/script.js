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
