import React, { useEffect } from 'react'
import Box_muro from '../components/Box_muro'
import { useNavigate } from 'react-router-dom';
import validateUserSession from '../functions/validateUserSession';

const Muro = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    //if (validateUserSession()) { Navigate('/atomek/login') }
  }, []);

  return (
    <Box_muro/>
  )
}

export default Muro