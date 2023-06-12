import React, {useEffect} from 'react'
import styles from './ReservarPage.module.css'
import { useMovies } from '../../hookes/useMovies'
import { Link, UNSAFE_DataRouterStateContext, useParams, useNavigate} from 'react-router-dom'
import { useState } from 'react'

export function ReservarPage() {
    let selectCount=0;
    let selected=[];
    const [precio, setPrecio] = useState(0);
    const [total, setTotal] = useState(0);
    
    const navigate = useNavigate();

    const asientos = [];
    const [tickets, setTickets] = useState(0);
    const [style, setStyle] = useState(styles.wrapper);
    const [style2, setStyle2] = useState(styles.hidden);
    const [style3, setStyle3] = useState(styles.hidden);
    
    for (let i = 0; i < 20; i++) {
        asientos.push(<div className={styles.asiento} id={i+1} onClick={(event)=>handleClick(event,tickets)} > {i+1} </div>);
    }

    function getPrecioRandom(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const handleClick = (event, tickets) => {
        

            if (event.currentTarget.classList.contains(styles.asiento) && !event.currentTarget.classList.contains(styles.occupied) && !event.currentTarget.classList.contains(styles.selected)) {
            
                if (selectCount < tickets) {
                    event.currentTarget.classList.toggle(styles.selected);
                    selectCount += 1;
                    selected.push(event.currentTarget.id);
                    
        
                } 
                else {window.alert("Ha alcanzado el máximo de asientos");}
            }

            else if (event.currentTarget.classList.contains(styles.asiento)  && !event.currentTarget.classList.contains(styles.occupied) && event.currentTarget.classList.contains(styles.selected)) {
                event.currentTarget.classList.remove(styles.selected);
                selectCount -= 1;
                let id_index = selected.indexOf(event.currentTarget.id);
                selected.splice(id_index);
                console.log(selectCount, selected);
            }
        
      };

      const [formData, setFormData] = useState ({
        name:"",
        ci:"",
        email:"",
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onChange = (event) => {
        setTickets(event.target.value);
      }

      const onSubmit = () => {
        console.log(tickets);
        if (formData.name != '' && formData.ci !='' && formData.email!='') {
            if (tickets<=5) {
            let random = getPrecioRandom(1000,5000);
            setStyle(styles.hidden);
            setStyle2(styles.container);
            setPrecio(random);
            setTotal(tickets*random);
            
            } else {window.alert("Selecciona menos de 5 tickets")}
        }else {window.alert("Introduce todos tus datos");}
        console.log(precio,total, asientos);
        } 


      const displayData = (event) => {
        setStyle2(styles.hidden);
        setStyle3(styles.container);
        console.log(selected);
      }

    
    

    const {movieId} = useParams();
    const { movie, getSingleMovie} = useMovies();
    

    useEffect(() => {
        getSingleMovie(movieId);
        
      }, [])
    
    
      const {title, poster_path } = movie || {};
  
      
  return (
   
    <div className={styles.container}>
       <div className={style}>

    
        <form id="form-reserva" className={styles.form}>

            
            
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
                <input type="name" name="name" id="name" placeholder="Ej. Juan Perez"onChange={handleOnChange}/>
            </div>

        

            {/* ID FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="id">
                    <span>Cédula de identidad</span>
                </label>
                <input type="ci" name="ci" id="ci" placeholder="Ej. 30308628"onChange={handleOnChange}/>
            </div>

            {/* EMAIL FIELD */}
            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    <span>Correo electrónico</span>
                </label>
                <input type="email" name="email" id="email" placeholder="Ej. juanperez@gmail.com" onChange={handleOnChange}/>
            </div>

            {/* TICKETS FIELD */}
            <div className={styles.inputContainer} >
                <label htmlFor="tickets">
                    <span>Cantidad de boletos</span>
                </label>
                <table>
                    <tr>
                    <th><input type="numTickets" name="numTickets" id="numTickets" placeholder="Ej. 1" onChange={onChange}/></th>
                    <th><button type="button" id="ok-button" className={styles.confirmar} onClick={onSubmit}>OK</button></th>
                    </tr>
                </table>
            </div>

        </form>
        </div>

        <div className={style2}>
            <br></br>
            <br></br>
       
            <p className={styles.title}>Asientos disponibles</p>
                <br></br>
                <br></br>
            <div id="asientos-container" className={styles.wrapper2}>

            
            <div className={styles.gridAsientos} >


                {asientos} 
                   
            

            </div>
                {/* BUTTONS */}
                <button type="button" className={styles.ingresar} onClick={displayData}>
                    Continuar
                </button>
                {/* <script src="script.js"></script> */}

            </div>
        </div>

            <div className={style3}>
            <br></br>
            <br></br>
            <br></br>
                <div className={styles.wrapper2}>
                    <h1 className={styles.title}> Detalles de la compra </h1>
                    <br></br>
                    <br></br>
                    <p className={styles.subtitle}>Nombre y apellido:{formData.name}</p>
                    <p className={styles.subtitle}>Cedula de identidad:{formData.ci}</p>
                    
                    <br></br>
                    
                    <p className={styles.subtitle}>Tickets:{tickets}</p>
                    <p className={styles.subtitle}>Precio por ticket:{precio}</p>
                    <p className={styles.subtitle}>Total:{total}</p>
                </div>
                <button className={styles.ingresar} onClick={()=>(navigate("/"))}>
                    Volver
                </button>
            </div>
    </div>

  )
}