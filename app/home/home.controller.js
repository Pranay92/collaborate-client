
angular.module('home')
      .controller('homeCtrl',['$scope','authService','user','users',HomeController])

function HomeController($scope,authService,user,users) {
  
  $scope.users = users;

  $scope.logout = function() {
    authService.logout().then(function(){
      authService.postLogout();
    });
  };

};