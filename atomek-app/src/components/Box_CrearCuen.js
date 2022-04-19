import React, { useState, useEffect } from 'react'
import icono from '../Imagenes/Icono_ATOMEAK.png'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import fb from '../Imagenes/fb_icon.png'
import google from '../Imagenes/google_icon.png'
import './Estilos/Box_crearcuent_style.css'
import './Estilos/Scroll_style.css'
import { Link } from "react-router-dom";
import { Create } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const Box_login = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name);
        console.log(username);
        console.log(email);
        console.log(password);

        try {
            const usuario = await Create({
                name,
                username,
                email,
                password
            });
            
            localStorage.setItem('UserSession', JSON.stringify(usuario));
            navigate('/atomek/Muro/Mi-Muro');
        }
        catch(err) {
            console.log(err);
        }
    }

    return(
      <body id='fondobackground'>
      <div className="container w-75 mt-5 rounded shadow">
      <div className="row align-items-stretch">
          <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          </div>
          <div className="col bg-white p-5 rounded-end">
           <div className="text-center">
           <img src={logo} width="200" alt=""></img>
           </div> 
      <h2 className="fw-bold text-center" id='textobien'>¡Crea tu cuenta ahora!</h2>
      
        <form onSubmit={handleSubmit}>
            <div class="mb-4">
                <label for="name" class="form-label">Nombre completo</label>
                <input type="text" value={name} 
                    onChange={({target}) => setName(target.value)} 
                    class="form-control" name="name" id="name"></input>
            </div>
            <div class="mb-4">
                <label for="name" class="form-label">Nombre de usuario</label>
                <input type="text" value={username} 
                    onChange={({target}) => setUsername(target.value)} 
                    class="form-control" name="name" id="name"></input>
            </div>
            <div class="mb-4">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" value={email} 
                    onChange={({target}) => setEmail(target.value)} 
                    class="form-control" name="email" id="correo"></input>
            </div>
            <div class="mb-4">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" value={password} 
                    onChange={({target}) => setPassword(target.value)} 
                    class="form-control" name="password" id="contra"></input>
            </div>
            <div class="mb-4 form-check">
                <input type="checkbox" class="form-check-input" name="connected"></input>
                <label for="connected" class="form-check-label">Mantenerme conectado</label>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Crear Cuenta </button>
            </div>
        </form>

        <div class="my-3">
            <span>Ya tienes cuenta? <Link to="/atomek/login">Ingresa aquí</Link></span><br></br>
        </div>
  
          <div className="container w-100 my-4">
              <div className="row text-center">
                  <div className="col-12">Crear cuenta con::</div>
              </div>
              <div className="row">
                  <div className="col">
                      <button className="btn btn-outline-primary w-100 my-1">
                          <div className="row align-items-center">
                              <div className="col-2 d-none d-md-block">
                                  <img src={fb} width="32" alt=""></img>
                              </div>
                              <div className="col-12 col-md-10 text-center">
                                  Facebook
                              </div>
                          </div>
                      </button>
                  </div>
                  <div className="col">
                      <button className="btn btn-outline-danger w-100 my-1">
                          <div className="row align-items-center">
                              <div className="col-2 d-none d-md-block">
                                  <img src={google} width="32" alt=""></img>
                              </div>
                              <div className="col-12 col-md-10 text-center">
                                  Google
                              </div>
                          </div>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      </div>
      </div>
      </body>
      

    )
}
export default Box_login