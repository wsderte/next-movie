import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Dispatch, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface IFilter {
    setFilter: (value: string) => void
}

export default function Filter({ setFilter }: IFilter) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    return (
        <div className={styles.filter}>
            <div className={styles.filterWrap}>
                <label className={styles.filterLabel}>
                    Search for your favourite films
                </label>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <BsSearch size={21} />
                    </div>
                    <div className={styles.inputBox}>
                        <input
                            placeholder="Search..."
                            onChange={(e) => handleSearch(e)}
                            className={styles.input}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
