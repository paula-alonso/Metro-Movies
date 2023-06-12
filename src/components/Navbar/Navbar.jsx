import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useUser } from '../../contexts/UserContext'
import { logOut } from '../../firebase/auth-service';

export function Navbar() {

    const {user} = useUser();
    const navigate = useNavigate();
    console.log(user)

    const handleLogout = async () => {
        console.log("saliendo...")
        await logOut();
        navigate("/")
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navdiv}>
            <div className={styles.logo}><img src='src/assets/Logo/logo.png' className={styles.logo}></img></div>
            
            <ul className={styles.infoContainer}>
                <li>
                    <Link to={'/'} className={styles.link}>
                        <a>Home</a>
                    </Link>
                </li>
                {!!user && (
                    <>
                        <li>
                        <h1 className={styles.profile}>
                            <a>Hola, {user.name}</a>
                        </h1>
                        </li>
                        <li>
                            <Link to={'/profile'} className={styles.link}>
                                <a>Perfil</a>
                            </Link>
                        </li>
                        <li>
                            <button className={styles.buttonInicio} onClick={handleLogout}>Salir</button>
                        </li>
                    </>
                )

                }

                {!user &&(
                <>
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
                </>
                )}

            </ul>

            </div>

        </nav>

    )
}