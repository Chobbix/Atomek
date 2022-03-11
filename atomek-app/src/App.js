import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './pages/Inicio';
import React from 'react';
import Login from './pages/Login';
import CC from './pages/CrearCuenta';
import Perfil from './pages/Perfil';



function App() {
  return (
    <React.Fragment>    
      <Perfil/>
    </React.Fragment>
  );
}

export default App;
