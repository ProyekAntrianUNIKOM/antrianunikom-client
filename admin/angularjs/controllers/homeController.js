'use strict';

app.controller('homeController',function($q,$scope,sessionService,$http,loginService){
  $scope.logout = function(){
     loginService.logout($scope); // call login service
  }
});
