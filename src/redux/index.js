import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice"
const store = configureStore({
     reducer :{
          ProductSlice
     }
})
export default store