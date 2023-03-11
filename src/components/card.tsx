import Image from 'next/image'
import styles from '@/styles/Card.module.css'
import router from 'next/router'

export default function Card({ films }: any) {
    const handleClick = (id: string): void => {
        console.log(id, 'click')
        router.push('/movie/' + id)
    }

    return (
        <>
            <div
                className={styles.cards}
                onClick={() => handleClick(films.imdbID)}
            >
                <div className={styles.cardsWrap}>
                    <Image
                        src={films.Poster}
                        alt={''}
                        width={120}
                        height={160}
                        className={styles.cardsImage}
                    />

                    <div className={styles.cardsText}>
                        <div className={styles.Title}> {films.Title}</div>
                        <div className={styles.Info}>
                            {films.Year + ', ' + films.Type}{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
