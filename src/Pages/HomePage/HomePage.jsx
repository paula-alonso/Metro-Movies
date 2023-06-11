import React from 'react'
import { useMovies } from '../../hookes/useMovies'
import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import styles from './HomePage.module.css'
export function HomePage() {
    
    const { movies, genres, getMovies, getGenres, upmovies, getUpcomingMovies } = useMovies();

    useEffect(() => {
        getMovies();
        
    }, [])

    useEffect(()=>{
        getGenres();
    }, [])

    useEffect(()=>{
        getUpcomingMovies();
    },[])

    console.log(upmovies)

    let generos = ""
    try{
        generos = genres.genres
    }catch(error){
    }
    
 
  return (
    <div className={styles.container}>
        <h1 className={styles.cartelera}>
                En cartelera
            </h1>
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

        <div className={styles.background}>
            <h1 className={styles.cartelera}>Próximamente</h1>
            <div className={styles.nowplaying}>
            {
                upmovies.map((movie)=>{
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
            
        </div>
    </div>
  )
}
