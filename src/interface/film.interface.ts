export interface IFilm {
    imdbID: string
    Search: string
    Title: string
    Year: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Language: string
    Writer: string
    Actors: string
    Plot: string
    Poster: string
    imdbRating: string
    Metascore: string
    imdbVotes: string
    Type: string
    Ratings: IRating[]
}

export interface IRating {
    Source: string
    Value: string
}

// let props = {
//     Title: 'Star Wars: Episode V - The Empire Strikes Back',
//     Year: '1980',
//     Released: '20 Jun 1980',
//     Runtime: '124 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'Irvin Kershner',
//     Language: 'English',
//     Writer: 'Leigh Brackett, Lawrence Kasdan, George Lucas',
//     Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
//     Plot: 'After the Rebels are overpowered by the Empire, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
//     Poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
//     imdbRating: '8.7',
//     Metascore: '82',
//     imdbVotes: '1,304,696',
//     Ratings: [
//         { Source: 'Internet Movie Database', Value: '8.7/10' },
//         { Source: 'Rotten Tomatoes', Value: '94%' },
//         { Source: 'Metacritic', Value: '82/100' },
//     ],
//     Type: 'movie',
// }
