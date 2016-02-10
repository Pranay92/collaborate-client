angular.module('login')
  .config(['$stateProvider', function($stateProvider) {
    
    $stateProvider.state('login', {
      'url' : '/login',
      'views' : {
        '@' : {
          templateUrl : 'app/modules/login/views/login.html',
          controller : 'login'          
        }
      }
    });

  }]);