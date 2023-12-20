$(document).ready(function() {
		
	// 1. 지도 생성
	init();
	
	// 2. 마커 '레이어 + 소스' 생성
	addML(); // return markerSource
	
	// 3. 지도 클릭 시 소스에 피쳐 추가
    map.on('click', function(evt) {
    	// 1) marker 피쳐가 있는지 먼저 탐색, 있다면 삭제
    	// -> 하나의 마커만 띄우기 위함
    	// * 레이어 삭제
//    	map.removeLayer(map.getLayers().getArray().filter(i => i.get('id') == 'marker')[0]);
    	console.log(markerSource.getFeatures().filter(i => i.get('id') == 'markerFeature')[0]);	// undefined
    	
    	// 방법1 - if문
    	if(markerSource.getFeatures().length != 0) {
    		markerSource.removeFeature(markerSource.getFeatures().filter(i => i.get('id') == 'markerFeature')[0]);
    	}
    	// 방법2 - 모두 삭제
//    	markerSource.clear();
    	
    	// 2) 클릭한 지점 경위도 좌표값 가져오기
    	let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        console.log("x = " + Number(lonlat[0]) + " y = " + Number(lonlat[1]));
        // View 페이지에 좌표 값 전달
        document.getElementById('xxx').value = Number(lonlat[0]);
        document.getElementById('yyy').value = Number(lonlat[1]);

        // 3) 마커 피쳐 추가
        // -> 좌표체계가 이미 변환된 값이니 바로 대입
    	centerPos = [Number(lonlat[0]), Number(lonlat[1])];
        addFT(markerSource, centerPos);
    });
    
    // 4. '등록하기' 클릭 시
    $('#regist').click(function(){
    	$('#fr').attr('method', 'post');
    	$('#fr').attr('action', '/regist');
    	$('#fr').submit();
    	alert("등록이 완료되었습니다.");
    });
    
});
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 1. 회사 중심 지도 생성 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

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



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 2. 마커 레이어 생성ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 마커 레이어 + 소스 추가
function addML() {
	
	// 1) 마커 레이어에 들어갈 소스 생성
	markerSource = new ol.source.Vector();
	
	// 2) 스타일 지정
	let markerStyle = new ol.style.Style({
										   image: new ol.style.Icon({ // 마커 이미지
																      opacity: 1, 			   // 투명도 1 = 100% 
																      scale: 0.1, 			   // 크기 1 = 100%
																      src: '/img/marker.png'   // 해당 이미지로 변경
										 }),
										 zindex: 10 // html의 css, z-index 기능
					  });

	// 3) 마커 레이어 생성
	let markerLayer = new ol.layer.Vector({
											id: "markerLayer",
										    source: markerSource,
										    style: markerStyle
					  });
	
	// 3) 지도에 마커 레이어 추가
	map.addLayer(markerLayer);
	
	return markerSource;
}



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 3. 마커 피쳐 추가ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function addFT(markerSource, centerPos) {
	
	// 1) 피쳐 생성
	let ft = new ol.Feature({
							 id: "markerFeature",
	    					 geometry: new ol.geom.Point(centerPos).transform('EPSG:4326', 'EPSG:3857')
//	    					 style: markerStyle
			 });
 
	// 2) 소스에 피쳐 추가
	markerSource.addFeature(ft);
}