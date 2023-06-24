import React, { useEffect, useState } from 'react'
import styles from './ProfilePage.module.css'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { ReserveCard } from '../../components/ReserveCard/ReserveCard'
import { useUser } from '../../contexts/UserContext'
import { getUserProfile } from '../../firebase/users-servise'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
export function ProfilePage() {
  
  const {user} = useUser();
  const [refresh, setRefresh] = useState(0);
  
  const [favs, setFavs] = useState([])
  const [revs, setRevs] = useState([])
  async function getFavorites(){

  if (user) {

      const docRef = doc(db, "users", user.id);
      const docSnap = await getDoc(docRef);
      
      let array = []
      let array_rev = []
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        if(docSnap){
            const user = docSnap.data();
            const favoritos = user.favorites;
            const reservas = user.reservas;
            favoritos.map((movie)=>{
            array.push(movie)
            })
            reservas.map((reserve)=>{
            array_rev.push(reserve)
          })
          setFavs(array)
          setRevs(array_rev)
          console.log(array_rev)
        }
        
        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
  }
    }
  }
 

  useEffect(()=>{
    getFavorites();
  }, [refresh])

 
  
 
  
  
  

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

        <div className={styles.reserveContainer}>
            <h1 className={styles.title2}>Tus reservaciones</h1>
            {
              revs.map((reserve)=>{
                return <ReserveCard reserve={reserve} />
              })
            }
        </div>
    </div>
  )
}
