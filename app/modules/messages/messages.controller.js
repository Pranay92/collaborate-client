
angular.module('messages')
      .controller('messageCtrl',['$scope','messages',MessageController])

function MessageController($scope,messages) {

  $scope.messages = messages;
};