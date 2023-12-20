$(document).ready(function() {
		
	// 지도 생성
	init();
	
	// 마커 '레이어 + 소스' 생성
//	let aMarkerSource = addML();
	addML();
	// return markerSource
	
	// 지도 클릭 시 소스에 피쳐 추가
    map.on('click', function(evt) {
    	
    	// 1) marker 피쳐가 있는지 먼저 탐색, 있다면 삭제
    	// -> 하나의 마커만 띄우기 위함
//    	map.removeLayer(map.getLayers().getArray().filter(i => i.get('id') == 'marker')[0]);
    	
    	// 2) 클릭한 지점 경위도 좌표값 가져오기
    	let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    	
        let xxx = Number(lonlat[0]);
        let yyy = Number(lonlat[1]);
        console.log("x = " + xxx + " y = " + yyy);
        
        document.getElementById('xxx').value = xxx;
        document.getElementById('yyy').value = yyy;

        // 3) 마커 피쳐 추가
        // -> 좌표체계가 이미 변환된 값이니 바로 대입
    	centerPos = [xxx, yyy];
        addFT(markerSource, centerPos);
        
    });
    
});
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡ 1. 회사 중심 지도 생성 ㅡㅡㅡㅡㅡㅡㅡㅡ

function init() {
    map = new ol.Map({
			 		   layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
					   target: 'map',
					   view: new ol.View({
										  center: ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857'),
										  zoom: 17
							 })
					 });
}


//ㅡㅡㅡㅡㅡㅡㅡㅡ 2. 마커 레이어 생성ㅡㅡㅡㅡㅡㅡㅡㅡ

// 마커 레이어 + 소스 추가
function addML() {
	
	// 1) 마커 레이어에 들어갈 소스 생성
	markerSource = new ol.source.Vector();

	// 2) 마커 레이어 생성
	let markerLayer = new ol.layer.Vector({
											id: "markerLayer",
										    source: markerSource
					  });
	
	// 3) 지도에 마커 레이어 추가
	map.addLayer(markerLayer);
	
	return markerSource;
}


//ㅡㅡㅡㅡㅡㅡㅡㅡ 3. 마커 피쳐 생성ㅡㅡㅡㅡㅡㅡㅡㅡ
function addFT(markerSource, centerPos){
	
	// 1) style 설정
	let markerStyle = new ol.style.Style({
										   image: new ol.style.Icon({ // 마커 이미지
																      opacity: 1, 			   // 투명도 1 = 100% 
																      scale: 0.1, 			   // 크기 1 = 100%
																      src: '/img/marker.png'   // 해당 이미지로 변경
										   }),
										   zindex: 10				   // html의 css, z-index 기능
					  });
	
	// 2) 피쳐 생성
	let ft = new ol.Feature({
							 id: "markerFeature",
	    					 geometry: new ol.geom.Point(centerPos).transform('EPSG:4326', 'EPSG:3857'),
	    					 style: markerStyle
			 });
 
	// 3) 소스에 피쳐 추가
	markerSource.addFeature(ft);
}
