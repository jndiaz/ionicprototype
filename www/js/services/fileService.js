angular.module('starter.services')
  .service('fileService', ['fileAPIService', '$q', 'File', function(fileAPIService, $q, File){

    this.getFiles = function(){
      return $q(function(resolve, reject){
        fileAPIService.getFiles().then(function(rawFiles){
          resolve(rawFiles.map(function(rawFile){
            return File.build(
              rawFile.title,
              rawFile.description,
              rawFile.date,
              rawFile.subject,
              rawFile.author,
              rawFile.path
            )
          }));
        }, function(error){
          reject(error);
        });
      })
    }

  }]);
