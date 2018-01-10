"use strict";

/* jshint node: true */

/*
 * This builds on the webServer of previous projects in that it exports the current
 * directory via webserver listing on a hard code (see portno below) port. It also
 * establishes a connection to the MongoDB named 'cs142project6'.
 *
 * To start the webserver run the command:
 *    node webServer.js
 *
 * Note that anyone able to connect to localhost:portNo will be able to fetch any file accessible
 * to the current user in the current directory or any of its children.
 *
 * This webServer exports the following URLs:
 * /              -  Returns a text status message.  Good for testing web server running.
 * /test          - (Same as /test/info)
 * /test/info     -  Returns the SchemaInfo object from the database (JSON format).  Good
 *                   for testing database connectivity.
 * /test/counts   -  Returns the population counts of the cs142 collections in the database.
 *                   Format is a JSON object with properties being the collection name and
 *                   the values being the counts.
 *
 * The following URLs need to be changed to fetch there reply values from the database.
 * /user/list     -  Returns an array containing all the User objects from the database.
 *                   (JSON format)
 * /user/:id      -  Returns the User object with the _id of id. (JSON format).
 * /photosOfUser/:id' - Returns an array with all the photos of the User (id). Each photo
 *                      should have all the Comments on the Photo (JSON format)
 *
 */

/*global escape: true */



var mongoose = require('mongoose');
var async = require('async');


// Load the Mongoose schema for User, Photo, and SchemaInfo
var Playlist = require('./schema/playlist.js'); //returns mongoose obj, userschema - name etc.
var User = require('./schema/user.js'); //returns mongoose obj, user photoobj w comments
var Song = require('./schema/song.js'); //returns mongoose obj, schema Info
var TextObj = require('./schema/text.js');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require("fs");
var processFormBody = multer({storage: multer.memoryStorage()}).single('uploadedphoto');
var app = express();

// XXX - Your submission should work without this line
//var cs142models = require('./modelData/photoApp.js').cs142models;

mongoose.connect('mongodb://localhost/narrativePlaylist');


// var Schema = new mongoose.Schema({
// 	id: String,
// 	name: String,
// 	age: Number
// });


// var User = mongoose.model('emp', Schema);


// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));


app.use(session({secret: 'secretKey', resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.send('Simple web server of files from ' + __dirname);
});





/*
 * URL /user/list - Return all the User object.
 */
app.get('/user/list', function (request, response) {
   // console.log($scope.main.loggedIn);
   
    var obj = User.find({});
    obj.select("_id first_name last_name login_name follower_count playlists");
   // console.log( obj);

    obj.exec(function(err, users) {
        if(err) {
            response.status(500).send(JSON.stringify(err));
            return;
        }
            console.log(users);
           response.status(200).send(users);
        
    }); 
    
});


//Get User based on user ID
app.get('/user/:id', function(request, response) {
	var id = request.params.id;
    console.log(id);
    User.findOne({_id:id}, "id first_name last_name login_name follower_count playlists", function(err, user) {
        if (user === null || err) {
        console.log('User with _id:' + id + ' not found.');
        response.status(400).send('Not found');
        return;
    }
    response.status(200).send(user);

    });
});


//Get User playlists
app.get('/playlistOfUser/:id', function(request, response){
    var id = request.params.id;
    console.log(id);



    var obj = Playlist.find({user_id:id});
   // console.log( obj);

    obj.exec(function(err, playlists) {
        if(err) {
            response.status(500).send(JSON.stringify(err));
            return;
        }
            console.log(playlists);
           response.status(200).send(playlists);
        
    }); 
});


app.get('/songs', function(request, response){
    var obj = Song.find({});
    obj.exec(function(err, songs) {
        if(err) {
            response.send(500).send(JSON.stringify(err));
            return;
        }
        console.log(songs);
        response.status(200).send(songs);
    });
});


app.get('/textObjs', function(request, response){
    var obj = TextObj.find({});
    obj.exec(function(err, textObjs) {
        if(err) {
            response.send(500).send(JSON.stringify(err));
            return;
        }
        console.log(textObjs);
        response.status(200).send(textObjs);
    });
});


app.get('/getSongFromTextObj', function (request, response) {
    console.log(request.body.textObj_id);
    // TextObj.findOne({_id: request.body.textObj_id}, function(err, textObj) {
    //     if(err) {
    //         response.status(400).send("error in find text obj, get song");
    //     }
    //     console.log(" 2 " + textObj);

    //     Song.findOne({isrc:textObj.song_isrc}, function(err, song){
    //         if(err) {
    //             response.send(400).send("error in find  song");
    //         }
    //         response.send(200).send(song);
    //     });

    // });
});



app.post('/searchPlaylistbyname', function(request, response) {
    console.log("HEREEEEEE: " + request.body.name);
    Playlist.findOne({name: request.body.name}, function (err, playlists) {
        if(err) {
            response.status(400).send("error in search for playlist by name ");
        } else {
            response.status(200).send(playlists);
        }
    });
});




app.post('/searchSongbyname', function(request, response) {
    console.log("HEREEEEEE: " + request.body.name);
    Song.findOne({name: request.body.name}, function (err, songs) {
        if(err) {
            response.status(400).send("error in search for song by name ");
        } else {
            response.status(200).send(songs);
        }
    });
});


//Register User
app.post('/user', function (request, response){
    User.findOne({login_name: request.body.login_name}, function (err, user) {
        if(user !== null){
            console.log("in here1");
            response.status(400).send("User already exists");
            //return;
        } else {

             User.create({login_name: request.body.login_name, first_name: request.body.first_name, last_name: request.body.last_name, password: request.body.password}, function (err, newUser) {
                //request.session.login_name = request.body.login_name;
                //request.session.user_id = request.body._id;
              //  request.session.isLoggedIn = true;
                response.status(200).send(newUser);
                if(err){
                    response.status(400).send("ERROR");
                }
        });

        }
        
    });

});





app.post('/createPlaylist', function (request, response) {
    Playlist.findOne({name: request.body.name}, function (err, playlist) {
        if(playlist !== null) {
            console.log("playlist already exists");
            response.status(400).send("playlist already exists");
        } else {
            Playlist.create({user_id:request.body.user_id ,name: request.body.name, description: request.body.description, follower_count: request.body.follower_count}, function(err, newPlaylist){
                User.findOne({_id: request.body.user_id}, function(err, user) {
                    if(err) {
                        response.status(400).send("ERROR IN PLAYCREAT UPDATE USER");
                    }
                    user.playlists.push(newPlaylist._id);
                    user.save();
                    response.status(200).send(newPlaylist);
                })


                if(err){
                    response.status(400).send("ERROR IN PLAYLIST CREATION");
                }

            });

        }

    });

//create playlist
//find user entry and save to playlist field 

});


app.post('/editPlaylist', function (request, response) {
    console.log(" ID2: " + request.body.playlist_id);
    Playlist.findOne({_id: request.body.playlist_id}, function (err, playlist){
        if(playlist === null) {
            console.log("could not find playlist");
            response.status(400).send("playlist not found");
        }
        else {
            playlist.name = request.body.name;
            playlist.description = request.body.description;
            playlist.save();
            response.status(200).send(playlist);
        }
    });

});


app.post('/editTextObj', function (request, response) {
    console.log(request.body);
    TextObj.findOne({_id: request.body.textObj_id}, function (err, textObj){
        if(textObj === null) {
            console.log("could not find text obj");
            response.status(400).send("text obj not found");
        } else {
            textObj.song_description = request.body.song_description;
            textObj.song_isrc = request.body.song_isrc;
            textObj.save();
            response.status(200).send(textObj);
        }
    })
})




app.post('/addSong', function (request, response) {
    //check if checked in user is the owner of the playlist

    //search playlist for song method
    //Playlist.findOne({._id: request.body.playlist_id}, function (err, playlist) {});
    //search for playlist
    //check if song is in playlist:
    //if yes, return error 
    // else add song to playlist
    //save playlist

    Song.findOne({isrc: request.body.song_isrc}, function(err, song){
        if(err) {
            console.log("song id does not exist/is incorrect");
            return;
        }
        // if(song.playlists.indexOf(request.body.playlist_id) !== 0) {
        //     console.log("playlist already contains song");
        //     response.status(400).send("playlist already contains song");
        // } else {
            Song.create({isrc: request.body.song_isrc, name: request.body.song_name, artist: request.body.song_artist, album: request.body.song_album,
                description: request.body.song_description}, function(err, song1){
                    if(err) {
                        response.status(400).send("PROB HAI");
                    }
                    song1.playlists.push(request.body.playlist_id);
                    song1.save();

                    Playlist.findOne({_id:request.body.playlist_id}, function(err, playlist) {
                        if(err){
                            response.status(400).send("error1");
                        }
                        playlist.songs.push(song1._id); //change to song._id?
                        playlist.save();
                     });
                    response.status(200).send(song1);
                });
        // }
    });
});







app.post('/addTextObj', function (request, response) {

    TextObj.create({song_isrc: request.body.song_isrc, song_description : request.body.song_description}, function(err, textObj){
            if(err) {
                response.status(400).send("PROB HAI");
            }
            Playlist.findOne({_id:request.body.playlist_id}, function(err, playlist) {
                if(err){
                    response.status(400).send("error1");
                }
                playlist.textObjs.push(textObj._id); //change to song._id?
                playlist.save();
             });
            response.status(200).send(textObj);
        });
        
});





app.post('/removeTextObj', function(request, response) {
    Playlist.findOne({_id: request.body.playlist_id}, function(err, playlist) {
        if(err) {
            response.status(400).send("PROB IN TEXT REMOVE FIND PLAYLIST");
        }
        //console.log("playlist id: " + request.body.playlist_id);
        //console.log("playlist: " + playlist);
        var index = playlist.textObjs.indexOf(request.body.textObj_id);
        console.log("index: " + index);
        if(index !== -1) {
            playlist.textObjs.splice(index, 1);
            playlist.save(function(err){
                response.status(200).send(playlist);
                if(err) {
                    response.status(400).send("song never in playlist in the first place");
                }
            });
        }
    });
});






app.post('/removeSong', function(request, response) {

    //remove playlist id from playlists array in song obj too!!!
    Playlist.findOne({_id: request.body.playlist_id}, function(err, playlist) {
        if(err) {
            response.status(400).send("PROB IN SONG REMOVE FIND PLAYLIST");
        }
        //console.log("playlist id: " + request.body.playlist_id);
        //console.log("playlist: " + playlist);
        var index = playlist.songs.indexOf(request.body.song_id);
        console.log("index: " + index);
        if(index !== -1) {
            playlist.songs.splice(index, 1);
            playlist.save(function(err){
                response.status(200).send(playlist);
                if(err) {
                    response.status(400).send("song never in playlist in the first place");
                }
            });
        }
    });

});




app.post('/removePlaylist', function(request, response) {
    Playlist.findOne({_id: request.body.playlist_id}, function (err, playlist) {
        if(err) {
            response.status(400).send("prob in remove playlist");
        }
        //find user, delete entry in playlists [] for user
        //find songs, delete playlists[] entry for each song 
        //delete playlist from database 

    });
});



// app.get('/searchPlaylistbyname', function(request, response) {
//     console.log("name in server " + request.body.playlist_name);
//     Playlist.find({name: request.body.name}, function (err, playlists){
//         if(err) {
//             response.status(400).send("playlist not found!");
//         } else {
//             response.status(200).send(playlists);
//             console.log(playlists);
//         }
//     });
// });



// app.get('/searchPlaylistbytag', function(request, response) {
//     console.log("tag in server " + request.body.playlist_tag);
//     Playlist.find({tag: playlist_tag}, function (err, playlists){
//         if(err) {
//             response.status(400).send("playlist not found!");
//         } else {
//             response.status(200).send(playlists);
//             console.log(playlists);
//         }
//     });
// });






var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});








