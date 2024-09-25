import { useSelector } from "react-redux";
import CounterButtons from "./components/CounterButtons";

export default function ShowReduxStore() {
    const value = useSelector(store => store.counter.value);
    return <>
        <h1>Another Components</h1>
        <h3>Counter : {value}</h3>
        <CounterButtons />
    
    </>
}