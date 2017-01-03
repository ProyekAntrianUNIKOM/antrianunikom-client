'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('adminApp', ['ngRoute','ngCookies','chart.js','ng-file-input','summernote','ngAnimate']).controller("chartcont", function ($scope,$http) {
  var host = "http://"+window.location.host;
  var base_url  = host+"/apiantrian/public/api/v1/";

  //History Loket Waktu Melayani
  $scope.tahunvTerlayani = '-';
  $scope.bulanvTerlayani = '-';
  $scope.tanggalvTerlayani = '-';
  var operatorMelayani = [];
  var rata_melayani = [];
  $http.post(base_url+'pmb/history/operator/waktu_melayani')
    .success(function (data, status, headers, config) {
      for (var i=0; i<data.result.length; i++) {
        operatorMelayani.push(data.result[i].nama);
      }
      for (var i=0; i<data.result.length; i++) {
        var a = data.result[i].rata_waktu_melayani;
        var re = a.replace(/:/g,".");
        var b = moment.duration(a, "HH:mm:ss").asMinutes();
        rata_melayani.push(Math.round(b));
      }
    }).error(function (data, status, header, config) {
      console.log(data);
  });
  $scope.labelsTerlayani = operatorMelayani;
  $scope.colorsTerlayani = [{backgroundColor:[ '#36a2eb', '#ff6384','#4bc0c0', '#ffce56', '#e7e9ed', '#71b37c', '#949FB1', '#4D5360']}];

  $scope.dataTerlayani = [rata_melayani];
  $scope.seriesTerlayani = ['In Minute'];

  $scope.SendDataTerlayani = function () {
    $scope.tahunvTerlayani = $scope.tahunTerlayani;
    $scope.bulanvTerlayani = $scope.bulanTerlayani;
    $scope.tanggalvTerlayani = $scope.tanggalTerlayani;
    var data = $.param({
      tahun: $scope.tahunvTerlayani,
      bulan: $scope.bulanvTerlayani,
      hari: $scope.tanggalvTerlayani,
    });

    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    var operatorMelayani = [];
    var rata_melayani = [];
    $http.post(base_url+'pmb/history/operator/waktu_melayani', data, config)
      .success(function (data, status, headers, config) {
        for (var i=0; i<data.result.length; i++) {
          operatorMelayani.push(data.result[i].nama);
        }
        for (var i=0; i<data.result.length; i++) {
          var a = data.result[i].rata_waktu_melayani;
          var re = a.replace(/:/g,".");
          var b = moment.duration(a, "HH:mm:ss").asMinutes();
          rata_melayani.push(Math.round(b));
        }
        if(data.result.length==0){
          $scope.msgTerlayani = 'Data not found.';
        }else{
          $scope.msgTerlayani = '';
        }
      }).error(function (data, status, header, config) {
        console.log(data);
    });
    $scope.labelsTerlayani = operatorMelayani;
    $scope.colorsTerlayani = [{backgroundColor:[ '#36a2eb', '#ff6384','#4bc0c0', '#ffce56', '#e7e9ed', '#71b37c', '#949FB1', '#4D5360']}];

    $scope.dataTerlayani = [rata_melayani];
    $scope.seriesTerlayani = ['In Minute'];
  }

  //History Loket
  $scope.tahunvLoketD = '-';
  $scope.bulanvLoketD = '-';
  var no_loket = [];
  var jumlahLoketD = [];
  $http.post(base_url+'pmb/history/loket')
    .success(function (data, status, headers, config) {
      for (var i=0; i<data.result.length; i++) {
        no_loket.push('Loket - '+data.result[i].no_loket);
      }
      for (var i=0; i<data.result.length; i++) {
        jumlahLoketD.push(data.result[i].jumlah);
      }
    }).error(function (data, status, header, config) {
      console.log(data);
  });
  $scope.labelsLoketD = no_loket;
  $scope.colorsLoketD = [{backgroundColor:[ '#f7464a', '#00ADF9','#97bbcd', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']}];

  $scope.dataLoketD = [jumlahLoketD];

  //History Operator
  $scope.tahunv = '-';
  $scope.bulanv = '-';
  var operator = [];
  var jumlah = [];
  $http.post(base_url+'pmb/history/operator')
    .success(function (data, status, headers, config) {
      for (var i=0; i<data.result.length; i++) {
        operator.push(data.result[i].nama_operator);
      }
      for (var i=0; i<data.result.length; i++) {
        jumlah.push(data.result[i].jumlah);
      }
    }).error(function (data, status, header, config) {
      console.log(data);
  });
  $scope.labels = operator;
  $scope.colors = [{backgroundColor:[ '#f7464a', '#00ADF9','#97bbcd', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']}];
  $scope.series = ['Antrian Terlayani'];

  $scope.data = [jumlah];

  $scope.SendData = function () {
    $scope.tahunv = $scope.tahun;
    $scope.bulanv = $scope.bulan;
    var data = $.param({
      tahun: $scope.tahun,
      bulan: $scope.bulan
    });

    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    var operator = [];
    var jumlah = [];
    $http.post(base_url+'pmb/history/operator', data, config)
      .success(function (data, status, headers, config) {
        for (var i=0; i<data.result.length; i++) {
          operator.push(data.result[i].nama_operator);
        }
        for (var i=0; i<data.result.length; i++) {
          jumlah.push(data.result[i].jumlah);
        }
        console.log(data.result.length);
        if(data.result.length==0){
          $scope.msg = 'Data not found.';
        }else{
          $scope.msg = '';
        }
      }).error(function (data, status, header, config) {
        console.log(data);
    });
    $scope.labels = operator;
    $scope.series = ['Antrian Terlayani'];
    $scope.data = [jumlah];
  }



}).controller("nav", function ($scope,sessionService,$http,$location) {
  $scope.logout = function() {
    sessionService.destroy('id_admin');
    sessionService.destroy('username');
    $location.path('/login');
  }
  $scope.username = sessionService.get('username');
}).controller("head",function($scope,$http){
  $http.get(base_url+'history/loket').success(function(data){
    // var icon = [''];
    // for (var i = 0; i < data.result.length; i++) {
    //   data.result[i].icon =
    // }
    $scope.loketdata = data.result;
  }).error(function(data){
    console.error(data);
  })
});
var host = "http://"+window.location.host;
var base_url  = host+"/apiantrian/public/api/v1/";
app.value('base_url',base_url);
app.value('host',host);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: './views/home.html',controller:'homeController'});
  $routeProvider.when('/login', {templateUrl: './views/login.html',controller:'loginController'});
}]);

app.run(function($rootScope,$location,loginService){
  var routespermission=['/'];
  $rootScope.$on('$routeChangeStart',function(){
    if(routespermission.indexOf($location.path()) !=-1 && !loginService.isLogged()){
      $location.path('/login');
    }
  });
});
