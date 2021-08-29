import { createSlice } from "@reduxjs/toolkit";
import {getProduct}  from  "../actions/productAction.js"
const initialState = {
    data:[],
    loading:  false,
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers : {

    },
    extraReducers : {
        [getProduct.pending]: (state, action) => {
            console.log("đang chờ");
            state.loading = true ;
        },
        [getProduct.fulfilled] : (state, action) =>{
            state.data  = action.payload
            state.loading = false ; //
            console.log("thành công ");
        },
        [getProduct.rejected] : (state, action) =>{
             console.log("thất bại");
        }
    }

})
export default ProductSlice.reducer