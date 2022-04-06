import React from "react";
import './Estilos/Slider_style.css'
import Publicacion from "./Publicacion";
import Crear_grupo from "./Crear_grupo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import GruposBloque_style from "./GruposBloque_style";
const Slider = () => {
    return (
        <body id="containerslider">
            <div className="Container">
                <div className="Grupo">
                    <button class="btn_muro " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <h5 className="btn_name">
                            <FontAwesomeIcon icon={faAlignJustify} />
                        </h5>
                    </button>
                    <div class="canvas2" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
                        <div>
                            <p>
                                <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Muro" aria-expanded="false" >
                                    Tu Muro
                                </button>
                            </p>
                        </div>
                        <div>
                            <p>
                                <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Grupos" aria-expanded="false" aria-controls="collapseWidthExample">
                                    Descubrir
                                </button>
                            </p>
                        </div>
                        <div>
                            <p>
                                <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#NewGroup" aria-expanded="false" aria-controls="collapseWidthExample">
                                    Crear grupo
                                </button>
                            </p>
                        </div>
                        <div>
                            <h1 className="subtitulo"> Grupos recientes</h1>
                        </div>
                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Muro" aria-expanded="false" aria-controls="collapseWidthExample">
                                Los artistas desnutridos
                            </button>
                        </p>
                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Muro" aria-expanded="false" aria-controls="collapseWidthExample">
                                Domilones
                            </button>
                        </p>
                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Muro" aria-expanded="false" aria-controls="collapseWidthExample">
                                no puedo subir las escaleras
                            </button>
                        </p>
                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Muro" aria-expanded="false" aria-controls="collapseWidthExample">
                                Mi abuelita no me eseño a coser
                            </button>
                        </p>
                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Grupos" aria-expanded="false" aria-controls="collapseWidthExample">
                                <h6 className="todos"><FontAwesomeIcon icon={faAlignJustify} /> Ver todos tus grupos</h6>
                            </button>
                        </p>
                        <div>
                            <h1 className="subtitulo"> Tus Grupos </h1>
                        </div>

                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Muro" aria-expanded="false" aria-controls="collapseWidthExample">
                                amantes de la procrastinación
                            </button>
                        </p>
                        <p>
                            <button class="item grupo1" data-bs-toggle="collapse" data-bs-target="#Grupos" aria-expanded="false" aria-controls="collapseWidthExample">
                                <h6 className="todos"><FontAwesomeIcon icon={faAlignJustify} /> Ver todos tus grupos</h6>
                            </button>
                        </p>
                    </div>

                </div>

                <div>

                </div>
                <div className="Muro">
                    <div class="collapse " id="Muro">
                        <div class=" cardbody">
                            <Publicacion />
                            <Publicacion />
                            <Publicacion />
                        </div>
                    </div>
                    <div class="collapse " id="Grupos">
                        <br></br>
                        <h3>Te puede gustar</h3>
                        <div class="hileras">
                            <div className="bloque">
                                <GruposBloque_style />
                            </div>
                            <div className="bloque">
                                <GruposBloque_style />
                            </div>
                            <div className="bloque">
                                <GruposBloque_style />
                            </div>
                        </div>
                        <div class="hileras">
                            <div className="bloque">
                                <GruposBloque_style />
                            </div>
                            <div className="bloque">
                                <GruposBloque_style />
                            </div>
                            <div className="bloque">
                                <GruposBloque_style />
                            </div>
                        </div>

                    </div>
                    <div class="collapse " id="NewGroup">
                        <div class=" cardbody">
                            < Crear_grupo />
                        </div>
                    </div>

                </div>

            </div>

        </body>
    );
};

export default Slider;
