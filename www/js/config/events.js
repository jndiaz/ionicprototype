//Events
angular.module('starter')
  .run(['$ionicNavBarDelegate','$rootScope','$timeout', function($ionicNavBarDelegate, $rootScope, $timeout) {
    $rootScope.$on('$viewContentLoading', function(e, viewConfig) {
      setTitle();
      return;

      function setTitle(){
        if(viewConfig.view.data != undefined){
          var title = viewConfig.view.data.title;
          $timeout(function(){
              $ionicNavBarDelegate.title(title);
          }, 0);
        }
      }

    });
  }]);
