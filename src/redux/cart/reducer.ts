const { createSlice } = require('@reduxjs/toolkit')
import { IFilm } from '@/interface/film.interface'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemInCart: (
            state: { itemsInCart: IFilm[] },
            action: { payload: IFilm }
        ) => {
            state.itemsInCart.push(action.payload)
        },
    },
})

export const { setItemInCart } = cartSlice.actions
export default cartSlice.reducer
