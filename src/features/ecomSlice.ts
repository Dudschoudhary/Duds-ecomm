import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export interface product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    },
    quantity: number,

}

interface productState {
    products: product[],
    cart: product[],
    loading: boolean,
    error: null | string
}

const initialState: productState = {
    products: [],
    cart: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk<product[]>('products/fetchProducts', async () => {
    return await productApi.fetchProducts();
})

const ecomSlice = createSlice({
    name: "ecom",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, count } = action.payload
            const itemExists = state.cart.find(item => item.id === product.id)
            if (itemExists) {
                itemExists.quantity = count
            } else {
                state.cart.push({ ...product, quantity: count })
            }
        },
        removeCartItems: (state, action) =>{
            const itemId = action.payload;
            state.cart = state.cart.filter(item => item.id !== itemId)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Faild !";
            })
    }
})

export const { addToCart,removeCartItems } = ecomSlice.actions;
export default ecomSlice.reducer;