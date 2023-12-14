$(document).ready(function() {

	// 지도 띄우고 마커 레이어 추가
	init();
	addMarker();
	
	// 지도 클릭 시 해당 좌표 값을 가져옴
    map.on('click', function(evt) {
        let coordinate = evt.coordinate;
        console.log(coordinate);
    });
    
	
 	// form태그 정보 저장
	let frObj = $('#fr');
	// '삭제하기' 클릭
	$('#delete').click(function(){
		alert("삭제가 완료되었습니다.");
		frObj.attr('method', 'post');
		frObj.attr('action', '/delete');
		frObj.submit();
	});
	
});
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡ 1. 지도 생성 ㅡㅡㅡㅡㅡㅡㅡㅡ

function init() {
    // map 생성
    map = new ol.Map({
			 		   layers: [new ol.layer.Tile({source: new ol.source.OSM()})],	// OSM 레이어 추가
					   target: 'map',										        // 지도 생성할 div_id id
					   view: new ol.View({
						  center: ol.proj.transform(centerPos, 'EPSG:4326', 'EPSG:3857'), 			// 초기 지도 위치 좌표
						  zoom: 17
						})				// 줌 레벨
					 });
}


// ㅡㅡㅡㅡㅡㅡㅡㅡ 2. 마커 레이어 ㅡㅡㅡㅡㅡㅡㅡㅡ
    
// 마커 레이어 추가 메서드 정의
function addMarker() {
	
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
	    source: markerSource, //마커 feacture들
	    style: markerStyle //마커 스타일
	});
	
	// 6) 지도에 마커가 그려진 레이어 추가
	map.addLayer(markerLayer);
}