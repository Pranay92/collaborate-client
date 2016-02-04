angular.module('messages')
.config(['$stateProvider', function($stateProvider) {

  $stateProvider
  .state('home.messages',{
    'url' : '/{id}/messages',
    'views' : {
      'messages@home' : {
        templateUrl : 'app/messages/views/messages.html',
        controller : 'messageCtrl',
        resolve : {
          'messages' :function(msgService,$stateParams) {
            return msgService.get($stateParams.id);
          }
        }
      }
    }
  });

}]);