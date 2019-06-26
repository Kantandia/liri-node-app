require("dotenv").config();
var fs = require('fs');

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
run();
function run(){
    switch (action) {
    
        case "Spotify":
            spotifySong();
            break;
    
        case "movie-this":
            movieThis();
            break;
    
        case "do-what-it-says":
            doSays();
            break;
    };
    };



function Spotify() {
    if( !userPick ){
        userPick = "JENOVA by Nobuo Uematsu"
   };

    spotify.search({ type: 'track', query: userPick }, function(err, data) {
        if ( err ) {
            log.info('Error occurred: ' + err);
            return;
        };

        var data = data.tracks.items

        log.info("========================")
        log.info("The Artist is: " + data[0].artists[0].name);
        log.info("The song title is: " + data[0].name);
        log.info("Preview Link: " + data[0].preview_url);
        log.info("The album title is: " +data[0].album.name);          
    });
 };
