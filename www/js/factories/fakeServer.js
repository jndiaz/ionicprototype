angular.module('starter.factories')
  .factory('fakeServer', ['$q','ERRORS', function($q, ERRORS){

      var news = [
        {
          title: 'New 1',
          subtitle: 'Subtitle new 1',
          date: randomDate(new Date(2016, 3, 1), new Date()),
          assignature: 'Algebra',
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
          assignature: 'Chemistry',
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
          assignature: 'Awesome subject',
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
          assignature: 'Biology',
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
          assignature: 'Biology',
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
          assignature: 'Awesome subject',
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
          assignature: 'Chemistry',
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
          assignature: 'Biology',
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
          assignature: 'Biology',
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

      var assignatures = [
        {
          id: 1,
          name: 'Algebra',
          description: 'Algebra.. and stuff.',
          teachers: [
            {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            }
          ],
          students: [
            {
              name: 'Jesse',
              lastname: 'Pinkman'
            }
          ],
          image: {
            path: 'img/placeholder/asignatures/algebra.png'
          }
        },
        {
          id: 2,
          name: 'Calculus',
          description: 'So much functions',
          teachers: [
            {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            }
          ],
          students: [
            {
              name: 'Jesse',
              lastname: 'Pinkman'
            }
          ],
          image: {
            path: 'img/placeholder/asignatures/calculus.jpg'
          }
        },
        {
          id: 3,
          name: 'Algorithms',
          description: 'Very logical.',
          teachers: [
            {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            }
          ],
          students: [
            {
              name: 'Jesse',
              lastname: 'Pinkman'
            }
          ],
          image: {
            path: 'img/placeholder/asignatures/algorithms.png'
          }
        }
      ];

      var root = {
        folders: [
          {
            id: 1,
            title: 'First Module',
            author: {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            },
            files: []
          },
          {
            id: 2,
            title: 'Second Module',
            author: {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            },
            files: []
          },
        ],
        files: [
          {
            id: 1,
            title: 'Awesome file',
            description: 'Awesome subtitle',
            date: randomDate(new Date(2016, 3, 1), new Date()),
            assignature: 'Awesome subject',
            author: {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            },
            path: 'fakedata/file1.txt'
          },
          {
            id: 2,
            title: 'Awesome file',
            description: 'Awesome subtitle',
            date: randomDate(new Date(2016, 3, 1), new Date()),
            assignature: 'Awesome subject',
            author: {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            },
            path: 'fakedata/file1.txt'
          },
          {
            id: 3,
            title: 'Awesome file',
            description: 'Awesome subtitle',
            date: randomDate(new Date(2016, 3, 1), new Date()),
            assignature: 'Awesome subject',
            author: {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            },
            path: 'fakedata/file1.txt'
          },
          {
            id: 4,
            title: 'Awesome file',
            description: 'Awesome subtitle',
            date: randomDate(new Date(2016, 3, 1), new Date()),
            assignature: 'Awesome subject',
            author: {
              name: 'Walter',
              lastname: 'White',
              profileImage: 'img/placeholder/walter.white.jpg',
            },
            path: 'fakedata/file1.txt'
          }
        ]
      };

      var folders = [
        {
          id: 1,
          title: 'First Module',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          content: {
            folders: [
              {
                id: 3,
                title: 'Inside folder',
                author: {
                  name: 'Walter',
                  lastname: 'White',
                  profileImage: 'img/placeholder/walter.white.jpg',
                },
                files: []
              },
            ],
            files: [
              {
                id: 5,
                title: 'Inside file',
                description: 'Awesome subtitle',
                date: randomDate(new Date(2016, 3, 1), new Date()),
                assignature: 'Awesome subject',
                author: {
                  name: 'Walter',
                  lastname: 'White',
                  profileImage: 'img/placeholder/walter.white.jpg',
                },
                path: 'fakedata/file1.txt'
              },
            ],
          }
        },
        {
          id: 2,
          title: 'Second Module',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          content: {
            folders: [],
            files: []
          }
        },
        {
          id: 3,
          title: 'Inside folder',
          author: {
            name: 'Walter',
            lastname: 'White',
            profileImage: 'img/placeholder/walter.white.jpg',
          },
          content: {
            folders: [],
            files: []
          }
        },
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

      function getAssignature(id){
        var assignature = null;
        assignatures.forEach(function(ass){
          if(ass.id == parseInt(id)){
            assignature = ass;
          }
        });
        return assignature;
      }

      function getFolderContent(id){
        var folderContent = null;
        folders.forEach(function(folderC){
          if(folderC.id == parseInt(id)){
            folderContent = folderC;
          }
        });
        return folderContent.content;
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
        getAssignatures: function(quantity){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded
              if (true){
                resolve(assignatures);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getAssignature: function(id){
          return $q(function(resolve, reject){
            setTimeout(function(){
              var assignature = getAssignature(id);
              if (assignature){
                resolve(assignature);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getAssignatureRoot: function(id){
          return $q(function(resolve, reject){
            setTimeout(function(){
              //Hardcoded
              if (true){
                resolve(root);
              }else {
                reject(null);
              }
            }, 1000)
          })
        },
        getFolderContent: function(id){
          return $q(function(resolve, reject){
            setTimeout(function(){
              var folderContent = getFolderContent(id);
              if (folderContent){
                resolve(folderContent);
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
