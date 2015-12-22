angular.module('login')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'app/login/views/login.html',
      controller: 'login'
    });
  }]);