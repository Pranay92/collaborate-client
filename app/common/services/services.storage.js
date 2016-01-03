angular.module('services')
     .service('storageService',[storageService]);

function storageService(){

  var service = {};
  service.store = store;
  service.clear = clear;
  service.remove = remove;
  service.get = get;
  return service;

  function store(key,value) {
    window.localStorage.setItem(key,value);
  }

  function clear() {
    window.localStorage.clear();
  }

  function remove(key) {
    window.localStorage.removeItem(key);
  }

  function get(key) {
    return window.localStorage.getItem(key);
  }

}