$(document).ready(function(){
	
	// 1. 해당 맛집 지도레이어 + 마커레이어 + 피쳐 가져오기
	init();
	markerSource = getLS(centerPos);

	// 2. 지도 클릭 시 피쳐 생성
    map.on('click', function(evt) {
        
    	// 1) markerSource에 피쳐 있는지 먼저 탐색, 있다면 삭제 
    	// (실행 순서 활용해서 마커 피쳐 하나만 띄우기)
    	// 방법1
    	if(markerSource.getFeatures().length != 0) {
    		markerSource.removeFeature(markerSource.getFeatures().filter(i => i.get('id') == 'originMarkerFeature' || i.get('id') == 'newMarkerFeature')[0]);
    	}
    	// 방법2
//    	markerSource.getFeatures().clear();
    	
    	// 2) 클릭한 지점 경위도 좌표값 가져오기
    	let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    	console.log("x = " + lonlat[0] + " y = " + lonlat[1]);
        // View 페이지에 좌표값 전달
        document.getElementById('xxx').value = lonlat[0];
        document.getElementById('yyy').value = lonlat[1];

        // 3) 새로운 피쳐 생성
    	centerPos = [lonlat[0], lonlat[1]];
    	addFT(markerSource, centerPos);
    	
    	// TEST
//    	let a = 123;
//    	let b = 123 + "";
//    	let c = a.toString();
//    	alert("a" + typeof(a));
//    	alert("b" + typeof(b));
//    	alert("c" + typeof(c));
    	
    	// 4) View 페이지에 주소 API 전달
//    	let obj;
    	$.ajax({
    		url: "https://api.vworld.kr/req/address?",
    		type: "get",
    		dataType: "jsonp",
    		data: {
        		service: "address",
        		request: "getaddress",
        		version: "2.0",
        		crs: "EPSG:4326", 
        		type: "BOTH",
        		point: lonlat[0] + "," + lonlat[1],
//        		point: `${lonlat[0]},${lonlat[1]}`,
        		format: "json",
        		errorformat: "json",
        		key: "2FE1AEA4-0AE1-36F5-9950-FDAB338D7091"
    		},
    		success: function(result){
//    			obj = result;
//        		console.log(obj);
    			document.getElementById('addr').value = result.response.result[0].text;
    		},
    		error: function(xhr, status, error){
    			alert("ajax 에러");
        		alert(xhr, status, error);
    		}
    	});
    });
	
	// 3. '수정하기' 클릭 시
	$('#update').click(function(){
		$('#fr').attr('method', 'post');
		$('#fr').attr('action', '/modify');
		$('#fr').submit();
		alert("수정이 완료되었습니다.");
	});
	
});
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJSㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 1. 특정 맛집 지도 레이어 생성 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function init() {
			    map = new ol.Map({
						 		   layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
								   target: 'map',
								   view: new ol.View({
													  center: ol.proj.transform(centerPos, 'EPSG:4326', 'EPSG:3857'),
													  zoom: 17
									})
			    });
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 2. 기존 마커 레이어 + 소스 가져오기 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function getLS(centerPos) {
		
	// 1) 마커 소스 생성
	let markerSource = new ol.source.Vector();
	
	// 2) 기존 피쳐 추가
	let originFeature = new ol.Feature({
										id: "originMarkerFeature",
	    								geometry: new ol.geom.Point(centerPos).transform('EPSG:4326', 'EPSG:3857') 
						});
	markerSource.addFeature(originFeature);

	// 3) 마커 스타일 지정	
	let markerStyle = new ol.style.Style({
										   image: new ol.style.Icon({ // 마커 이미지
																      opacity: 1, 			   // 투명도 1 = 100% 
																      scale: 0.1, 			   // 크기 1 = 100%
																      src: '/img/marker.png'   // 해당 이미지로 변경
										   }),
										   zindex: 10 // html의 css, z-index 기능
	});
	originFeature.setStyle(markerStyle);

	// 4) 마커 레이어 조합
	let markerLayer = new ol.layer.Vector({
											id: "markerLayer",
										    source: markerSource
					  });
	
	// 6) 지도에 마커가 그려진 레이어 추가
	map.addLayer(markerLayer);
	
	return markerSource;
}                                                                                                                 



// 3. ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ새로운 피쳐 추가하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function addFT(markerSource, centerPos) {
	
	// 1) 피쳐 생성
	let newFeature = new ol.Feature({
									  id: "newMarkerFeature",
									  geometry: new ol.geom.Point(centerPos).transform('EPSG:4326', 'EPSG:3857')
					 });
	
	// 2) 스타일 지정
	let markerStyle = new ol.style.Style({
										   image: new ol.style.Icon({ // 마커 이미지
																      opacity: 1, 			   // 투명도 1 = 100% 
																      scale: 0.1, 			   // 크기 1 = 100%
																      src: '/img/marker.png'   // 해당 이미지로 변경
										   }),
										   zindex: 10 // html의 css, z-index 기능
					  });
	newFeature.setStyle(markerStyle);
	
	// 3) 소스에 추가
	markerSource.addFeature(newFeature);
}


// ajax async 예제
function test() {
	console.log(testApi()); 
}

function testApi() {
	
	let num;
	$.ajax({
		url : "test",
		type : "get",
		async: false, // 동기로 하겠다
		success : (result) => {
			num = result;
		}
	});
	
	return num; // undefined
}

