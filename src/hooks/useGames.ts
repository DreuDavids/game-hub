import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

//game model interface
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
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
  //loading skeleton
  const [isLoading, setLoading] = useState(false);

  //sending fetch request to the backend
  useEffect(() => {
const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {setGames(res.data.results); setLoading(false);})
      .catch((err) => {
      if(err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);});

      return ()=> controller.abort();
  }, []);

  return {games, error, isLoading };
}

export default useGames;