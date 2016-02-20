
angular.module('home')
      .controller('homeCtrl',['$scope','authService','user','users','socket',HomeController])

function HomeController($scope,authService,user,users,socket) {
  
  $scope.users = users;
  $scope.user = user;
  
  socket.initialize();
  
  $scope.logout = function() {
    authService.logout().then(function(){
      authService.postLogout();
    });
  };

};