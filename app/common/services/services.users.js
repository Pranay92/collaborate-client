angular.module('services')
       .service('userService',['$q','config','storageService','$http',userService]);



function userService($q,config,storageService,$http) {

  var service = {};
  service.get = get;
  service.one = one;
  service.update = update;
  return service;

  function one(userId) {
    var deferred = $q.defer();
    $http.get(config.apiEndPoint + '/users/' + userId).then(function(response) {
      deferred.resolve(response.data);
    },function(){
      deferred.resolve({});
    });
    return deferred.promise;
  }

  function get(userId) {

    var deferred = $q.defer(),
        query = config.apiEndPoint + '/users';

    if(userId) {
      query += '?filter=' + userId;
    }

    $http.get(query).then(function(response) {
      deferred.resolve(response.data);
    },function(){
      deferred.resolve({});
    });

    return deferred.promise;
  }

  function update(user) {

    var deferred = $q.defer(),
        query = config.apiEndPoint + '/users/' + user._id;

    $http.put(query,user).then(function(data){
      deferred.resolve(data);
    },function(err){
      deferred.reject(err)
    });

    return deferred.promise;
  }


};