import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001'; // Cambia la URL según la configuración de tu json-server
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = () => {
  const urlFavorites = '/favorites';

  const getAll = () => {
    return axios.get(urlFavorites);
  };

  const getById = (id) => {
    return axios.get(`${urlFavorites}/${id}`);
  };

  const create = (data) => {
    return axios.post(urlFavorites, data);
  };

  const update = (id, data) => {
    return axios.put(`${urlFavorites}/${id}`, data);
  };

  const remove = (id) => {
    return axios.delete(`${urlFavorites}/${id}`);
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
