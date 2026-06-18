import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categoriesIndex: 0,
    sortItem: { name: "Популярности (Убывание)", sorting: "?sortBy=raiting" },
    serch: '',
    currentPagePaginate: 1,
    currentPerPage: 4
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
        },

        setActionParams(state, action) {

            state.categoriesIndex = Number(action.payload.category)
            state.currentPagePaginate = Number(action.payload.page)
            state.sortItem = action.payload.sortings
            state.currentPerPage = Number(action.payload.limit)
        }
    }
})

export const { setCategoriesIndex, setSortItem, setSerch, setCurrentPage, setActionParams } = filterSlice.actions

export default filterSlice.reducer
