import React, {useEffect} from 'react'
import styles from './ReservarPage.module.css'
import { useMovies } from '../../hookes/useMovies'
import { Link, useParams } from 'react-router-dom'

export function ReservarPage() {
    let selectCount=0;

    const asientos = [];

    const handleClick = (event) => {
        

        if (event.currentTarget.classList.contains(`${styles.asiento}`) && !event.currentTarget.classList.contains(`${styles.occupied}`) && !event.currentTarget.classList.contains(`${styles.selected}`)) {
          if (selectCount < 5) {
            event.currentTarget.classList.toggle(`${styles.selected}`);
          selectCount += 1;
          console.log(selectCount)
          } else {window.alert("Ha alcanzado el máximo de asientos");}
        }

        else if (event.currentTarget.classList.contains(`${styles.asiento}`)  && !event.currentTarget.classList.contains(`${styles.occupied}`) && event.currentTarget.classList.contains(`${styles.selected}`)) {
            event.currentTarget.classList.remove(`${styles.selected}`);
            selectCount -= 1;
            console.log(selectCount)
          }
      };

      for (let i = 0; i < 20; i++) {
        asientos.push(<div className={styles.asiento} id={i} onClick={handleClick} ></div>);
    }
    
      const confirmClick = (a,event) => {
       event.a.classList.remove(`${styles.hide}`);

      };

      const continueClick = event => {
        if (event.currentTarget.classList.contains(`${styles.asiento}`) && !event.currentTarget.classList.contains(`${styles.occupied}`)) {
          event.currentTarget.classList.toggle(`${styles.selected}`);
        }

        if (event.currentTarget.classList.contains(`${styles.asiento}`) && !event.currentTarget.classList.contains(`${styles.selected}`)) {
            event.currentTarget.classList.remove(`${styles.selected}`);
          }
      };

    const {movieId} = useParams();
    const { movie, getSingleMovie, cast, getCast } = useMovies();
    

    useEffect(() => {
        getSingleMovie(movieId);
        
      }, [])
    
      useEffect(()=>{
        getCast(movieId)
      }, [])
    
      console.log(cast)
    
      console.log(movie);
      const {title, spoken_languages, overview, poster_path, runtime } = movie || {};
      let languages = [];

  return (
   
    <div className={styles.container}>
       <div className={styles.wrapper}>

    
        <form className={styles.form}>

            
            
            <h1 className={styles.title}> {title} </h1>
            <p className={styles.subtitle}>
            ¡Completa tu reserva!
            </p>

            <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${poster_path}`} width={"90%"}/>

            {/* NAME FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="name">
                    <span>Nombre y apellido</span>
                </label>
                <input type="name" name="name" id="name" placeholder="Ej. Juan Perez"/>
            </div>

        

            {/* ID FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="id">
                    <span>Cédula de identidad</span>
                </label>
                <input type="id" name="id" id="id" placeholder="*********"/>
            </div>

            {/* EMAIL FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    <span>Correo electrónico</span>
                </label>
                <input type="email" name="email" id="email" placeholder="Ej. juanperez@gmail.com"/>
            </div>

            {/* TICKETS FIELD */}
            <div className={styles.inputContainer} >
                <label htmlFor="tickets">
                    <span>Cantidad de boletos</span>
                </label>
                <table>
                    <tr>
                    <th><input type="tickets" name="tickets" id="tickets" placeholder="Ej. 1"/></th>
                    <th><button id="ok-button" type="submit" className={styles.confirmar} >OK</button></th>
                    </tr>
                </table>
            </div>

        </form>
        </div>
        <p className={styles.subtitle2}>Asientos disponibles</p>
        <div id="asientos-container" className={styles.wrapper2}>
            <table>
                    <tr>
                    <th><p className={styles.subtitle2}>1</p></th>
                    <th><p className={styles.subtitle2}>2</p></th>
                    <th><p className={styles.subtitle2}>3</p></th>
                    <th><p className={styles.subtitle2}>4</p></th>
                    </tr>
            </table>
            
            
            <div className={styles.gridAsientos} >


                {asientos}    
             
            
            

            </div>

        </div>
       
            {/* BUTTONS */}
            <button type="submit" className={styles.ingresar}>
                Continuar
            </button>
            {/* <script src="script.js"></script> */}
    </div>

  )
}