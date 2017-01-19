'use strict';
var host = "http://"+window.location.host;
var base_url  = host+"/apiantrian/public/api/v1/";
angular.module('adminApp.controllers', ['ngCookies'])
.controller('adminController',function($scope,$http){

})
.controller('tambahfotoController',function($scope,$http){
  $scope.tambah = function(){
    var fd = new FormData();
    fd.append('photo',$scope.photo);
    /*
    var kirim = {
      'judul' : $scope.photo
    }
    $http.post('http://localhost:1337/api/testing',kirim).success(function(data,status){
      console.log(data);
    }).error(function(data){
      console.log(data);
    })
    */
    $http.post('http://localhost:8080/tes.php', fd, {
   transformRequest: angular.identity,
   headers: {'Content-Type': undefined}
     }).success(function(data){
       console.log(data);
     });
  }
});
