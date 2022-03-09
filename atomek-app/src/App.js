import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './pages/Inicio';
import React from 'react';

function App() {
  return (
    <React.Fragment>    
      <Inicio/>
    </React.Fragment>
  );
}

export default App;
