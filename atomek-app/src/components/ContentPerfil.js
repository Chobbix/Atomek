import React, { useState, useEffect } from 'react'
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
import { useParams } from 'react-router-dom';
import { GetById, SetUserImage } from '../services/UserServices'
import { FollowAddUserFollow } from '../services/FollowServices'

const ContPerfil = () => {
  
  const [userProfile, setUserProfile] = useState();
  const [userSesion, setUserSesion] = useState();
  const [isOwner, setIsOwner] = useState();
  const params = useParams();

  async function getInitialInformation() {
    let userSession = JSON.parse(localStorage.getItem("UserSession"));
    setUserSesion(userSession);

    if(params.idUser == userSession?._id) {
      setIsOwner(true);
      setUserProfile(userSession);
    }
    else {
      try {
        const responseUser = await GetById(params.idUser);
        setIsOwner(false);
        setUserProfile(responseUser);
      }
      catch(err) {
        console.log(err);
      }
    }
  }

  const handleFollowUser = async(event) => {
    try {
      await FollowAddUserFollow({
        _id: userSesion._id,
        followUser: userProfile._id
      })
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleChangeUserImage = () => {
    document.getElementById("imageFileInput").click();
  }

  const handleUpdateUserImage = async (e) => {
    const fileInput = e.target;
    const imageFile = fileInput.files[0];

    if (imageFile) {
      await SetUserImage(userSesion?._id, imageFile);

      if (params.id == userSesion?._id) {
        try {
          const responseUser = await GetById(params.id);
          setUserSesion(responseUser);
          setUserProfile(responseUser);
          localStorage.setItem('UserSession', JSON.stringify(responseUser));
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    getInitialInformation();
  }, []);

  return (
    <body id='CuerpoPerfil'>
      <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
          <div className="perfil-usuario-portada">
            <div className="perfil-usuario-avatar">
              <img src={userProfile?.image  ?? `https://avatars.dicebear.com/api/bottts/${userProfile?._id}.svg`} alt="img-avatar" width={160} height={165}></img>
              <input id="imageFileInput" type="file" onChange={handleUpdateUserImage} style={{display: 'none'}} />
              <button type="button" onClick={handleChangeUserImage} className="boton-avatar">
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
            <h3 className="titulo">{userProfile?.username}</h3>
            <h8 className="Seguidores">Seguidores:</h8><tr></tr><p className="seguidorescant">{userProfile?.followersCount}</p>
            { !isOwner? <button className='Seguirbtn btn' id='btnseguir' onClick={handleFollowUser}>Seguir Cuenta</button>: <p></p> }
          </div>
          <div className="perfil-usuario-footer">
            <ul className="lista-datos">
              <li><input type="text" name="username" value={userProfile?.username} placeholder="Nombre de Usuario" className="Nombre-usuario" id="NombreUsuario"></input></li>
              <li><input type="text" name="name" value={userProfile?.name} placeholder="Nombre" className="nombre" id="Nombre"></input></li>
            </ul>
            <ul className="lista-datos">
              <li><input type="text" name="lastname" value={userProfile?.lastname} placeholder="Apellido" className="apellido" id="Apellido"></input></li>
              <li><input type="password" name="password" placeholder="Contraseña" className="input-cont" id="ContraUsuario"></input></li>
            </ul>
          </div>
          <div className="herramientas">
            { !isOwner? <p></p>: <a href="" className="boton-redes facebook"><FontAwesomeIcon icon={faWrench} /></a> }
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