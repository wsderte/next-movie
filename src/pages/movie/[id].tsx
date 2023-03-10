import Image from 'next/image'
import styles from '@/styles/Film.module.css'
import { useEffect, useState } from 'react'
import router, { useRouter } from 'next/router'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const getServerSideProps = async ({ params }: any) => {
    const id = params.id
    console.log(id, ' CONTEXT ')
    const res = await fetch('http://localhost:3000/api/getById', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
    })
    const data = await res.json()
    console.log(data.films)
    return {
        props: data.films,
    }
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

export default function MoviePage(props: any) {
    // console.log(props)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {}

    return (
        <div className={styles.movie}>
            <div className={styles.backImage}></div>
            <div className={styles.movieWrap}>
                <div className={styles.movieLeft}>
                    <Image
                        src={props.Poster}
                        alt={''}
                        width={320}
                        height={460}
                        className={styles.movieImage}
                    />
                    {props?.Ratings
                        ? props.Ratings.map((rate: any) => (
                              <div
                                  className={styles.movieRatings}
                                  key={rate.Source}
                              >
                                  {rate.Source} {': '} {rate.Value}
                              </div>
                          ))
                        : null}
                </div>
                <div className={styles.movieRight}>
                    <div className={styles.movieTitle}>{props.Title}</div>
                    <div className={styles.movieEdition}>
                        {props.Year} {', '} {props.Type}
                    </div>
                    <div className={styles.movieGenre}>
                        {'Genres: '}
                        {props.Genre}
                    </div>
                    <div className={styles.movieActors}>
                        {'Actors: '}
                        {props.Actors}
                    </div>
                    <div className={styles.moviePlot}>{props.Plot}</div>
                    <Button className={styles.button} color="primary">
                        Add film
                    </Button>
                </div>
            </div>
        </div>
    )
}
