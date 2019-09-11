module.exports.spotifyAPI = function (spotify, song) {
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
            console.log(
`--------------------------
Artist(s): ${artistStr}
Song Name: ${track.name}
    Album: ${track.album.name}
  Preview: ${track.preview_url}
--------------------------`)
        })
        .catch(function (err) {
            console.log(err);
        });
}