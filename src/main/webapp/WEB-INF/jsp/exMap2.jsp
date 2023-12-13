<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- openlayers -->
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<!-- style -->
<style>
.map {
    width: 400px;
    height:200px;
}
.center {
	text-align: center;
}
.inline{
	display: inline-block;
}
</style>
<script type="text/javascript">
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
$(document).ready(function() {

	var vectorLayer = new ol.layer.Vector({
	       source: new ol.source.Vector()
	});
	
	var map = new ol.Map({
	    view: new ol.View({
	        zoom: 16,
	        center: new ol.geom.Point([ 126.97659953, 37.579220423 ]) //처음 중앙에 보여질 경도, 위도 
	        .transform('EPSG:4326', 'EPSG:3857') //GPS 좌표계 -> 구글 좌표계
	        .getCoordinates(), //포인트의 좌표를 리턴함
	    }),
	    target: 'js-map',
	    layers: [
	        new ol.layer.Tile({
	            source : new ol.source.XYZ({ //vworld api 사용
	            url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png',
	            //tileGrid: tileGrid
	        })
	        }),
	        vectorLayer
	    ]
	});

});
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//이동하기
function move() {

    map.beforeRender(ol.animation.pan({
        source: map.getView().getCenter(),
        duration: 500
    }));

    map.getView().setCenter(
        new ol.geom.Point([ 126.95659953, 37.578220423]).transform('EPSG:4326', 'EPSG:3857').getCoordinates()
    );

    map.getView().setZoom(parseInt(16));
}
</script>
</head>
<body>
	<button onclick='move();'>이동</button>
    <div id='map'></div>
</body>
</html>