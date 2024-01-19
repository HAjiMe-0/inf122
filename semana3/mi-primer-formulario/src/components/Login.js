import React, { useState } from 'react';

function Login({ onCommonAction }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    onCommonAction(); // Si necesitas ejecutar la acción común al hacer login
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Usuario:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Ingresar" />
        <button type="button" onClick={onCommonAction}>Botón Común</button>
      </form>
    </div>
  );
}

export default Login;