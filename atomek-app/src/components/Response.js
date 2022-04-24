import React from 'react'
import './Estilos/Response_style.css'
import pp from '../Imagenes/picture_perfil.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar } from '@fortawesome/free-solid-svg-icons'
const Publicacion = () => {
    return (
        <>
            <div className="tarjetamuro ">
                <div className="cardheader">
                    <div>
                        <img src={pp} alt="img-avatar" className='perfil'></img>
                    </div>
                    <div>
                        <h4 className='grupo'>Racha: Creacion de un cuento</h4>
                        <div className='informacion'>
                            <h5 className='usuario' >Santiago</h5>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div>
                        <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="card-footer">
                    <p className="card-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='informacion'>
                        <h5 className='usuario' >24/04/2022</h5>
                    </div>
                </div>
            </div>

            <div className="tarjetamuro ">
                <div className="cardheader">
                    <div>
                        <img src={pp} alt="img-avatar" className='perfil'></img>
                    </div>
                    <div>
                        <h4 className='grupo'>Racha: Creacion de un cuento</h4>
                        <div className='informacion'>
                            <h5 className='usuario' >Santiago</h5>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div>
                        <div className='image-container'>
                            <img src={require('../Imagenes/maribb.jpg')} className="image" alt="Responsive image"></img>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <p className="card-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='informacion'>
                        <h5 className='usuario' >24/04/2022</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publicacion