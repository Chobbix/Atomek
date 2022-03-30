import React from "react";
import logo from "../Imagenes/Atomeak LOGO2.0.png";
import  "../components/Estilos/Header_loggeate.css";

const Header_loggeate = () => {
  return (
    <div className="background">
      <nav class="navbar ">
        <div class="containernav">
          <a class="Nav" href="#">
            <img
              src={require("../Imagenes/Atomeak LOGO.png")}
              alt=""
              className="logodesing"
            />
          </a>
        </div>
      </nav>
      <div className="caja_log">
        <div className="Content_log">
          <h4 className="log">  <a className="Loggin"> Inicia sesion </a></h4>
          <h4 className="log">¿No tienes cuenta?  
            <a className="Loggin"> Registrate</a>
           </h4>
        </div>
      </div>
    </div>
  );
};

export default Header_loggeate;
