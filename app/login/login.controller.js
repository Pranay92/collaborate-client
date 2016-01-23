angular.module('login')
	   .controller('login',['$scope','$state','authService','storageService','messages',login]);

function login($scope,$state,authService,storageService,messages) {

  $scope.credentials = {};
  $scope.buttonMsg = 'Submit';

	$scope.login = function() {
    $scope.buttonMsg = 'Submitting...';
		authService.login($scope.credentials.username,$scope.credentials.password).then(function(response) {
      storageService.store('token',response.data.token);
      storageService.store('id',response.data.id);
      $state.transitionTo('home');
    },function(error) {
      handleError(error);
    })
	};

  $scope.reset = function() {
    $scope.error = false;
    $scope.errMsg = '';
  };

  function handleError(error) {
    var errMsg = messages[error.status.toString()] || messages['default'];
    $scope.error = true;
    $scope.errMsg = errMsg.message;
    $scope.buttonMsg = 'Submit';
  }

}