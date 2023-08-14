import React from 'react';
import './PictureObject.css';

function PictureObject({image}) {
  return (
    // <div>En este componente desarrollarás la lógica y la estructura de los objetos</div>
    <div className="image-card">
      <h3>Id: {image.id}</h3>
      <h3>Autor: {image.author}</h3>
      <img
        src={image.download_url}
        alt={`Imagen por ${image.author}`}
      />
    </div>
  );
}

export default PictureObject;