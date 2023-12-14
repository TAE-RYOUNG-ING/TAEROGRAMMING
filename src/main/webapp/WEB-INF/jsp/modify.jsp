<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- css -->
<link rel="stylesheet" href="/css/regist.css" type="text/css">
<!-- openlayers -->
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- js -->
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/modify.js"></script>
<script type="text/javascript">
centerPos = [Number("${vo.xxx }"), Number("${vo.yyy }")];
console.log("centerPos= " + centerPos);
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
					<td><input type="text" id="xxx" name="xxx" value="${vo.xxx }" size="20" readonly></td>
					<td><input type="text" id="yyy" name="yyy" value="${vo.yyy }" size="20" readonly></td>
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