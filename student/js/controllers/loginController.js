'use strict';

app.controller('loginController',function($q,$scope,$http,loginService){
    $scope.msgText="";
    $scope.login = function(user){
       loginService.login(user,$scope); // call login service
   }
});
