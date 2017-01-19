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
    $scope.antriansekarang="";
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
   console.log(sessionService.get("id_pelayanan"));
    operatorService.terakhir(sessionService.get("loket")).then(function(response){
        var data = response.data.result;
        console.log(data);
        $scope.noloket = sessionService.get("loket");
        $scope.nomor = data[0].no_antrian;
        $scope.noarray=$scope.nomor.split("");
        $cookieStore.put('id_antrian',data[0].id_antrian);
    });

    //fungsi putar suara
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

    //fungsi generate suara
    function generate_suara(nomor){
        var suara = new Array();
        suara.push("nomor-urut");

        var ratus = Math.floor(nomor / 100);
        var sisa  = nomor % 100;
        var puluh = Math.floor(sisa / 10);
        var satuan = sisa % 10;
        // console.log(nomor);
        // console.log(ratus);
        // console.log(sisa);
        // console.log(puluh);
        // console.log(satuan);

        if(nomor<10) {
          suara.push(nomor);
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
                } else if(sisa>10){
                  suara.push(satuan);
                  suara.push("belas");
                }else{
                  suara.push(satuan);
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
        return suara;
    }

    //fungsi panggil lagi
     $scope.panggilAntrian = function(){
      //definisikan suara
      var sekarang = parseInt($scope.nomor);
      if(sekarang>0){
        var suara = generate_suara(sekarang);
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
    //disable button 
     $scope.btnSelanjutnya = false; 
     $scope.btnPanggil = true; 
     $scope.btnSelesai = true; 

     //Antrian Selesai 
     $scope.selesai = function(){
       if($cookieStore.get("id_antrian")>0){
          var kirim ={
                id_antrian :$cookieStore.get("id_antrian")
          }

          $http.post(base_url+"antrian/terlayani",kirim).success(function(data,status){
                    alert('Waktu antrian sudah tercatat');
                    $scope.btnSelesai=true; 
                    $scope.btnSelanjutnya=false;
                    $scope.btnPanggil=false;  
          }).error(function(data){
              document.write(data);
          });
        }
     }

     //Panggil Antrian Selanjutnya 
     $scope.selanjutnya = function(){
        console.log('Testing : '+$cookieStore.get("id_antrian"));
        $http.get(base_url+"getantrian/"+sessionService.get("id_pelayanan")).success(function (data,status) {
            if(data.status==400){
                alert('ANTRIAN KOSONG');
            }else{
                $scope.btnSelanjutnya = true; 
                $scope.btnSelesai=false; 
                $scope.btnPanggil=false;
                console.log(data);
                

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
                            var suara = generate_suara(sekarang);
                            playsound(0,2,suara);

                        }

                  });
            }
        });

    }


});