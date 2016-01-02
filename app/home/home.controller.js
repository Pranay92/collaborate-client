
angular.module('home')
      .controller('homeCtrl',['$scope','authService',HomeController])

function HomeController($scope,authService) {
  
  $scope.logout = function() {
    authService.logout();
  };

};