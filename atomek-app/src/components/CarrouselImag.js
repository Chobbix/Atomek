import React from 'react'
import './Estilos/CarrouselImag_style.css'
const CarrouselImag = () => {
  return (

<div id="carouselExampleFade" class="container carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={require("../Imagenes/deporte.jpg")} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={require("../Imagenes/craft.jpg")} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={require("../Imagenes/dormir.jpg")} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

   

  )
}

export default CarrouselImag