angular.module('providers')
       .provider('config',[configProvider]);

function configProvider() {

  var config = window.__config || {};

  this.$get = function() {
    return {
      apiEndPoint : config.apiEndPoint
    };    
  };

}