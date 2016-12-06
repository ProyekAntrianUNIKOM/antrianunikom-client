'use strict';
app.controller('OperatorController',function($scope,operatorService,$interval,sessionService,loginService,$http,$cookieStore){

    $scope.antriansekarang="";
    sessionService.set("kosong",1);
    $scope.noloket = sessionService.get("loket");
    $scope.nama_operator = sessionService.get("nama");
    $scope.id_peyanan = sessionService.get("id_pelayanan");
    $scope.nama_pelayanan = sessionService.get("nama_pelayanan");
    $scope.logout = function(){
      loginService.logout();
    }
    $scope.msgText="";
    $scope.login = function(user){
       loginService.login(user,$scope); // call login service
   }

    // operatorService.terakhir(sessionService.get("id_pelayanan")).then(function(response){
    //     var data = response.data.result;
    //     console.log(data);
    //     $scope.noloket = sessionService.get("loket");
    //     $scope.nomor = data[0].no_antrian;
    //     $scope.noarray=$scope.nomor.split("");
    //     $cookieStore.put('id_antrian',data[0].id_antrian);
    // });

    function playsound(i,j,nomor){
      if(i<nomor.length) {
        var sound = new Audio('../public/sound/'+nomor[i]+'.wav');
          sound.addEventListener('ended', function() {
              this.currentTime = 0;
              playsound(i+1,j,nomor);
          }, false);
          sound.play();
      } else {
        if(j<2){
          playsound(0,2,nomor);
        }
      }
    }

    $scope.panggilAntrian = function(){
      //definisikan suara
      var sekarang = parseInt($scope.nomor);
      if(sekarang>0){
        var suara = new Array();
        suara.push("nomor-urut");

        var ratus = Math.floor(sekarang / 100);
        var sisa  = sekarang % 100;
        var puluh = Math.floor(sisa / 10);
        var satuan = sisa % 10;
        console.log(sekarang);
        console.log(ratus);
        console.log(sisa);
        console.log(puluh);
        console.log(satuan);

        if(sekarang<10) {
          suara.push(sekarang);
        } else {
        //  console.log('masuk kesini');
          //cek ratusan
          if(ratus>0){
            if(ratus==1){
              suara.push('seratus');

            } else {
            suara.push(ratus);
            suara.push('ratus');
          }
        }

            if(sisa>0) {
              if(sisa < 20){
                if(sisa==10){
                  suara.push("sepuluh");
                }else if(sisa==11) {
                  suara.push("sebelas");
                } else {
                  suara.push(satuan);
                  suara.push("belas");
                }
              } else {
                suara.push(puluh);
                suara.push("puluh");
                if(satuan>0) {
                  suara.push(satuan);
                }
              }
            }
        }
        suara.push("loket");
        suara.push(sessionService.get('loket'));
        playsound(0,2,suara);
      } else {
        alert('Silahkan panggil antrian terlebih dahulu!!');
      }


  }

    $scope.jumAntrian ="0";
    function getjumantrian(){
      $http.get(base_url+'getantrian/'+sessionService.get("id_pelayanan")).success(function(data,status){
      var jum = data.result.length;
      $scope.jumAntrian = jum;
    });
    }
     $interval(getjumantrian, 1000);

    $scope.selanjutnya = function(){
        console.log('Testing : '+$cookieStore.get("id_antrian"));
        $http.get(base_url+"getantrian/"+sessionService.get("id_pelayanan")).success(function (data,status) {
            if(data.status==400){
                alert('ANTRIAN KOSONG');
            }else{
                console.log(data);
                if($cookieStore.get("id_antrian")>0){
                  var kirim ={
                    id_antrian :$cookieStore.get("id_antrian")
                  }

                  $http.post(base_url+"antrian/terlayani",kirim).success(function(data,status){
                    //alert('Berhasil update waktu terlayani');
                  }).error(function(data){
                    document.write(data);
                  });
                }

                var datakirim = {
                  id_antrian : data.result[0].id_antrian,
                  operator:sessionService.get('operator'),
                  loket:sessionService.get("loket")
                }
                //console.log(datakirim);

                  $http.post(base_url+"antrian/selesai",datakirim).error(function (data) {
                      document.write(data);
                      //console.log(datakirim);
                  }).success(function(data,status){
                      if(data.status==200){
                            $cookieStore.put('id_antrian',data.id_antrian);
                            console.log('Id antrian : '+data.id_antrian);
                            $scope.nomor=data.result;
                            $scope.antriansekarang = "NIM : "+data.nim+"\n Nama : "+data.nama+"\n Prodi : "+data.prodi;
                            $scope.antriansekarangNIM = data.nim;
                            $scope.antriansekarangNAMA = data.nama;
                            $scope.antriansekarangPRODI = data.prodi;
                            $scope.antriansekarangJenispelayanan = data.nama_pelayanan;
                            $scope.noarray=$scope.nomor.split("");
                            var sekarang = parseInt(data.result);
                            var suara = new Array();
                            suara.push("nomor-urut");

                            var ratus = Math.floor(sekarang / 100);
                            var sisa  = sekarang % 100;
                            var puluh = Math.floor(sisa / 10);
                            var satuan = sisa % 10;
                            console.log(sekarang);
                            console.log(ratus);
                            console.log(sisa);
                            console.log(puluh);
                            console.log(satuan);

                            if(sekarang<10) {
                              suara.push(sekarang);
                            } else {
                            //  console.log('masuk kesini');
                              //cek ratusan
                              if(ratus>0){
                                if(ratus==1){
                                  suara.push('seratus');

                                } else {
                                suara.push(ratus);
                                suara.push('ratus');
                              }
                            }

                                if(sisa>0) {
                                  if(sisa < 20){
                                    if(sisa==10){
                                      suara.push("sepuluh");
                                    }else if(sisa==11) {
                                      suara.push("sebelas");
                                    } else {
                                      suara.push(satuan);
                                      suara.push("belas");
                                    }
                                  } else {
                                    suara.push(puluh);
                                    suara.push("puluh");
                                    if(satuan>0) {
                                      suara.push(satuan);
                                    }
                                  }
                                }
                            }
                            suara.push("loket");
                            suara.push(sessionService.get('loket'));
                            playsound(0,2,suara);

                        }

                  });




            }
        });

    }


});
