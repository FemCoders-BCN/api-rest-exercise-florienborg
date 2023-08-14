import React, { useState } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import axios from 'axios'; // Importa axios para hacer la solicitud a la API de Lorem Picsum
import './AddToFavoritesForm.css';

function AddToFavoritesForm({ onCardAdded }) {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://picsum.photos/id/${id}/info`);
      const newCard = {
        id: response.data.id,
        author: response.data.author,
        download_url: response.data.download_url,
      };

      const favoriteService = FavoriteService();

      favoriteService.create(newCard)
        .then(() => {
          onCardAdded(); // Llama a esta función para actualizar la lista de favoritos
          // Limpia el campo del formulario
          setId('');
        })
        .catch(error => {
          console.error('Error al crear favorito', error);
        });
    } catch (error) {
      console.error('Error al obtener detalles de la imagen:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='main-container'>
      <label>
        Ingrese el ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <button type="submit" className='fav-button'>Agregar a favoritos</button>
    </form>
  );
}

export default AddToFavoritesForm;
