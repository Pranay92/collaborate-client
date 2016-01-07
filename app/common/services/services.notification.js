angular.module('services')
       .service('notificationService',['$rootScope','$timeout',notificationService]);


function notificationService($rootScope,$timeout) {

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