import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'

export function LoginPage() {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <img src="src/assets/Logo/logo.png"/>
            <h1 className={styles.title}>Bienvenido a Metro Movies</h1>
            <p className={styles.subtitle}>
            ¡Bienvenido otra vez! introduce tus datos para iniciar sesión
            </p>

            {/* EMAIL FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    <span>Correo electrónico</span>
                </label>
                <input type="email" name="email" id="email" placeholder="Ej. juanperez@gmail.com"/>
            </div>

            {/* PASSWORD FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="password">
                    <span>Contraseña</span>
                </label>
                <input type="password" name="password" id="password" placeholder="*********"/>
            </div>

            {/* BUTTOMS */}
            <button type="submit" className={styles.ingresar}>
                Iniciar sesión
            </button>

            <button type="button" className={styles.iniciarGoogle}>
                Iniciar sesión con Google
            </button>

            

            {/*<Link to ={REGISTER_URL}>
                ¿No tienes una cuenta? {" "}
                <span>Regístrate</span>
            </Link>*/}
        </form>
    </div>
  )
}
