import React from 'react';
import {Link,Outlet} from "react-router-dom";
function Navbar({ setRoute }) {
  return (
    <>
    <nav>
        <ul>
        <li>
        <Link to ="/">inicio</Link>
        </li>
        <li>
        <Link to ="/login">Login</Link>
        </li>
        <li>
        <Link to ="/Registro">Registro</Link>
        </li>
        <li>
        <Link to ="/Perfil">Perfil</Link>
        </li>
        <li>
        <Link to ="/Galeria">Galeria</Link>
        </li>
        </ul>
      {/* <button onClick={() => setRoute('home')}>Login</button>   */}
      {/* <button onClick={() => setRoute('login')}>Login</button> */}
      {/* <button onClick={() => setRoute('registro')}>Registro</button> */}
      {/* <button onClick={() => setRoute('perfil')}>Perfil</button> */}
    </nav>
    <Outlet/>
    </>
  );
}

export default Navbar;