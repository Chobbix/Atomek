import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import ResponsesList from '../components/Responses_list';
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';
import ErrorContent from '../components/Error_Content';

const Error =()=>{

    return(
        <React.Fragment>    
        <Header></Header>
        <ErrorContent></ErrorContent>
        </React.Fragment> 
    )
}

export default Error