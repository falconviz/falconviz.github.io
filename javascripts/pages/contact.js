var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 22.305957,
				lng: 39.107109
			  });
			   var marker = map.addMarker({
          lat: 22.305957,
          lng: 39.107109,
		            title: 'FalconViz Offices'
		        });
			});
        }

    };
}();