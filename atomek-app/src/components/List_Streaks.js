import React, { useState, useEffect } from 'react'
import './Estilos/Slider_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";
import { CommunityGetComunityById } from '../services/CommunityServices';
import { StreakGetByCommunity } from '../services/StreakServices';
import { SubscriptionCreate } from '../services/SubscriptionServices';

const ListStreaks = (props) => {

    const [streaks, setStreaks] = useState([]);
    const [titlePage, setTitlePage] = useState('');
    const [streakId, setStreakId] = useState('');
    const [userSession, setUserSession] = useState();
    const params = useParams();

    const handleCreateSubscription = async (event, streakId) => {
        try {
            await SubscriptionCreate({
                _id: streakId,
                _user: userSession._id
            });
            console.log('Se registro con exito');
        }
        catch(err) {
            console.log(err);
        }
    }

    async function getInitialInformation() {
        try {
            const userJSON = localStorage.getItem("UserSession");
            const usuario = (JSON.parse(userJSON));
            setUserSession(usuario);

            if(props?.propParamId == 'Mi-Muro') { 
                setTitlePage('Rachas suscritas por el usuario') 
            }
            else { 
                const communityResponse = await CommunityGetComunityById(props.propParamId);
                setTitlePage('Rachas creadas por la comunidad: ' + communityResponse?.name)
                
                const streaksResponse = await StreakGetByCommunity(props.propParamId);
                setStreaks(streaksResponse);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <div className="my-3 p-3 rounded border" id="RecuadroRachas">
            <h6 className="text-light border-bottom pb-2 mb-0 ">{titlePage}</h6>
            
            {streaks?.map((streak, index) => (
            <div key={index} className="d-flex text-muted pt-3">
                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB" /><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                        <strong className="text-light">{streak.title}</strong>
                        <a className="text-light cursor-pointer" onClick={(e) => {handleCreateSubscription(e, streak._id)}}><FontAwesomeIcon icon={faPlus} value={streak._id} /></a>
                    </div>
                    {
                        streak.type == 1 ? <span className="d-block">Racha de tipo: Imagen</span>
                        : <span className="d-block">Racha de tipo: Texto</span>
                    }
                </div>
            </div>
            ))}
        </div>
    )
};

export default ListStreaks;
