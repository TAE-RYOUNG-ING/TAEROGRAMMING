<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>

.center {
	text-align: center;
}
.btn {
	text-align: right;
}
.inline{
	display: inline-block;
}

</style>
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
			
			<c:forEach var="list" items="${exList }">
			<tr>
				<td>${list.num }</td>
				<td><a href="/info?num=${list.num}&page=${param.page}">${list.title }</a></td>
				<td>${list.addr }</td>
				<td>${list.xxx }</td>
				<td>${list.yyy }</td>
			</tr>
			</c:forEach>
		</table>
	</div>
	<br><br>
	
	<!-- 페이징 처리 -->
	<c:if test="${pm.prev }">
		<a href="/list?page=${pm.startPage-1 }">«</a>
	</c:if>
	
	<c:forEach begin="${pm.startPage }" end="${pm.endPage }" step="1" var="idx">
		<a href="/list?page=${idx }">${idx }</a>
	</c:forEach>
	
	<c:if test="${pm.next }">
		<a href="/list?page=${pm.endPage+1 }">»</a>
	</c:if>

</div>

</body>
</html>