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

      $scope.ambil = true;

      $scope.kembali=function(){
          document.location.href="../standby.html";
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
              'id_pelayanan': $cookieStore.get('id_pelayanan'),
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

      $scope.pilihlayanan=function($id,$nama){
           $scope.back = true;
           $scope.nama_layanan = $nama;
           $cookieStore.put('id_pelayanan',$id);
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
      }
      $http.get(base_url+'pelayanan').success(function(data,status){
           $scope.layanan=data.result;
      });
  });
