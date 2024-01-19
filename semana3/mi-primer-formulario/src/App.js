// import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registro from './components/Registro';
import Perfil from './components/Perfil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galeria from './components/Galeria';

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
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Registro' element={<Registro/>}/>
            <Route path='/Perfil' element={<Perfil/>}/>
            <Route path='/Galeria' element={<Galeria/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  </div>
);
}

export default App;