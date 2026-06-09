import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categoriesIndex: 0,
    sortItem: { name: "Популярности (Убывание)", sorting: "?sortBy=raiting" },
    serch: '',
    currentPagePaginate: 1
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,

    reducers: {
        setCategoriesIndex(state, action) {
            state.categoriesIndex = action.payload
        },

        setSortItem(state, action) {
            state.sortItem = action.payload
        },
        setSerch(state, action) {
            state.serch = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPagePaginate = action.payload
        }
    }
})

export const { setCategoriesIndex, setSortItem, setSerch, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer
