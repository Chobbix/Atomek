import React, { useEffect, useState } from 'react'
import SliderStreaks from "../components/Slider_Streaks";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const StreaksCommunity = () => {
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
        <SliderStreaks/>
      </React.Fragment>
    : null
  );
};

export default StreaksCommunity;
