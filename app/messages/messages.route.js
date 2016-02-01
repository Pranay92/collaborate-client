angular.module('messages')
.config(['$stateProvider', function($stateProvider) {

  $stateProvider
  .state('home.messages',{
    'url' : '/{id}/messages',
    'views' : {
      'messages@home' : {
        templateUrl : 'app/home/views/messages.html'
      }
    }
  });

}]);