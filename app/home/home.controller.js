
angular.module('home')
      .controller('homeCtrl',['$scope','authService','user',HomeController])

function HomeController($scope,authService,user) {
  
  $scope.logout = function() {
    authService.logout();
  };

};