angular.module('services')
       .factory('requestInterceptor',['$localStorage',requestInterceptor]);


function requestInterceptor($localStorage) {

  return {

    'request' : function() {

    },

    'requestError' : function() {

    },

    'response' : function() {

    },
    
    'responseError' : function() {

    }

  };

}