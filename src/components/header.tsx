import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { BsCartCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux'

interface GamesState {
    itemsInCart: any[]
}

interface CartState {
    cart: GamesState
}

const Header: React.FC = () => {
    let items: any[] = useSelector((state: CartState) => state.cart.itemsInCart)

    return (
        <div className={styles.headerWrap}>
            <div className={styles.headerBox}>
                <div className={styles.headerNav}>
                    <Link href="/">
                        <div className={styles.headerBut}>HOME</div>
                    </Link>

                    <Link href="/cart" className={styles.headerCart}>
                        {items ? (
                            <div className={styles.cartNumber}>
                                {items.length}
                            </div>
                        ) : null}
                        <BsCartCheck size={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
