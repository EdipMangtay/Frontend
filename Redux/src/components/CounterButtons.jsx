import { useDispatch } from "react-redux"
import { addMore, increment, reset } from "../store/counter/counterSlice";

export default function CounterButtons() 
{
    
    const dispatch = useDispatch();
    return <>
        <button onClick={() => dispatch(increment())}> Arttir</button>
      <button onClick={() => dispatch(addMore(5))}> 5 Ekle</button>
      <button onClick={()=> dispatch(reset())}> Reset </button>
    </>
}