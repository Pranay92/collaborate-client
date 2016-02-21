
angular.module('messages')
      .controller('messageCtrl',['$scope','messages','socket','$stateParams',MessageController])

function MessageController($scope,messages,socket,$stateParams) {
  
  $scope.messages = messages;
  $scope.msg = '';

  $scope.sendMsg = function() {
    socket.sendMsg({content : $scope.msg, to : $stateParams.id});
  };

};