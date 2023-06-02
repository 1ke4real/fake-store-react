import { createSlice } from "@reduxjs/toolkit";

const pannierSlice = createSlice({
    name: 'pannier',
    initialState: {
        value: 0
    },
    reducers: {
        addPannier: (state) => {
            state.value +=1
        },
        removePannier: (state) => {
            state.value -= 1
        },
    },
});

export const { addPannier, removePannier } = pannierSlice.actions;
export default pannierSlice.reducer;