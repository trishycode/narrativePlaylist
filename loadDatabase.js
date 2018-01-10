"use strict";


var narrativePlaylistModels = require('./modelData/data.js').narrativePlaylistModels;

// We use the Mongoose to define the schema stored in MongoDB.
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/narrativePlaylist');

// Load the Mongoose schema for Use and Photo
var User = require('./schema/user.js');
var Playlist = require('./schema/playlist.js');
var Song = require('./schema/song.js');
var TextObj = require('./schema/text.js');

var versionString = '1.0';


var removePromises = [User.remove({}), Playlist.remove({}), Song.remove({})];


Promise.all(removePromises).then(function () {
    //load user models to database
	var userModels = narrativePlaylistModels.userListModel();
	var mapFakeId2RealId = {}; // Map from fake id to real Mongo _id
	var userPromises = userModels.map(function(user){
		return User.create({
			first_name: user.first_name,
			last_name: user.last_name,
			follower_count: user.follower_count,
			login_name: user.last_name.toLowerCase(),
            playlists: user.playlists,
			password: 'weak'

		}, function(err, userObj){
			if(err){
				console.error('Error create user', err);
			} else {
				mapFakeId2RealId[user._id] = userObj._id;
				user.objectID = userObj._id;
				console.log('Adding user:', user.first_name + ' ' + user.last_name, ' with ID ',
                    user.objectID);
			}
		});

	});



//load all the user data 
 var allPromises = Promise.all(userPromises).then(function () {
    //var playlistModels = narrativePlaylistModels.playlistModels();

    var playlistModels = [];
        var userIDs = Object.keys(mapFakeId2RealId);
        for (var i = 0; i < userIDs.length; i++) {
            playlistModels = playlistModels.concat(narrativePlaylistModels.playlistOfUserModel(userIDs[i]));
    }

    var playlistPromises = playlistModels.map(function(playlist){
        return Playlist.create({
            name: playlist.name,
            description: playlist.description,
            user_id: mapFakeId2RealId[playlist.user_id]
        }, function(err, playlistObj){
            if(err) {
                console.log("error");
            } else {
                playlistObj.save();
                console.log('Adding playlist');
            }

        });
    });
    //console.log(playlistPromises);
    return Promise.all(playlistPromises);
 });


var songModels = narrativePlaylistModels.songListModel();
var mapFakeId2RealIdSONGS = {}; 
var songPromises = songModels.map(function(song) {
    return Song.create({
        name: song.name,
        artist: song.artist,
        album: song.album,
        playlists: song.playlists,
        isrc: song.isrc,
        src:song.src,
    }, function(err, songObj){
        if(err) {
            console.log("error in song entry");
        } else {
            mapFakeId2RealIdSONGS[song._id] = songObj._id;
            song.objectID = songObj._id;
            //songObj.save();
            console.log("Adding song");
        }
    });
    return Promise.all(songPromises);
});


 


    allPromises.then(function () {
	        mongoose.disconnect();
    });


});
