import React, { useState, useEffect } from 'react'
import './Estilos/Slider_style.css'
import Response from "./Response";
import { useParams } from 'react-router-dom';
import { ResponseGetResponsesBySubscription } from '../services/ResponseServices';
import { SubscriptionGetById } from '../services/SubscriptionServices';

const Responses_list = () => {
    
    const [userSesion, setUserSesion] = useState();
    const [responses, setResponses] = useState([]);
    const [subscription, setSubscription] = useState();
    const params = useParams();

    async function getInitialInformation() {
        let userSession = JSON.parse(localStorage.getItem("UserSession"));
        setUserSesion(userSession);

        const responsesResponse = await ResponseGetResponsesBySubscription(params?.idSubscription);
        setResponses(responsesResponse);

        const subscriptionResponse = await SubscriptionGetById(params?.idSubscription);
        setSubscription(subscriptionResponse);
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <div className="Response-Container" id="Registro">
            {responses?.map((response, index) => (
                <Response key={index} 
                        propUsername={userSesion?.username} 
                        propUserImage={userSesion?.image} 
                        propResponse={response} 
                        propSubscriptionName={subscription?._streak.title} 
                        propSubscriptionType={subscription?._streak.type} 
                />
            ))}
        </div>
    );
};

export default Responses_list;
