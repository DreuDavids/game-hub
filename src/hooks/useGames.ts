import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//game model interface
interface Game {
    id: number;
    name: string;
  }
  
  //fetch games response model
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () =>{
    //state variable for storing Game objects
  const [games, setGames] = useState<Game[]>([]);
  //state variable for error messages
  const [error, setError] = useState("");

  //sending fetch request to the backend
  useEffect(() => {
const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
      if(err instanceof CanceledError) return;
      setError(err.message)});

      return ()=> controller.abort();
  }, []);

  return {games, error};
}

export default useGames;