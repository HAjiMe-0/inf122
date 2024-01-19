import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registro from './components/Registro';
import Perfil from './components/Perfil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  /*const [route, setRoute] = useState('login'); // Establece la ruta inicial

  let Component; // Este será el componente que renderizamos basado en la ruta
  switch (route) {
    case 'login':
      Component = Login;
      break;
    case 'registro':
      Component = Registro;
      break;
    case 'perfil':
      Component = Perfil;
      break;
    default:
      Component = Login; // Ruta por defecto
  }

  return (
    <div>
      <Navbar setRoute={setRoute} />
      <Component />
    </div>
  );
}*/
return(
  <div className='App'>
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact Component={{Login}}/>
          <Route path='/Login' exact Componen0t={{Login}}/>
          <Route path='/Registro' exact Component={{Registro}}/>
          <Route path='/Perfil' exact Component={{Perfil}}/>
        </Switch>
      </div>
    </Router>
  </div>
)
}

export default App;