import React, { useEffect, useState } from 'react'
import styles from './ProfilePage.module.css'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { ReserveCard } from '../../components/ReserveCard/ReserveCard'
import { useUser } from '../../contexts/UserContext'
import { getUserProfile } from '../../firebase/users-servise'
export function ProfilePage() {

  const {favs} = useUser();
  console.log(favs)
  

  const matches = null;
  return (
    <div className= {styles.container}>
      <h1 className={styles.title1}>Tus favoritas</h1>
        <div className={styles.moviesContainer}>
            
            {
              favs.map((movie)=>{
                return <MovieCard movie={movie} matches={matches} />
              })
            }
        </div>

        {/*<div className={styles.reserveContainer}>
            <h1 className={styles.title2}>Tus reservaciones</h1>
            <ReserveCard/>
        </div>*/}
    </div>
  )
}
