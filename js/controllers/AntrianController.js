'use strict';
var host = "http://"+window.location.host;
var base_url  = host+"/apiantrian/public/api/v1/";
angular.module('mainApp.controllers', ['ngCookies']).
  controller('AntrianController',function($scope,$http,$cookieStore,$location){
    $scope.daftarBaru = function(){
      var data ={
        'no_rfid':$scope.rfid,
        'nim' : $scope.nim,
        'nama' : $scope.nama,
        'jurusan' : $scope.jurusan
      }
      $http.post(base_url+'tambahmahasiswa',data).success(function(data,status){
        if(data.status==200)
        {
          alert('Selamat KSM anda berhasil ditambahkan');
          $location.path('/');
        }else
        {
          alert(data.message);
        }
      }).error(function(data){
        //document.write(data);
        alert('NIM sudah terdaftarkan silahkan hubungi bagian administrator');
      });
    }
    $scope.ambilAntrian=function(){
      $http({
            method : "POST",
            url : base_url+"validasimhs",
            data:{
              'no_rfid': $scope.no_rfid
            }
      }).success(function(data,status){
          if(data.status==200){
              $cookieStore.put('norfid',data.result[0].no_rfid);
              //console.log($cookieStore.get('norfid'));
              $location.path('/step2');
              //document.location.href="#/step2";
          }else{
              $scope.no_rfid = "";              
              swal({
                  title: "Uppss",
                  text: "MOHON MAAF ANDA TIDAK TERDAFTAR SEBAGAI MAHASISWA UNIKOM",
                  type: "error",
                  confirmButtonText: "OKE",
                  timer:2000
            });
          }
      }).error(function (data,staus) {
        swal({
                  title: "Uppss",
                  text: "MOHON MAAF ANDA TIDAK TERDAFTAR SEBAGAI MAHASISWA UNIKOM",
                  type: "error",
                  confirmButtonText: "OKE"
        });
      });
    };

    $scope.loket=false;
      $scope.ambil = true;
      $scope.pilihlayanan = function($id){
          $scope.ambil = false;
          $scope.loket=true;
          $scope.back = true;
          console.log('nolayanan : '+$id);
          $http.get(base_url+'loket/'+$id).success(function(data,status){
              $scope.lokets=data.result;
          });
          //console.log($scope.lokets);
      };

      $scope.kembali=function(){
          $scope.loket=false;
          $scope.ambil = true;
          $scope.back = false;
      };
      $scope.close = function(){
        document.getElementById('modal').style.display = 'none';
        document.getElementById('modal-container').style.display = 'none';
        document.getElementById('modal-container').style.backgroundColor = 'rgba(0,0,0,0)';
      }
      $scope.simpanantrian = function()
      {
        //console.log($cookieStore.get('noantrian')+' : '+$cookieStore.get('no_loket'));
        $http({
          method : 'POST',
            url : base_url+'antrian',
            data:{
              'no_rfid' : $cookieStore.get('norfid'),
              'no_loket': $cookieStore.get('no_loket'),
              'noantrian':$cookieStore.get('noantrian'),
            }
        }).success(function(data,status){
            $cookieStore.remove('rfid');
            //$location.path('/');
            document.location.href="../standby.html";
      }).error(function(data,status){
            document.write(data);
        });
      }
      $scope.noloket = "";
      $scope.noantrian="";
      $scope.pilihloket=function($id){
           $scope.back = true;
           $scope.noloket=$id;
           $cookieStore.put('no_loket',$id);
           document.getElementById('modal-container').style.display = 'flex';
           document.getElementById('modal').style.display = 'flex';
           document.getElementById('modal-container').style.backgroundColor = 'rgba(0,0,0,0.7)';
           $http({
             method : 'GET',
             url    : base_url+'ambilakhir',
           }).success(function(data,status){
             console.log(data.result);
             $cookieStore.put('noantrian',data.result);
             $scope.noantrian=data.result;
           });

          /*$http({
            method : 'POST',
              url : base_url+'antrian',
              data:{
                'no_rfid' : $cookieStore.get('norfid'),
                'no_loket':$id
              }
          }).success(function(data,status){
              $cookieStore.remove('rfid');
              swal({
                  title: "NOMOR ANTRIAN",
                  text: "NOMOR ANTRIAN ANDA : "+data.result,
                  type: "info",
                  confirmButtonText: "OKE"
              },function(){

          });

          }).error(function(data,status){
              document.write(data);
          });
          */

        //  $location.path('/');
      }
      $http.get(base_url+'pelayanan').success(function(data,status){
           $scope.layanan=data.result;
      });
  });
