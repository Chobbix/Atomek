import React from 'react'
import './Estilos/carrousel_style.css'
const Carrousel_publicacion = () => {
    return (

        
        <div>
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('../Imagenes/yo.png')} class="imagen " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('../Imagenes/niño.jpg')} class="imagen" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('../Imagenes/maribb.jpg')} class="imagen " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           

        </div>
    )
}

export default Carrousel_publicacion