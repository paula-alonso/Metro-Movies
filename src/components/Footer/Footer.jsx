import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
   return (
        <footer className={styles.footer}>
            
               
                    <div className={styles.column}>
                        <h4>Sobre nosotros</h4>
                        <p>metromovies@gmail.com</p>
                        
                    </div>
                    <div className={styles.column}>
                        <h4>Dirección</h4>
                        <p>Av. Municipal con calle Carabobo, Centro Seguros La Previsora, Planta Baja.</p>
                        
                    </div>
                
        </footer>

   );
}