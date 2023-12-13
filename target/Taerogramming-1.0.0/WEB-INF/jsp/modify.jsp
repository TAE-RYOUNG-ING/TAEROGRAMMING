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
	
	// '수정하기' 클릭
	$('#update').click(function(){
		alert("수정이 완료되었습니다.");
		frObj.attr("method", "post");
		frObj.attr("action", "/modify");
		frObj.submit();
	});
});

</script>
</head>
<body>


<div class="center">
	<div class="inline">
	
		<h1 class="center">🍽 ${vo.title } 🍽 수정</h1>
		
		<!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ form ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
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
					<td><input type="text" name="title" value="${vo.title }" size="20"></td>
					<td><input type="text" name="addr" value="${vo.addr }" size="50"></td>
					<td><input type="text" name="xxx" value="${vo.xxx }" size="20"></td>
					<td><input type="text" name="yyy" value="${vo.yyy }" size="20"></td>
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
					<td><input type="text" name="review" value="${vo.review }" size="100"></td>
				</tr>
			</table>
	</form>
	<!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ form ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
	
	</div>
</div>
<br>

<div class="center">
	<input type="button" id="update" value="수정하기">
	<input type="button" value="목록으로" onclick="location.href='/list';">
</div>

</body>
</html>