import React, { useState, useEffect } from 'react'
import './Estilos/Slider_style.css'
import Publicacion from "./Publicacion";
import Crear_grupo from "./Crear_grupo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faPlus } from '@fortawesome/free-solid-svg-icons'
import GruposBloque_style from "./GruposBloque_style";
import Publicar from "./Publicar";
import Content_Muro from "./Box_Content_Publicaciones";
import { Link, useParams } from "react-router-dom";
import { communityGetComunitiesByUser } from '../services/CommunityServices'
import { PostGetPostsByCommunity, PostGetPostsByUserCommunities } from '../services/PostServices';

const Slider = () => {

    const [communities, setCommunities] = useState([]);
    const params = useParams();

    async function getInitialInformation() {
        try {
            const userJSON = localStorage.getItem("UserSession");
            const usuario = (JSON.parse(userJSON));
            const data = await communityGetComunitiesByUser(usuario);
            setCommunities(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    function returnContentPosts() {
        const userJSON = localStorage.getItem("UserSession");
        const usuario = (JSON.parse(userJSON));
        return <Content_Muro key={params?.id} propParamId={params?.id} propUserId={usuario?._id} />
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <body id="fonditobonito" className="fonditobonito">
            <div class="menus">
                <input type="radio" id="Muro" name="categoria" value="preguntas" checked />
                <input type="radio" id="Descubrir" name="categoria" value="Respuestas" />
                <input type="radio" id="Crear" name="categoria" value="diplomas" />
                <input type="radio" id="Grupos" name="categoria" value="guardado" />


                <input type="radio" id="GrupoAll" name="categoria" value="guardado" />

                <input type="radio" id="TuGrupoAll" name="categoria" value="guardado" />

                <div className="Grupo">
                    <div class="canvas2">

                        <Link to="/atomek/Muro/Mi-Muro" key={params.id}>
                            <label for="Muro" className="item grupo1">
                                <h4 >Tu Muro</h4>
                            </label>
                        </Link>
                        <Link to="/atomek/Muro/Descubrir">
                            <label for="Descubrir" className="item grupo1">
                                <h4 >Descubrir</h4>
                            </label>
                        </Link>
                        <Link to="/atomek/Muro/Crear-Grupo">
                            <label for="Crear" className="item grupo1">
                                <h4 >Crear Grupo</h4>
                            </label>
                        </Link>



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

                        {communities?.map((com, index) => (
                            <Link key={index} to={"/atomek/Muro/" + com._id}>
                                <label key={index} for={"TuGrupo" + index} className="item grupo1">
                                    <h6 key={index}>{com.name}</h6>
                                </label>
                            </Link>
                        ))}

                        <label for="TuGrupoAll" className="item grupo1">
                            <h6 className="todos"><FontAwesomeIcon icon={faAlignJustify} /> Ver todos tus grupos</h6>
                        </label>
                    </div>
                </div>


                <div class="Muro" id="Registro">
                    <div class="bloque-contenido">
                        {returnContentPosts()}
                    </div>
                </div>
            </div>
        </body >
    );
};

export default Slider;
