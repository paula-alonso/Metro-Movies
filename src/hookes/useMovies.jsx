import { FetchMovies, FetchGenres, FetchMovie, FetchCast, FetchUpcomingMovie } from "../api/TMDb";
import { useEffect, useState } from "react";

export function useMovies() {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movie, setMovie] = useState([null]);
    const [cast, setCast] = useState([]);
    const [upmovies, setUpMovie] = useState([]);

    
    const getMovies = async() => {
        const {data} = await FetchMovies();
        setMovies(data.results)
    } 

    const getUpcomingMovies = async() => {
        const {data} = await FetchUpcomingMovie();
        setUpMovie(data.results);
    }

    const getGenres = async() => {
        const {data} = await FetchGenres();
        setGenres(data)
    }

    const getSingleMovie = async (movieId)=>{
        const {data} = await FetchMovie(movieId)
        setMovie(data);
    }

    const getCast = async (movieId) =>{
        const {data} = await FetchCast(movieId)
        setCast(data.cast)
    }
    
    return{
        movies, genres, movie, cast, getMovies, getGenres, getSingleMovie, getCast, upmovies, getUpcomingMovies
    }
     
}
