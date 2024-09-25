import { useReducer } from "react";
import { Countreducer } from "./reducer/counter/";

export default function About() {

    const[count,dispatch] = useReducer(Countreducer,0);


    return (
        <div>
            <h2>Contex API Kullanılmadı</h2>
        <h1>About</h1>
        <h1>{count}</h1>
        <button onClick={() => dispatch("INCREMENT")}>Arttır</button>
        <button onClick={() => dispatch("DECREMENT")}>Azalt</button>
        <button onClick={() => dispatch("RESET")}>Sıfırla</button>
        <button onClick={() => dispatch("HEBELE")}>Olmayanı Yap</button>

        </div>
    )
}