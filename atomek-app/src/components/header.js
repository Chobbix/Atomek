import React, { useState, useEffect } from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import './Estilos/header_style.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { CommunityGetComunityById } from '../services/CommunityServices';

const Header = () => {
  const [userSesion, setUserSesion] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const params = useParams();

  async function getIsAdmin() {
    try {
      const responseCommunity = await CommunityGetComunityById(params?.id);
      if(responseCommunity?._admin) {
        if(responseCommunity?._admin == userSesion?._id) { setIsAdmin(true); }
        else { setIsAdmin(false); console.log('No admin1'); }
      }
      else {
        console.log('No admin2');
        setIsAdmin(false);
      }
    } catch (error) {
      console.log('No admin3');
      setIsAdmin(false);
    }
  }

  async function getUserSesion() {
    setUserSesion(JSON.parse(localStorage.getItem("UserSession")));
  }
  
  function renderAdminButton() {
    getIsAdmin();
    if (isAdmin == true) { return <Link to={"/atomek/Community/" + params.id + "/View-Admin"} className="nav-link px-2 link-light">Vista Admin</Link> }
  }

  useEffect(() => {
    getUserSesion();
  }, []);

  return (
    <body>
      <header className="border-bottom bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/atomek/Muro/Mi-Muro" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <img src={logo} className="bi me-2" width="280" height="90" role="img" aria-label="Bootstrap"></img>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
              { 
                params.id == 'Mi-Muro' ? <Link to="/atomek/Muro/Mi-Muro" className="nav-link px-2 link-light">Publicaciones</Link>
                : params.id == 'Descubrir' ? <Link to="/atomek/Muro/Mi-Muro" className="nav-link px-2 link-light">Publicaciones</Link>
                : params.id == 'Crear-Grupo' ? <Link to="/atomek/Muro/Mi-Muro" className="nav-link px-2 link-light">Publicaciones</Link>
                : params.id == 'All-Grupos' ? <Link to="/atomek/Muro/Mi-Muro" className="nav-link px-2 link-light">Publicaciones</Link>
                : params.idUser ? <Link to="/atomek/Muro/Mi-Muro" className="nav-link px-2 link-light">Publicaciones</Link>
                : params.id ? <Link to={"/atomek/Muro/" + params.id} className="nav-link px-2 link-light">Publicaciones de la Comunidad</Link>
                : <Link to={"/atomek/Muro/Mi-Muro"} className="nav-link px-2 link-light">Publicaciones</Link>
              }
              
              </li>

              <li>
              { 
                params.id == 'Mi-Muro' ? <Link to={"/atomek/Streaks/Community/Mi-Muro"} className="nav-link px-2 link-light">Mis Rachas</Link>
                : params.id == 'Descubrir' ? <Link to={"/atomek/Streaks/Community/Mi-Muro"} className="nav-link px-2 link-light">Mis Rachas</Link>
                : params.id == 'Crear-Grupo' ? <Link to={"/atomek/Streaks/Community/Mi-Muro"} className="nav-link px-2 link-light">Mis Rachas</Link>
                : params.id == 'All-Grupos' ? <Link to={"/atomek/Streaks/Community/Mi-Muro"} className="nav-link px-2 link-light">Mis Rachas</Link>
                : params.idUser ? <Link to="/atomek/Streaks/Community/Mi-Muro" className="nav-link px-2 link-light">Mis Rachas</Link>
                : params.id ? <Link to={"/atomek/Streaks/Community/" + params.id} className="nav-link px-2 link-light">Rachas de la Comunidad</Link>
                : <Link to={"/atomek/Streaks/Community/Mi-Muro"} className="nav-link px-2 link-light">Mis Rachas</Link>
              }
              </li>
              <li>
              { renderAdminButton() }
              </li>
            </ul>



            <div className="dropdown text-end">
              <a href="" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={userSesion?.image  ?? `https://avatars.dicebear.com/api/bottts/${userSesion?._id}.svg`} alt="mdo" width="32" height="32" className="rounded-circle"></img>
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                {/*  <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li> */}
                <li><Link className="dropdown-item" to={"/atomek/Perfil/" + userSesion?._id} >Perfil</Link></li>
                <li><Link className="dropdown-item" to="/atomek/CRacha">Crear Rachas</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><Link className="dropdown-item" to="/">Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </body>
  )
}

export default Header