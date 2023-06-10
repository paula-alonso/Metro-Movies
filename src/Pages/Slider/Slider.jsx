import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Slider.module.css'



export function Slider() {
    
    const imagenes = [
        'https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        'https://images.pexels.com/photos/40661/tiger-snow-growling-zoo-40661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    
    ];
    const [imagenActual, setImagenActual] = React.
    useState(0);

    return (
        <div className={styles.container}>
            <button>←</button>
        
            {imagenes.map((imagen, indice) => {
                return (
                    <div>{imagenActual=== index&&(
                        <img key={indice} src={imagen}
                        alt="imagen"/>
                    )} 
                    </div>
                ); 
            })}
        <button>→</button>
        </div>

);
    
}