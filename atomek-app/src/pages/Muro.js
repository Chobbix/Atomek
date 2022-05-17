import React, { useEffect, useState } from 'react'
import Box_muro from '../components/Box_muro'
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const Muro = () => {
  const Navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validate = validateUserSession();
    if (validate == true) { setIsValid(true); }
    else { Navigate('/atomek/login'); }
  }, []);

  return (
    isValid == true ? 
      <Box_muro/>
    : null
  )
}

export default Muro