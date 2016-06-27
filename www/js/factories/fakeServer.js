angular.module('starter.factories')
  .factory('fakeServer', ['$q','ERRORS', function($q, ERRORS){

      var news = [
        {
          title: 'New 1',
          subtitle: 'Subtitle new 1',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          subject: 'Algebra',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          body: '<p>In tollit electram mea, cum cetero sadipscing ad. Amet facer facilisis nam at, eius quando per      no? Nec et agam mollis? Elitr ocurreret mel at, cu soluta putent reformidans quo! No vis magna solet? Per porro audiam copiosae ei, tota habeo et nam, cu intellegat contentiones consequuntur his!</p><p>Ex pri nonumy alterum suscipit, vero consul facilisis at usu? Ex vel atomorum volutpat periculis, utinam postulant eum in. An postea atomorum salutandi mel, cu case quas utinam vix. Cu movet veniam has.</p>',
          image: {
            path: 'img/placeholder/new.jpg'
          }
        },
        {
          title: 'Another new',
          subtitle: 'Subtitle for another new',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          subject: 'Chemistry',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          body: '<p>In tollit electram mea, cum cetero sadipscing ad. Amet facer facilisis nam at, eius quando per      no? Nec et agam mollis? Elitr ocurreret mel at, cu soluta putent reformidans quo! No vis magna solet? Per porro audiam copiosae ei, tota habeo et nam, cu intellegat contentiones consequuntur his!</p>',
          image: {
            path: 'img/placeholder/new.jpg'
          }
        },
        {
          title: 'Awesome new',
          subtitle: 'Awesome subtitle',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          subject: 'Awesome subject',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          body: '<p>In tollit electram mea, cum cetero sadipscing ad. Amet facer facilisis nam at, eius quando per      no? Nec et agam mollis? Elitr ocurreret mel at, cu soluta putent reformidans quo! No vis magna solet? Per porro audiam copiosae ei, tota habeo et nam, cu intellegat contentiones consequuntur his!</p><p>Ex pri nonumy alterum suscipit, vero consul facilisis at usu? Ex vel atomorum volutpat periculis, utinam postulant eum in. An postea atomorum salutandi mel, cu case quas utinam vix. Cu movet veniam has.</p>',
          image: {
            path: 'img/placeholder/new.jpg'
          }
        }
      ];

      var extraNews = [
        {
          title: 'This is an extra new',
          subtitle: 'Subtitle for extra new',
          date: new Date(),
          subject: 'Biology',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          body: '<p>In tollit electram mea, cum cetero sadipscing ad. Amet facer facilisis nam at, eius quando per      no? Nec et agam mollis? Elitr ocurreret mel at, cu soluta putent reformidans quo! No vis magna solet? Per porro audiam copiosae ei, tota habeo et nam, cu intellegat contentiones consequuntur his!</p>',
          image: {
            path: 'img/placeholder/new.jpg'
          }
        }
      ];

      var oldNews = [
        {
          title: 'This is an old new',
          subtitle: 'Subtitle for extra new',
          date: new Date(2001, 11, 01),
          subject: 'Biology',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          body: '<p>In tollit electram mea, cum cetero sadipscing ad. Amet facer facilisis nam at, eius quando per      no? Nec et agam mollis? Elitr ocurreret mel at, cu soluta putent reformidans quo! No vis magna solet? Per porro audiam copiosae ei, tota habeo et nam, cu intellegat contentiones consequuntur his!</p>',
          image: {
            path: 'img/placeholder/new.jpg'
          }
        }
      ];

      var files = [
        {
          title: 'Awesome file',
          description: 'Awesome subtitle',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          subject: 'Awesome subject',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          path: 'fakedata/file1.txt'
        },
        {
          title: 'Im the one',
          description: 'Who knocks.',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          subject: 'Chemistry',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          path: 'fakedata/file2.txt'
        }
      ];

      var extraFiles = [
        {
          title: 'Im a new file',
          description: 'Just created',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          subject: 'Biology',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          path: 'fakedata/file3.txt'
        }
      ];

      var oldFiles = [
        {
          title: 'Im a old file',
          description: 'Very old',
          date: new Date(2016, 3, 1),
          subject: 'Biology',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          path: 'fakedata/file3.txt'
        }
      ];

      var users = [
        {
          username: 'admin',
          password: 'admin',
          profileImage: 'img/placeholder/profile.jpg',
          name: 'Allmighty',
          lastname: 'Admin'
        },
        {
          username: 'teacher',
          password: 'teacher',
          profileImage: 'img/placeholder/walter.white.jpg',
          name: 'Walter',
          lastname: 'White'
        },
        {
          username: 'student',
          password: 'student',
          profileImage: 'img/placeholder/jesse.pinkman.jpeg',
          name: 'Jesse',
          lastname: 'Pinkman'
        }
      ];

      function login(user){
        var found = null;
        users.forEach(function(element){
            if (element.username == user.username && element.password == user.password){
              found = element;
            }
        });
        return found;
      }

      function randomDate(start, end){
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      function orderByDate(list){
        return list.sort(function(a,b){
          return b.date - a.date;
        })
      }

      return {
        getNews: function(){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded
              if (true){
                resolve(orderByDate(news));
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getNewNews: function(lastNew){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded; if random < 0.5 new items exists, otherwise not.
              if (Math.random() < 0.5){
                resolve(extraNews);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getOldNews: function(firstItem){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded; if random < 0.5 new items exists, otherwise not.
              if (Math.random() < 0.5){
                resolve(oldNews);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getFiles: function(){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded
              if (true){
                resolve(orderByDate(files));
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getNewFiles: function(lastFile){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded; if random < 0.5 new items exists, otherwise not.
              if (Math.random() < 0.5){
                resolve(extraFiles);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getOldFiles: function(lastFile){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded; if random < 0.5 new items exists, otherwise not.
              if (Math.random() < 0.5){
                resolve(oldFiles);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        login: function(user){
          return $q(function(resolve, reject){
            setTimeout(function(){
                foundUser = login(user);
                if(foundUser){
                  resolve(foundUser);
                } else {
                  reject({error: ERRORS.BAD_CREDENTIALS, msg: 'Bad username or password'});
                }
            }, 1000)
          })
        }
      };

  }]);
