import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users : [],
    loading : false,
}

 export const getAllUsers = createAsyncThunk('users', async() =>{

     const response = await axios.get("https://jsonplaceholder.typicode.com/users")

     console.log(response.data)
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        // HTTP isteği olmaz ise kullılır
    },
    extraReducers: (builder) => {
        // HTTP isteği olursa kullanılır
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            // state initiial ile eşleşir 
            //Acition yukarıdaki fonksiyonun return değeri ile yapılacak işlem için kulllanılır 
        }
    )}

});

export const {} = userSlice.actions;
export default userSlice.reducer;

