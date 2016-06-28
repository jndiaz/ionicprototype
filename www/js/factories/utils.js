angular.module('starter.factories')
  .factory('Utils', function(){

      var splitIntoColumns = function(array, columns){
        var matrix = [];
        for(i = 0; i < columns; i++){
          matrix[i] = [];
        }
        var j = 0;
        for(i = 0; i < array.length; i++){
          matrix[j].push(array[i]);
          j++;
          if (j == columns) j = 0;
        }
        return matrix;
      }

      return {
        splitIntoColumns: splitIntoColumns
      };

  });
