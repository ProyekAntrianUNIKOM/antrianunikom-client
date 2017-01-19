'use strict';

var app = angular.module('adminApp', ['ngRoute','ngCookies','adminApp.controllers']);
var host = "http://"+window.location.host;
var base_url  = host+"/apiantrian/public/api/v1/";
app.value('base_url',base_url);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '../views/admin/home.html',controller:'adminController'})
  .when('/tambah',{templateUrl:'../views/admin/tambahfoto.html',controller:'tambahfotoController'})
  .otherwise({redirectTo: '/'});
}]);

/*
app.run(function($rootScope,$location,loginService){
  var routespermission=['/'];
  $rootScope.$on('$routeChangeStart',function(){
    if(routespermission.indexOf($location.path()) !=-1 && !loginService.isLogged()){
      $location.path('/login');
    }
  });
});
*/
