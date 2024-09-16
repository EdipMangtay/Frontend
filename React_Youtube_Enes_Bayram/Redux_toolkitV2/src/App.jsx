import './App.css'
import { useSelector,useDispatch} from 'react-redux'
import { decrease, increase } from './Redux/CounterSlice'
import UserList from './UserList'


function App() {
  // const dispatch = useDispatch()  

  // const {value} = useSelector((store) => store.counter)
  // console.log(value)

  return (
    <>

      <UserList />
      {/* <div>
        {value}
      </div> */}
      {/* <div><button onClick={() => dispatch(increase())}>Arttır</button></div>
      <div><button onClick={() => dispatch(decrease())}>Azalt</button></div> */}
    </>
  )
}

export default App
