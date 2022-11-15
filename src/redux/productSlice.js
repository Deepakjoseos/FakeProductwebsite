import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { Action } from "@remix-run/router";
import axios from "axios";


export const getProducts = createAsyncThunk("/products", async () => {
    const resp = await axios(`https://fakestoreapi.com/products`);
    return resp.data;
} );


const productSlice = createSlice(({
    name:"products",
    initialState:{
        products:[],
        loading: false,
        error:null
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products =action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error =action.payload;
        },
    },
}))

export default productSlice.reducer