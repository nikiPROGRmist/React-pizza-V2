import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],

}

export const cartSlice = createSlice({
    name: "Cart",
    initialState,

    reducers: {
        setAddItems(state, action) {
            state.items.push(action.payload)
        },

        setRemoveItems(state, action) {
            state.items.filter(obj => obj.id === action.payload.id)
            console.log(action.payload.id)
        }


    }
})

export const { setAddItems, setRemoveItems } = cartSlice.actions

export default cartSlice.reducer
