import {configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";

export default configureStore({
    reducer: {
        product :ProductReducer,
    },
});