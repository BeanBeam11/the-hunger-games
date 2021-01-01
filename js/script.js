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