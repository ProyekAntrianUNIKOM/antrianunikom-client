var app = angular.module('mainApp',['ngRoute','mainApp.controllers']);
var host = "http://"+window.location.host;
var base_url  = host+"/apiantrian/public/api/v1/";
app.value('base_url',base_url);
app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/', {templateUrl: '../views/home/antrian.html',controller:'AntrianController'});
  $routeProvider.when('/step2', {templateUrl: '../views/home/menu-utama.html',controller:'AntrianController'});
  $routeProvider.when('/daftarbaru',{templateUrl : '../views/home/daftarbaru.html',controller:'AntrianController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
