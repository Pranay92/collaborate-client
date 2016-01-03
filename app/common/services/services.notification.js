angular.module('services')
       .service('notificationService',[notificationService]);


function notificationService() {

  var service = {};
  service.error = error;
  service.success = success;
  return service;

  function error() {

  }

  function success() {
    
  }
}