import Image from 'next/image'
import styles from '@/styles/Film.module.css'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../redux/cart/reducer'
import { IFilm, IRating } from '@/interface/film.interface'

export const getServerSideProps = async ({ params }: any) => {
    const id: string = params.id

    const API: string = `http://www.omdbapi.com/?i=${id}&apikey=c894dff5`
    const res: IFilm = await fetch(API)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error)
        })

    return {
        props: res,
    }
}

export default function MoviePage(props: IFilm) {
    const dispatch = useDispatch()
    const handleClick = (movie: IFilm): void => {
        console.log(movie)
        dispatch(setItemInCart(movie))
    }

    return (
        <div className={styles.movie}>
            <div className={styles.backImage}></div>
            <div className={styles.movieWrap}>
                <div className={styles.movieLeft}>
                    {props.Poster !== 'N/A' ? (
                        <Image
                            src={props.Poster}
                            alt={''}
                            width={320}
                            height={460}
                            className={styles.movieImage}
                        />
                    ) : null}
                    {props?.Ratings
                        ? props.Ratings.map((rate: IRating) => (
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
                    <Button
                        onClick={() => handleClick(props)}
                        className={styles.button}
                        color="primary"
                    >
                        Add film
                    </Button>
                </div>
            </div>
        </div>
    )
}
