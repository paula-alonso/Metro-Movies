import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../LoginPage/LoginPage.module.css'
import { registerEmail, singInWithGoogle } from '../../firebase/auth-service';

export function SignupPage() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSingWithGoogle = async () => {
        await singInWithGoogle()
        navigate("/");
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const submit=async (event) => {
        event.preventDefault();
        const {email, password, ...extraData} = formData
        await registerEmail(email, password, extraData);
        navigate("/");
    }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={submit}>
            <img src="public/Logo/logo.png"/>
            <h1 className={styles.title}>Bienvenido a Metro Movies</h1>
            <p className={styles.subtitle}>
            ¡Bienvenido! introduce tus datos para registrarte
            </p>

            {/* NAME FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="name">
                    <span>Nombre</span>
                </label>
                <input type="name" name="name" id="name" placeholder="Ej. Juan Pérez" onChange={handleOnChange}/>
            </div>

        

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

            {/* BUTTONS */}
            <button type="submit" className={styles.ingresar}>
                Registrarse
            </button>

            <button  type="button" className={styles.iniciarGoogle} onClick={handleSingWithGoogle}>
                <img className={styles.image} src="src/assets/Logo/google.png" height={"35%"}/>
                Registrarse con Google
            </button>

            

            {<Link to ={"/login"}>
                ¿Ya una cuenta? {" "}
                <span>Inicia sesión</span>
            </Link>}
        </form>
    </div>
  )
}