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
}])
.directive('buttonText',[function() {
  return {
    'restrict' : 'A',
    'link' : function($scope,$elem,$attrs) {
      
      var btnText = $attrs.buttonText,
          btnDefaultText = $attrs.buttonDefaultText|| 'Submit',
          btnDisableText = $attrs.buttonDisableText || '__undefined';

      if(!$scope[btnText]){
        $elem.text(btnDefaultText);
        return;
      }

      $scope.$watch(btnText,function(newVal){
        
        if(newVal == btnDisableText){
          $elem.attr('disabled',true);
          return;
        }

        $elem.removeAttr('disabled');

      });
    }
  }
}])
.directive('ngEnter', [function () {
  return {
    link : function (scope, element, attrs) {
      element.on("keydown keypress", function (event) {
        if(event.which === 13) {

          scope.$apply(function (){
              scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    }
  }
}]);