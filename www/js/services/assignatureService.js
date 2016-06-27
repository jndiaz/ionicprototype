angular.module('starter.services')
  .service('assignatureService', ['assignatureAPIService', '$q', 'Assignature', function(assignatureAPIService, $q, Assignature){

    this.getAssignatures = function(quantity){
      return $q(function(resolve, reject){
        assignatureAPIService.getAssignatures(quantity).then(function(rawAssignatures){
          resolve(rawAssignatures.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getAssignature = function(id){
      return $q(function(resolve, reject){
        assignatureAPIService.getAssignature(id).then(function(rawAssignature){
          resolve(parseRaw(rawAssignature));
        }, function(error){
          reject(error);
        });
      })
    };

    function parseRaw(rawAssignature){
      return Assignature.build(
        rawAssignature.id,
        rawAssignature.name,
        rawAssignature.description,
        rawAssignature.image,
        rawAssignature.teachers,
        rawAssignature.students
      );
    }

  }]);
