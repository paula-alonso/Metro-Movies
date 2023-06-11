import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.navdiv}>
            <div className={styles.logo}><img src='src/assets/Logo/logo.png' className={styles.logo}></img></div>
            
                <ul>
                <li>
                    <Link to={'/'} className={styles.link}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link to={'/reservar'} className={styles.link}>
                        <a>Reservar</a>
                    </Link>
                </li>
                <li>
                    <Link to={'/login'} className={styles.link}>
                        <button className={styles.buttonInicio}>Iniciar</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/signup'} className={styles.link}>
                        <button className={styles.buttonInicio}>Registrarse</button>
                    </Link>
                </li>

            </ul>

            </div>

        </div>

    )
}