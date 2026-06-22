import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalPrice: 0,

}

export const cartSlice = createSlice({
    name: "Cart",
    initialState,

    reducers: {
        setAddItems(state, action) {

            const existing = state.items.find(item => item.id === action.payload.id)

            if (!existing) {
                state.items.push(action.payload)

            } else {
                existing.count += 1;
            }

            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0)

        },


        setRemoveItems(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0);
        },

        setCountPlus(state, action) {
            const item = state.items.find(obj => obj.id === action.payload);
            if (item) {
                item.count += 1;
                state.totalPrice = state.items.reduce(
                    (sum, item) => sum + item.price * item.count,
                    0
                );
            }
        },

        setCountMinus(state, action) {
            const item = state.items.find(obj => obj.id === action.payload);

            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                }

                state.totalPrice = state.items.reduce(
                    (sum, item) => sum + item.price * item.count,
                    0
                );
            }
        },



        setClearItems(state, action) {
            state.items = action.payload
            state.totalPrice = 0
        }


    }
})

export const { setAddItems, setRemoveItems, setClearItems, setCount, setCountPlus, setCountMinus } = cartSlice.actions

export default cartSlice.reducer
