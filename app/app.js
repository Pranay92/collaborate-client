'use strict';

// Declare app level module which depends on views, and components
angular.module('collaborate', [
  'ngRoute',
  'ngAnimate',
  'home',
  'login',
  'services',
  'directives'
]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('requestInterceptor');
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

setTimeout(function() {
	$.material.init();
},500)
