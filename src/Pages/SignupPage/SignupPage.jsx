import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SignupPage.module.css'

export function SignupPage() {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <img src="src/assets/Logo/logo.png"/>
            <h1 className={styles.title}>Bienvenido a Metro Movies</h1>
            <p className={styles.subtitle}>
            ¡Bienvenido! introduce tus datos para registrarte
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
            <div className={styles.inputContainer}>
                <label htmlFor="confirm_password">
                    <span>Confirmar contraseña</span>
                </label>
                <input type="confirm_password" name="password" id="confirm_password" placeholder="*********"/>
            </div>

            {/* BUTTONS */}
            <button type="submit" className={styles.ingresar}>
                Registrarse
            </button>

            <button  type="button" className={styles.iniciarGoogle}>
                <img className={styles.image} src="src/assets/Logo/google.png" height={"35%"}/>
                Registrarse con Google
            </button>

            

            {/*<Link to ={REGISTER_URL}>
                ¿Ya una cuenta? {" "}
                <span>Inicia sesión</span>
            </Link>*/}
        </form>
    </div>
  )
}