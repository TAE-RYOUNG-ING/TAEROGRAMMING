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
					<td><input type="text" name="xxx" size=20></td>
					<td><input type="text" name="yyy" size=20></td>
				</tr>
			</table>
			<br>
			<div class="btn">
				<input type="submit" value="등록하기">
				<input type="button" value="목록으로" onclick="location.href='/list';">
			</div>
		</form>
	</div>
</div>

</body>
</html>