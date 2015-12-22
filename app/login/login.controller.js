angular.module('login')
	   .controller('login',['$scope','$location',login]);

function login($scope,$location) {

	$scope.login = function() {
		$location.path('/users');
	};
}