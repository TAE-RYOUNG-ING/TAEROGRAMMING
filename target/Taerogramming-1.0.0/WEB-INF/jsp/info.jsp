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
	
	// 지도 띄우기
    init();
    
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
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJQueryㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let map = null;

function init() {
    // map 생성
    let center = ol.proj.transform([129.130181, 35.173580], 'EPSG:4326', 'EPSG:3857');
    console.log(center);
    map = new ol.Map({
			 		   layers: [new ol.layer.Tile({source: new ol.source.OSM()})],	// OpenStreetMap 레이어
						       target: 'map',										// Map 생성할 div id
						       view: new ol.View({     
											       center: center,					// 초기 지도 위치 좌표
											       zoom: 17})						// 초기 지도 위치 줌레벨
					 });
}

</script>
</head>
<body>

<div class="center">
	<div class="inline">
	
		<h1 class="center">🍽 ${vo.title } 🍽</h1>
		<form role="form" id="fr">
			<input type="hidden" name="num" value="${vo.num }">
	
			<table border="1">
				<tr>
					<th>　no　</th>
					<th>　가게명　</th>
					<th>　주소　</th>
					<th>　x 좌표　</th>
					<th>　y 좌표　</th>
				</tr>
				<tr>
					<td>${vo.num }</td>
					<td>${vo.title }</td>
					<td>${vo.addr }</td>
					<td>${vo.xxx }</td>
					<td>${vo.yyy }</td>
				</tr>
			</table>
			<br>
			
			<table border="1">
				<tr>
					<th>지도</th>
				</tr>
				<tr>
					<td><div id="map" class="map"></div></td>
				</tr>
			</table>
			<br>
			
			<table border="1">
				<tr>
					<th>리뷰</th>
				</tr>
				<tr>
					<td>${vo.review }</td>
				</tr>
			</table>
		</form>
	</div>
</div>
<br>

<div class="center">
	<input type="button" value="수정" onclick="location.href='/modify?num=${vo.num}';">
	<input type="button" id="delete" value="삭제">
	<input type="button" value="목록으로" onclick="location.href='/list?page=${param.page}';">
</div>

</body>
</html>