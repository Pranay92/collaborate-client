'use strict';

// Declare app level module which depends on views, and components
angular.module('collaborate', [
  'ngRoute',
  'home',
  'login',
  'services'
]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('requestInterceptor');
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

setTimeout(function() {
	$.material.init();
},500)
