import { useEffect, useState } from "react";
import LoadingComponent from "../../components/LoadingComponent";

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY

export default function FetchCategories() {

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

    return (
        <div className="col-sm-12">
            <h1>Fetch: Kategoriler</h1>
            {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
            <ul className="list-group">
                {data.map((item) => <li className = "list-group-item" key={item.id}>{item.name}</li>)}
            </ul>
        </div>


    );
}
