$(document).ready(function() {

	// map 레이어
	init();

	// wms 레이어 가져오기
	makeWMS();
	
});
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ지도 생성ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function init() {

 map = new ol.Map({
			 		   layers: [new ol.layer.Tile({
			 			   							id: 'mapLayer',
			 			   							source: new ol.source.OSM()})],		  // OSM 레이어 추가
					   target: 'map2',										        	  // 지도 생성할 div_id id
					   view: new ol.View({
						  center: ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857'), // 초기 지도 위치 좌표 (경위도 -> OSM)
						  zoom: 11														  // 줌 레벨
						})				
					 });
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡImageWMS 생성하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function makeWMS(){
	
	const wmsSource = new ol.source.ImageWMS({
		url: 'http://192.168.0.98:8080/geoserver/lingling/wms',
		params: {
			layers: 'lingling:TL_SCCO_SIG'
//			exceptions: 'application/json',
		},
		serverType: 'geoserver'
	});

	let wmsLayer = new ol.layer.Image({
		source: wmsSource
	});

	map.addLayer(wmsLayer);
}







