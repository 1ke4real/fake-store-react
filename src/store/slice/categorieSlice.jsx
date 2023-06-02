import {createSlice} from "@reduxjs/toolkit";

export const categorieSlice = createSlice({
    name: 'category',
    initialState: {
        value: ''
    },
    reducers: {
        newCategorie: (state, action)=>{
            state.value = action.payload
        },
        resetCategorie: (state)=>{
          state.value = ''
        },
    },
})

export const {newCategorie, resetCategorie} = categorieSlice.actions
export default categorieSlice.reducer