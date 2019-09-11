//export the function so it can be used in other files 
module.exports.concert = function (axios, moment, artist) {
    //use axios to "fetch" the data from bandsintown api 
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
        //wait for the promise to resolve 
        .then(response => {
            //assigning a variable so I do not have to type response.data every time
            const firstDate = response.data[0];
            console.log(
                `---------------------------------
            Venue: ${firstDate.venue.name}
Location of Venue: ${firstDate.venue.city}, ${firstDate.venue.country}
             Date: ${moment(firstDate.datetime).format("MM/DD/YYYY")}
---------------------------------`
            );
        })
}