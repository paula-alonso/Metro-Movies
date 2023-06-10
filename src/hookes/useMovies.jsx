import { FetchMovies } from "../api/TMDb";
import { useEffect, useState } from "react";

export function useMovies() {

    const [movies, setMovies] = useState([]);
    
    const getMovies = async() => {
        const {data} = await FetchMovies();
        setMovies(data.results)
    } 

    return{
        movies, getMovies
    }
     
}
