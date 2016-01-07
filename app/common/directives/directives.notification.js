angular.module('directives')
.directive('errorMessage',['$parse',function($parse) {
  return {
    'restrict' : 'E',
    'template' : '<div class="alert alert-danger"><span ng-bind="errMsg"></span></div>',
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
.directive('successMessageTop',['$timeout',function($timeout) {
  return {
    'restrict' : 'E',
    'template' : '<div class="alert alert-success top"><span ng-bind="successMsg"></span></div>',
    'link' : function($scope, $elem, $attrs) {

      $elem.hide();

      var valToWatch = $attrs.valToWatch,
          timeoutSecs = $attrs.timeout || 3000;

      timeoutSecs = parseInt(timeoutSecs);
      $scope.$watch(valToWatch,function(newVal) {
        
        if(newVal){
          $elem.show();
          $scope.successMsg = $scope.$eval($attrs.displayMessage);
          hide();
          return;
        }

        $elem.hide();

      });

      function hide() {
        $timeout(function(){
          $elem.hide();
        },timeoutSecs);
      }

    }
  }
}]);