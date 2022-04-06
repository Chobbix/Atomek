import React from 'react'
import './Estilos/GruposBloque.css'


const GruposBloque_style = () => {
    return (
        <div>
            <div class="card" >
                <img src={require("../Imagenes/picture_perfil.jpg")} class="cardimgtop" alt="..."/>
                    <div class="cardbody">
                       <h3 className='text'>No nos dejaron dibujar de niños</h3>
                       <button className='btn_unirse'>Unirse al grupo</button>
                    </div>
            </div>
        </div>
    )
}

export default GruposBloque_style