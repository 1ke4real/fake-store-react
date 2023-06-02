import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducer.jsx";

export const store = configureStore({
    reducer: {rootReducer},
})