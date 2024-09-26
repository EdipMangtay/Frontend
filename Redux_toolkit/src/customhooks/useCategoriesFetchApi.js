import { useState,useEffect } from "react";
const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;

export default  function useCategoriesFetchApi(){
    
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [error,setError] = useState(null);


    const getApiData = async () =>{
        const response =  await fetch(`${VITE_CAT_API_URL}/breeds`)
        const responseData = await response.json();
        if(!response.ok){
            setIsError(true);
            setError("Veri Alınamadı");
            throw new Error("Veri Alınamadı");
        }
        console.log(responseData)
        setData(responseData);
        setIsLoading(false);
    }

    useEffect(() => {
        //    getApiData();
        setTimeout(() =>getApiData(),2000)
        },[]);

        return[data,isLoading,isError,error];
}