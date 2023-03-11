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
    const API: string = `http://www.omdbapi.com/?i=${req.body}&apikey=c894dff5`

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
// 'http://www.omdbapi.com/?i=tt3896198&apikey=c894dff5'
