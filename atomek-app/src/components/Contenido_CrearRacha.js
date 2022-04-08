import React from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench } from '@fortawesome/free-solid-svg-icons'
import './Estilos/CrearRacha_style.css'
import { Link } from "react-router-dom";


const ContRacha = () => {
  return (
    
<main> 
  
    <div className="py-5 text-center">
      <h2>Creación de Racha</h2>
    </div>
    <div className='contenido'> 
    <div className="row g-5">
      <div className="col-md-7 col-lg-8">
        <div className="contenido_text">  
        <h4 className="mb-3">Datos de la racha</h4>
          <div className="row g-3">
            <div className="col-12">
              <label for="text" className="form-label">Titulo de Racha</label>
              <input type="text" className="form-control" id="titulo" placeholder="Racha de ..."></input>
            </div>

            <div className="col-md-5">
              <label for="country" className="form-label">Racha</label>
              <select className="form-select" id="country" required>
                <option value="">Mio</option>
                <option>Grupo de Artistas</option>
                <option>Grupo de Programadores</option>
              </select>
            </div>
            <div className="col-md-5">
                <label for="country" className="form-label">Etiquetas</label>
                <select className="form-select" id="country" required>
                  <option value="">Elige...</option>
                  <option>Chulisimo</option>
                  <option>Papercraft</option>
                  <option>Animación</option>
                </select>
              </div>
              <div className="col-md-5">
                <label for="country" className="form-label">Tipo de acha</label>
                <select className="form-select" id="country" required>
                  <option value="">Elige...</option>
                  <option>Foto</option>
                  <option>Texto</option>
                </select>
              </div>
          </div>
            </div>
             </div>
            </div>
            </div>
          <br></br>
          <Link to="/atomek/URacha">
          <button className=" boton_final w-100 btn btn-outline-success btn-lg" type="submit">CREAR RACHA</button>
          </Link>
          </main>
   
   )
}

export default ContRacha