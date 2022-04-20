import React, { useState, useEffect } from 'react'
import Publicacion from "./Publicacion";
import Crear_grupo from "./Crear_grupo";
import GruposBloque_style from "./GruposBloque_style";
import Publicar from "./Publicar";
import { Link, useParams } from "react-router-dom";
import { communityGetComunitiesByUser } from '../services/CommunityServices';
import { PostGetPostsByCommunity, PostGetPostsByUserCommunities } from '../services/PostServices';

const Content_Muro = (props) => {

    const [posts, setPosts] = useState([]);

    async function getInitialInformation() {
        try {
            switch(props?.propParamId) {
                case 'Mi-Muro':
                    console.log("Muro");
                    console.log(props);
                    const postsMuro = await PostGetPostsByUserCommunities(props?.propUserId);
                    setPosts(postsMuro);
                    return;
    
                case 'Descubrir':
                    return;
    
                case 'Crear-Grupo':
                    return;

                default:
                    console.log("Comunidad");
                    const postsCommunity = await PostGetPostsByCommunity(props?.propParamId);
                    setPosts(postsCommunity);
                    return;
            }
        }
            catch(err) {
            console.log(err);
        }
    }

    function loadContentMuro(id) {
        switch(id) {
            case 'Mi-Muro':
                return  <div class="contenedor_Muro bloque_contenedor_cursos">
                            <Publicar />

                            {posts?.map((post, index) => (
                            <Publicacion key={index} propPost={post}/>
                            ))}
                        </div>;

            case 'Descubrir':
                return  <div class="contenedor_Descubrir  " id="Registro">
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
                        </div>;

            case 'Crear-Grupo':
                return  <div class="contenedor_Crear " id="Registro">
                            < Crear_grupo />
                        </div>;
            default:
                return <div class="contenedor_Muro bloque_contenedor_cursos">
                            <Publicar />

                            {posts?.map((post, index) => (
                            <Publicacion key={index} propPost={post}/>
                            ))}
                        </div>;
        }
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <div>
            {loadContentMuro(props?.propParamId)}
        </div>
    );
};

export default Content_Muro;
