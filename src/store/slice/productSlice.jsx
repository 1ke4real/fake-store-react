import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState : {
        value: []
    },
    reducers:{
        addProduct: (state, action) =>{
            state.value.push(action.payload);
        },
        removeProduct: (state, action)=>{
            const index = state.value.indexOf(action.payload)
            state.value.splice(index, 1)
        }
    }
})

export const {addProduct, removeProduct} = productSlice.actions
export default productSlice.reducer