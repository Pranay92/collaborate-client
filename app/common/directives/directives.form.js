angular.module('directives')
       .directive('formChange',['$parse',function($parse) {
        return {
          'restrict' : 'A',
          'require' : 'form',
          'link' : function($scope, $elem, $attrs) {
            var cb = $scope.$eval($attrs.formChange);
            $elem.on('keyup',function() {
              cb();
              $scope.$apply();
            });
          }
        }
       }]);