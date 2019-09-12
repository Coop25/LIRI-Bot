module.exports.spotifyAPI = function (spotify, song, fs, logs, colors) {
    if (song === "") song = "Juke Box Hero"
    spotify
        .search({
            type: 'track',
            query: song
        })
        .then(function (response) {
            const track = response.tracks.items[0];
            let artistStr = ""
            track.artists.forEach(artistOBJ => {
                if (artistStr.length === 0){
                    artistStr = `${artistOBJ.name}`;
                } else {
                    artistStr = `${artistStr}, ${artistOBJ.name}`;
                }
            });
            const splitter = "-----------------------------------------------------------------";
            const dataSTR = `
Artist(s): ${artistStr}
Song Name: ${track.name}
    Album: ${track.album.name}
  Preview: ${track.preview_url}`
  console.log(`${colors.red(splitter)}${colors.green(dataSTR)}\n${colors.red(splitter)}`);
            logs.log(fs, `\n${splitter}${dataSTR}\n${splitter}`);
        })
        .catch(function (err) {
            console.log(err);
        });
}