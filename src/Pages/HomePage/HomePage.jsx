import React from 'react'
import { useMovies } from '../../hookes/useMovies'
import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import styles from './HomePage.module.css'
export function HomePage() {
    
    const { movies, genres, getMovies, getGenres } = useMovies();

    useEffect(() => {
        getMovies();
        
    }, [])

    useEffect(()=>{
        getGenres();
    }, [])

 
    const generos = genres.genres
 
  return (
    <div className={styles.nowplaying}>

        {
            movies.map((movie)=>{
                let matches = [];
                let ids = movie.genre_ids
                ids.map((id)=>{
                    generos.map((genero) =>{
                        if(genero.id == id){
                            matches.push(genero.name)
                        }
                    })
                })            

                matches = matches.toString();
                return(
                    <MovieCard movie={movie} matches={matches}/>
                )
            })
        }
    </div>
  )
}
