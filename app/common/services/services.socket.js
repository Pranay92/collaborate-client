angular.module('services')
       .factory('socket',['config','storageService',socketFactory]);

function socketFactory(config,storageService) { 

  var service = {},
      connected = false,
      connection;
  service.connect = Connect;
  service.disconnect = Disconnect;
  service.isconnected = IsConnected;
  service.initialize = Initialize;
  return service;

  function Connect(){
    connection = io.connect(config.socketEndPoint);
    connected = true;
    AttachListener();
  };

  function Disconnect() {

  };

  function AttachListener() {
    var user = storageService.get('id');
    connection.on(user + '-msg',function(data){
      // handle showing notifications here
    });
  }

  function IsConnected() {
    return connected;
  };

  function Initialize() {
    if(IsConnected()) {
      return;
    }
    Connect();
  };
}