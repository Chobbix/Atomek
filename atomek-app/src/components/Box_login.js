import React, { useState, useEffect } from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import fb from '../Imagenes/fb_icon.png'
import google from '../Imagenes/google_icon.png'
import './Estilos/Box_login_style.css'
import './Estilos/Scroll_style.css'
import ErrorMessage from './ErrorMessage';
import { Link } from "react-router-dom";
import { Login } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { sessionSchema } from '../validations/SessionSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const Box_login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(sessionSchema)
    });

    const loginSubmit = async (data) => {
        try {
            const usuario = await Login(data);
            
            if (usuario.message) { 
                console.log(usuario.message); 
            }
            else { 
                console.log(usuario); 
                localStorage.setItem('UserSession', JSON.stringify(usuario));
                navigate('/atomek/Muro/Mi-Muro');
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

                        <form onSubmit={handleSubmit(loginSubmit)}>
                            <div className="mb-1">
                                <label for="email" className="form-label">Correo electrónico</label>
                                <input type="email"
                                    className="form-control" name="email" {...register("email")}></input>
                                {errors.email && <ErrorMessage message={errors.email.message} />}
                            </div>

                            <div className="mb-4">
                                <label for="password" className="form-label">Contraseña</label>
                                <input type="password"
                                    className="form-control" name="password" {...register("password")}></input>
                                {errors.password && <ErrorMessage message={errors.password.message} />}
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
                    </div>
                </div>
            </div>
        </body>

    )
}

export default Box_login