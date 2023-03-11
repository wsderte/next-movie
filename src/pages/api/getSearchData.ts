import type { NextApiRequest, NextApiResponse } from 'next'

interface IFilms {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

interface ISearch {
    Search: IFilms[]
}

interface IData {
    films: ISearch
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IData>
) {
    const API: string = 'http://www.omdbapi.com/?apikey=c894dff5&s=' + req.body
    const films: ISearch = await fetch(API)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error)
        })

    res.status(200).json({ films: films })
}
