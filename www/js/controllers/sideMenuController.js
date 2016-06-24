//Navbar controller
angular.module('starter.controllers')
  .controller('sideMenuController', ['userService', function(userService){
    var vm = this;
    vm.loggedUser = userService.getLoggedUser();
  }]);
