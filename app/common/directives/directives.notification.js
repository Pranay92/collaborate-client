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
}]);