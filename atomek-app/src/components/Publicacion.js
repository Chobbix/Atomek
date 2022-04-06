import React from 'react'
import './Estilos/Publicacion_style.css'
import pp from '../Imagenes/picture_perfil.jpg'
import Carrousel_publicacion from './carrousel_publicacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar } from '@fortawesome/free-solid-svg-icons'
const Publicacion = () => {
    return (
        <div class="tarjetamuro ">
            <div class="cardheader">
                <div>
                    <img src={pp} alt="img-avatar" className='perfil'></img>
                </div>
                <div>
                    <h4 className='grupo'>Los artistas desnutridos</h4>
                    <div className='informacion'>
                        <h5 className='usuario' >Santi</h5>
                        <h5 className='Fecha' >2 days ago</h5>
                    </div>
                </div>


            </div>
            <div class="card-body">
                <div className='card-title'>
                    <p class="cardtext">With supporting text below as a natural lead-in to additional content.</p>
                   
                    <div>
                        <Carrousel_publicacion/>
                    </div>                  
                </div>
            </div>
            <div className='informacion'> 
            <FontAwesomeIcon icon={faStar}/>
                <h6>150</h6>
             
                
            </div>
            <div class="cardfooter ">
                <div className='botones'>
                    <button className='btn_reaccion'> <FontAwesomeIcon icon={faStar} /> Felicitar </button>
                    <button className='btn_reaccion'> <FontAwesomeIcon icon={faPeopleCarry} /> Unise al reto </button>
                </div>
            </div>
        </div>
    )
}

export default Publicacion