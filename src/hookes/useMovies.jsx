import { FetchMovies, FetchGenres, FetchMovie, FetchCast, FetchUpcomingMovie, FetchSearch } from "../api/TMDb";
import { useEffect, useState } from "react";

export function useMovies() {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movie, setMovie] = useState([null]);
    const [cast, setCast] = useState([]);
    const [upmovies, setUpMovie] = useState([]);
    const [isLoading, setLoading]=useState(false); 
    const [search, setSearch] = useState([]);

    
    const getMovies = async() => {
        setLoading(true)
        const {data} = await FetchMovies();
        setMovies(data.results)
        setLoading(false)
    } 

    const getUpcomingMovies = async() => {
        const {data} = await FetchUpcomingMovie();
        setUpMovie(data.results);
    }

    const getGenres = async() => {
        const {data} = await FetchGenres();
        setGenres(data.genres)
    }

    const getSingleMovie = async (movieId)=>{
        const {data} = await FetchMovie(movieId)
        setMovie(data);
    }

    const getCast = async (movieId) =>{
        const {data} = await FetchCast(movieId)
        setCast(data.cast)
    }

    const getSearch = async (valor_input) =>{
        const {data} = await FetchSearch(valor_input);
        setSearch(data.results);
    }


    
    return{
        movies, genres, movie, cast, getMovies, getGenres, getSingleMovie, getCast, upmovies, getUpcomingMovies, isLoading, getSearch, search
    }
     
}
