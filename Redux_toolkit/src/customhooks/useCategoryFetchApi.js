import { useState, useEffect } from "react";

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;

export default function useCategoryFetchApi(categoryName) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    const getApiData = async () => {
        try {
            const response = await fetch(`${VITE_CAT_API_URL}/images/search?limit=10&breed_ids=${categoryName}`, {
                headers: {
                    "x-api-key": VITE_CAT_API_KEY
                }
            });

            if (!response.ok) {
                throw new Error("Veri Alınamadı");
            }

            const responseData = await response.json();
            setData(responseData);
            setIsLoading(false);
        } catch (err) {
            setIsError(true);
            setError(err.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return [data, isLoading, isError, error];
}