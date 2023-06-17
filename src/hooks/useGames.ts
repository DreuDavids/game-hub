import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    key: number;
    id: number;
    name: string;
    slug: string;
}

//game model interface
export interface Game {
    key:number;
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
  }

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games",{ params:{genres: selectedGenre?.id}},[selectedGenre?.id]);

export default useGames;