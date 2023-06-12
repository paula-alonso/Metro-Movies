import React, { useEffect } from 'react'
import styles from './MovieDetailsPage.module.css'
import { Card } from '../../components/Card/Card'
import { useMovies } from '../../hookes/useMovies'
import { Link, useParams } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { UpdateFavorites } from '../../firebase/users-servise'

export function MovieDetailsPage() {

  const {movieId} = useParams();
  const { movie, getSingleMovie, cast, getCast, movies, getMovies, isLoading } = useMovies();
  const {user} = useUser();
  
  
  useEffect(() => {
    getMovies();
    
  }, [])

  useEffect(() => {
    getSingleMovie(movieId);
    
  }, [])

  useEffect(()=>{
    getCast(movieId)
  }, [])


  console.log(cast)

  const addFavorites = async () => {
    await UpdateFavorites(user.id, movie)
  };
  let esta = false;

 
  const {title, spoken_languages, overview, poster_path, runtime, release_date } = movie || {};
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
      {
        isLoading?(
          <p>Cargando...</p>
        ):(
          <>
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
            {movies.map((moviep)=>{
              if(moviep.id == movie.id){
                esta = true;
                }
              })}
          {esta && (
            <button className={styles.reserveButtom}>
            <Link to={`/reservar/${movieId}`}> Reservar </Link>
            </button>
          )}

          {!esta && (
            <h1 className={styles.title}> PROXIMAMENTE {movie.release_date}</h1>
          )
          }

          <button className={styles.favorites} onClick={addFavorites}>
            <img className={styles.heart} src="https://cdn-icons-png.flaticon.com/512/2325/2325695.png" />
            <h1 className={styles.añadir}>Añadir a favoritos</h1>
          </button>
        </div>
        
      </div>
      </>
        )
      }
      
              
    </div>
  )
}
