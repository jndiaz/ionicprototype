//Loader directive
angular.module('starter.directives')
  .directive('scheduleDay', function(){

      var controller = ['$scope', '$ionicPopover', '$ionicPopup', 'ionicTimePicker',
      function($scope, $ionicPopover, $ionicPopup, ionicTimePicker){
        var vm = this;
        
        vm.openOptions = function($event, $index){
          //$scope.selectedFile = vm.root.files[$index];
          $scope.popover.show($event);
        }

        vm.openTimePicker = function(){
          console.log('asd');
          ionicTimePicker.openTimePicker({
            callback: function(val){
              console.log(val);
            }
          });
        }

        vm.test = function(){
          console.log('asd');
        }

        vm.openEdit = function(isNew){
          $scope.popover.hide();
          var title = 'Edit task';
          if (isNew) title = 'Add task';
          $ionicPopup.show({
            title: title,
            templateUrl: 'js/directives/scheduleday/popup-edit.html',
            cssClass: 'edittask-popup',
            scope: $scope
          });
        }

        $ionicPopover.fromTemplateUrl('js/directives/scheduleday/popover-task.html', {
          scope: $scope,
        }).then(function(popover){
          $scope.popover = popover;
        });

      }];

      return {
        restrict: 'EA',
        templateUrl: 'js/directives/scheduleday/scheduleday.html',
        scope: {
          tasks: '@'
        },
        controller: controller,
        controllerAs: 'vm'
      }
    });
