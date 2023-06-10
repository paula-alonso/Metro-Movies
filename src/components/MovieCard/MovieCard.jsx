import React from 'react'
import styles from './MovieCard.module.css'

export function MovieCard({movie, matches}) {
  return (
    <div className={styles.movieCard}>
    
                <img className={styles.moviePhoto} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>

                <div className={styles.infoContainer}>
                    <h1 className={styles.movieTitle}>{
                        movie.title
                    }</h1>
                    <h4 className={styles.movieInfo}>Idiomas: {movie.original_language}</h4>
                    <h4 className={styles.movieInfo}>Géneros: {matches}</h4>
                </div>
            </div>
  )
}
