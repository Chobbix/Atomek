import React, { useState, useEffect } from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import fb from '../Imagenes/fb_icon.png'
import google from '../Imagenes/google_icon.png'
import './Estilos/Box_login_style.css'
import './Estilos/Scroll_style.css'
import { Link } from "react-router-dom";
import { Login } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const Box_login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);

        try {
            const usuario = await Login({
                email,
                password
            });
            
            if (usuario.message) { 
                console.log(usuario.message); 
            }
            else { 
                console.log(usuario); 
                localStorage.setItem('UserSession', JSON.stringify(usuario));
                navigate('/atomek/Muro');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <body id='fondobackground'>
            <div className="container w-75 mt-5 rounded shadow">
                <div className="row align-items-stretch">
                    <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                    </div>
                    <div className="col bg-white p-5 rounded-end">
                        <div className="text-center">
                            <img src={logo} width="200" alt=""></img>
                        </div>
                        <h2 className="fw-bold text-center" id='textobien'> ¡Bienvenido de nuevo!</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label for="email" className="form-label">Correo electrónico</label>
                                <input type="email" value={email}
                                    onChange={({ target }) => setEmail(target.value)}
                                    className="form-control" name="email"></input>
                            </div>

                            <div className="mb-4">
                                <label for="password" className="form-label">Contraseña</label>
                                <input type="password" value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                    className="form-control" name="password"></input>
                            </div>

                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" name="connected"></input>
                                <label for="connected" className="form-check-label">Mantenerme conectado</label>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                            </div>
                        </form>

                        <div className="my-3">
                            <span>No tienes cuenta? <Link to="/atomek/Crear">Registrate</Link></span><br></br>
                            <span><a href="#">Recuperar contraseña</a></span>
                        </div>

                        <div className="container w-100 my-4">
                            <div className="row text-center">
                                <div className="col-12">Iniciar Sesión con:</div>
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