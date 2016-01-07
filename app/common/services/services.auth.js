angular.module('services')
     .service('authService',['config','$http','$location','storageService',authService]);

function authService(config,$http,$location,storageService) {
  
  var service = {};
  service.login = login;
  service.logout = logout;
  service.postLogout = postLogout;
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
    return $http(
      {
        'method' : 'POST',  
        'url' : config.apiEndPoint + '/logout',
        'data' : {
          'token' : storageService.get('token')
        },
        'headers' : {
          'Content-Type' : 'application/json'
        } 
      }
    );
  }

  function postLogout() {
    $location.path('/login');
  }
}