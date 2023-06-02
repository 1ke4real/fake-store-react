import { combineReducers } from "@reduxjs/toolkit";
import CategorieSlice from "./slice/categorieSlice.jsx";
import pannierSlice from "./slice/pannierSlice.jsx";
import productSlice from "./slice/productSlice.jsx";

export const rootReducer = combineReducers({
    category: CategorieSlice,
    pannier: pannierSlice,
    product: productSlice
});
