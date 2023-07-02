import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/CartSlice";
import productSlice from "./redux/ProductList";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        products:productSlice.reducer
    }
})

export default store;