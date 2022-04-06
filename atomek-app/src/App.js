import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './pages/Inicio';
import React from 'react';
import Lobby from './pages/Lobby';
import Login from './pages/Login';
import CC from './pages/CrearCuenta';
import Perfil from './pages/Perfil';
import Muro from './pages/Muro';
import Publicacion from './components/Publicacion';

function App() {
  return (
    <React.Fragment>    
      <Muro/>
    </React.Fragment>
  );
}

export default App;
