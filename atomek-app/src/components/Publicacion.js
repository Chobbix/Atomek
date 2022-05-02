import React, { useEffect, useState } from 'react'
import './Estilos/Publicacion_style.css'
import './Estilos/carrousel_style.css'
// import Carrousel_publicacion from './carrousel_publicacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { LikeAdd } from '../services/LikeServices'
import Moment from 'moment';
import { PostDelete, PostUpdate, PostUpdateImage } from '../services/PostServices'

const Publicacion = (props) => {
    const [isOwner, setIsOwner] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [body, setBody] = useState();
    const [image, setImage] = useState();
    const [imageBase64, setImageBase64] = useState('');
    Moment.locale('es');

    const handleAddLike = async (event, idPost) => {
        console.log(idPost);
        //try {
        //    await LikeAdd({
        //        _post: idPost,
        //        _user: props?.propUserId
        //    });
        //} 
        //catch (err) {
        //    console.log(err);
        //}
    }

    const handleEditPost = async (event, idPost) => {
        setIsUpdating(true);
    }

    const handleCancelEditPost = async (event, idPost) => {
        setIsUpdating(false);
    }

    const handleUpdatePost = async (event, idPost) => {
        try {
            await PostUpdate({
                _id: idPost,
                body: body
            });

            if (image) {
                await PostUpdateImage(idPost, image);
            }
        } 
        catch (err) {
            console.log(err);
        }
        props.propHandleClickUpdatePost();
        setIsUpdating(false)
    }

    const handleDeletePost = async (event, idPost) => {
        try {
            await PostDelete({
                _id: idPost
            });
        } 
        catch (err) {
            console.log(err);
        }
        props.propHandleClickUpdatePost();
        setIsUpdating(false)
    }

    const handleShowImage = (image) => {
        var reader = new FileReader();
        reader.readAsDataURL(image[0]);
        reader.onload = function() {
            let base64 = reader.result;
            setImageBase64(base64);
        }
        setImage(image[0]);
    }

    async function getInitialInformation() {
        if(props.propPost?.image) setImageBase64(props.propPost?.image);
        setBody(props.propPost?.body)
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <>
        { 
            isUpdating != true ?
                <div class="tarjetamuro ">
                    <div class="cardheader">
                        <div>
                            <Link to={"/atomek/Perfil/" + props.propPost._user?._id}>
                            <img src={props.propPost._user?.image  ?? `https://avatars.dicebear.com/api/bottts/${props.propPost._user?._id}.svg`} alt="img-avatar" className='perfil'></img>
                            </Link>
                        </div>
                        <div>
                            <h4 className='grupo'>{props.propPost._community?.name}</h4>
                            <div className='informacion'>
                                <h5 className='usuario' >{props.propPost._user?.username} </h5>
                                <h5 className='Fecha' > {Moment(props.propPost?.date_create).format('DD/MM/yyyy')}</h5>
                            </div>
                        </div>
                        {
                            props?.propUserId == props.propPost._user?._id ?
                                <div id="Menupubli" className='MPubli'> 
                                <div className="dropdown text-end">
                                <a href="" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                                </a>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li className="dropdown-item" onClick={(e) => {handleEditPost(e, props.propPost?._id)}}>Editar</li>
                                    <li className="dropdown-item" onClick={(e) => {handleDeletePost(e, props.propPost?._id)}}>Elimiar</li>
                                </ul>
                                </div>
                                </div>
                            :
                                null
                        }
                    </div>
                    <div class="card-body">
                        <div className='card-title'>
                            <div>
                            <p class="cardtext">{props.propPost?.body}</p>
                            <div className='image-container'>
                                {/* <Carrousel_publicacion/> */}
                                {(props.propPost?.image &&
                                    <img src={props.propPost?.image} class="image" alt='...' ></img>
                                )}
                            </div>      
                            </div>
                            
                                    
                        </div>
                    </div>
                    <div className='informacion'> 
                    <FontAwesomeIcon icon={faStar}/>
                        <h6>{ props.propPost?.likesCount }</h6>
                    </div>
                    <div class="cardfooter ">
                        <div className='botones'>
                            <button className='btn_reaccion'
                                onClick={(e) => {handleAddLike(e, props.propPost?._id)}}> <FontAwesomeIcon icon={faStar} /> Felicitar </button>
                            <button className='btn_reaccion'> <FontAwesomeIcon icon={faPeopleCarry} /> Unise al reto </button>
                        </div>
                    </div>
                </div>
            :
                <div className='publicar'>
                    <div className='cabezera'>
                        <div className='Bloque'>
                            <img src={props.propPost._user?.image  ?? `https://avatars.dicebear.com/api/bottts/${props.propPost._user?._id}.svg`} alt="mdo" width="32" height="32" className="size rounded-circle"></img>
                        </div>
                        <div className='Bloque'>
                            <h5>{props.propPost._user?.username}</h5>
                            <div className='Forms'>
                            </div>
                        </div>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={body} 
                            onChange={({target}) => setBody(target.value)}/>
                        <label for="floatingTextarea">Descripcion</label>

                        {
                            imageBase64 != '' ?
                                <div className='image-container'>
                                    <img src={imageBase64} className="image" alt="Responsive image"></img>
                                </div>
                            :
                                null
                        }

                        <div class="grid ">
                            <div class="custom-file">
                                <input type="file" class="inputfile" onChange={(e) => handleShowImage(e.target.files)} id="customFile" />
                            </div>
                        </div>

                    </div>
                    <div class="d-grid gap-2">
                        <button class=" btn-img" type="button" onClick={handleCancelEditPost}>Cancelar</button>
                        <button class=" btn-img" type="button" onClick={(e) => handleUpdatePost(e, props.propPost?._id)}>Actualizar</button>
                    </div>
                </div>
        }
        </>
    )
}

export default Publicacion