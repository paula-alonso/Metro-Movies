import React from 'react'
import styles from './ReserveCard.module.css'

export function ReserveCard({reserve}) {
  return (
    <div className={styles.reserveCard}>
      
      
      <img className={styles.reservePhoto} src={`https://image.tmdb.org/t/p/w500/${reserve.poster}`}/>

      <div className={styles.infoContainer}>
        
                <div className={styles.infoContainer}>
                    <h1 className={styles.reserveTitle}>{reserve.movie_title}</h1>
                    <h4 className={styles.reserveInfo}>Boletos comprados: {reserve.tickets}</h4>
                    <h4 className={styles.reserveInfo}>Monto pagado: {reserve.monto}</h4>
                </div>
                
            </div>

      </div>
  )
}
