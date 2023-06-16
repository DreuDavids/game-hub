import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id:number;
    name: string;

}

interface FetchGenresResponse{
    count:number;
    results:Genre[];
}

const useGenres = () => {
    //state variable for storing Game objects
  const [genres, setGenres] = useState<Genre[]>([]);
  //state variable for error messages
  const [error, setError] = useState("");
  //loading skeleton
  const [isLoading, setLoading] = useState(false);

  //sending fetch request to the backend
  useEffect(() => {
const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => {setGenres(res.data.results); setLoading(false);})
      .catch((err) => {
      if(err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);});

      return ()=> controller.abort();
  }, []);

  return {genres, error, isLoading };
}

export default useGenres;