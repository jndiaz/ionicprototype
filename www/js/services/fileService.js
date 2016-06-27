angular.module('starter.services')
  .service('fileService', ['fileAPIService', '$q', 'File', function(fileAPIService, $q, File){

    this.getFiles = function(quantity){
      return $q(function(resolve, reject){
        fileAPIService.getFiles(quantity).then(function(rawFiles){
          resolve(parseRaw(rawFiles));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getNewFiles = function(lastItem){
      return $q(function(resolve, reject){
        fileAPIService.getNewFiles(lastItem).then(function(rawFiles){
          resolve(parseRaw(rawFiles));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getOldFiles = function(lastItem){
      return $q(function(resolve, reject){
        fileAPIService.getOldFiles(lastItem).then(function(rawFiles){
          resolve(parseRaw(rawFiles));
        }, function(error){
          reject(error);
        });
      })
    };

    function parseRaw(rawFiles){
      return rawFiles.map(function(rawFile){
        return File.build(
          rawFile.title,
          rawFile.description,
          rawFile.date,
          rawFile.subject,
          rawFile.author,
          rawFile.path
        );
      });
    };

  }]);
