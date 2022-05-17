import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import ResponsesList from '../components/Responses_list';
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const Responses =()=>{
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
            <ResponsesList></ResponsesList>
            </React.Fragment> 
        : null   
    )
}

export default Responses