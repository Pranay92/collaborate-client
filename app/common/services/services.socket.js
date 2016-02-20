angular.module('services')
       .factory('socket',socketFactory);

function socketFactory() { 

  var service = {};
  service.connect = connect;
  service.disconnect = disconnect;
  return service;

  function connect(){

  };

  function disconnect() {

  };
}