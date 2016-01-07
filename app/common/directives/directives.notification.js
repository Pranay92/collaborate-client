angular.module('directives')
.directive('errorMessage',['$parse',function($parse) {
  return {
    'restrict' : 'E',
    'template' : '<div class="alert alert-danger notification-error"><span ng-bind="errMsg"></span></div>',
    'link' : function($scope, $elem, $attrs) {

      var valToWatch = $attrs.valToWatch;
      $elem.hide();
      $scope.$watch(valToWatch,function(newVal) {
        
        if(newVal){
          $elem.show();
          $scope.errMsg = $scope.$eval($attrs.displayMessage);
          return;
        }

        $elem.hide();

      });

    }
  }
}])
.directive('successMessage',[function() {
  return {
    'restrict' : 'E',
    'template' : '<div class="alert alert-success"><span ng-bind="successMsg"></span></div>',
    'link' : function($scope, $elem, $attrs) {

      var valToWatch = $attrs.valToWatch;
      $elem.hide();
      $scope.$watch(valToWatch,function(newVal) {
        
        if(newVal){
          $elem.show();
          $scope.successMsg = $scope.$eval($attrs.displayMessage);
          return;
        }

        $elem.hide();

      });

    }
  }
}])
.directive('successMessageTop',['$timeout','$rootScope',function($timeout,$rootScope) {
  return {
    'restrict' : 'E',
    'template' : '<div class="alert alert-success notification-temp-top"><span ng-bind="successMsg"></span></div>',
    'link' : function($scope, $elem, $attrs) {

      $elem.hide();

      var valToWatch = $attrs.valToWatch,
          timeoutSecs = $attrs.timeout || 3000;

      timeoutSecs = parseInt(timeoutSecs);
      $rootScope.$watch(valToWatch,function(newVal) {
        
        if(newVal){
          $elem.show();
          $rootScope.successMsg = $rootScope.$eval($attrs.displayMessage);
          reset();
          return;
        }

        $elem.hide();

      });

      function reset() {
        $timeout(function(){
          $rootScope.successMsg = '';
          $rootScope[valToWatch] = false;
        },timeoutSecs);
      }

    }
  }
}]);