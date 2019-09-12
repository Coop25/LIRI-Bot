//we are exporting a function called spotifyAPI that takes in 5 arguments
module.exports.spotifyAPI = function (spotify, song, fs, logs, colors) {
    //if no song is passed in we will use the sign
    if (song === "") song = "The Sign"
    //use the spotify package we imported in the main file to search for a specific track/song
    spotify
        .search({
            type: 'track',
            query: song
        })
        .then(function (response) {
            //once we have the data we make a variable for the first track in the response.tracks.items array
            const track = response.tracks.items[0];
            //the beginning of the artist string
            let artistStr = "";
            //loop through the artists just in case there could be multiple 
            track.artists.forEach(artistOBJ => {
                //if this is the first artist in the array set artistStr to that artist
                if (artistStr.length === 0) {
                    artistStr = `${artistOBJ.name}`;
                } else { //if this is the second artist in the array add the new one to the end after the first one using a comma to separate 
                    artistStr = `${artistStr}, ${artistOBJ.name}`;
                }
            });

            //create the splitter to help the data look nice on screen, and format the data so it looks nice on screen 
            const splitter = "-----------------------------------------------------------------";
            const dataSTR = `
Artist(s): ${artistStr}
Song Name: ${track.name}
    Album: ${track.album.name}
  Preview: ${track.preview_url}`;

            //log the above strings to the console and to the log file
            console.log(`${colors.red(splitter)}${colors.green(dataSTR)}\n${colors.red(splitter)}`);
            logs.log(fs, `\n${splitter}${dataSTR}\n${splitter}`);
        })
        .catch(function (err) {
            console.log(err);
        });
}