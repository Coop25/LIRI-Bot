//importing various packages/files that are required to operate the app
require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
const colors = require("colors");

//importing the functions that are in different files
const bands = require("./functions/bandsintown.js");
const spotifyFunc = require("./functions/spotify.js");
const omdb = require("./functions/omdb.js");
const logs = require("./functions/logging.js");

//initalizing new instance of the spotify package/api
const spotify = new Spotify(keys.spotify);

//creating an array of all of the useful command line arguments
const args = process.argv.slice(2);

//line splitter for the log file 
const starSplitter = "\n******************************************************************************";

//function check 
function testIt(itemOBJ) {
    console.log(colors.yellow(`COMMAND ISSUED: ${colors.cyan(itemOBJ.query)}`))
    switch (itemOBJ.query) {
        case "concert-this":
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            bands.concert(axios, moment, itemOBJ.term, fs, logs, colors);
            break;
        case "spotify-this-song":
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            spotifyFunc.spotifyAPI(spotify, itemOBJ.term, fs, logs, colors);
            break;
        case "movie-this":
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            omdb.ombd(axios, itemOBJ.term, fs, logs, colors);
            break;
        case "do-what-it-says":
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            fs.readFile("./random.txt", "utf8", function (error, data) {
                if (error) {
                    return console.log(error);
                }
                let newData = data.split(",");
                logs.log(fs, `\nRUNNING NEW COMMAND: ${newData[0]}`);
                console.log(`${colors.red("------------------")}\n${colors.blue("RUNNING NEW COMMAND: ")}${colors.green(newData[0])}\n${colors.red("------------------")}${starSplitter}`)
                testIt({
                    query: newData[0],
                    term: newData[1]
                });
            })
            break;
        default:
            console.log("NO VALID KEYWORD FOUND!")
    }
}


testIt({
    query: args[0],
    term: args.slice(1).join(" ")
});