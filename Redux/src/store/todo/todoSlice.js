import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add(state,action){
            state.unshift(action.payload)
            console.log("ADD",state,action)
        },
        removeTodo(state,action){
            state.splice(action.payload,1)
        }
    }

})

export const {add ,removeTodo} = todoSlice.actions
export default todoSlice.reducer