import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './CounterSlice'
import userReducer from '../Redux/userSlice'

export const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    user : userReducer
  },

})