import React, { useState, useEffect } from 'react'
import './Estilos/Publicar_style.css'
import ErrorMessage from './ErrorMessage';
import { Link, useParams } from "react-router-dom";
import { communityGetComunitiesByUser } from '../services/CommunityServices'
import { StreakGetByCommunity } from '../services/StreakServices';
import { PostCreate, PostUpdateImage } from '../services/PostServices';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postSchema } from '../validations/PostSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const Publicar = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(postSchema)
    });

    const [userSesion, setUserSesion] = useState();
    const [communities, setCommunities] = useState();
    const [streaks, setStreaks] = useState();

    const params = useParams();
    const navigate = useNavigate();

    async function handleOnChangeCommunity(communityValue) {
        setStreaks(await StreakGetByCommunity(communityValue));
    }

    const postSubmit = async (data) => {
        if(params.id) {
            try {
                const fileInput = document.getElementById('customFile');
                const image = fileInput.files[0];

                const responseData = await PostCreate({
                    _community: data._communityId,
                    body: data.body,
                    _user: userSesion._id,
                    ...(data._streakId != "" && {_streak: data._streakId})
                });

                const postId = responseData._id;
                if (image) {
                    await PostUpdateImage(postId, image);
                }
            } 
            catch (err) {
                console.log(err);
            }

            console.log("registrado con exito");
        }
    }

    function loadSelectInput(id) {
        if(id == 'Mi-Muro') {
            return  <>
                    <select class="form-select" aria-label="Default select example" {...register("_communityId", {
                        onChange: ({target}) => handleOnChangeCommunity(target.value)
                    })} >
                        <option selected disabled value={""}>Grupo:</option>
                        {communities?.map((com, index) => (
                            <option key={index} value={com._id}> {com.name}</option>
                        ))}
                    </select>
                    
                    <select class="form-select" aria-label="Default select example" {...register("_streakId")} >
                        <option selected disabled value={""}>Racha:</option>
                        {streaks?.map((streak, index) => (
                            <option key={index} value={streak._id}> {streak.title}</option>
                        ))}
                    </select>
                    </>
        }
        else {
            return <select class="form-select" aria-label="Default select example" {...register("_streakId")} >
                        <option selected disabled value={""}>Racha:</option>
                        {streaks?.map((streak, index) => (
                            <option key={index} value={streak._id}> {streak.title}</option>
                        ))}
                    </select>;
        }
    }

    async function getInitialInformation() {
        try {
            const userJSON = localStorage.getItem("UserSession");
            const usuario = (JSON.parse(userJSON));
            const data = await communityGetComunitiesByUser(usuario);
            setUserSesion(usuario);
            setCommunities(data);

            if(params.id != 'Mi-Muro') {
                setStreaks(await StreakGetByCommunity(params.id));
            }
        }
            catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <div className='publicar'>
            <form onSubmit={handleSubmit(postSubmit)}>
                <div className='cabezera'>
                    <div className='Bloque'>
                        <img src={userSesion?.image  ?? `https://avatars.dicebear.com/api/bottts/${userSesion?._id}.svg`} alt="mdo" width="32" height="32" className="size rounded-circle"></img>
                    </div>
                    <div className='Bloque'>
                        <h5>{userSesion?.username}</h5>
                        <div className='Forms'>
                            {loadSelectInput(params.id)}
                        </div>
                    </div>
                </div>

                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" {...register("body")} />
                    <label for="floatingTextarea">Descripcion</label>

                    <div class="grid ">
                        <div class="custom-file">
                            <input type="file" class="inputfile" id="customFile" />
                        </div>
                    </div>

                    {Object.keys(errors).map((key) => (
                        <ErrorMessage message={errors[key].message} />
                    ))}
                </div>
                <div class="d-grid gap-2">
                    <button class=" btn-img" type="submit">Publicar</button>
                </div>
            </form>
        </div>
    )
}

export default Publicar