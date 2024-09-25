import { useContext,useReducer } from "react";
import { Countreducer, DECREMENT, INCREMENT, RESET } from "./reducer/counter";
import { SiteContext } from "./context/siteContext";

export default function ContextAboutPage() {

    const {counter : {state,dispatch}} = useContext(SiteContext);

    return(
        <div>
            <h2>Context About Page Kullanıldı</h2>
            <h1>{state}</h1>
            <button onClick={() => dispatch(INCREMENT)}>Arttır</button>
            <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
            <button onClick={() => dispatch(RESET)}>Sıfırla</button>
            <button onClick={() => dispatch("HEBELE")}>BOŞ  </button>
        </div>
    )

}
