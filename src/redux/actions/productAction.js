import { createAsyncThunk } from "@reduxjs/toolkit";

export  const getProduct = createAsyncThunk("product/list", async ()=>{
          // call api  
          try {
                console.log(" return action.payload  ");
          } catch (error) {
              console.log(error);
          } 
})