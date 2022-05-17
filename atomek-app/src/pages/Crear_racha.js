import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import ContRacha from '../components/Contenido_CrearRacha';
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const CrearRacha =()=>{
    const Navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validate = validateUserSession();
        if (validate == true) { setIsValid(true); }
        else { Navigate('/atomek/login'); }
    }, []);

    return(
        isValid == true ? 
            <React.Fragment>    
            <Header></Header>
            <ContRacha></ContRacha>
            </React.Fragment>    
        : null
    )
}

export default CrearRacha