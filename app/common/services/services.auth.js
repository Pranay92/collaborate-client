angular.module('services')
     .service('auth',authService);

function authService() {
  
  var service = {};
  service.login = login;
  service.logout = logout;
  return service;

  function login() {

  }

  function logout() {

  }
}