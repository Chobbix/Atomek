import React, { useState, useEffect } from 'react'
import icono from '../Imagenes/Icono_ATOMEAK.png'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import pp from '../Imagenes/picture_perfil.jpg'
import ppug from '../Imagenes/LicPGB.jpg'
import deporte from '../Imagenes/deporte.jpg'
import craft from '../Imagenes/craft.jpg'
import dormir from '../Imagenes/dormir.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Grafica from './Grafica'
import ErrorMessage from './ErrorMessage';
import './Estilos/ContPerfil_style.css'
import './Estilos/Scroll_style.css'
import { useParams } from 'react-router-dom';
import { GetById, SetUserImage, Update } from '../services/UserServices'
import { FollowAddUserFollow } from '../services/FollowServices'
import { SubscriptionGetSubscriptionsByUser } from '../services/SubscriptionServices'
import Moment from 'moment';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { userUpdateSchema } from '../validations/UserUpdateSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const ContPerfil = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(userUpdateSchema)
  });
  
  const [userProfile, setUserProfile] = useState();
  const [userSesion, setUserSesion] = useState();
  const [isOwner, setIsOwner] = useState();
  const [subscriptions, setSubscriptions] = useState([]);
  const params = useParams();
  Moment.locale('es');

  async function getInitialInformation() {
    let userSession = JSON.parse(localStorage.getItem("UserSession"));
    setUserSesion(userSession);
    
    const subscriptionsResponse = await SubscriptionGetSubscriptionsByUser(params.idUser);
    setSubscriptions(subscriptionsResponse);

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

  const handleUpdateUserInfo = async (data) => {
    // Remove empty strings
    Object.keys(data).forEach(key => {
      if (data[key] === '') {
        delete data[key];
      }
    });

    await Update(data, userProfile?._id);

    try {
      const responseUser = await GetById(userProfile?._id);
      
      if (userProfile?._id == userSesion?._id) {
        setUserSesion(responseUser);
        localStorage.setItem('UserSession', JSON.stringify(responseUser));
      }

      setUserProfile(responseUser);
    } catch (error) {
      console.log(error);
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
          </div>
        </div>
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-bio" id='info'>
            <h3 className="titulo">{userProfile?.username}</h3>
            <h8 className="Seguidores">Seguidores:</h8><tr></tr><p className="seguidorescant">{userProfile?.followersCount}</p>
            { !isOwner? <button className='Seguirbtn btn' id='btnseguir' onClick={handleFollowUser}>Seguir Cuenta</button>: <p></p> }
          </div>
          <form className="perfil-usuario-footer" onSubmit={handleSubmit(handleUpdateUserInfo)} data-user-id={userProfile?._id}>
            <ul className="lista-datos">
              <li>
                <input type="text" defaultValue={userProfile?.username} placeholder="Nombre de Usuario" className="Nombre-usuario" id="NombreUsuario" {...register("username")}></input>
                {errors.username && <ErrorMessage message={errors.username.message} />}
              </li>
              <li>
                <input type="text" defaultValue={userProfile?.name} placeholder="Nombre" className="nombre" id="Nombre" {...register("name")}></input>
                {errors.name && <ErrorMessage message={errors.name.message} />}
              </li>
            </ul>
            <ul className="lista-datos">
              <li>
                <input type="password" placeholder="Contraseña" className="input-cont" id="ContraUsuario" {...register("password")} ></input>
                {errors.password && <ErrorMessage message={errors.password.message} />}
              </li>
              <li><button type='submit'>Guardar</button></li>
            </ul>
          </form>
          <div className="herramientas">
            { !isOwner? <p></p>: <a href="" className="boton-redes facebook"><FontAwesomeIcon icon={faWrench} /></a> }
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light" id='album'>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          {subscriptions?.map((subscription, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <Link to={'/atomek/Responses/' + subscription._id}><p className="card-text text-black" id='RachaCateg'>{subscription._streak?.title}</p></Link>
                  <p className="card-text text-black">Has cumplido {subscription?.counter} veces esta racha</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Suscrito el: {Moment(subscription.date_create).format('DD/MM/yyyy')}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
            
          </div>
        </div>
      </div>

      <div className='ControlRachas' id='MisRachasCtl'>
      <div className="my-3 p-3 rounded border" id="RecuadroRachas">
                                <h6 className="text-light border-bottom pb-2 mb-0 ">Control de mis rachas</h6>
                                <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB"/><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>

                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                <strong className="text-light">Racha del mejor Abogado</strong>
                                <a className="text-light" id='iconos'><FontAwesomeIcon icon={faPencil}/> &ensp; <FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                                <span className="d-block">@Lic PugBerto</span>
                                </div>
                                </div>

                                <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB"/><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>

                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                <strong className="text-light">Racha del mejor crochet cada día</strong>
                                <a className="text-light" id='iconos'><FontAwesomeIcon icon={faPencil}/> &ensp; <FontAwesomeIcon icon={faTrash}/></a>
                                </div>

                                <span className="d-block">Mi abuelita no me enseño a coser</span>
                                </div>
                                </div>

                                <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB"/><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>

                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                <strong className="text-light">Racha de programar como un iiiinche toro sin usar pastillas</strong>
                                <a className="text-light" id='iconos'><FontAwesomeIcon icon={faPencil}/> &ensp; <FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                                <span className="d-block">@Chobbi</span>
                                </div>
                                </div>
                                </div>
      </div>
      <Grafica />

    </body>
  )
}

export default ContPerfil