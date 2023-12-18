<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>태로그래밍_센텀 맛집 리스트</title>

<!-- css -->
<link rel="stylesheet" href="/css/regist.css" type="text/css">
<!-- openlayers -->
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- js -->
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/regist.js"></script>

</head>
<body>

<div class="center">
	<div class="inline">
	
		<h1 class="center">맛집 등록</h1>
		
		<form action="/regist" method="post">
			<table border="1">
				<tr>
					<th>가게명</th>
					<th>주소</th>
					<th>x 좌표</th>
					<th>y 좌표</th>
				</tr>
				<tr>
					<td><input type="text" name="title"></td>
					<td><input type="text" name="addr" size=50></td>
					<td><input type="text" id="xxx" name="xxx" size=20 value="" readonly></td>
					<td><input type="text" id="yyy" name="yyy" size=20 value="" readonly></td>
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
					<td><input type="text" name="review" size="100"></td>
				</tr>
			</table>
			<br>
				<input type="submit" value="등록하기">
				<input type="button" value="목록으로" onclick="location.href='/list';">
		</form>
	</div>
</div>

</body>
</html>