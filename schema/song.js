"use strict";

/*
 * Defined the Mongoose Schema and return a Model for a Photo
 */

/* jshint node: true */

var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
	isrc: String,
	src: String,
	name: String,
	artist: String,
	album: String,
	description: String,
	playlists: [mongoose.Schema.Types.ObjectId]
});


var song = mongoose.model('song', songSchema);

module.exports = song;
