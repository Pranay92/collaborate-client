
angular.module('home')
      .controller('homeCtrl',['$scope','authService','user','notificationService',HomeController])

function HomeController($scope,authService,user,notificationService) {
  
  $scope.logout = function() {
    authService.logout().then(function(){
      authService.postLogout();
      notificationService.success('Successfully logged out');
    });
  };

};