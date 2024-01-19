import React from 'react';
import {Link} from "react-router-dom";
function Navbar({ setRoute }) {
  return (
    <nav>
        <ul>
        <li>
        <Link to ="/">inicio</Link>
        </li>
        <li>
        <Link to ="/login">inicio</Link>
        </li>
        </ul>
      {/* <button onClick={() => setRoute('home')}>Login</button>   */}
      {/* <button onClick={() => setRoute('login')}>Login</button> */}
      {/* <button onClick={() => setRoute('registro')}>Registro</button> */}
      {/* <button onClick={() => setRoute('perfil')}>Perfil</button> */}
    </nav>
  );
}

export default Navbar;