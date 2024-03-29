import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Grafica from './Grafica'
import ErrorMessage from './ErrorMessage';
import './Estilos/ContPerfil_style.css'
import './Estilos/Scroll_style.css'
import { useParams } from 'react-router-dom';
import { GetById, GetUserStats, SetUserImage, Update } from '../services/UserServices'
import { FollowAddUserFollow, FollowGetIsFollowed, FollowGetUserFollows, FollowRemoveUserFollow } from '../services/FollowServices'
import { SubscriptionGetSubscriptionsByUser } from '../services/SubscriptionServices'
import Moment from 'moment';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { userUpdateSchema } from '../validations/UserUpdateSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const ContPerfil = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userUpdateSchema)
  });

  const [userProfile, setUserProfile] = useState();
  const [userSesion, setUserSesion] = useState();
  const [userStats, setUserStats] = useState();
  const [isOwner, setIsOwner] = useState();
  const [isError, setIsError] = useState(true);
  const [isFollowed, setIsFollowed] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const params = useParams();
  const Navigate = useNavigate();
  Moment.locale('es');

  async function getInitialInformation() {
    let userSession = JSON.parse(localStorage.getItem("UserSession"));
    setUserSesion(userSession);

    const subscriptionsResponse = await SubscriptionGetSubscriptionsByUser(params.idUser);
    if (subscriptionsResponse.isAxiosError) { Navigate('/atomek/Error'); }

    const responseStats = await GetUserStats(params.idUser);
    if (responseStats.isAxiosError) { Navigate('/atomek/Error'); }

    setSubscriptions(subscriptionsResponse);
    setUserStats(responseStats);

    if (params.idUser == userSession?._id) {
      setIsOwner(true);
      setUserProfile(userSession);
    }
    else {
      const responseUser = await GetById(params.idUser);
      if (responseStats.isAxiosError) { Navigate('/atomek/Error'); }
      else {

        const responseIsFollowed = await FollowGetIsFollowed({
          userId: userSession?._id,
          followUserId: params.idUser
        })
        
        if (responseIsFollowed.isFollowed == true) { setIsFollowed(true); }
        else { setIsFollowed(false); }
      }

      setIsOwner(false);
      setUserProfile(responseUser);
    }
  }

  const handleFollowUser = async (event) => {
    try {
      await FollowAddUserFollow({
        _id: userSesion._id,
        followUser: userProfile._id
      })

      setIsFollowed(true);
      const responseUser = await GetById(params.idUser);
      setUserProfile(responseUser);
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleUnFollowUser = async (event) => {
    try {
      await FollowRemoveUserFollow({
        _id: userSesion._id,
        followUser: userProfile._id
      })

      setIsFollowed(false);
      const responseUser = await GetById(params.idUser);
      setUserProfile(responseUser);
    }
    catch (err) {
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

      console.log(params?.idUser)
      console.log(userSesion?._id)

      if (params?.idUser == userSesion?._id) {
        try {
          const responseUser = await GetById(params.idUser);
          responseUser.userToken = userSesion.userToken;

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
        responseUser.userToken = userSesion.userToken;
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
              <img src={userProfile?.image ?? `https://avatars.dicebear.com/api/bottts/${userProfile?._id}.svg`} alt="img-avatar" width={160} height={165}></img>
              {
              isOwner == true ?
              <>
                <input id="imageFileInput" type="file" onChange={handleUpdateUserImage} style={{ display: 'none' }} />
                <button type="button" onClick={handleChangeUserImage} className="boton-avatar">
                  <FontAwesomeIcon icon={faCamera} />
                </button>
              </>
              : null
              }
            </div>
          </div>
        </div>
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-bio" id='info'>
            <h3 className="titulo">{userProfile?.username}</h3>
            <div className='row'>
              <h8 className="Seguidores">Seguidores: {userProfile?.followersCount}</h8>
              {!isOwner ? 
                isFollowed ? 
                  <button className='btn btn-guardar mt-3' id='btnseguir' onClick={handleUnFollowUser}>Dejar de seguir</button> 
                : 
                  <button className='btn btn-guardar mt-3' id='btnseguir' onClick={handleFollowUser}>Seguir Cuenta</button> 
              : null}
            </div>
          </div>
          {
            isOwner == true ?
            <form className="perfil-usuario-footer" onSubmit={handleSubmit(handleUpdateUserInfo)} data-user-id={userProfile?._id}>
              <ul className="lista-datos">
                <li>
                  <input type="text" defaultValue={userProfile?.username} placeholder="Nombre de Usuario" className="Nombre-usuario form-control" id="NombreUsuario" {...register("username")}></input>
                  {errors.username && <ErrorMessage message={errors.username.message} />}
                </li>
                <li>
                  <input type="text" defaultValue={userProfile?.name} placeholder="Nombre" className="nombre form-control" id="Nombre" {...register("name")}></input>
                  {errors.name && <ErrorMessage message={errors.name.message} />}
                </li>
              </ul>
              <ul className="lista-datos">
                <li>
                  <input type="password" placeholder="Contraseña" className="input-cont form-control" id="ContraUsuario" {...register("password")} ></input>
                  {errors.password && <ErrorMessage message={errors.password.message} />}
                </li>
                <li><button type='submit' className='btn btn-guardar'>Guardar</button></li>
              </ul>
            </form>
            : null
          }
        </div>
      </section>

      <div className="album py-5" id='album'>
        <div className="container">
          <h2>Rachas activas</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {subscriptions?.map((subscription, index) => (
              subscription.active == true ?
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    {
                      isOwner == true ?
                        <Link to={'/atomek/Responses/' + subscription._id} className='text-decoration-none'><p className="card-text text-black" id='RachaCateg'>{subscription._streak?.title}</p></Link>
                      :
                        <p className="card-text text-black" id='RachaCateg'>{subscription._streak?.title}</p>
                    }
                    <p className="card-text text-black">Has cumplido {subscription?.counter} veces esta racha</p>
                    <div className="d-flex justify-content-between align-items-center">

                      {
                        subscription._tags != '' ?
                          <small className="text-muted">Etiquetas: 
                            <ul>
                              {subscription?._tags.map((tag, indexes) => (
                                <li>{tag.title}</li>
                              ))}
                            </ul>
                          </small>
                        : null
                      }

                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Suscrito el: {Moment(subscription.date_create).format('DD/MM/yyyy')}</small>
                    </div>
                  </div>
                </div>
              </div>
              : null
            ))}
          </div>
        </div>
      </div>

      <div className="album py-5" id='album'>
        <div className="container">
          {
          isOwner == true ?
          <>
            <h2>Rachas inactivas</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {subscriptions?.map((subscription, index) => (
                subscription.active == false ?
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <Link to={'/atomek/Responses/' + subscription._id} className='text-decoration-none'><p className="card-text text-black" id='RachaCateg'>{subscription._streak?.title}</p></Link>
                      <p className="card-text text-black">Has cumplido {subscription?.counter} veces esta racha</p>
                      <div className="d-flex justify-content-between align-items-center">
                        
                      {
                        subscription._tags != '' ?
                          <small className="text-muted">Etiquetas: 
                            <ul>
                              {subscription?._tags.map((tag, indexes) => (
                                <li>{tag.title}</li>
                              ))}
                            </ul>
                          </small>
                        : null
                      }

                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">Suscrito el: {Moment(subscription.date_create).format('DD/MM/yyyy')}</small>
                      </div>
                    </div>
                  </div>
                </div>
                : null
              ))}
            </div>
          </>
          : null
          }
        </div>
      </div>
      
      <div className="container">
        <h2>Estadisticas</h2>
        <Grafica propUserLikes={userStats?.amount_likes} propUserCommunities={userStats?.amount_communities} propUserPosts={userStats?.amount_posts} propUserSubscriptions={userStats?.amount_subscriptions} />
      </div>
    </body>
  )
}

export default ContPerfil