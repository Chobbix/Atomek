import React from 'react'
import './Estilos/Publicacion_style.css'
import pp from '../Imagenes/picture_perfil.jpg'
import Carrousel_publicacion from './carrousel_publicacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
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
                <div id="Menupubli" className='MPubli'> 
                <div className="dropdown text-end">
                <a href="" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faEllipsisVertical}/>
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    {/*  <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li> */}
                    <li className="dropdown-item">Editar</li>
                    <li className="dropdown-item">Elimiar</li>
                </ul>
                </div>
                </div>
            </div>
            <div class="card-body">
                <div className='card-title'>
                    <div>
                    <p class="cardtext">With supporting text below as a natural lead-in to additional content.</p>
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