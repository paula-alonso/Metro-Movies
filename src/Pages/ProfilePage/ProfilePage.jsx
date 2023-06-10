import React from 'react'
import styles from './ProfilePage.module.css'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { ReserveCard } from '../../components/ReserveCard/ReserveCard'
export function ProfilePage() {
  return (
    <div className= {styles.container}>
        
        <div className={styles.moviesContainer}>
            <h1 className={styles.title1}>Tus favoritas</h1>
            <MovieCard/>
        </div>

        <div className={styles.reserveContainer}>
            <h1 className={styles.title2}>Tus reservaciones</h1>
            <ReserveCard/>
        </div>
    </div>
  )
}
