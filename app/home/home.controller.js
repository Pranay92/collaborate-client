
angular.module('home')
      .controller('homeCtrl',['$scope','authService','user','notificationService','users',HomeController])

function HomeController($scope,authService,user,notificationService,users) {
  
  $scope.users = users;

  $scope.logout = function() {
    authService.logout().then(function(){
      authService.postLogout();
      notificationService.success('Successfully logged out');
    });
  };

};