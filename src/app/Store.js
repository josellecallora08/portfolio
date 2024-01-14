import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeslice";
export const Store = configureStore({
    reducer:{
        theme:themeReducer
    }
})