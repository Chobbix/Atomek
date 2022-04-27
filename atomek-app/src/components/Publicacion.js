import React from 'react'
import './Estilos/Publicacion_style.css'
import './Estilos/carrousel_style.css'
// import Carrousel_publicacion from './carrousel_publicacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { LikeAdd } from '../services/LikeServices'
import Moment from 'moment';

const Publicacion = (props) => {
    Moment.locale('es');

    const handleAddLike = async (event, idPost) => {
        console.log(idPost);
        try {
            await LikeAdd({
                _post: idPost,
                _user: props?.propUserId
            });
        } 
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div class="tarjetamuro ">
            <div class="cardheader">
                <div>
                    <Link to={"/atomek/Perfil/" + props.propPost._user?._id}>
                    <img src={props.propPost._user?.image  ?? `https://avatars.dicebear.com/api/bottts/${props.propPost._user?._id}.svg`} alt="img-avatar" className='perfil'></img>
                    </Link>
                </div>
                <div>
                    <h4 className='grupo'>{props.propPost._community?.name}</h4>
                    <div className='informacion'>
                        <h5 className='usuario' >{props.propPost._user?.username} </h5>
                        <h5 className='Fecha' > {Moment(props.propPost?.date_create).format('DD/MM/yyyy')}</h5>
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
                    <p class="cardtext">{props.propPost?.body}</p>
                    <div>
                        {/* <Carrousel_publicacion/> */}
                        {(props.propPost?.image &&
                            <img src={props.propPost?.image} class="imagen" alt='...' ></img>
                        )}
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
                    <button className='btn_reaccion'
                        onClick={(e) => {handleAddLike(e, props.propPost?._id)}}> <FontAwesomeIcon icon={faStar} /> Felicitar </button>
                    <button className='btn_reaccion'> <FontAwesomeIcon icon={faPeopleCarry} /> Unise al reto </button>
                </div>
            </div>
        </div>
    )
}

export default Publicacion