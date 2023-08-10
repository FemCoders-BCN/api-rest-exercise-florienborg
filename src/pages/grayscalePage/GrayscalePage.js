import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './GrayscalePage.css';

function GrayscalePage() {
  const [grayscaleImage, setGrayscaleImage] = useState(null);

  useEffect(() => {
    const loremService = LoremPicsumService();

    loremService.getRandomGrayscale()
      .then(response => {
        setGrayscaleImage(`https://picsum.photos/500/600?grayscale`);
      })
      .catch(error => {
        console.error('Error fetching grayscale image:', error);
      });
  }, []);
  
  return (
    <main className='main-container'>
        <h2>Imagen en escala de grises</h2>
        <Navbar/>
        {grayscaleImage && (
          <div className='image-gray'>
        <img
          src={grayscaleImage}
          alt="Imagen en escala de grises"
          style={{ maxWidth: '100%' }}
        />
        </div>
      )}
    </main>
  )
}

export default GrayscalePage;