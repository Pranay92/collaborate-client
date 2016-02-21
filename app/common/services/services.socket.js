angular.module('services')
       .factory('socket',['config','storageService',socketFactory]);

function socketFactory(config,storageService) { 

  var service = {},
      connected = false,
      connection,
      user = storageService.get('id');
  service.connect = Connect;
  service.disconnect = Disconnect;
  service.isconnected = IsConnected;
  service.initialize = Initialize;
  service.sendMsg = SendMsg;
  return service;

  function Connect(){
    connection = io.connect(config.socketEndPoint);
    connected = true;
    AttachListener();
  };

  function Disconnect() {

  };

  function AttachListener() {
    connection.on(user + '-msg',function(data){
      console.log(data);
    });
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

  function SendMsg(config) {
    connection.emit('message',{from : user, to : config.to, msg : config.msg});
  }
}