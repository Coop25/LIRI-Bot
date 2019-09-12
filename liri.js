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

//function check the command given if it is a valid command using a switch case statement
function testIt(itemOBJ) {
    //log what command was issued to the console
    console.log(colors.yellow(`COMMAND ISSUED: ${colors.cyan(itemOBJ.query)}`))
    switch (itemOBJ.query) {
        case "concert-this":
            //log the command to log.txt file appending it on to the end of the file
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            //run the concert function that we imported earlier passing in a few arguments  
            bands.concert(axios, moment, itemOBJ.term, fs, logs, colors);
            break;
        case "spotify-this-song":
            //log the command to log.txt file appending it on to the end of the file
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            //run the spotifyAPI function that we imported earlier passing in a few arguments  
            spotifyFunc.spotifyAPI(spotify, itemOBJ.term, fs, logs, colors);
            break;
        case "movie-this":
            //log the command to log.txt file appending it on to the end of the file
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            //run the omdb function that we imported earlier passing in a few arguments  
            omdb.ombd(axios, itemOBJ.term, fs, logs, colors);
            break;
        case "do-what-it-says":
            //log the command to log.txt file appending it on to the end of the file
            logs.log(fs, `\n${starSplitter}\nCOMMAND ISSUED: ${itemOBJ.query}`);
            //read the random.txt file for a pre set command 
            fs.readFile("./random.txt", "utf8", function (error, data) {
                if (error) {
                    return console.log(error);
                }
                //take the string that we received from the text file and split it at comma turning it into an array
                const newData = data.split(",");
                //logging to log.txt that a new command is about to be run, and console logging the same fact  
                logs.log(fs, `\nRUNNING NEW COMMAND: ${newData[0]}`);
                console.log(`${colors.red("------------------")}\n${colors.blue("RUNNING NEW COMMAND: ")}${colors.green(newData[0])}\n${colors.red("------------------")}${starSplitter}`);

                //re running this function but with new data
                testIt({
                    query: newData[0],
                    term: newData[1]
                });
            })
            break;
        default:
            //if the user has entered nothing they will get a message in the console telling them how the app works
            console.log(colors.red("ERROR: NO VALID KEYWORD FOUND!"))
            console.log(`Oh no, it looks like you entered nothing... please try one of the following
-----------------------------------------------------
${colors.red("node liri.js")} ${colors.blue("concert-this")} ${colors.green("cher")}
${colors.red("node liri.js")} ${colors.blue("spotify-this-song")} ${colors.green("Juke Box Hero")}
${colors.red("node liri.js")} ${colors.blue("movie-this")} ${colors.green("the core")}
${colors.red("node liri.js")} ${colors.blue("do-what-it-says")}
-----------------------------------------------------
please note anything in green above can be changed`);
    }
}

//run the testIt switch case to check what command the user inputted
testIt({
    query: args[0],
    term: args.slice(1).join(" ")
});