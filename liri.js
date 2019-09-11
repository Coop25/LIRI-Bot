//importing various packages/files that are required to operate the app
require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

//importing the functions that are in different files
const bands = require("./bandsintown.js");
const spotifyFunc = require("./spotify.js");
const omdb = require("./omdb.js");

let spotify = new Spotify(keys.spotify);

let args = process.argv.slice(2);

function testIt(item) {
    switch (item) {
        case "concert-this":
            args.shift();
            bands.concert(axios, moment, args.join(" "));
            break;
        case "spotify-this-song":
            args.shift();
            spotifyFunc.spotifyAPI(spotify, args.join(" "));
            break;
        case "movie-this":
            args.shift();
            omdb.ombd(axios, args.join(" "));
            break;
        case "do-what-it-says":
            fs.readFile("./random.txt", "utf8", function (error, data) {
                if (error) {
                    return console.log(error);
                }
                let
            })
        default:
            console.log("NO VALID KEYWORD FOUND!")
    }
}
testIt(args[0]);