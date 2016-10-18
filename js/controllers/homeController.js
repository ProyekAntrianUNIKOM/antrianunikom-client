'use strict';




app.controller('OperatorController',function($scope,operatorService,$interval,sessionService,loginService,$http,$cookieStore){
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
    sessionService.set("kosong",1);
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
       /*if(sessionService.get("kosong")==1)
        {
          sessionService.set("kosong",0);
          var bel = document.getElementById('bel');
          bel.play();
          var waktu = bel.duration*1000
          setTimeout(function(){
            var audio = document.getElementById('nomorurut');
            audio.play();
          },waktu);
          waktu+=1000;
          panggil(1,waktu);
        }else 
        {
          alert('Harap tunggu sebentar');
        }
        */
        //console.log(sessionService.get("kosong"));
        //if(sessionService.get("kosong")==1)
       // {
          sessionService.set("kosong",0);
          var bel = document.getElementById('bel');
          bel.play();
          var waktu = bel.duration*1000
          setTimeout(function(){
            var audio = document.getElementById('nomorurut');
            audio.play();
          },waktu);
          waktu+=1000;
          panggil(1,waktu);
          //0001957136
          sessionService.set("kosong",1);
       // }
        //else 
       // {
        //  alert('HARAP TUNGGU SEBENTAR');
        //}
  }


    $scope.jumAntrian ="Jumlah Antrian : 0";
    function getjumantrian(){
      $http.get(base_url+'getantrian/'+sessionService.get("loket")).success(function(data,status){
      var jum = data.result.length; 
      $scope.jumAntrian = "Jumlah Antrian : "+jum;
    });
    }
     $interval(getjumantrian, 1000);

    $scope.selanjutnya = function(){
     // if(sessionService.get("kosong")==0)
      //{
      //  alert('Mohon tunggu sejenak');
    //  }
    //  {
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
                            var waktu = bel.duration*500
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
     // }
        
    }


});
