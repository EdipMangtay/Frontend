import { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/counterSlice'
import UserList from './UserList'

function App() {

  

  return (
    <>
    
      <UserList />
        
    </>
  )
}

export default App
