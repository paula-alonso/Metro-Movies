import React from 'react'
import styles from './Card.module.css'
export function Card() {
    
  return (
    <div className={styles.actoresCard}>
        <img className={styles.actorPhoto} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC00hA-aMLUqFQ80RjBs13Fgb2faNjpDkAfrzEHIHI&s"/>
        <h1 className={styles.autorName}>Emma Watson</h1>
    </div>
  )
}

