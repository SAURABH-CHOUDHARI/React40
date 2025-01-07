import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartSlice';
import ProductSlice from './reducers/ProductSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: ProductSlice
    }
})

