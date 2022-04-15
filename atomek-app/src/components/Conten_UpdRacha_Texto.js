import React, {Component} from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench } from '@fortawesome/free-solid-svg-icons'
import './Estilos/CrearRacha_style.css'
import { Link } from "react-router-dom";


const UpdateRacha = () => {
  return (
    
<main> 
  
    <div className="py-5 text-center">
    <h2>¡MUESTRANOS TU AVANCE!</h2>
    </div>
    <div className='contenido'> 
    <div className="row g-5">
      <div className="col-md-7 col-lg-8">
        <div className="contenido_text">  
        <h4 className="mb-3">Racha de Cuenta Cuentos - 5TO DIA</h4>
          <div className="row g-3">
            <div className="col-12">
              <label for="text" className="form-label">Evidencia</label>
             <textarea type="text" className="form-control" id="titulo" placeholder="Era hace una vez..."></textarea>
            </div>
            <div className="col-md-5">
            <label for="country" className="form-label">Notas</label>
            <input type="text" className="form-control" id="titulo" placeholder="Hoy tuve un avance porque..."></input>
            </div>
          </div>
            </div>
             </div>
            </div>
            </div>
          <br></br>
          <Link to="/atomek/Muro">
          <button className=" boton_final w-100 btn-lg" type="submit">ACTUALIZAR RACHA</button>
          </Link>
          </main>
   
   )
}

export default UpdateRacha