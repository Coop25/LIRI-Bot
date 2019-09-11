module.exports.ombd = function (ajax, title) {
    if (title === "") title = "Mr. Nobody";
    ajax.get(`https://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=e8fe52ad`)
        .then(response => {
            const data = response.data;
            let tomatoes = data.Ratings.filter(obj => obj.Source === "Rotten Tomatoes");
            console.log(
                `------------------------------------------------------------------------------
          Title: ${data.Title}
           Year: ${data.Year}
           IMDB: ${data.imdbRating}/10
Rotten Tomatoes: ${tomatoes[0].Value}
        Country: ${data.Country}
         Actors: ${data.Actors}
           Plot: ${data.Plot}
------------------------------------------------------------------------------`)
        })
}