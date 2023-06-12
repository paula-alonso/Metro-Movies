import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import styles from './LoginPage.module.css'
import {singInWithGoogle, loginWithEmailAndPassword } from '../../firebase/auth-service';


export function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        email:"",
        password:""
    });

    const handleSignInWithGoogle = async () => {
        await singInWithGoogle();
        navigate("/");
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = formData;
        await loginWithEmailAndPassword(email, password) ;
        navigate("/");
    }

   

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
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
                <input type="email" name="email" id="email" placeholder="Ej. juanperez@gmail.com" onChange={handleOnChange}/>
            </div>

            {/* PASSWORD FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="password">
                    <span>Contraseña</span>
                </label>
                <input type="password" name="password" id="password" placeholder="*********" onChange={handleOnChange}/>
            </div>

            {/* BUTTOMS */}
            <button type="submit" className={styles.ingresar}>
                Iniciar sesión
            </button>

            <button type="button" className={styles.iniciarGoogle} onClick={handleSignInWithGoogle}>
                <img src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" className={styles.google}/>
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
