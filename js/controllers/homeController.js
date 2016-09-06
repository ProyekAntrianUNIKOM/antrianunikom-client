'use strict';


var panggil=function(i,waktu){
  if(i<=5){
    setTimeout(function(){
      var audio = document.getElementById(i);
      audio.play();
    },waktu);
    waktu+=1500;
    panggil(i+1,waktu);
  }
}
app.controller('homeController',function($scope,operatorService,sessionService,loginService,$http,$cookieStore){
    $scope.noloket = sessionService.get("loket");
    $scope.nama_loket = sessionService.get("nama_loket");
    $scope.logout = function(){
      loginService.logout();
    }
    operatorService.terakhir(sessionService.get("loket")).then(function(response){
        var data = response.data.result;
        $scope.noloket = sessionService.get("loket");
        $scope.nomor = data[0].no_antrian;
        $scope.noarray=$scope.nomor.split("");
        $cookieStore.put('id_antrian',data[0].id_antrian);
    });
    $scope.panggilAntrian = function(){
        var bel = document.getElementById('bel');
        bel.play();
        var waktu = bel.duration*1000;

        setTimeout(function(){
          var audio = document.getElementById('nomorurut');
          audio.play();
        },waktu);
        waktu+=1500;
        panggil(1,waktu);

    }
    $scope.selanjutnya = function(){
        console.log(sessionService.get('operator'));
        $http.get(base_url+"getantrian/"+sessionService.get("loket")).success(function (data,status) {
            if(data.status==400){
                alert('ANTRIAN KOSONG');
            }else{
                operatorService.simpan($cookieStore.get('id_antrian'),sessionService.get('operator'),sessionService.get("loket")).then(function(response){
                    var data = response.data.result;
                    $scope.noloket = sessionService.get("loket");
                    $scope.nomor = data[0].no_antrian;
                    $scope.noarray=$scope.nomor.split("");
                    $cookieStore.put('id_antrian',data[0].id_antrian);
                    var bel = document.getElementById('bel');
                    bel.play();
                    var waktu = bel.duration*1000;

                    setTimeout(function(){
                      var audio = document.getElementById('nomorurut');
                      audio.play();
                    },waktu);
                    waktu+=1500;
                    panggil(1,waktu);
                });
            }
        }).error(function (data) {
            document.write(base_url);
        });

    }
});
