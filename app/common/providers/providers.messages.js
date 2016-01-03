angular.module('providers')
       .provider('messages',[messageProvider]);

function messageProvider() {

  this.$get = function() {
    
    var messages = {

      '500' : {
        'message' : 'A server error occurred. Please try again.',
        'class' : 'alert alert-dismissible alert-danger'
      },

      '401' : {
        'message' : 'Incorrect username or password.',
        'class' : 'alert alert-dismissible alert-danger'
      }

    };    

    messages['default'] = messages['500'];

    return messages;

  };

}