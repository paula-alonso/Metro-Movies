import React from 'react'
import styles from './Card.module.css'


export function Card({person}) {
  let imagen = 'https://affinitaslegal.com/wp-content/uploads/2020/08/imagen-perfil-sin-foto.jpg'
  if (person.profile_path != null){
    imagen = `https://image.tmdb.org/t/p/w500/${person.profile_path}`
  }
  return (
    <div className={styles.actoresCard}>
        <img className={styles.actorPhoto} src={imagen}/>
        <h1 className={styles.autorName}>{person.name}</h1>
    </div>
  )
}

