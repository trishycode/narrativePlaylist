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
		name: "thinking out loud",
		artist: "Ed Sheeran",
		album: "X",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f',
		//playlist_id: [playlist1._id]
	};




	var song8 = {
		name: "slow dancing in a burning room",
		artist: "John Mayer",
		album: "Continuum",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/2jdAk8ATWIL3dwT47XpRfu',
		//playlist_id: [playlist1._id]
	};




	var song9 = {
		name: "marvins room",
		artist: "Drake",
		album: "Take Care",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/2z3htsNRuhDN923ITatc56',
		//playlist_id: [playlist1._id]
	};


	var song10 = {
		name: "white iverson",
		artist: "Post Malone",
		album: " ",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6eT7xZZlB2mwyzJ2sUKG6w',
		//playlist_id: [playlist1._id]
	};



	var song11 = {
		name: "chasing cars",
		artist: "Snow Patrol",
		album: " ",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/11bD1JtSjlIgKgZG2134DZ',
		//playlist_id: [playlist1._id]
	};




	var song12 = {
		name: "believe",
		artist: "Mumford & Sons",
		album: "Wilder Mind",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7HqtFBLJcilvyUuMav4Y5W',
		//playlist_id: [playlist1._id]
	};




	var song13 = {
		name: "middle",
		artist: "DJ Snake",
		album: "Encore",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0g5EKLgdKvNlln7TNqBByK',
		//playlist_id: [playlist1._id]
	};



	var song14 = {
		name: "if i lose myself",
		artist: "One Republic",
		album: "Native",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7hIRQZhDjab4YgqkkkehV9',
		//playlist_id: [playlist1._id]
	};



	var song15 = {
		name: "headlines",
		artist: "drake",
		album: "Take Care",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7kfTqGMzIHFWeBeOJALzRf',
		//playlist_id: [playlist1._id]
	};


	var song16 = {
		name: "shot for me",
		artist: "drake",
		album: "Take Care",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6k7b4mcxLP5HPo6hNoXoM6',
		//playlist_id: [playlist1._id]
	};


	var song17 = {
		name: "look what you've done",
		artist: "drake",
		album: "Take Care",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0bsDJFV8d8kiPxD8xsxdzp',
		//playlist_id: [playlist1._id]
	};




	var song18 = {
		name: "practice",
		artist: "drake",
		album: "Take care",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/4xKp0mZ2hY6eS0ii55KgKR',
		//playlist_id: [playlist1._id]
	};



	var song19 = {
		name: "take care",
		artist: "drake",
		album: "Take care",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/4wTMBYRE6xVTIUQ6fEudsJ',
		//playlist_id: [playlist1._id]
	};


	var song20 = {
		name: "4422",
		artist: "drake ft. sampha",
		album: "more life",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/2fkeWbM6iqTw7oGHTYm2lw',
		//playlist_id: [playlist1._id]
	};



	var song21 = {
		name: "3 am",
		artist: "finding hope",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/5HsSsEeP3hU9QSfHZrzbtA',
		//playlist_id: [playlist1._id]
	};



	var song22 = {
		name: "if you want love",
		artist: "nf",
		album: "perception",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/3i5qVV8azKqGFK4Gzdt5YS',
		//playlist_id: [playlist1._id]
	};



	var song23 = {
		name: "power trip",
		artist: "j.cole",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7FOJvA3PxiIU0DN3JjQ7jT',
		//playlist_id: [playlist1._id]
	};


	var song24 = {
		name: "cold war",
		artist: "cautious clay",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/021txSheRym293iUdf6vPZ',
		//playlist_id: [playlist1._id]
	};



	var song25 = {
		name: "plain jane",
		artist: "a$ap ferg",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/2XNbZvHZOUaYKy7vjY60x2',
		//playlist_id: [playlist1._id]
	};


	var song26 = {
		name: "particula",
		artist: "major lazer",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0e8fTfa0ZKCwOi2UdULooT',
		//playlist_id: [playlist1._id]
	};


	var song27 = {
		name: "silence",
		artist: "marshmello & khalid",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7vGuf3Y35N4wmASOKLUVVU',
		//playlist_id: [playlist1._id]
	};


	var song28 = {
		name: "bad religion",
		artist: "frank ocean",
		album: "channel orange",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/2pMPWE7PJH1PizfgGRMnR9',
		//playlist_id: [playlist1._id]
	};

	var song29 = {
		name: "ivy",
		artist: "frank ocean",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/2ZWlPOoWh0626oTaHrnl2a',
		//playlist_id: [playlist1._id]
	};

	var song30 = {
		name: "love",
		artist: "kendrick Lamar ft. zacari",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6PGoSes0D9eUDeeAafB2As',
		//playlist_id: [playlist1._id]
	};

	var song31 = {
		name: "photograph",
		artist: "Ed Sheeran",
		album: " ",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL',
		//playlist_id: [playlist1._id]
	};


	var song32 = {
		name: "love yourself ",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0',
		//playlist_id: [playlist1._id]
	};


	var song33 = {
		name: "keep calm",
		artist: "dvsn",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6Y5qRSDPP4nfU9ZiFuANdt',
		//playlist_id: [playlist1._id]
	};

	var song34 = {
		name: "coaster",
		artist: "khalid",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/39KG4kom3enSx4GTThuDGt',
		//playlist_id: [playlist1._id]
	};


	var song35 = {
		name: "swalla",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6kex4EBAj0WHXDKZMEJaaF',
		//playlist_id: [playlist1._id]
	};


	var song36 = {
		name: "scared",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/3Zc922QGIRgdMRFa6qSiz7',
		//playlist_id: [playlist1._id]
	};


	var song37 = {
		name: "one i want",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/6RD9GItAGZ3gbUbx14okHF',
		//playlist_id: [playlist1._id]
	};


	var song38 = {
		name: "wake me up",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/4h8VwCb1MTGoLKueQ1WgbD',
		//playlist_id: [playlist1._id]
	};

	var song39 = {
		name: "drama",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0PXp9QxBfSKGGpWUNaws2X',
		//playlist_id: [playlist1._id]
	};


	var song40 = {
		name: "unsteady",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/37Jg3SHfz04uFHTo9UNre1',
		//playlist_id: [playlist1._id]
	};


	var song41 = {
		name: "water",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0nlSiU4NGcIzWXvDhNtSAe',
		//playlist_id: [playlist1._id]
	};


	var song42 = {
		name: "black and yellow",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/5A6OHHy73AR5tLxgTc98zz',
		//playlist_id: [playlist1._id]
	};


	var song43 = {
		name: "blank space",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/1p80LdxRV74UKvL8gnD7ky',
		//playlist_id: [playlist1._id]
	};


	var song44 = {
		name: "spacebound",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0sHW1jXe6Sou3437gJQNGA',
		//playlist_id: [playlist1._id]
	};




	var song45 = {
		name: "mockingbird",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/561jH07mF1jHuk7KlaeF0s',
		//playlist_id: [playlist1._id]
	};



	var song46 = {
		name: "personal",
		artist: "plaza",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/3cQ2X0PIJOWgOdkfvSmQtg',
		//playlist_id: [playlist1._id]
	};


	var song47 = {
		name: "sexyback",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/0O45fw2L5vsWpdsOdXwNAR',
		//playlist_id: [playlist1._id]
	};



	var song48 = {
		name: "thinkin bout you",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7DfFc7a6Rwfi3YQMRbDMau',
		//playlist_id: [playlist1._id]
	};


	var song49 = {
		name: "hotline bling",
		artist: "drake",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/1OAYKfE0YdrN7C1yLWaLJo',
		//playlist_id: [playlist1._id]
	};


	var song50 = {
		name: "starboy",
		artist: "",
		album: "",
		description: "A classic chiller bean",
		isrc:'57231f1a30e4351f4e9f4bea',
		src: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB',
		//playlist_id: [playlist1._id]
	};


		





	var songs = [song1, song2, song3, song4, song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16,song17,song18,song19,
	song20, song21, song22, song23, song24, song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37,
	song38, song39, song40, song41, song42,song43, song44, song45, song46, song47,song48, song49, song50]



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
