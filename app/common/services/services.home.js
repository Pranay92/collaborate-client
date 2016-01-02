angular.module('services')
       .service('homeService',[homeService]);



function homeService() {

  var service = {};
  service.get = get;
  return service;


  function get() {
    return ['Pranay','Shamsher','Amrutha'];
  }
};