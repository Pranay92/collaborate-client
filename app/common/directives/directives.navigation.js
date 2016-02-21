angular.module('directives')
.directive('listItem',[function(){
  return {
    'restrict': 'A',
    'link' :function($scope,$elem,$attrs) {

      var user = JSON.parse($attrs.listItem);
      user.notification = false;

      $elem.on('click',function(){
        angular.element('.anchor').removeClass('active');
        $elem.addClass('active');
        user.notification = false;
      });

      $scope.$on(user._id,function(){
        user.notification = true;
        $scope.$apply();
      });

      $scope.msgReceived = function() {
        return user.notification;
      };

    }
  }
}]);