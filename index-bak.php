<!DOCTYPE html>
<html lang="en" ng-app="homeApp">
<head>
	<meta charset="UTF-8">
	<title>Antrian Unikom</title>

	<script src="public/script/client.js"></script>
  <script src="js/jquery-1.12.4.js"></script>
	<script src="lib/angular/angular.js"></script>
	<script>
		angular.module('homeApp',[])
			.controller('homeController',function($scope,$http,$interval){
				$http.get('http://localhost:8080/apiantrian/public/api/v1/video')
					.success(function(data,status){
						$scope.video=data.result[0].link;
					});
					$http.get('http://localhost:8080/apiantrian/public/api/v1/berita').success(function(data){
							$scope.news=data.result;
							$scope.jumlah=data.result.length;
					});
						$scope.berita=1;
						var no=2;
						$interval(function(){
							$scope.berita=no;
							if(no==3)
								no=1;
							else
								no++;
						}, 5000);

			});
	</script>
  <script type="text/javascript">
      $(document).ready(function(){
          setInterval(loaddata,1000);
      });
          function loaddata(){
             var host = window.location.host;
              $.ajax({
                  url:'http://'+host+"/apiantrian/public/api/v1/temp",
                  timeout: 1000,
                  type: "GET",
                  dataType: 'json',
                  success: function(data) {
                      $("#1").html(data.result[0].no_antrian);
                      $("#2").html(data.result[1].no_antrian);
                      $("#3").html(data.result[2].no_antrian);
                      $("#4").html(data.result[3].no_antrian);
                  }
              });
          }
  </script>
  <link rel="stylesheet" href="public/style/style.css">
</head>
<body onload="times()" ng-controller="homeController">
	<div id="bg" class="bg-antrian" style="background: #fff;">

		<!-- Header -->
		<div id="bg-header" class="" style="background: rgba(3, 185, 242, .9)">
			<div id="row" class="flex">

				<div class="card-antrian flex">
					<div class="nomor" id="1">109</div>
					<div class="ketLoket">LOKET 1</div>
				</div>

				<div class="card-antrian flex">
					<div class="nomor" id="2">115</div>
					<div class="ketLoket">LOKET 2</div>
				</div>

				<div class="card-antrian flex">
					<div class="nomor" id="3">302</div>
					<div class="ketLoket">LOKET 3</div>
				</div>

				<div class="card-antrian flex">
					<div class="nomor" id="4">204</div>
					<div class="ketLoket">LOKET 4</div>
				</div>

			</div>
		</div>

		<!-- video -->
		<div id="bg-main" class="flex">

            <video src={{'http://localhost:8080/apiantrian/public/video/'+video}} height="100%" width="70%" style="background:#f5f5f5;" autoplay loop muted></video>
            <div id="column" class="flex">
               <div id="news" ng-switch="berita">
								 <?php
								 	@mysql_connect("localhost","root","");
									@mysql_select_db("antrian");
									$q= mysql_query("select * from berita");
									$no=1;
									while($row=mysql_fetch_array($q))
									{
										?>
										<div ng-switch-when="<?=$no?>">
	 									 <h1><?=$row['judul']?></h1>
	 									 <P><?=$row['isi']?></p>
	 								 </div>

										<?php
										$no++;
									}

								 ?>

								 <!--<div ng-switch-when="1">
									 <h1>UNIVERSITAS KOMPUTER INDONESIA</h1>
									 <P>Universitas komputer indonesia adalah.... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								 </div>
								 <div ng-switch-when="2">
									 <h1>BERITA 2</h1>
									 <P>Universitas komputer indonesia adalah.... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								 </div>
								 <div ng-switch-when="3">
									 <h1>BERITA 3</h1>
									 <P>Universitas komputer indonesia adalah.... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								 </div>
							 -->
								</div>
                <div id="logo" class="flex">
                    <img src="public/img/logo.png" alt="img" width="70">
                    <p>UNIKOM</p>
                </div>
            </div>
		</div>

		<!-- Footer -->
		<div id="footer" class="flex">
			<div id="footer-time"></div>
			<marquee >
				UNIVERSITAS KOMPUTER INDONESIA
			</marquee>
		</div>

	</div>

</body>
</html>
