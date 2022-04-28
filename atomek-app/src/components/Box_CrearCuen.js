import React, { useState, useEffect } from 'react'
import icono from '../Imagenes/Icono_ATOMEAK.png'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import fb from '../Imagenes/fb_icon.png'
import google from '../Imagenes/google_icon.png'
import './Estilos/Box_crearcuent_style.css'
import './Estilos/Scroll_style.css'
import ErrorMessage from './ErrorMessage';
import { Link } from "react-router-dom";
import { Create } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { userSchema } from '../validations/UserSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const Box_login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(userSchema)
    })

    const registerSubmit = async (data) => {
        try {
            const usuario = await Create(data);
            
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
      
        <form onSubmit={handleSubmit(registerSubmit)}>
            <div class="mb-4">
                <label for="name" class="form-label">Nombre completo</label>
                <input type="text"
                    class="form-control" name="name" id="name" {...register("name")}></input>
                {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>
            <div class="mb-4">
                <label for="name" class="form-label">Nombre de usuario</label>
                <input type="text"
                    class="form-control" name="name" id="name" {...register("username")}></input>
                {errors.username && <ErrorMessage message={errors.username.message} />}
            </div>
            <div class="mb-4">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" 
                    class="form-control" name="email" id="correo" {...register("email")}></input>
                {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div class="mb-4">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" 
                    class="form-control" name="password" id="contra" {...register("password")}></input>
                {errors.password && <ErrorMessage message={errors.password.message} />}
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
      </div>
      </div>
      </div>
      </body>
      

    )
}
export default Box_login