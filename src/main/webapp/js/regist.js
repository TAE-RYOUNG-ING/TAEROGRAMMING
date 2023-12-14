$(document).ready(function() {
		
	// 1. 지도 띄우기
	init();
	
	// 2. 지도 클릭 시 마커 생성
    map.on('click', function(evt) {
        
    	// 1) marker 레이어 있는지 먼저 탐색, 있다면 삭제 (실행 순서 활용)
    	// -> 하나의 마커만 띄우기 위함
    	// 방법1)
    	// -> 필터하면 배열로 리턴됨 보통 이름 같은 레이어는 하나밖에 없으니까 0번지로 지정
    	map.removeLayer(map.getLayers().getArray().filter(i => i.get('id') == 'marker')[0]); 
    	// 방법2)
//    	for(let i=0; i<map.getLayers().getArray().length; i++){
//        	if(map.getLayers().getArray()[i].get('id') == 'marker'){
//        		map.removeLayer(map.getLayers().getArray()[i]);
//        	}
//        }
    	
    	// 2) 클릭한 지점 경위도 좌표값 가져오기
    	let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    	console.log(lonlat);
    	
        let xxx = Number(lonlat[0]);
        let yyy = Number(lonlat[1]);
        console.log("x = " + xxx + " y = " + yyy);
        
        let x = document.getElementById('xxx');
        let y = document.getElementById('yyy');
        x.value = xxx;
        y.value = yyy;
        
        // 마커 띄울 위치
        // 좌표체계가 이미 변환된 값
    	centerPos = [xxx, yyy];
        addMarker(centerPos);
        
        // 마커레이어가 2개 이상일 경우 앞에 마커레이어 삭제
//        if(map.getLayers().getArray().length > 2){ // 레이어 길이
//        	let del = map.getLayers().getArray()[1];
//        	map.removeLayer(del);
//        }
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

//ㅡㅡㅡㅡㅡㅡㅡㅡ 2. 마커 레이어 ㅡㅡㅡㅡㅡㅡㅡㅡ

//마커 레이어 추가 메서드 정의
function addMarker(centerPos) {
	
	let markerLayer;
	
	// 1) 마커 레이어에 들어갈 소스 생성
	let markerSource = new ol.source.Vector();
	
	 // 2) Feture 좌표 등록
	 let point_feature = new ol.Feature({
	     geometry: new ol.geom.Point(centerPos).transform('EPSG:4326', 'EPSG:3857') 
	 });
 
	// 3) 소스에 feture 추가 
 //      addFeature를 이용해서, 여러개의 point를 source에 담음
	 markerSource.addFeature(point_feature);

 // 4) 마커 스타일 추가
 //    style을 활용해서, point의 style을 변경
	 let markerStyle = new ol.style.Style({
	    image: new ol.style.Icon({  // 마커 이미지
	        opacity: 1, 			// 투명도 1 = 100% 
	        scale: 0.1, 			// 크기 1 = 100%
	        src: '/img/marker.png'  // 해당 point를 marker로 변경해줌
	    }),
	    zindex: 10					// html의 css, z-index 기능
	});

 // 5) 마커 레이어 생성
	markerLayer = new ol.layer.Vector({
		id: "marker",
	    source: markerSource, // 마커 feacture들
	    style: markerStyle    // 마커 스타일
	});
	
	// 6) 지도에 마커가 그려진 레이어 추가
	map.addLayer(markerLayer);
}
