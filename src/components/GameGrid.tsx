import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

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

const GameGrid = () => {
  //state variable for storing Game objects
  const [games, setGames] = useState<Game[]>([]);
  //state variable for error messages
  const [error, setError] = useState("");

  //sending fetch request to the backend
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
