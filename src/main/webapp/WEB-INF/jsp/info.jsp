<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>

.center {
	text-align: center;
}
.inline{
	display: inline-block;
}

</style>
</head>
<body>


<div class="center">
	<div class="inline">
	
		<h1 class="center">🍽 ${vo.title } 🍽</h1>
	
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
				<td>~~~~~~~~~~ 지도띄우기 ~~~~~~~~~~</td>
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
	</div>
</div>
<br>

<div class="center">
	<input type="button" class="right" value="수정" onclick="">
	<input type="button" class="right" value="삭제" onclick="">
	<input type="button" class="right" value="목록으로" onclick="location.href='/list';">
</div>

</body>
</html>