<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>	</title>
</head>
<body>
	<?php
		$host = "advin";
		$user = "pella522";
		$pw = "zkfltmak5237!";
		$dbName = "miki5237";
		$dbConnect = new mysqli($host, $user, $pw, $dbName);
		$dbConnect -> set_charset("utf8");

		if(mysqli_connect_errno()){
			echo "데이터베이스 접속 실패";
			echo mysqli_connect_errno();
		} else {
			echo "데이터베이스 접속 성공";
		}
	?>
</body>
</html>