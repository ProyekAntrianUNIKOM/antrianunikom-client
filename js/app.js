'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('operatorApp', ['ngRoute','ngCookies']);
var host = "http://"+window.location.host;
var base_url  = host+"/apiantrian/public/api/v1/";
app.value('base_url',base_url);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: '../partials/login.html',controller:'loginController'});
  $routeProvider.when('/', {templateUrl: '../views/operator/home.html',controller:'homeController'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

app.run(function($rootScope,$location,loginService){
  var routespermission=['/'];
  $rootScope.$on('$routeChangeStart',function(){
    if(routespermission.indexOf($location.path()) !=-1 && !loginService.isLogged()){
      $location.path('/login');
    }
  });
});
