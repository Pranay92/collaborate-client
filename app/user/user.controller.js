angular.module('user')
      .controller('userCtrl',['$scope','userService',UserController])

function UserController($scope,userService) {
  $scope.users = userService.get();
};