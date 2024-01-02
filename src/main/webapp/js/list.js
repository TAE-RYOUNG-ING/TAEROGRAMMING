$(document).ready(function() {

	// 1. map 레이어
	init();

	// 2. wms 레이어 가져오기
	makeWMS();
	
});
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ지도 생성ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function init() {

	// 방법1 )
//	 map = new ol.Map({
//				 		   layers: [new ol.layer.Tile({
//				 			   							id: 'mapLayer',
//				 			   							source: new ol.source.OSM()}	// OSM 레이어 추가
//							)],		  
//						   	target: 'map2',												// 지도 생성할 div_id id
//						   	view: new ol.View({
//							  					center: ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857'),
//							  					zoom: 9
//							})
//			});
 
	
	// 방법2 )
	// 배경지도 Layer
	let layers = [
			     new ol.layer.Tile({
			    	 				id: 'mapLayer',
			         				source: new ol.source.OSM()
			     })
	];
	  
	// 배경지도의 View 객체
	let view = new ol.View({
	     center: ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857'),
	     zoom: 9
	});
	  
	// 배경지도가 있는 Map
	map = new ol.Map({
						target: 'map2',
						layers: layers,
						view: view
	});

}

// WMS 사용
// -> 객체를 GeoServer에서 랜더링한 이미지를 받아 표시
// -> GeoServer로부터 직접 Tile Map을 받아 표현하는 것
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡImageWMS 생성하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function makeWMS(){
	
	let wmsSource = new ol.source.ImageWMS({
											   url: 'http://192.168.0.98:8080/geoserver/lingling/wms',
											   params: {
														 layers: ['lingling:TL_SCCO_SIG', 'TL_SCCO_EMD', 'TL_SCCO_LI']
											   },
											   serverType: 'geoserver'
	});

	let wmsLayer = new ol.layer.Image({
										source: wmsSource
	});

	map.addLayer(wmsLayer);
	
}
