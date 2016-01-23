angular.module('login')
  .config(['$stateProvider', function($stateProvider) {
    
    $stateProvider.state('login', {
      'url' : '/login',
      'views' : {
        '@' : {
          templateUrl : 'app/login/views/login.html',
          controller : 'login'          
        }
      }
    });

  }]);