<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>태로그래밍_센텀 맛집 리스트</title>

<!-- css -->
<link rel="stylesheet" href="/css/info.css" type="text/css">
<!-- openlayers -->
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- js -->
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/info.js"></script>
<script type="text/javascript">
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡJava Scriptㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
centerPos = [Number("${vo.xxx}"), Number("${vo.yyy}")];
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
					<td>
						<div id="map" class="map"></div>
					</td>
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