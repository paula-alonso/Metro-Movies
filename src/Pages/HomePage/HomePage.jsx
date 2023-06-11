import React from 'react'
import { useMovies } from '../../hookes/useMovies'
import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import {Slider} from '../../components/Slider/Slider'
import styles from './HomePage.module.css'

export function HomePage() {
    
    const { movies, genres, getMovies, getGenres } = useMovies();

    useEffect(() => {
        getMovies();
        
    }, [])

    useEffect(()=>{
        getGenres();
    }, [])

    console.log(genres)
    const generos = genres.genres

    const imagenes = [
        'https://www.unimet.edu.ve/wp-content/uploads/2020/04/PHOTO-2020-04-16-15-10-57.jpg',
        'https://www.unimet.edu.ve/wp-content/uploads/2019/11/bannerdade-1200x630.jpg',
        'https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-52.jpg'
    
    ];
 
  return (
    <div className={styles.container}>
        
    <Slider imagenes={imagenes}/>

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
    </div>
  )
}
