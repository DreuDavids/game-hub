import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;