const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemInCart: (
            state: { itemsInCart: any[] },
            action: { payload: any }
        ) => {
            state.itemsInCart.push(action.payload)
        },
    },
})

export const { setItemInCart } = cartSlice.actions
export default cartSlice.reducer
