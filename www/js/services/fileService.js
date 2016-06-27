angular.module('starter.services')
  .service('fileService', ['fileAPIService', '$q', 'File', function(fileAPIService, $q, File){

    this.getFiles = function(quantity){
      return $q(function(resolve, reject){
        fileAPIService.getFiles(quantity).then(function(rawFiles){
          resolve(rawFiles.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getNewFiles = function(lastItem){
      return $q(function(resolve, reject){
        fileAPIService.getNewFiles(lastItem).then(function(rawFiles){
          resolve(rawFiles.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getOldFiles = function(firstItem){
      return $q(function(resolve, reject){
        fileAPIService.getOldFiles(firstItem).then(function(rawFiles){
          resolve(rawFiles.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    function parseRaw(rawFile){
      return File.build(
        rawFile.title,
        rawFile.description,
        rawFile.date,
        rawFile.subject,
        rawFile.author,
        rawFile.path
      );
    };

  }]);
