import { FetchMovies, FetchGenres } from "../api/TMDb";
import { useEffect, useState } from "react";

export function useMovies() {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    
    const getMovies = async() => {
        const {data} = await FetchMovies();
        setMovies(data.results)
    } 

    const getGenres = async() => {
        const {data} = await FetchGenres();
        setGenres(data)
        console.log(data)
    }
    
    return{
        movies, genres, getMovies, getGenres
    }
     
}
