$(document).ready(function() {

	init();
	
});

function init() {

	 map = new ol.Map({
				 		   layers: [new ol.layer.Tile({
				 			   							id: 'mapLayer',
				 			   							source: new ol.source.OSM()}
							)],		  
						   	target: 'map2',
						   	view: new ol.View({
							  					center: ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857'),
							  					zoom: 9
							})
			});


}