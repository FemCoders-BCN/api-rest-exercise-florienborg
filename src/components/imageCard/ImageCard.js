import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <h3>ID: {image.id}</h3>
      <h3>Autor: {image.author}</h3>
      <img src={image.download_url} alt={image.author} />
    </div>
  );
};

export default ImageCard;
