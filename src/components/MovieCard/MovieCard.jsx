import React from 'react'
import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom'
export function MovieCard({movie, matches}) {
  let sihay = false
  if(matches != null){
    sihay = true
  }
  return (
    <div className={styles.movieCard}>
    
                <img className={styles.moviePhoto} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>

                <div className={styles.infoContainer}>
                    <h1 className={styles.movieTitle}>
                      <Link className={styles.linkPage} to={`details/${movie.id}`} >
                      {
                        movie.title}
                      </Link>
                      </h1>
                    <h4 className={styles.movieInfo}>Idiomas: {movie.original_language}</h4>
                    {sihay && (
                        <h4 className={styles.movieInfo}>Géneros: {matches}</h4>
                        )
                    } 
                </div>
            </div>
  )
}
