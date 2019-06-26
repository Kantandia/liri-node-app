require("dotenv").config();
var fs = require('fs');

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
run();
function run(){
    switch (action) {
        case "concert-this":
            concertThis();
            break;

        case "spotify-this-song":
            spotify();
            break;
    
        case "movie-this":
            movieThis();
            break;
    
        case "do-what-it-says":
            doSays();
            break;
    };
    };



function spotify() {
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

 function movieThis() {
    if( !userPick ){
        userPick = "Mr. Nobody."
   };

    var queryUrl = "http://www.omdbapi.com/?i=" + userPick + "tt3896198&apikey=d359b717";

    request(queryUrl, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            log.info("Title of the movie: " + JSON.parse(body).Title);
            log.info("Year the movie came out: " + JSON.parse(body).Year);
            log.info("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
            log.info("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[2].Value);
            log.info("Country where the movie was produced: " + JSON.parse(body).Country);
            log.info("Language of the movie: " + JSON.parse(body).Language);
            log.info("Plot of the movie: " + JSON.parse(body).Plot);
            log.info("Actors in the movie: " + JSON.parse(body).Actors);
        };  
    });
};
