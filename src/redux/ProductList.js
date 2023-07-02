// 비동기통신이 오는것
// AsyncThunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from "../productList.json";

export const fetchAllProducts = createAsyncThunk('fetch-all-products',async(apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
})

// state를 만드는것
const productSlice = createSlice({
    name:'products',
    initialState:{data:[],fetchStatus:""},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state,action) => {
            state.data = action.payload
            state.fetchStatus = "성공"
        })
        .addCase(fetchAllProducts.pending , (state) => {
            state.fetchStatus = "진행중"
        })
        .addCase(fetchAllProducts.rejected, (state) => {
            state.data = productList.products
            state.fetchStatus = "에러입니다."
        })
    }
})


export default productSlice;