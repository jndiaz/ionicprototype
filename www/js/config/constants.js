//constants
angular.module('starter.config')
  .constant('ERRORS', {
    'INVALID_USER' : 'INVALID_USER',
    'BAD_CREDENTIALS' : 'BAD_CREDENTIALS'
  })
  .constant('MESSAGES', {
    'EMPTY_FOLDER' : 'This folder is empty.'
  })
  .constant('DAYS', {
    'ENGLISH' : {
      'MONDAY' : 'Monday',
      'TUESDAY' : 'Tuesday',
      'WEDNESDAY' : 'Wednesday',
      'THURSDAY': 'Thursday',
      'FRIDAY': 'Friday'
    }
  });
