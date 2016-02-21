angular.module('services')
       .factory('socket',['config','storageService','$rootScope',socketFactory]);

function socketFactory(config,storageService,$rootScope) { 

  var service = {},
      connected = false,
      connection,
      userId = storageService.get('id');
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
    connection.on(userId + '-msg',function(data){
      $rootScope.$broadcast(data.from);
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
    config.from = userId;
    config.created = new Date().getTime();
    connection.emit('message',config);
  };
}