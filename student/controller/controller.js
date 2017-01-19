var app = angular.module('myApp', []);

app.directive('bg-header', function(){
	return {
		restirct: 'E',
		templateUrl: 'header.htm'
	}
});

app.directive('bg-main', function(){
	return {
		restirct: 'E',
		templateUrl: 'menu-utama.htm'
	}
});