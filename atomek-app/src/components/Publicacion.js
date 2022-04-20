import React from 'react'
import './Estilos/Publicacion_style.css'
import pp from '../Imagenes/picture_perfil.jpg'
import Carrousel_publicacion from './carrousel_publicacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Publicacion = (props) => {
    return (
        <div class="tarjetamuro ">
            <div class="cardheader">
                <div>
                    <Link to={"/atomek/Perfil/" + props.propPost._user?._id}>
                    <img src={pp} alt="img-avatar" className='perfil'></img>
                    </Link>
                </div>
                <div>
                    <h4 className='grupo'>{props.propPost._community?.name}</h4>
                    <div className='informacion'>
                        <h5 className='usuario' >{props.propPost._user?.username} </h5>
                        <h5 className='Fecha' > {props.propPost?.date_create}</h5>
                    </div>
                </div>


            </div>
            <div class="card-body">
                <div className='card-title'>
                    <div>
                    <p class="cardtext">{props.propPost?.body}</p>
                    <div>
                        <Carrousel_publicacion/>
                    </div>      
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