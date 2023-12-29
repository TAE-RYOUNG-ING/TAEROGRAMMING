<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>태로그래밍_센텀 맛집 리스트</title>
<!-- css -->
<link rel="stylesheet" href="/css/list.css" type="text/css">
<!-- openlayers -->
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- js -->
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/list.js"></script>
</head>
<body>

<div class="center">
	<div class="inline">
	
		<h1 class="center">센텀시티 맛집 리스트</h1> 
		
		<div class="btn">
			<input type="button" value="　등록　" onclick="location.href='/regist';">
		</div>
		<br>
	
		<table border="1">
			<tr>
				<th>　no　</th>
				<th>　가게명　</th>
				<th>　주소　</th>
				<th>　x 좌표　</th>
				<th>　y 좌표　</th>
				
			</tr>
			<c:set var="no" value="${pm.totalCount - ((pm.pageVO.page-1) * 5)}" />
			<c:forEach var="list" items="${exList }">
				<tr>
<%-- 					<td>${list.num }</td> --%>
					<td>${no }</td>
					<td><a href="/info?num=${list.num}&page=${pm.pageVO.page }">${list.title }</a></td>
					<td>${list.addr }</td>
					<td>${list.xxx }</td>
					<td>${list.yyy }</td>
				</tr>
			<c:set var="no" value="${no-1 }" />
			</c:forEach>
		</table>
	</div>
	<br><br>
	
	
	<!-- 페이징 처리 -->
	<c:if test="${pm.prev }">
		<a href="/list?page=${pm.startPage-1 }">«</a>
	</c:if>
	
	<c:forEach var="idx" begin="${pm.startPage }" end="${pm.endPage }" step="1">
		<a href="/list?page=${idx }">${idx }</a>
	</c:forEach>
	
	<c:if test="${pm.next && pm.endPage > 0}">
		<a href="/list?page=${pm.endPage+1 }">»</a>
	</c:if>
</div>
	<br>
	
	
	<!-- 큰 지도 -->
	<div id="map2" class="map"></div>

</body>
</html>