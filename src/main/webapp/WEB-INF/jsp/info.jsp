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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">

$(document).ready(function(){
	// form태그 정보 저장
	let frObj = $('#fr');
	
	// '삭제하기' 클릭
	$('#delete').click(function(){
		alert("삭제가 완료되었습니다.");
		frObj.attr("method", "post");
		frObj.attr("action", "/delete");
		frObj.submit();
	});
});

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