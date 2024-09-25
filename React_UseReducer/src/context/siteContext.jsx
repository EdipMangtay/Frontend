import React, { createContext, useReducer } from "react";
import { Countreducer } from "../reducer/counter";

// React.createContext ile yeni bir context oluşturuluyor
const SiteContext = createContext(); 

function SiteContextProvider({children}) {
    const [count, dispatch] = useReducer(Countreducer, 0);
    
    // context değerini oluşturuyoruz
    const contextValue = { 
        counter: { state: count, dispatch } 
    };

    return (
        <SiteContext.Provider value={contextValue}>
            {children}
        </SiteContext.Provider>
    );
}

export { SiteContext, SiteContextProvider };