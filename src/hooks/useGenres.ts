import useData from "./useData";

//genre model interface
export interface Genre{
    id:number;
    name: string;

}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;