import React, { useEffect, useState } from 'react'
import SliderViewAdmin from "../components/Slider_ViewAdmin";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const ViewAdmin = () => {
  const Navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validate = validateUserSession();
    if (validate == true) { setIsValid(true); }
    else { Navigate('/atomek/login'); }
  }, []);

  return (
    isValid == true ? 
      <React.Fragment>
        <Header/>
        <SliderViewAdmin/>
      </React.Fragment>
    : null
  );
};

export default ViewAdmin;
