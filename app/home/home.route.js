angular.module('home')
.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {

    templateUrl: 'app/home/views/home.html',
    controller: 'homeCtrl',
    resolve : {
      'user' : function($http,config,storageService) {
        return $http.get(config.apiEndPoint + '/users/' + storageService.get('id'));
      }
    }

  });

}]);