angular.module('services')
       .service('notificationService',['$rootScope',notificationService]);


function notificationService($rootScope) {

  var service = {};
  service.error = error;
  service.success = success;
  return service;

  function error() {

  }

  function success(msg) {
    $rootScope.success = true;
    $rootScope.successMsg = msg;
  }
}