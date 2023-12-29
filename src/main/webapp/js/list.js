$(document).ready(function() {

	// 지도 레이어
	init();

	
});
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//ㅡㅡㅡㅡㅡㅡㅡㅡ 지도 생성 ㅡㅡㅡㅡㅡㅡㅡㅡ

function init() {

 map = new ol.Map({
			 		   layers: [new ol.layer.Tile({source: new ol.source.OSM()})],		  // OSM 레이어 추가
					   target: 'map2',										        	  // 지도 생성할 div_id id
					   view: new ol.View({
						  center: ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857'), // 초기 지도 위치 좌표 (경위도 -> OSM)
						  zoom: 17														  // 줌 레벨
						})				
					 });
}