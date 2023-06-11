import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
   return (
        <footer className={styles.footer}>
            
               
                    <div className={styles.column}>
                        <h4>Sobre nosotros</h4>
                        <ul>
                            <li className={styles.listFooter}><p>aaaaaaaaaaaaaaaaaaaaaaa</p></li>
                            
                        </ul>
                        
                    </div>
                    <div className={styles.column}>
                        <h4>No sé acá</h4>
                        <ul>
                            <li className={styles.listFooter}><p>aaaaaaaaaaaaaaaaa</p></li>
                            
                        </ul>
                        
                    </div>
                    <div className={styles.column}>
                        <h4>Contacto</h4>
                        <ul>
                            <li className={styles.listFooter}><p>aaaaaaaaaaaaaaaaaa</p></li>
                            
                        </ul>
                        
                    </div>
                
        </footer>

   );
}