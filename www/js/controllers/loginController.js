//Login controller
angular.module('starter.controllers')
  .controller('LoginController', ['userService', '$state', 'User', 'ERRORS',
    function(userService, $state, User, ERRORS){
      console.log('Loaded login controller');
      var vm = this;
      vm.user = User.create();
      vm.login = function(){
        if(vm.user.isValid()){
          userService.login(vm.user).then(function(user){
            $state.go('base.home');
          }, function(error){
            showError(ERRORS.BAD_CREDENTIALS);
          });
        }else{
          showError(ERRORS.INVALID_USER);
        }
      };

      var showError = function(error){
        switch (error) {
          case ERRORS.INVALID_USER:
            console.log('invalid user');
            break;
          case ERRORS.BAD_CREDENTIALS:
            console.log('bad credentials');
            break;
        }
      }

    }]);
