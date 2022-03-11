import React from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import './Estilos/header_style.css'

const header = () => {
    return(
    <body>
    <header className="border-bottom bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img  src = {logo} className="bi me-2" width="280" height="90" role="img" aria-label="Bootstrap"></img>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Comunidad</a></li>
          <li><a href="#" className="nav-link px-2 link-light">Rachas</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"></img>
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
           {/*  <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li> */}
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  </body>
    )
}

export default header