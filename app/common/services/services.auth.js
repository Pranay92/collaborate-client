angular.module('services')
     .service('authService',['config','$http','$location',authService]);

function authService(config,$http,$location) {
  
  var service = {};
  service.login = login;
  service.logout = logout;
  return service;

  function login(username,password) {
    return $http(
      {
        'method' : 'POST',
        'url' : config.apiEndPoint + '/login',
        'data' : {
          'username' : username,
          'password' : password
        },
        'headers' : {
          'Content-Type' : 'application/json'
        }
      }
    );
  }

  function logout() {
    $location.path('/login');
  }
}