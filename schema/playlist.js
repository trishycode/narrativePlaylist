"use strict";

/*
 * Defined the Mongoose Schema and return a Model for a Photo
 */

/* jshint node: true */

var mongoose = require('mongoose');


var playlistSchema = new mongoose.Schema({
	//_id: String,
	user_id: String,
	name: String,
	description: String,
	follower_count: String,
	//songs: [String]
	songs:[mongoose.Schema.Types.ObjectId],
	textObjs:[mongoose.Schema.Types.ObjectId]
    
});


var playlist = mongoose.model('playlist', playlistSchema);

module.exports = playlist;
