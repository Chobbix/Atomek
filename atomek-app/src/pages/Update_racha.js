import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import ContUpdRacha from '../components/Contenido_UpdateRacha';
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
            <ContUpdRacha></ContUpdRacha>
            </React.Fragment>    
        : null
    )
}

export default CrearRacha