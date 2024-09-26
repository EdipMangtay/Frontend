import { useState, useEffect } from "react";
import { axiosCatApi } from "./axiosApi";

export default function useCategoryAxiosApi(categoryName) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const getApiData = async () => {
    try {
      const response = await axiosCatApi.get(`/images/search?limit=10&breed_ids=${categoryName}`); // GET isteği
      const responseData = response.data; // response.data bir fonksiyon değil, nesne
      setData(responseData); // Veriyi state'e koyuyoruz
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setError(err.message || "Veri Alınamadı");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData(); // Direkt olarak API isteğini çağırıyoruz
  }, []);

  return [data, isLoading, isError, error];
}