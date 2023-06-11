import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AdminPage.module.css'
import { Card } from '../../components/Card/Card'

export function AdminPage() {

    const {name, img, duracion, idiomas, info} = {name: "Harry Potter y la piedra filosofal",
  img: "https://i.blogs.es/6ad7c1/harry-potter-piedra-filosofal/1366_2000.jpeg", 
  duracion: "120 minutos", idiomas: ["español, italiano"], 
  info: "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, "
}
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Reservas</h1>
        <div className={styles.cardContainer}><Card/></div>
        <div className={styles.cardContainer}><Card/></div>
        <div className={styles.cardContainer}><Card/></div>
    </div>

  )
}