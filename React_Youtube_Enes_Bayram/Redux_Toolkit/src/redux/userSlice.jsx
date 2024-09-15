import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: [],
    loading: false,
}

 export const getAllUser = createAsyncThunk('users', async ()=>{
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
   console.log(response.data)
    return response.data;
})

export const userSlice = createSlice({

    name: "user",
    initialState,
    reducers:{
        // HTTP istediği olmaz ise kullanılır
    },
    extraReducers: (builder) =>{
        // HTTP isteklerinde kullanılır
        builder.addCase(getAllUser.fulfilled)
    }
});

export const { } = userSlice.actions;
export default userSlice.reducer;