import React, { useEffect } from 'react'
import styles from './MovieDetailsPage.module.css'
import { Card } from '../../components/Card/Card'
import { useMovies } from '../../hookes/useMovies'
import { Link, useParams } from 'react-router-dom'

export function MovieDetailsPage() {

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
  try{
   
    spoken_languages.map((lan) => {
      languages.push(lan.name)
    })

    languages = languages.toString();
  }catch(error){
    
  }
  
  return (

    <div className={styles.container}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className={styles.hero}/>

      <div className={styles.peliContainer}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.info1Container}>
          <p>Duración: {runtime} mins</p>
          <p>Idiomas: {languages}</p>
        </div>

        <h3 className={styles.sinopsis}>Sinopsis</h3>
        <p className={styles.sinopsisInfo}>{overview}</p>

        <h4 className={styles.actoresTitle}>Actores</h4>
        <div className={styles.actorsContainer}>
          {cast.map((person)=>{
              if(person.known_for_department == 'Acting'){
                return <Card person={person}/>
              }
            })}
        </div>
          
        <div className={styles.buttoms}>
          <button className={styles.reserveButtom}>
          <Link to={`/reservar/${movieId}`}> Reservar </Link>
          </button>

          <button className={styles.favorites}>
            <img className={styles.heart} src="https://cdn-icons-png.flaticon.com/512/2325/2325695.png"/>
            <h1 className={styles.añadir}>Añadir a favoritos</h1>
          </button>
        </div>
        
      </div>
              
    </div>
  )
}
