'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user',
  'login'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

setTimeout(function() {
	$.material.init();
},500)
