import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ReservarPage.module.css'

export function ReservarPage() {
  return (
   
    <div className={styles.container}>
       <div className={styles.wrapper}>

    
        <form className={styles.form}>

            
            
            <h1 className={styles.title}>Harry Potter y la piedra filosofal</h1>
            <p className={styles.subtitle}>
            ¡Completa tu reserva!
            </p>

            <img className={styles.image} src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/12/harry-potter-piedra-filosofal.jpg?tf=3840x" width={"90%"}/>

            {/* NAME FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="name">
                    <span>Nombre y apellido</span>
                </label>
                <input type="name" name="name" id="name" placeholder="Ej. Juan Perez"/>
            </div>

        

            {/* ID FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="id">
                    <span>Cédula de identidad</span>
                </label>
                <input type="id" name="id" id="id" placeholder="*********"/>
            </div>

            {/* EMAIL FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    <span>Correo electrónico</span>
                </label>
                <input type="email" name="email" id="email" placeholder="Ej. juanperez@gmail.com"/>
            </div>

            {/* TICKETS FIELD */}
            <div className={styles.inputTicket} >
                <label htmlFor="tickets">
                    <span>Cantidad de boletos</span>
                </label>
                <input type="tickets" name="id" id="tickets" placeholder="Ej. 1"/><button type="submit" className={styles.confirmar} >OK</button>
            </div>

        </form>
        </div>

        <div className={styles.wrapper2}></div>
       
            {/* BUTTONS */}
            <button type="submit" className={styles.ingresar}>
                Continuar
            </button>
    </div>

  )
}