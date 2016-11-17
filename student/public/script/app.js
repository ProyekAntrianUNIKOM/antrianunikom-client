var app = angular.module('standbyApp',[]);

app.controller('MainController',function($scope,$http){
  var x = 1;
  var ximg = document.querySelectorAll('.slider').length;

  function active(n) {
      for (var i = 1; i <= ximg; i++) {
          document.getElementById('img-' + i).style.order = '1';
          document.getElementById('img-' + n).style.order = '0';
      }
  }

  function change(){
      x += 1;
      if (x > ximg){
          x = 1;
      }
      return active(x);
  }
  
  setInterval(change, 3000);
  $scope.hallo="Welcome";
  $http.get('http://localhost:8080/apiantrian/public/api/v1/photo').success(function(data,status){
    $scope.photos = data.result;
  });
});
