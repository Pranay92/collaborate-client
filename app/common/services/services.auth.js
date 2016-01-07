angular.module('services')
     .service('authService',['config','$http','$location','$q',authService]);

function authService(config,$http,$location,$q) {
  
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
    var deferred = $q.defer();
    setTimeout(function(){
      deferred.resolve();
    },500);
    return deferred.promise;
  }

  function postLogout() {
    $location.path('/login');
  }
}