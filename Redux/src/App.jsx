import { useDispatch, useSelector } from "react-redux";
import CounterButtons from "./components/CounterButtons";
import ShowReduxStore from "./ShowReduxStore";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos"; // Import the Todos component

function App() {
  const value = useSelector(store => store.counter.value);
  const store = useSelector(store => store);
  console.log(store)
  console.log(value)


  return (
    <>
      <AddTodo />
      <Todos /> {/* Add the Todos component here to render the list of todos */}
      <hr />
      <hr />
      <h2>Counter : {value}</h2>
      <CounterButtons />
      <ShowReduxStore/>
      
    </>
  )
}

export default App
