"use strict";

/*
 * Defined the Mongoose Schema and return a Model for a Photo
 */

/* jshint node: true */

var mongoose = require('mongoose');


var textObjSchema = new mongoose.Schema({
	song_description: String,
	song_isrc: String
});



var textObj = mongoose.model('textObj', textObjSchema);

module.exports = textObj;
