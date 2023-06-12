import React from 'react'
import styles from './ReserveCard.module.css'

export function ReserveCard({movie, matches}) {
  return (
    <div className={styles.reserveCard}>
      
      
      <img className={styles.reservePhoto} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>

      <div className={styles.infoContainer}>
        
                <div className={styles.infoContainer}>
                    <h1 className={styles.reserveTitle}>{movie.title}</h1>
                    <h4 className={styles.reserveInfo}>Boletos comprados: 15</h4>
                    <h4 className={styles.reserveInfo}>Monto pagado: 15 bs</h4>
                </div>
                
            </div>

      </div>
  )
}
