var narrativePlaylist = angular.module('narrativePlaylist', ['ngRoute', 'ngMaterial', 'ngResource']);


narrativePlaylist.config(['$routeProvider','$locationProvider' ,
    function ($routeProvider, $locationProvider) {
        // $routeProvider.
        // 	when('/playlists',{
        // 		templateUrl: 'components/playlistDisplay/playlistDisplay.html',
        //         controller: 'playlistDisplayController'
        // 	}).
	}]);



narrativePlaylist.controller('mainController', ['$scope','$resource','$location','$http','$rootScope','$route' ,
    function ($scope, $resource, $location, $http, $rootScope, $route) {
    	$scope.main = {};
    	$scope.users = "";
        $scope.currentUser = "";
        $scope.currentUserId = "";
    	$scope.val = false;
        var userId = "57231f1a30e4351f4e9f4bd7"; //fix this
        $scope.main.playlists = "";
        $scope.first_name = "";



        $scope.login_name = "";
        $scope.invalidMsg = false;
        $scope.password = "";
        $scope.reg_login_name = "";
        $scope.password1 = "";
        $scope.password2 = "";
        $scope.first_name = "";
        $scope.last_name = "";
        $scope.location = "";
        $scope.occupation = "";
        $scope.description = "";
        $scope.invalidRegister = false;
        $scope.songFromText = "";

        $scope.main.currentPlaylist = "";
        $scope.playlist_description = "";
        $scope.playlist_name = "";


        $scope.main.currentPlaylistId = "";
        $scope.main.currentPlaylistName = "";

        $scope.song_name = "";
        $scope.song_artist = "";
        $scope.song_album = "";
        $scope.song_description = "";
        $scope.song_isrc = "";
        $scope.song_isrc1 = "";
        $scope.main.text = "";

        $scope.songs = "";

        $scope.textObjs = "";
        $scope.editPlaylistName = "";
        $scope.editPlaylistDescription = "";


        $scope.main.one = "";
        $scope.main.two = "";
        $scope.main.searchPlaylistName = "";
        $scope.main.searchPlaylistTag = "";

        $scope.main.playlistFoundByName = "";
        $scope.main.playlistFoundByTag = "";



    	$scope.User = $resource('user/:userId', {userId:'@id'}, {
    		 get: {
                method: 'get', 
                isArray: false
            }

    	});



        $scope.List = $resource('/user/list', {userId:'@id'}, {
            get: {
                method: 'get', 
                isArray: true
            }
        });




    	$scope.GetUserPlaylist = $resource('/playlistOfUser/:userId', {userId:'@id'}, {
             get: {
                method: 'get', 
                isArray: true
            }
        });


        $scope.GetSongs = $resource('/songs', {userId:'@id'},{
            get: {
                method: 'get',
                isArray: true
            }
        });


        $scope.GetTextObjs = $resource('/textObjs', {userId:'@id'}, {
            get: {
                method: 'get',
                isArray: true
            }
        });


        $scope.GetSongFromTextObj = $resource('/getSongFromTextObj', {userId:'@id'}, {
            get: {
                method: 'get',
                isArray: false
            }
        });

        $scope.SearchPlaylistByName = $resource('/searchPlaylistbyname', {userId:'@id'}, {
            get: {
                method: 'get',
                isArray: true
                //data: {name:}
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            }
        });

        // $scope.SearchPlaylistByTag = $resource ('/searchPlaylistbytag', {userId:'@id'}, {
        //     get: {
        //         method: 'get',
        //         isArray: true
        //     }
        // });

       $scope.Register = $resource('/user',   {
            post: {
                method: 'post',
                isArray: false
            }

         });


        $scope.CreatePlaylist = $resource('/createPlaylist', {
            post: {
                method: 'post',  
                isArray: false
            }
        });


        $scope.AddSong = $resource('/addSong', {
            post: {
                method: 'post',
                isArray: false
            }
        });


       $scope.AddTextObj = $resource('/addTextObj', {
            post: {
                method: 'post',
                isArray: false
            }
        });



        $scope.RemoveSong = $resource ('/removeSong', {
            post: {
                method: 'post',
                isArray: false
            }

        });


        $scope.RemoveTextObj = $resource('/removeTextObj', {
            post: {
                method: 'post',
                isArray: false
            }
        });


        //add song to playlist 
        //delete song from playlist
        //reorder playlist 

        $scope.RemovePlaylist = $resource ('/removePlaylist', {
            post: {
                method: 'post',
                isArray: false
            }
        });


        $scope.EditPlaylist = $resource ('/editPlaylist', {
            post: {
                method: 'post',
                isArray: false
            }
        });

        $scope.EditTextObj = $resource('/editTextObj', {
            post: {
                method: 'post',
                isArray: false
            }
        });


        $scope.editTextObj = function(textObj_id) {
            console.log("Naaahhhh " + textObj_id);
            console.log("DESCRIPTION " + $scope.main.one);
            console.log("ISRC: " + $scope.main.two);
            $scope.EditTextObj.save({textObj_id: textObj_id, song_description: $scope.main.one, song_isrc: $scope.main.two}, function (response){
                console.log("text obj edited!!");
            }, function errorHandling(err) {
                console.log("text obj edit error!");
            });
        };




        $scope.editPlaylist = function(playlist_id) {
            //console.log(" ID " + playlist_id);
            $scope.EditPlaylist.save({playlist_id: playlist_id, name: $scope.editPlaylistName, description: $scope.editPlaylistDescription}, function (response) {
                console.log("playlist edited!");
            }, function errorHandling(err) {
                console.log("playlist edit error");
            });
        };


        $scope.main.addTextObj = function () {
            console.log($scope.main.text);
            console.log($scope.song_isrc1);
            console.log($scope.main.currentPlaylistId);
            $scope.AddTextObj.save({song_description: $scope.main.text, song_isrc: $scope.song_isrc1, playlist_id: $scope.main.currentPlaylistId}, function(response){
                console.log("text blob added to playlist");
            }, function errorHandling (err) {
                console.log("text blob addition error");
            });
        };


	     $scope.main.getUserList = function () {
	        $scope.List.get(function (model) {
	        	$scope.users = model;
	        	//console.log(model)
	        });

	      };


        $scope.searchPlaylistNameFunc = function() {
            var name =  $scope.main.searchPlaylistName;
            $scope.SearchPlaylistByName.get({name: name}, function(model){
                $scope.main.playlistFoundByName = model;
            });

        };


        // $scope.searchPlaylistTagFunc = function() {
        //     console.log(" tag : " + $scope.main.searchPlaylistTag);
        //     $scope.SearchPlaylistByTag.get({playlist_tag: $scope.main.searchPlaylistTag}, function(model){
        //         $scope.main.playlistFoundByTag = model;
        //     });

        // };



          $scope.main.getUser = function() {
            $scope.User.get({userId:userId},function(model) {
                $scope.main.currentUser = model;
            });
          };


          $scope.main.setUser = function (user) {
            $scope.currentUserId = user._id;
            console.log(user._id);
            $scope.main.currentUser = user.first_name;
          };


          $scope.main.getPlaylists = function () {
            console.log($scope.currentUserId);
            $scope.GetUserPlaylist.get({userId:$scope.currentUserId}, function(model){
                $scope.main.playlists = model;
            });
          };

          $scope.main.getSongs = function() {
            $scope.GetSongs.get(function(model){
                $scope.songs = model;
            });
          };

          $scope.main.getTextObjs = function () {
            $scope.GetTextObjs.get(function(model) {
                $scope.textObjs = model;
            });
          };


          $scope.main.getSongFromTextObj = function (textObj_id) {
            console.log(textObj_id);
            $scope.GetSongFromTextObj.get({textObj_id:textObj_id}, function (model) {
                $scope.songFromText = model;
            });
          };


          $scope.createPlaylist = function () {
                $scope.CreatePlaylist.save({user_id: $scope.currentUserId, name: $scope.playlist_name ,description: $scope.playlist_description, follower_count: "0"}, function(response) {
                    console.log("playlist creation successful");
                }, function errorHandling (err) {
                    console.log("playlist creation ERROR");

                });
          };


          $scope.removeSong = function (song_id) {
                $scope.RemoveSong.save({playlist_id: $scope.main.currentPlaylistId, song_id: song_id}, function (response) {
                    console.log("song removed!");
                }, function errorHandling (err) {
                    console.log("remove song error");
                });
          };



          $scope.removeTextObj = function(textObj_id) {
            $scope.RemoveTextObj.save({playlist_id: $scope.main.currentPlaylistId, textObj_id: textObj_id}, function (response) {
                console.log("text obj removed!");
            }, function errorHandling (err) {
                console.log("remove text obj error");
            });
          }



          $scope.main.removeplaylist = function () {
            $scope.RemovePlaylist.save({playlist_id: $scope.main.currentPlaylistId}, function (response) {
                console.log("playlist removed!");
            }, function errorHandling (err) {
                console.log("remove playlist error ");
            });
          };



            $scope.main.addSong = function() {
                console.log("in function");
                $scope.AddSong.save({playlist_id: $scope.main.currentPlaylistId, song_isrc: $scope.song_isrc ,name: $scope.song_name, artist: $scope.song_artist, album: $scope.song_album, description: $scope.song_description}, function(response) {
                    console.log("song added!");
                }, function errorHandling (err) {
                    console.log("song addition error");
                });   
            };




           $scope.register = function () {
            if($scope.password1 !== $scope.password2) {
                console.log("THE PASSWORDS DO NOT MATCH");
                $route.reload();
                return;
            }
            var login_name = $scope.reg_login_name;
            var password = $scope.password1;

            $scope.Register.save({login_name: $scope.reg_login_name, password: $scope.password1, first_name: $scope.first_name, last_name: $scope.last_name, 
                location: $scope.location, description: $scope.description, occupation: $scope.occupation}, function (response) {
                    $scope.invalidRegister = false;
                    console.log("Register Successful");
                    
                    $route.reload();

                   // $scope.invalidMsg = false;
                    //$scope.main.loggedInUser = response.first_name;
                    //$rootScope.$broadcast('loggedIn');
                    //$location.path('/users/' + response._id);

                }, function errorHandling (err) {
                    $scope.invalidRegister = true;
                    console.log("Login Already Exists");
                    $route.reload();
                });
             };




             $scope.main.selectPlaylist = function (playlist) {
                $scope.main.currentPlaylist = playlist;
                $scope.main.currentPlaylistId = playlist._id;
                $scope.main.currentPlaylistName = playlist.name;

             };




}]);
