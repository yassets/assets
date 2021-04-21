$(document).ready(function () {
	var hover = false;
	var numItems = 10; //this will be total number

	var i= Math.floor((Math.random() * numItems) + 1);
	var flag= true;

	
	var titles = ['Mary from New York, US ordered:',
               'Sussan from Chicago, US ordered:',
               'Anna from New York, US ordered:',
               'Mariane from Chicago, US ordered:',
               'Jimmy from Dallas, US ordered:',
               'Alexa from Detroit, US ordered:',
               'Sally from Los Angeles, US ordered:',
               'Evelyn from Miami, US ordered:'];

               var link_titles = [' - 13 seconds ago',
               ' - 18 seconds ago',
               ' - 11 seconds ago',
               ' - 10 seconds ago', 
               ' - 7 seconds ago', 
               ' - 12 seconds ago',
               ' - 12 seconds ago',
               ' - 17 seconds ago']; 
	
	$('#seconds_ago').text(link_titles[i]);
	$('#someone_purchased_name').text(titles[i]);
	

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	function changeClass(){
		if(!hover){
			$('#someone-purchased').toggleClass('fade-in fade-out');
			if($('.fade-in').length == 0) {
				flag= true;
			}else{
				flag= false;
			}
			if(flag){
				setTimeout(function myFunction() {
                    var t = 0;
					
                    t = i % link_titles.length;
					$('#seconds_ago').text(link_titles[t]);
                    t = i % titles.length;
					$('#someone_purchased_name').text(titles[t]);
					i = Math.floor((Math.random() * numItems) + 1);
				},5000);
			}
		}
	}
	$('#someone-purchased').mouseover(function(){
        hover = true;
    });
    $('#someone-purchased').mouseout(function(){
        hover = false;
    });
	setInterval(changeClass, Math.floor((Math.random() * 8000) + 6000));
});
