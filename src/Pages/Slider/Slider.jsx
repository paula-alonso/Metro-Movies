import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Slider.module.css'

export function Slider() {
    const imagenes = [
        'https://picsum.photos/id/1020/400',
        'https://picsum.photos/id/1010/400',
        'https://picsum.photos/id/1015/400'
    
    ];
    const cantidad = imagenes?.length;
    const [imagenActual, setImagenActual] = React.
    useState(0);

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
            <button onClick={anteriorImagen}>←</button>
            <div className={styles.imagenes}>
        
            {imagenes.map((imagen, indice) => {
                return (
                    <div className={imagenActual===indice? `${styles.slide} ${styles.active}`: styles.slide}>
                        
                        {imagenActual=== indice &&(
                        <img key={indice} src={imagen}
                        alt="imagen"/>
                    )} 
                    </div>
                ); 
            })}
            </div>
        <button onClick={siguienteImagen}>→</button>
        </div>

);
}