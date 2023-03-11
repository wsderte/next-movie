import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/card'
import { IFilm } from './../interface/film.interface'

interface GamesState {
    itemsInCart: IFilm[]
}

interface CartState {
    cart: GamesState
}

export default function Cart() {
    let films: IFilm[] = useSelector(
        (state: CartState) => state.cart.itemsInCart
    )
    console.log(films)

    return (
        <div className={styles.cart}>
            <div className={styles.filmsWrap}>
                {films
                    ? films.map((film: IFilm) => (
                          <Card key={film.imdbID} films={film} />
                      ))
                    : null}
            </div>
        </div>
    )
}
