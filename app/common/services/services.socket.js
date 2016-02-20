angular.module('services')
       .factory('socket',['config',socketFactory]);

function socketFactory(config) { 

  var service = {},
      connected = false;
  service.connect = Connect;
  service.disconnect = Disconnect;
  service.isconnected = IsConnected;
  service.initialize = Initialize;
  return service;

  function Connect(){
    io.connect(config.socketEndPoint);
    connected = true;
  };

  function Disconnect() {

  };

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