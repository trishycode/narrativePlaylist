"use strict";

/*
 * Defined the Mongoose Schema and return a Model for a Photo
 */

/* jshint node: true */

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	login_name: String,
	password: String,
	follower_count: String,
	playlists: [mongoose.Schema.Types.ObjectId]
});



var user = mongoose.model('user', userSchema);

module.exports = user;
