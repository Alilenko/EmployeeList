import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    summary: [],
    loading: false,
    error: false,
    totalCount: 0,
    activePage: 1,
    totalPage: []
}

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        summaryLoading: state => {state.loading = true},
        summaryLoaded: (state, action) => {
            state.loading = false;
            state.summary = action.payload;
        },
        summaryError: state =>{
            state.error = true;
            state.loading = false;
        },
        changeTotal: (state, action) => {
            state.totalCount = action.payload
        }, 
        changeActivePage: (state, action) => {
            state.activePage = action.payload
        },
        changeTotalPage: (state, action) => {
            state.totalPage = action.payload
        }
    }
})

const {actions, reducer} = summarySlice;

export default reducer;
export const {
    summaryLoading,
    summaryLoaded,
    summaryError,
    changeTotal, 
    changeActivePage,
    changeTotalPage
} = actions;