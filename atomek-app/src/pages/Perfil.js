import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Content1 from '../components/ContentPerfil';
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const Perfil =()=>{
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
            <Content1></Content1>
            </React.Fragment>    
        : null
    )
}

export default Perfil