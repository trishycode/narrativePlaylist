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
		_id:"1",
		name: "unforgettable",
		artist: "French Montana ft. Swae Lee",
		album: "Jungle Rules",
		description: "A younger one, but still an instant classic",
		isrc: '57231f1a30e4351f4e9f4be9',
		src: 'https://open.spotify.com/embed/track/3B54sVLJ402zGa6Xm4YGNe',
		//playlist_id: [playlist2._id]
	};


	var song2 = {
		_id: "2",
		name: "passionfruit",
		artist: "drake",
		album: "More life",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/5mCPDVBb16L4XQwDdbRUpz',
		//playlist_id: [playlist1._id]
	};


	var song3 = {
		name: "bounce back",
		artist: "Big Sean",
		album: "I Decided.",
		description: "A younger one, but still an instant classic",
		isrc: '57231f1a30e4351f4e9f4be9',
		src: 'https://open.spotify.com/embed/track/0SGkqnVQo9KPytSri1H6cF',
		//playlist_id: [playlist2._id]
	};


	var song4 = {
		name: "started from the bottom",
		artist: "drake",
		album: "Nothing was the same",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6V2D8Lls36APk0THDjBDfE',
		//playlist_id: [playlist1._id]
	};


	var song5 = {
		name: "power trip",
		artist: "J.Cole Ft. Miguel",
		album: "Nothing was the same",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7FOJvA3PxiIU0DN3JjQ7jT',
		//playlist_id: [playlist1._id]
	};




	var song6 = {
		name: "instinct",
		artist: "Roy Woods",
		album: "Nocturnal",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/49VzL5oBsUICN7U34T98b9',
		//playlist_id: [playlist1._id]
	};



	var song7 = {
		name: "",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: '',
		//playlist_id: [playlist1._id]
	};




	var song8 = {
		name: "",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: '',
		//playlist_id: [playlist1._id]
	};




	var song9 = {
		name: "",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: '',
		//playlist_id: [playlist1._id]
	};




	var songs = [song1, song2, song3, song4,]



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
