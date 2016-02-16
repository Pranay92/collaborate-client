angular.module('services')
       .service('cacheService',[cacheService]);



function cacheService() {

  var service = {},
      cache = {};

  service.get = get;
  return service;

  function get(key) {
    return cache[key];
  };

  function set(key,value) {
    cache[key] = value;
  };

};