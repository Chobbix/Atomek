import React from "react";
import "./Estilos/Testimonios_style.css";

const header = () => {
  return (
    <div className="ContainerAux">
      <h3 className="Desc">Testimonios de algunos usuarios:</h3>
      <div className="containersupremo">
        <div class="Tarjeta">
          <div class="ContainerTestimonio">
            <div class="Container1 ">
              <img
                src={"https://avatars.dicebear.com/api/bottts/983432.svg"}
                class=" desingImg"
                alt="..."
              />
            </div>
            <div class="Container2">
              <div class="card-body">
                <h5 class="User_name">Sofía</h5>
                <p class="User_comment">
                  Desde que he usado Atomeak me siento mas productiva
                </p>
                <p class="card-text">
                  <small class="Time_user">Usuario desde 2021</small>
                </p>
              </div>
            </div>
          </div>          
        </div>
        

        <div class="Tarjeta">
          <div class="ContainerTestimonio">
            <div class="Container1 ">
              <img
                src={"https://avatars.dicebear.com/api/bottts/2129812389.svg"}
                class=" desingImg"
                alt="..."
              />
            </div>
            <div class="Container2">
              <div class="card-body">
                <h5 class="User_name">Porsha</h5>
                <p class="User_comment">
                  Atomeak me ha ayudado a crear buenos hábitos
                </p>
                <p class="card-text">
                  <small class="Time_user">Usuario desde 2021</small>
                </p>
              </div>
            </div>
          </div>          
        </div>
        
        <div class="Tarjeta">
          <div class="ContainerTestimonio">
            <div class="Container1 ">
              <img
                src={"https://avatars.dicebear.com/api/bottts/56135121.svg"}
                class=" desingImg"
                alt="..."
              />
            </div>
            <div class="Container2">
              <div class="card-body">
                <h5 class="User_name">Eru</h5>
                <p class="User_comment">
                  Con Atomeak tengo un registro de mis metas
                </p>
                <p class="card-text">
                  <small class="Time_user">Usuario desde 2021</small>
                </p>
              </div>
            </div>
          </div>          
        </div>

      </div>
    </div>
  );
};

export default header;
