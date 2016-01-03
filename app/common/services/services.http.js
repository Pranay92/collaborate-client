angular.module('services')
       .factory('requestInterceptor',['storageService','$q',requestInterceptor]);


function requestInterceptor(storageService,$q) {

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

    'responseError' : function(error) {
      return $q.reject(error);
    }

  };

}