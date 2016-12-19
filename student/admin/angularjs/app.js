'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('adminApp', ['ngRoute','ngCookies','chart.js','ng-file-input','angularMoment','summernote','ngAnimate']).controller("chartcont", function ($scope,$http,moment) {
  var host = "http://"+window.location.host;
  var base_url  = host+"/apiantrian/public/api/v1/";

  //History Loket Waktu Melayani
  $scope.tahunvTerlayani = '-';
  $scope.bulanvTerlayani = '-';
  var operatorMelayani = [];
  var rata_melayani = [];
  $http.get(base_url+'history/operator/waktu_melayani')
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
  console.log(rata_melayani);
  $scope.labelsTerlayani = operatorMelayani;
  $scope.colorsTerlayani = [{backgroundColor:[ '#36a2eb', '#ff6384','#4bc0c0', '#ffce56', '#e7e9ed', '#71b37c', '#949FB1', '#4D5360']}];

  $scope.dataTerlayani = [rata_melayani];
  $scope.seriesTerlayani = ['In Minute'];

  //History Loket
  $scope.tahunvLoketD = '-';
  $scope.bulanvLoketD = '-';
  var no_loket = [];
  var jumlahLoketD = [];
  $http.post(base_url+'history/loket')
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

  $scope.SendDataLoketD = function () {
    $scope.tahunvLoketD = $scope.tahunLoketD;
    $scope.bulanvLoketD = $scope.bulanLoketD;
    var data = $.param({
      tahun: $scope.tahunvLoketD,
      bulan: $scope.bulanvLoketD
    });

    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    var no_loket = [];
    var jumlahLoketD = [];
    $http.post(base_url+'history/loket', data, config)
      .success(function (data, status, headers, config) {
        for (var i=0; i<data.result.length; i++) {
          no_loket.push(data.result[i].no_loket);
        }
        for (var i=0; i<data.result.length; i++) {
          jumlahLoketD.push(data.result[i].jumlah);
        }
        if(data.result.length==0){
          $scope.msgLoketD = 'Data not found.';
        }else{
          $scope.msgLoketD = '';
        }
      }).error(function (data, status, header, config) {
        console.log(data);
    });
    $scope.labelsLoketD = no_loket;
    $scope.colorsLoketD = [{backgroundColor:[ '#f7464a', '#00ADF9','#97bbcd', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']}];
    $scope.dataLoketD = [jumlahLoketD];
  }

  //History Operator
  $scope.tahunv = '-';
  $scope.bulanv = '-';
  var operator = [];
  var jumlah = [];
  $http.post(base_url+'historyall')
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
    $http.post(base_url+'historyall', data, config)
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

  //History Pelayanan
  $scope.tahunvLoket = '-';
  $scope.bulanvLoket = '-';
  var nama_pelayanan = [];
  var jumlahLoket = [];
  $http.post(base_url+'history/pelayanan')
    .success(function (data, status, headers, config) {
      for (var i=0; i<data.result.length; i++) {
        nama_pelayanan.push(data.result[i].nama_pelayanan);
      }
      for (var i=0; i<data.result.length; i++) {
        jumlahLoket.push(data.result[i].jumlah);
      }
    }).error(function (data, status, header, config) {
      console.log(data);
  });
  $scope.labelsLoket = nama_pelayanan;
  $scope.colorsLoket = [{backgroundColor:["#f7464a","#97bbcd","#dcdcdc"]}];
  $scope.dataLoket = [jumlahLoket];

  $scope.SendDataLoket = function () {
    $scope.tahunvLoket = $scope.tahunLoket;
    $scope.tahunvLoket = $scope.bulanLoket;
    var data = $.param({
      tahun: $scope.tahunLoket,
      bulan: $scope.bulanLoket
    });

    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    var nama_pelayanan = [];
    var jumlahLoket = [];
    $http.post(base_url+'history/pelayanan', data, config)
      .success(function (data, status, headers, config) {
        for (var i=0; i<data.result.length; i++) {
          nama_pelayanan.push(data.result[i].nama_pelayanan);
        }
        for (var i=0; i<data.result.length; i++) {
          jumlahLoket.push(data.result[i].jumlah);
        }
        if(data.result.length==0){
          $scope.msgLoket = 'Data not found.';
        }else{
          $scope.msgLoket = '';
        }
      }).error(function (data, status, header, config) {
        console.log(data);
    });
    $scope.labelsLoket = nama_pelayanan;
    $scope.colorsLoket = [{backgroundColor:["#f7464a","#97bbcd","#dcdcdc"]}];
    $scope.dataLoket = [jumlahLoket];
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
  //operator
  $routeProvider.when('/operator', {templateUrl: './views/operator/operator.html',controller:'operatorController'});
  $routeProvider.when('/operator/detail/:id', {templateUrl: './views/operator/historyoperator.html',controller:'operatorController'});
  //berita
  $routeProvider.when('/berita', {templateUrl: './views/berita/berita.html',controller:'beritaController'});
  $routeProvider.when('/berita/add', {templateUrl: './views/berita/formberita.html',controller:'beritaController'});
  $routeProvider.when('/berita/edit/:id_editBerita', {templateUrl: './views/berita/editberita.html',controller:'beritaController'});
  $routeProvider.when('/berita/detail/:id_detailBerita', {templateUrl: './views/berita/detailberita.html',controller:'beritaController'});
  $routeProvider.when('/berita/:idhapus', {controller:'beritaController'});
  //video
  $routeProvider.when('/video', {templateUrl: './views/video/video.html',controller:'videoController'});
  $routeProvider.when('/video/add', {templateUrl: './views/video/formvideo.html',controller:'videoController'});
  $routeProvider.when('/video/edit/:id_editVideo', {templateUrl: './views/video/editvideo.html',controller:'videoController'});
  $routeProvider.when('/video/detail/:id_detailVideo', {templateUrl: './views/video/detailvideo.html',controller:'videoController'});
  $routeProvider.when('/video/:idhapus', {controller:'videoController'});
  //mahasiswa
  $routeProvider.when('/mahasiswa', {templateUrl: './views/mahasiswa/mahasiswa.html',controller:'mahasiswaController'});
  $routeProvider.when('/mahasiswa/edit/:id_editMahasiswa', {templateUrl: './views/mahasiswa/editmahasiswa.html',controller:'mahasiswaController'});
  $routeProvider.when('/mahasiswa/daftar', {templateUrl: './views/mahasiswa/formmahasiswa.html',controller:'mahasiswaController'});
  //banner
  $routeProvider.when('/banner', {templateUrl: './views/banner/banner.html',controller:'bannerController'});
  $routeProvider.when('/banner/add', {templateUrl: './views/banner/formbanner.html',controller:'bannerController'});
  $routeProvider.when('/banner/edit/:id_editBanner', {templateUrl: './views/banner/editbanner.html',controller:'bannerController'});
}]);

app.run(function($rootScope,$location,loginService){
  var routespermission=['/','/operator','/operator/detail/:id','/berita/edit/:id',
                        '/berita','/berita/add','/berita/detail/:id_detailBerita','/mahasiswa','/mahasiswa/daftar',
                        '/mahasiswa/edit/:id_editMahasiswa','/banner','/banner/add','/banner/edit/:id_banner','/video',
                        '/video/add','/video/edit/:id_editVideo','/video/detail/:id_detailVideo','/video/:idhapus'];
  $rootScope.$on('$routeChangeStart',function(){
    if(routespermission.indexOf($location.path()) !=-1 && !loginService.isLogged()){
      $location.path('/login');
    }
  });
});
