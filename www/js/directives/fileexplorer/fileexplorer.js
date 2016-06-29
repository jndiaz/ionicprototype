//Fileexplorer directive
angular.module('starter.directives')
  .directive('fileExplorer', function(){

      var controller = ['$scope', '$ionicPopover', 'Utils', 'fileService', '$rootScope', 'MESSAGES',
      function($scope, $ionicPopover, Utils, fileService, $rootScope, MESSAGES){

        var vm = this;
        vm.breadcrumbs = []
        vm.breadcrumbs.push({id: 0, name: 'Root'});
        vm.activeFolder = 0;
        vm.emptyFolderMessage = MESSAGES.EMPTY_FOLDER;
        loadRoot();


        vm.openFolder = function(folderId, folderTitle){
          $rootScope.$broadcast('ajaxStart');
          if(folderTitle != undefined){
            vm.breadcrumbs.push({id: folderId, name: folderTitle});
            vm.activeFolder++;
          }
          fileService.getFolderContent(folderId, folderTitle).then(function(root){
            vm.root = root;
            vm.root.filesColumns = Utils.splitIntoColumns(vm.root.files, 3);
            $rootScope.$broadcast('ajaxFinish');
          });
        }

        vm.jumpToFolder = function(folderId, $index){
            if(vm.activeFolder != $index){
              vm.breadcrumbs.splice($index + 1);
              vm.activeFolder = $index;
              if(folderId == 0){
                $rootScope.$broadcast('ajaxStart');
                loadRoot();
              } else {
                vm.openFolder(folderId);
              }
            }
        }

        vm.openPopover = function($event, $index){
          $scope.selectedFile = vm.root.files[$index];
          $scope.popover.show($event);
        }

        function loadRoot(){
          fileService.getAssignatureRoot().then(function(root){
            vm.root = root;
            vm.root.filesColumns = Utils.splitIntoColumns(vm.root.files, 3);
            $rootScope.$broadcast('ajaxFinish');
          });
        }

        $ionicPopover.fromTemplateUrl('js/directives/fileexplorer/popover-file.html', {
          scope: $scope,
        }).then(function(popover){
          $scope.popover = popover;
        });

      }];

      return {
        restrict: 'EA',
        templateUrl: 'js/directives/fileexplorer/fileexplorer.html',
        controller: controller,
        controllerAs: 'vm'
      }
    });
