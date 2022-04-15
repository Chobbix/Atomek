import React from 'react'
import icono from '../Imagenes/Icono_ATOMEAK.png'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import pp from '../Imagenes/picture_perfil.jpg'
import ppug from '../Imagenes/LicPGB.jpg'
import deporte from '../Imagenes/deporte.jpg'
import craft from '../Imagenes/craft.jpg'
import dormir from '../Imagenes/dormir.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench } from '@fortawesome/free-solid-svg-icons'
import './Estilos/ContPerfil_style.css'
import './Estilos/Scroll_style.css'

const ContPerfil = () => {
  return (
    <body id='CuerpoPerfil'>
      <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
          <div className="perfil-usuario-portada">
            <div className="perfil-usuario-avatar">
              <img src={ppug} alt="img-avatar" width={160} height={165}></img>
              <button type="button" className="boton-avatar">
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>
            <button type="button" className="boton-portada">
              <i className="far fa-image"></i> Cambiar fondo
            </button>
          </div>
        </div>
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-bio" id='info'>
            <h3 className="titulo">Lic PugBerto</h3>
            <h8 className="Seguidores">Seguidores:</h8><tr></tr><p className="seguidorescant">30</p>
            <button className='Seguirbtn btn' id='btnseguir'>Seguir Cuenta</button>
          </div>
          <div className="perfil-usuario-footer">
            <ul className="lista-datos">
              <li><input type="text" name="Nombre" placeholder="Nombre de Usuario" className="Nombre-usuario" id="NombreUsuario"></input></li>
              <li><input type="text" name="Nombre" placeholder="Nombre" className="nombre" id="Nombre"></input></li>
            </ul>
            <ul className="lista-datos">
              <li><input type="text" name="Apellido" placeholder="Apellido" className="apellido" id="Apellido"></input></li>
              <li><input type="password" name="Contraseña" placeholder="Contraseña" className="input-cont" id="ContraUsuario"></input></li>
            </ul>
          </div>
          <div className="herramientas">
            <a href="" className="boton-redes facebook"><FontAwesomeIcon icon={faWrench} /></a>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light" id='album'>
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">

                <img src={deporte} className="imagenracha" id="imagenrach" width="100%" height="225"></img>

                <div className="card-body">
                  <p className="card-text text-black" id='RachaCateg'>Racha de Deporte:</p>
                  <p className="card-text text-black">Te haz ejercitado 10 dias seguidos</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">12-Marzo-2022</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">

                <img src={craft} className="imagenracha" id="imagenrach" width="100%" height="225"></img>

                <div className="card-body">
                  <p className="card-text text-black" id='RachaCateg'>Racha de Craft:</p>
                  <p className="card-text text-black">Llevas 5 dias seguidos haciendo manualidades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">12-Marzo-2022</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">

                <img src={dormir} className="imagenracha" id="imagenrach" alt="imagen" width="100%" height="225"></img>

                <div className="card-body">
                  <p className="card-text text-black" id='RachaCateg'>Racha de Sueño:</p>
                  <p className="card-text text-black">Haz dormido 8hrs durante 30 dias ¡Felicidades!</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">12-Marzo-2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default ContPerfil