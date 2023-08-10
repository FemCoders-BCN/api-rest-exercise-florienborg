import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './PicturePage.css';

function PicturePage() {
  const [searchId, setSearchId] = useState('');
  const [image, setImage] = useState('');

  const handleSearch = () => {
    if (searchId) {
      const loremService = LoremPicsumService();
      loremService.getById(searchId, '400/500')
        .then(response => {
          const imageUrl = `https://picsum.photos/id/${searchId}/400/500`;
          setImage(imageUrl);
        })
        .catch(error => {
          console.error('Error al buscar imagen por su ID', error);
        });
    }
  };

  return (
    <main className='main-container'>
      <h2>Buscar imagen por ID</h2>
      <Navbar />
      <div className='search-container'>
      <input
        type="text"
        placeholder="Ingrese ID de la imagen"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch} className='search-button'>Buscar</button>
      </div>
      {image && (
        <div className='image-container'>
          <img
            src={image}
            alt={`Imagen con ID ${searchId}`}
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
    </main>
  );
}

export default PicturePage;


