import React from 'react'

function PictureObject({image}) {
  return (
    // <div>En este componente desarrollarás la lógica y la estructura de los objetos</div>
    <div className="image-card">
      <h3>Id: {image.id}</h3>
      <h2>Autor: {image.author}</h2>
      <img
        src={image.download_url}
        alt={`Imagen por ${image.author}`}
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
}

export default PictureObject;