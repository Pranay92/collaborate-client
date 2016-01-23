angular.module('home')
.config(['$stateProvider', function($stateProvider) {

  $stateProvider
  .state('home', {
    'url' : '/home',
    'views' : {
      '@' : {
        templateUrl: 'app/home/views/home.html',
        controller: 'homeCtrl',
        resolve : {
          'user' : function(userService,storageService) {
            return userService.one(storageService.get('id'));
          },
          'users' : function(userService,storageService) {
            return userService.get(storageService.get('id'));
          }
        }
      }      
    }
  });

}]);