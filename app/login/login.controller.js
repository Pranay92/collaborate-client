angular.module('login')
	   .controller('login',['$scope','$location','authService',login]);

function login($scope,$location,authService) {

	$scope.login = function() {

		authService.login($scope.username,$scope.password).then(function() {
      $location.path('/home');
    });

	};
}