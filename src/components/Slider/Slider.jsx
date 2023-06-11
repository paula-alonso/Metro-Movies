import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from './Slider.module.css'


export function Slider({imagenes}) {
    
    const cantidad = imagenes?.length;
    const [imagenActual, setImagenActual] = React.
    useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            siguienteImagen();},3000);
        return () => clearInterval(interval);
    });
    

    const siguienteImagen = () => {
        setImagenActual(imagenActual=== cantidad - 1? 
        0 : imagenActual + 1 );
    }

    const anteriorImagen = () => {
        setImagenActual(imagenActual=== 0? cantidad - 1 
         : imagenActual - 1 );
    }

    return (
        <div className={styles.container}>

            {imagenes.map((imagen, indice) => {
                return (
                    <div className={imagenActual===indice? `${styles.slide} ${styles.active}`: styles.slide}>
                    <button className={styles.sliderButtonL} onClick={anteriorImagen}>←</button>
                    <button className={styles.sliderButtonR} onClick={siguienteImagen}>→</button>   
                        {imagenActual=== indice &&(
                        <img className={styles.sliderImg} key={indice} src={imagen}
                        alt="imagen"/>
                    )} 
                    </div>
                ); 
            })}
           
        </div>

);
}