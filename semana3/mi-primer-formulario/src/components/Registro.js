import React, { useState } from 'react';

function Registro({ onCommonAction }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el registro
    onCommonAction(); // Si necesitas ejecutar la acción común al registrar
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          id="contrasena"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <input type="submit" value="Registrar" />
        <button type="button" onClick={onCommonAction}>Botón Común</button>
      </form>
    </div>
  );
}

export default Registro;