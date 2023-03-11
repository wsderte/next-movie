import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Filter from '@/components/filter'
import FilmsList from '@/components/filmslist'
import { useState } from 'react'

export default function Home() {
    const [filter, setFilter] = useState<string>('')
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Filter setFilter={setFilter} />
                <FilmsList filter={filter} />
            </main>
        </>
    )
}
