    import { createSlice } from "@reduxjs/toolkit";

    // Doğrudan state objesi oluşturuluyor
    const initialStateValue = 100; // initialState bir sayı

    const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: initialStateValue,  // value olarak initialState
    },
    reducers: {
        increment(state) {
            console.log("increment", state);
        state.value++; // state.value değerini artırıyoruz
        },
        addMore(state, action) {
            console.log("ADDMore",state,action);    
            state.value += action.payload; // state.value değerine action.payload kadar ekliyoruz
        },

        reset(state) {
        state.value = initialStateValue; // state.value'yu başlangıç değerine sıfırlıyoruz
        },
    },
    });

    export const { increment, reset,addMore } = counterSlice.actions; 
    export default counterSlice.reducer;