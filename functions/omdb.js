//we are exporting a function called ombd that takes in 5 arguments
module.exports.ombd = function (ajax, title, fs, logs, colors) {
    //if no title is given then we shall use Mr. Nobody
    if (title === "") title = "Mr. Nobody";
    //make an ajax get request
    ajax.get(`https://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=e8fe52ad`)
        .then(response => {
            // once we have the data then we make a variable called data instead of typing out response.data all the time
            const data = response.data;
            //filter the Ratings array to get the Rotten Tomatoes object
            const tomatoes = data.Ratings.filter(obj => obj.Source === "Rotten Tomatoes");
            //create the splitter to help keep the console data organized, create string with data nicely layed out for the console and the log file
            const splitter = "-----------------------------------------------------------------";
            const dataSTR = `
           Title: ${data.Title}
            Year: ${data.Year}
            IMDB: ${data.imdbRating}/10
 Rotten Tomatoes: ${tomatoes[0].Value}
         Country: ${data.Country}
          Actors: ${data.Actors}
            Plot: ${data.Plot}`;
            //log the above strings to the console changing the color to make it a little more appealing 
            console.log(`${colors.red(splitter)}${colors.green(dataSTR)}\n${colors.red(splitter)}`);
            //logging the data to the log file
            logs.log(fs, `\n${splitter}${dataSTR}\n${splitter}`);
        })
        .catch(function (err) {
            console.log(err);
        });
}