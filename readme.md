# Liri Bot

this is a bot is a Node.js command line bot that takes in command line arguments and give various data in response

## Usage

#### node liri.js concert-this artist name

- this command gets a set amount of data based on what artist name is given and displays useful info on upcoming concerts from that artist
- EXAMPLE console output below

![Well... there was a gif here -_-](https://i.imgur.com/uNq1h15.gif)

```
-----------------------------------------------------------------
           Artist: Cher
            Venue: Mercedes-Benz Arena
Location of Venue: Berlin, Germany
             Date: 09/26/2019
-----------------------------------------------------------------
```

#### node liri.js spotify-this-song song name

- this command gets data based on what song is given using the Spotify API and displays that data in a meaningful manor in the console
- EXAMPLE console output below


![Well... there was a gif here -_-](https://i.imgur.com/2j7On7e.gif)
```
-----------------------------------------------------------------
Artist(s): Foreigner
Song Name: Juke Box Hero
    Album: 4 (Expanded)
  Preview: https://p.scdn.co/mp3-preview/596f26d42b94be4ef06d7b63f4a02cbfd3e40c48?cid=067b3496810e4775a974fd4129b3f5cb
-----------------------------------------------------------------
```

#### node liri.js movie-this movie name

- this command gets various data about a given movie using the OMBD API and displays the data in a meaningful manor in the console
- EXAMPLE console output below
![Well... there was a gif here -_-](https://i.imgur.com/dl2w212.gif)

```
-----------------------------------------------------------------
           Title: The Core
            Year: 2003
            IMDB: 5.5/10
 Rotten Tomatoes: 40%
         Country: USA, Germany, Canada, UK
          Actors: Christopher Shyer, Ray Galletti, Eileen Pedde, Rekha Sharma
            Plot: The only way to save Earth from catastrophe is to drill down to the core and set it spinning again.
-----------------------------------------------------------------
```

#### node liri.js do-what-it-says

- this command reads the random.txt file and parses the data in said file to a string, it then splits the string on comma and uses the resulting array to run a new command based on index 0 of the newly created array
- EXAMPLE console output below

![Well... there was a gif here -_-](https://i.imgur.com/ETnRzvU.gif)
