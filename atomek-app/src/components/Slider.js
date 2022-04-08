import React from "react";
import './Estilos/Slider_style.css'
import Publicacion from "./Publicacion";
import Crear_grupo from "./Crear_grupo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import GruposBloque_style from "./GruposBloque_style";
import Publicar from "./Publicar";
const Slider = () => {
    return (
        <body id="fonditobonito" className="fonditobonito">
            <div class="Container">
                <div class="menus">
                    <input type="radio" id="Muro" name="categoria" value="preguntas" checked />
                    <input type="radio" id="Descubrir" name="categoria" value="Respuestas" />
                    <input type="radio" id="Crear" name="categoria" value="diplomas" />
                    <input type="radio" id="Grupos" name="categoria" value="guardado" />

                    <input type="radio" id="Grupo1" name="categoria" value="guardado" />
                    <input type="radio" id="Grupo2" name="categoria" value="guardado" />
                    <input type="radio" id="Grupo3" name="categoria" value="guardado" />
                    <input type="radio" id="Grupo4" name="categoria" value="guardado" />
                    <input type="radio" id="Grupo5" name="categoria" value="guardado" />
                    <input type="radio" id="GrupoAll" name="categoria" value="guardado" />

                    <input type="radio" id="TuGrupo2" name="categoria" value="guardado" />
                    <input type="radio" id="TuGrupo3" name="categoria" value="guardado" />
                    <input type="radio" id="TuGrupo4" name="categoria" value="guardado" />
                    <input type="radio" id="TuGrupo5" name="categoria" value="guardado" />
                    <input type="radio" id="TuGrupoAll" name="categoria" value="guardado" />

                    <div className="Grupo">
                        <div class="canvas2">
                            <label for="Muro" className="item grupo1">
                                Tu Muro
                            </label>
                            <label for="Descubrir" className="item grupo1">
                                <h4 >Descubrir</h4>
                            </label>
                            <label for="Crear" className="item grupo1">
                                <h4 >Crear Grupo</h4>
                            </label>
                            <h1 className="subtitulo">Grupos recientes</h1>

                            <label for="Grupo1" className="item grupo1">
                                <h6> Los artistas desnutridos</h6>
                            </label>
                            <label for="Grupo2" className="item grupo1">
                                <h6> Dormilones</h6>
                            </label>
                            <label for="Grupo4" className="item grupo1">
                                <h6> no puedo subir las escaleras </h6>
                            </label>
                            <label for="Grupo5" className="item grupo1">
                                <h6>   Mi abuelita no me eseño a coser</h6>
                            </label>
                            <label for="GrupoAll" className="item grupo1">
                                <h6 className="todos"><FontAwesomeIcon icon={faAlignJustify} /> Ver todos tus grupos</h6>
                            </label>
                            <h1 className="subtitulo"> Tus Grupos </h1>


                            <label for="TuGrupo2" className="item grupo1">
                                <h6> Los musicos  desafinados</h6>
                            </label>
                            <label for="TuGrupo4" className="item grupo1">
                                <h6> Quemamos la cocina </h6>
                            </label>
                            <label for="TuGrupo5" className="item grupo1">
                                <h6>   Bodypaint </h6>
                            </label>
                            <label for="TuGrupoAll" className="item grupo1">
                                <h6 className="todos"><FontAwesomeIcon icon={faAlignJustify} /> Ver todos tus grupos</h6>
                            </label>


                        </div>
                    </div>


                    <div class="Muro" id="Registro">

                        <div class="bloque-contenido">

                            <div class="contenedor_Muro bloque_contenedor_cursos">
                                <Publicar />

                                <Publicacion />
                                <Publicacion />
                                <Publicacion />


                            </div>
                            <div class="contenedor_Descubrir  " id="Registro">
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
                            <div class="contenedor_Crear " id="Registro">
                                < Crear_grupo />
                            </div>
                            <div class="contenedor_Grupos  " id="Registro">
                                <Publicar />
                                <Publicacion />
                                <Publicacion />
                            </div>
                            <div class="contenedor_Grupo1  " id="Registro">
                                <Publicar />
                                <Publicacion />
                            </div>
                            <div class="contenedor_Grupo2  " id="Registro">
                                <Publicar />
                                <Publicacion />
                                <Publicacion />
                                <Publicacion />
                                <Publicacion />
                            </div>
                            <div class="contenedor_Grupo4  " id="Registro">
                                <Publicar />
                                <Publicacion />
                                <Publicacion />
                            </div>
                            <div class="contenedor_Grupo5  " id="Registro">
                                <Publicar />
                                <Publicacion />
                            </div>
                            <div class="contenedor_GrupoAll  " id="Registro">
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
                            <div class="contenedor_TuGrupo2  " id="Registro">
                                <Publicar />
                                <Publicacion />
                                <Publicacion />
                                <Publicacion />


                            </div>
                            <div class="contenedor_TuGrupo4  " id="Registro">
                                <Publicar />
                                <Publicacion />
                                <Publicacion />
                            </div>
                            <div class="contenedor_TuGrupo5  " id="Registro">
                                <Publicar />
                                <Publicacion />
                            </div>
                            <div class="contenedor_TuGrupoAll  " id="Registro">
                                rito

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body >
    );
};

export default Slider;
