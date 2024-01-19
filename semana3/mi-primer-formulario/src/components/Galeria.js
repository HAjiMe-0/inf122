import React from 'react';
// import './Galeria.css';

function Galeria() {
  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <div className="galeria-container">
        <div>
          <img src={require("../components/imagenes/")} className="galeria-imagen" />
          <p className="galeria-titulo">Imagen 1</p>
        </div>
        <div>
          <img src="url-de-la-imagen-2.jpg" alt="Descripción de la imagen 2" className="galeria-imagen" />
          <p className="galeria-titulo">Imagen 2</p>
        </div>
        {/* Añadir más imágenes aquí de forma similar */}
      </div>
    </div>
  );
}

export default Galeria;