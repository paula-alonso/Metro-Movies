import React from 'react'
import styles from './MovieDetailsPage.module.css'
export function MovieDetailsPage() {
  const {name, img, duracion, idiomas, info} = {name: "Harry Potter y la piedra filosofal",
  img: "https://i.blogs.es/6ad7c1/harry-potter-piedra-filosofal/1366_2000.jpeg", 
  duracion: "120 minutos", idiomas: ["español, italiano"], 
  info: "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, "
}
  return (

    <div className={styles.container}>
      <img src={img} className={styles.hero}/>

      <div className={styles.peliContainer}>
        <h1 className={styles.title}>{name}</h1>

        <div className={styles.info1Container}>
          <p>Duración: {duracion}</p>
          <p>Idiomas: español, italiano, francés</p>
        </div>

        <h3 className={styles.sinopsis}>Sinopsis</h3>
        <p className={styles.sinopsisInfo}>{info}</p>

        <h4 className={styles.actoresTitle}>Actores</h4>
        <div className={styles.actoresCard}>
          <img className={styles.actorPhoto} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC00hA-aMLUqFQ80RjBs13Fgb2faNjpDkAfrzEHIHI&s"/>
          <h1 className={styles.autorName}>Emma Watson</h1>
        </div>
        
        <div className={styles.buttoms}>
          <button className={styles.reserveButtom}>
            Reservar
          </button>

          <button className={styles.favorites}>
            <img className={styles.heart} src="https://cdn-icons-png.flaticon.com/512/2325/2325695.png"/>
            <h1 className={styles.añadir}>Añadir a favoritos</h1>
          </button>
        </div>
        
      </div>
              
    </div>
  )
}
