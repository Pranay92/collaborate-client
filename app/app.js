'use strict';

// Declare app level module which depends on views, and components
angular.module('collaborate', [
  'ui.router',
  'ngAnimate',
  'home',
  'login',
  'services',
  'directives'
]).
config(['$urlRouterProvider','$httpProvider', function($urlRouterProvider, $httpProvider) {
  $httpProvider.interceptors.push('requestInterceptor');
  $urlRouterProvider.otherwise('/login');
}]);