
angular.module('messages')
      .controller('messageCtrl',['$scope',MessageController])

function MessageController($scope) {

  $scope.messages = ['one','two','three'];
};