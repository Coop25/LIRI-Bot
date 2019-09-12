module.exports.ombd = function (ajax, title, fs, logs, colors) {
    if (title === "") title = "Mr. Nobody";
    ajax.get(`https://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=e8fe52ad`)
        .then(response => {
            const data = response.data;
            const tomatoes = data.Ratings.filter(obj => obj.Source === "Rotten Tomatoes");
            const splitter = "-----------------------------------------------------------------";
            const dataSTR = `
           Title: ${data.Title}
            Year: ${data.Year}
            IMDB: ${data.imdbRating}/10
 Rotten Tomatoes: ${tomatoes[0].Value}
         Country: ${data.Country}
          Actors: ${data.Actors}
            Plot: ${data.Plot}`
            console.log(`${colors.red(splitter)}${colors.green(dataSTR)}\n${colors.red(splitter)}`);
            logs.log(fs, `\n${splitter}${dataSTR}\n${splitter}`);
        })
        .catch(function (err) {
            console.log(err);
        });
}