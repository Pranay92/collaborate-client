angular.module('login')
	   .controller('login',['$scope','$location','authService','storageService',login]);

function login($scope,$location,authService,storageService) {

	$scope.login = function() {

		authService.login($scope.username,$scope.password).then(function(response) {
      storageService.store('token',response.data.token);
      storageService.store('id',response.data.id);
      $location.path('/home');
    });

	};
}