var app = angular.module('adminApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('login',{
      url:'/login',
      templateUrl : '../view/admin/login.html'
    });
});
