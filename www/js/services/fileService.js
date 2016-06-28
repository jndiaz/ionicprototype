angular.module('starter.services')
  .service('fileService', ['fileAPIService', '$q', 'File', 'Folder', function(fileAPIService, $q, File, Folder){

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

    this.getAssignatureRoot = function(id){
      return $q(function(resolve, reject){
        fileAPIService.getAssignatureRoot(id).then(function(rawFiles){
          resolve({
            folders: rawFiles.folders.map(parseRawFolder),
            files: rawFiles.files.map(parseRaw)
          });
        }, function(error){
          reject(error);
        });
      })
    }

    this.getFolderContent = function(id){
      return $q(function(resolve, reject){
        fileAPIService.getFolderContent(id).then(function(content){
          resolve({
            folders: content.folders.map(parseRawFolder),
            files: content.files.map(parseRaw)
          });
        }, function(error){
          reject(error);
        });
      })
    }

    function parseRaw(rawFile){
      return File.build(
        rawFile.id,
        rawFile.title,
        rawFile.description,
        rawFile.date,
        rawFile.subject,
        rawFile.author,
        rawFile.path
      );
    };

    function parseRawFolder(rawFolder){
      return Folder.build(
        rawFolder.id,
        rawFolder.title,
        rawFolder.date,
        rawFolder.subject,
        rawFolder.author,
        rawFolder.path,
        rawFolder.content
      );
    };

  }]);
