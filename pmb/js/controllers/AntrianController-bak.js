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

app.controller('OperatorController',function($scope,operatorService,sessionService,loginService,$http,$cookieStore){
    $scope.noloket = sessionService.get("loket");
    $scope.nama_loket = sessionService.get("nama_loket");
    $scope.logout = function(){
      loginService.logout();
    }
    $scope.msgText="";
    $scope.login = function(user){
       loginService.login(user,$scope); // call login service
   }

    operatorService.terakhir(sessionService.get("loket")).then(function(response){
        var data = response.data.result;
        console.log(data);
        $scope.noloket = sessionService.get("loket");
        $scope.nomor = data[0].no_antrian;
        $scope.noarray=$scope.nomor.split("");
        $cookieStore.put('id_antrian',data[0].id_antrian);
    });

    $scope.panggilAntrian = function(){
        var bel = document.getElementById('bel');
        bel.play();
        var waktu = bel.duration*1000
        setTimeout(function(){
          var audio = document.getElementById('nomorurut');
          audio.play();
        },waktu);
        waktu+=1000;
        panggil(1,waktu);



        /*var sdata = [1,2,3,4,5];
        var i =0;
        var data = new Array(5);
        var max = 5;
        while(i<max){
          data[i] = new Audio('../public/sound/'+sdata[i]+'.mp3');
          //console.log(data[i]);
          //var audio = new Audio('../public/sound/'+data[i]+'.mp3');
          //audio.play();
          //data[1].play();
          //alert('tes');

          i++;
        }
        data.forEach(function(value){
          value.play();
        });
        /*
        var a=0;
        while(a<max)
        {
          data[a].pause();
          data[a].play();
          a++;

        }
        */
        /*for(var i=0;i<data.length;i++)
        {
          //console.log($scope.noarray);
          var audio = new Audio('../public/sound/'+$scope.noarray[i]+'.mp3');
          audio.play();
        }
        */
    }


    $scope.selanjutnya = function(){
        console.log(sessionService.get('operator'));
        $http.get(base_url+"getantrian/"+sessionService.get("loket")).success(function (data,status) {
            if(data.status==400){
                alert('ANTRIAN KOSONG');
            }else{
                  var data = {
                      id_antrian : data.result[0].id_antrian,
                      operator   : sessionService.get('operator'),
                      loket      : sessionService.get("loket")
                  }
                  $http.post(base_url+"antrian/selesai",data).error(function (data) {
                      document.write(data);
                  }).success(function(data,status){
                      if(data.status==200){
                            $scope.nomor=data.result;
                            $scope.noarray=$scope.nomor.split("");
                            var bel = document.getElementById('bel');
                            bel.play();
                            var waktu = bel.duration*1000
                            setTimeout(function(){
                              var audio = document.getElementById('nomorurut');
                              audio.play();
                            },waktu);
                            waktu+=1000;
                            panggil(1,waktu);
                        }
                     //$scope.nomor="testse";
                      //$cookieStore.put('id_antrian',data.result[0].id_antrian);
                      //$http.get(base_url+"temp/"+sessionService.get("loket")).success(function(data,status){
                          //var data = data.result;
                          //$scope.noloket = sessionService.get("loket");
                          //$scope.nomor = data[0].no_antrian;
                          //$scope.noarray=$scope.nomor.split("");

                    //  });
                  });



                /*operatorService.simpan(sessionService.get('operator'),sessionService.get("loket")).then(function(response){
                    var data = response.data.result;
                    $scope.noloket = sessionService.get("loket");
                    $scope.nomor = data[0].no_antrian;
                    $scope.noarray=$scope.nomor.split("");
                    $cookieStore.put('id_antrian',data[0].id_antrian);
                    /*
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
                */
            }
        });
    }


});
