"use strict";


var mongoose = require('mongoose');


(function() {


	var charles = {
		_id: "57231f1a30e4351f4e9f4bd7", 
		first_name: "charles", 
		last_name: "chiller",
		login_name:"charleschiller",  
		password: "charleschiller",    
        follower_count: "10",
        //playlists: [mongoose.mongo.BSONPure.ObjectID.fromHexString("57231f1a30e4351f4e9f4bdd")]
    };


	var trish = {
		_id: "57231f1a30e4351f4e9f4bd8", 
		first_name: "trish", 
		last_name: "bean", 
		login_name: "trishbean",
		password: "trishbean",
        follower_count: "12",
        //playlists:["57231f1a30e4351f4e9f4bea"]
    };


    var users = [charles, trish];


	var song1 = {
		_id:"57231f1a30e4351f4e9f4be9",
		name: "Unforgettable",
		artist: "French Montana ft. Swae Lee",
		album: "Jungle Rules",
		description: "A younger one, but still an instant classic",
		isrc: '57231f1a30e4351f4e9f4be9'
		//playlist_id: [playlist2._id]
	};


	var song2 = {
		_id: "57231f1a30e4351f4e9f4bea",
		name: "Passionfruit",
		artist: "drake",
		album: "More life",
		description: "A classic chiller bean",
		isrc: '57231f1a30e4351f4e9f4bea'
		//playlist_id: [playlist1._id]
	};


	var songs = [song1, song2]



	var playlist1 = {
		_id: "57231f1a30e4351f4e9f4bdd", 
		user_id: charles._id, 
		name: "playlist1", 
		description: "LOL1", 
		follower_count: "0",
		//songs:[song1._id]
	};


	var playlist2 = {
		_id: "57231f1a30e4351f4e9f4bde", 
		user_id: trish._id, 
		name: "playlist2", 
		description: "LOL2", 
		follower_count: "0",
		//songs:[song2._id]
	};        


	var playlists = [playlist1, playlist2];





	// songs.forEach(function(song){
	// 	var playlist = playlists.filter(function(playlist){
	// 		return (playlist._id === song.playlist_id);
	// 	})[0];
	// 	if(!playlist.songs) {
	// 		playlist.songs = []
	// 	}
	// 	playlist.songs.push(song);
	// });


 	var userListModel = function() {
 	   return users;
   	};


   	var playlistModel = function() {
   		return playlists;
   	}

   	var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   	};

   	var songModel = function (){
   		return songs;
   	};


   	var playlistOfUserModel = function(userId) {
      return playlists.filter(function (playlist) {
         return (playlist.user_id === userId);
      });
    };


   	 var narrativePlaylistModels =  {
      userListModel: userListModel,
      userModel: userModel,
      playlistOfUserModel: playlistOfUserModel,
      songListModel: songModel
      //playListModel:playListModel
      //schemaInfo: schemaModel
   };


	if( typeof exports !== 'undefined' ) {
	      // We're being loaded by the Node.js module loader ('require') so we use its
	      // conventions of returning the object in exports.
	      exports.narrativePlaylistModels = narrativePlaylistModels;
	   } else {
	      // We're not in the Note.js module loader so we assume we're being loaded
	      // by the browser into the DOM.
	      window.narrativePlaylistModels = narrativePlaylistModels;
	   }



})();
