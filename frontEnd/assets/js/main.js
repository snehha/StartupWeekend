$(document).ready(function(){
	$('#donate_txt').on('click', function(event){
		event.preventDefault();
		//notify afer submission
		noty({
			text: 'Thank you for donating your amount',
			layout: 'bottomRight',
			type: 'information',
			timeout: 2000
		});
	})

})