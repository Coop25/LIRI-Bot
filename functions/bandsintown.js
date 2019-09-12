//export the function so it can be used in other files 
module.exports.concert = function (axios, moment, artist, fs, logs, colors) {
    //use axios to "fetch" the data from bandsintown api 
    if(artist === "") artist = "Cher"
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
        //wait for the promise to resolve 
        .then(response => {
            //assigning a variable so I do not have to type response.data every time
            const firstDate = response.data[0];
            const splitter = "-----------------------------------------------------------------";
            const dataSTR = `
           Artist: ${artist}
            Venue: ${firstDate.venue.name}
Location of Venue: ${firstDate.venue.city}, ${firstDate.venue.country}
             Date: ${moment(firstDate.datetime).format("MM/DD/YYYY")}`
             console.log(`${colors.red(splitter)}${colors.green(dataSTR)}\n${colors.red(splitter)}`);
            logs.log(fs, `\n${splitter}${dataSTR}\n${splitter}`);
        })
}