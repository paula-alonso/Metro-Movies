import React, {useState} from 'react'
import { useMovies } from '../../hookes/useMovies'
import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import {Slider} from '../../components/Slider/Slider'
import styles from './HomePage.module.css'


export function HomePage() {
    
    const { movies, genres, getMovies, getGenres, upmovies, getUpcomingMovies, isLoading , search, getSearch} = useMovies();
    const [style, setStyle] = useState(styles.container);
    const [style2, setStyle2] = useState(styles.nowplaying);
    const [valueInput, setValueInput] = useState("");

    
    useEffect(()=>{
        getSearch(valueInput);
        console.log(search)
    },[])
    useEffect(() => {
        getMovies();
        
    }, [])
    
    useEffect(()=>{
        getGenres();
    }, [])
    
    useEffect(()=>{
        getUpcomingMovies();
    },[])
    
    const onChange = (event) => {
        if (!event.target.value == '') {
        setStyle(styles.hidden);
        setStyle2(styles.nowplaying)
        setValueInput(event.target.value);
        getSearch(valueInput);
        console.log(event.target.value)
        
    } else {setStyle(styles.container);setStyle2(styles.hidden)}
    }
    

    let generos = ""
       
    

    const imagenes = [
        'https://www.unimet.edu.ve/wp-content/uploads/2020/04/PHOTO-2020-04-16-15-10-57.jpg',
        'https://www.unimet.edu.ve/wp-content/uploads/2019/11/bannerdade-1200x630.jpg',
        'https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-52.jpg',
        'https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg',
        'https://www.unimet.edu.ve/unimetsite/wp-content/uploads/2014/05/IMG_0389.jpg'

    
    ];
 
  return (
    <div className={styles.container}>
        <Slider imagenes={imagenes}/>
        <div className={styles.container}>
           
            <div class={styles.searchContainer}>
                <form>
                    <div><input id="barra" type="text" placeholder="Search.." name="search" onChange={onChange}/></div>
                    <div className={style2}>
                    {
                    isLoading?(
                        <p>Loading...</p>
                    ):(
                        
                        search.map((movie)=>{
                            let matches = [];
                            let ids = movie.genre_ids
                            ids.map((id)=>{
                                genres.map((genero) =>{
                                    if(genero.id == id){
                                        matches.push(genero.name)
                                    }
                                })
                            })            
        
                            matches = matches.toString();
                            return(
                                <MovieCard movie={movie} matches={matches}/>
                            )
                        })
                    ) }

                    </div>
                    
                   
                </form>
            </div>

        </div>
        
        <div className={style}>
        <h1 className={styles.cartelera}>
                En cartelera
            </h1>
            <div className={styles.nowplaying}>
                {
                    isLoading?(
                        <p>Loading...</p>
                    ):(
                        
                        movies.map((movie)=>{
                            let matches = [];
                            let ids = movie.genre_ids
                            ids.map((id)=>{
                                genres.map((genero) =>{
                                    if(genero.id == id){
                                        matches.push(genero.name)
                                    }
                                })
                            })            
        
                            matches = matches.toString();
                            return(
                                <MovieCard movie={movie} matches={matches}/>
                            )
                        })
                    )

                
            }
            
            </div>
        </div>
        <div className={style}>
            <div className={styles.background}>
                <h1 className={styles.cartelera}>Próximamente</h1>
                <div className={styles.nowplaying}>
                {
                    isLoading?(
                        <p>Loading...</p>
                    ) : (
                        upmovies.map((movie)=>{
                            let matches = [];
                            let ids = movie.genre_ids
                            ids.map((id)=>{
                                genres.map((genero) =>{
                                    if(genero.id == id){
                                        matches.push(genero.name)
                                    }
                                })
                            })            
        
                            matches = matches.toString();
                            return(
                                <MovieCard movie={movie} matches={matches}/>
                            )
                        })
                    )               
                } 
                </div>
                
            </div>
        </div>
    </div>
  )
}
