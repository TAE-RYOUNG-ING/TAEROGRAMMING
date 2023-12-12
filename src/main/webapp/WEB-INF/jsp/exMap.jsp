<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
        width: 100%;
        height:400px;
    }
</style>

<script>
    
// dom ready
$(document).ready(function() {
    init();
});

function init() {
    // map 생성
    var map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()     // OpenStreetMap 레이어
            })
        ],
        target: 'map',                          // Map 생성할 div id
        view: new ol.View({     
            center: [14206608.022807065, 4345508.083662013], // 초기 지도 위치 좌표
            zoom: 7                             // 초기 지도 위치 줌레벨
        })
    });

    // 레이어 추가
    /*
    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    map.addLayer(osmLayer);
    */
}
    
</script>
</head>
<body>

<div id="map" class="map"></div>









</body>
</html>