angular.module('providers')
       .provider('config',[configProvider]);

function configProvider() {

  this.$get = function() {
    return {
      apiEndPoint : 'http://localhost:3000'
    };    
  };

}