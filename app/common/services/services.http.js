angular.module('services')
       .factory('requestInterceptor',['storageService',requestInterceptor]);


function requestInterceptor(storageService) {

  var authToken;

  return {

    'request' : function(config) {
      
      authToken = storageService.get('token');
      
      if(authToken) {
        config.headers.Authorization = ['Bearer ',authToken].join('');
      }

      return config;
    },

    'requestError' : function() {

    },

    'response' : function(response) {
      return response;
    },

    'responseError' : function() {

    }

  };

}