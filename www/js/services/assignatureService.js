angular.module('starter.services')
  .service('assignatureService', ['assignatureAPIService', '$q', 'Assignature', 'User',
  function(assignatureAPIService, $q, Assignature, User){

    this.getAssignatures = function(quantity){
      return $q(function(resolve, reject){
        assignatureAPIService.getAssignatures(quantity).then(function(rawAssignatures){
          resolve(rawAssignatures.map(Assignature.build));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getAssignature = function(id){
      return $q(function(resolve, reject){
        assignatureAPIService.getAssignature(id).then(function(rawAssignature){
          resolve(Assignature.build(rawAssignature));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getAssignatureTeachers = function(id){
      return $q(function(resolve, reject){
        assignatureAPIService.getAssignatureTeachers(id).then(function(rawTeachers){
          resolve(rawTeachers.map(User.build));
        }, function(error){
          reject(error);
        });
      })
    };

  }]);
