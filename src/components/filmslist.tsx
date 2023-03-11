import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Card from './card'

interface IFilmList {
    filter: string
}

export default function FilmsList({ filter }: IFilmList) {
    const [films, setFilms] = useState<any>([])
    const [err, setErr] = useState<boolean>(true)

    useEffect(() => {
        const fetchFilms = async () => {
            const res = await fetch('/api/getSearchData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filter),
            })
            return res
        }

        const Debounce = setTimeout(() => {
            fetchFilms()
                .then((res) => res.json())
                .then((data) => {
                    setFilms(data.films.Search)
                    console.log(data.films.Search)
                    data.films.Search == undefined
                        ? setErr(true)
                        : setErr(false)
                })
        }, 400)

        return () => clearTimeout(Debounce)
    }, [filter])

    return (
        <div className={styles.films}>
            {err ? (
                <div className={styles.errorText}>
                    {"Sorry, I couldn't find a film with this title."}
                </div>
            ) : null}
            <div className={styles.filmsWrap}>
                {films
                    ? films.map((film: any) => (
                          <Card key={film.imdbID} films={film} />
                      ))
                    : null}
            </div>
        </div>
    )
}
