'use strict';
//24.10.14.1.66
app.controller('mahasiswaController',function($scope,sessionService,$http,$timeout,base_url,$routeParams,$location,$window){

  $http.get(base_url+'mahasiswa')
    .success(function (data) {
      //pagination
      $scope.currentPage = 0;
      $scope.pageSize = 10;
      $scope.mhsdata = data.result;
      $scope.numberOfPages=function(){
        return Math.ceil($scope.mhsdata.length/$scope.pageSize);
      }
  }).error(function (data) {
    console.log(data);
  });

  $scope.SendDataMahasiswa = function (mahasiswa) {
    var data = {
      no_rfid : mahasiswa.norfid,
      nim : mahasiswa.nim,
      nama : mahasiswa.nama,
      prodi : mahasiswa.prodi
    }

    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }

    $http.post(base_url+'tambahmahasiswa',data,config)
    .success(function(data){
      if(data.status==200) {
        document.getElementById('error').style.display = 'none';
        document.getElementById('success').style.display = 'block';
        $scope.status = 'refresh';
        $scope.msgTextsuccess="Sedang mengirim data ...";
        $timeout(function(){
          $scope.status = 'ok';
          $scope.msgTextsuccess="Data Berhasil Disimpan.";
          $scope.mahasiswa.norfid = '';
          $scope.mahasiswa.nim = '';
          $scope.mahasiswa.nama = '';
          $scope.mahasiswa.prodi = '';
        },2000);
      }else{
        document.getElementById('error').style.display = 'block';
        $scope.msgTexterror=data.message;
      }
    }).error(function(data){
      console.log(data);
    });
  }

  //edit mahasiswa
  if($routeParams.id_editMahasiswa){
    var id = $routeParams.id_editMahasiswa;
    $http.get(base_url+'mahasiswa/'+id)
      .success(function (data) {
        $scope.no_rfid = data.result[0].no_rfid;
        $scope.nim = data.result[0].nim;
        $scope.nama = data.result[0].nama;
        $scope.prodi = data.result[0].prodi;
      }).error(function (data) {
        console.log(data);
      });
  }

  $scope.SendEditMahasiswa = function(no_rfid,nim,nama,prodi) {

    var data = {
      nim : nim,
      nama : nama,
      prodi : prodi
    }

    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    var id = $routeParams.id_editMahasiswa;
    $http.post(base_url+'mahasiswa/'+id, data,config).success(function(data,status){
      if(data.status==200) {
        document.getElementById('error').style.display = 'none';
        document.getElementById('success').style.display = 'block';
        $scope.status = 'refresh';
        $scope.msgTextsuccess="Sedang mengubah data ...";
        $timeout(function(){
          $scope.status = 'ok';
          $scope.msgTextsuccess="Data Berhasil Diubah.";
          $timeout(function(){
            $location.path("/mahasiswa");
          },800);
        },2000);
      }else{
        document.getElementById('error').style.display = 'block';
        $scope.msgTexterror = '';
        for (var i = 0; i < data.messages.file.length; i++) {
          $scope.msgTexterror+=data.messages.file[i]+' ';
        }
      }
    }).error(function(data){
      console.error(data);
    });
  }

  $scope.deleteData = function(id){
    $http.delete(base_url+'mahasiswa/'+id)
      .success(function (data) {
        document.getElementById('error').style.display = 'none';
        document.getElementById('success').style.display = 'block';
        $scope.status = 'refresh';
        $scope.msgTextsuccess="Sedang menghapus data ...";
        $timeout(function(){
          $scope.status = 'ok';
          $scope.msgTextsuccess="Data Berhasil Dihapus.";
        },2000);
        $timeout(function () {
          $window.location.reload();
        }, 3000);
      }).error(function (data) {
        console.log(data);
      });
  }

});
