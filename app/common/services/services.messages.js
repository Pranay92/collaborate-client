angular.module('services')
       .service('msgService',['$q','config','storageService','$http',msgService]);



function msgService($q,config,storageService,$http) {

  var service = {};
  service.get = get;
  service.one = one;
  service.send = send;
  return service;

  function one(msgId) {
    var deferred = $q.defer();
    $http.get(config.apiEndPoint + '/messages/' + msgId).then(function(response) {
      deferred.resolve(response.data);
    },function(){
      deferred.resolve({});
    });
    return deferred.promise;
  }

  function get(userId,start,end) {

    var deferred = $q.defer(),
        query = config.apiEndPoint + '/messages?from=' + userId + '&to=' + storageService.get('id');

    start = start || new Date();
    end = end || (new Date()).getTime();

    if(start.getTime){
      start.setDate(start.getDate() - 1);
      start = start.getTime();
    }

    query += ['&start=',start,'&end=',end].join('');

    $http.get(query).then(function(response) {
      deferred.resolve(response.data);
    },function(){
      deferred.resolve({});
    });
    return deferred.promise;
  }

  function send() {

  }


};