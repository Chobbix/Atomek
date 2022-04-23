import React from 'react'
import './Estilos/GruposBloque.css'


const GruposBloque_style = (props) => {
    return (
        <div>
            <div class="card" >
                <img src={props.image} class="cardimgtop" alt={props.name}/>
                    <div class="cardbody">
                       <h3 className='text'>{props.name}</h3>
                       <button className='btn_unirse'>Unirse al grupo</button>
                    </div>
            </div>
        </div>
    )
}

export default GruposBloque_style