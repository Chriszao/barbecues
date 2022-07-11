import axios from 'axios';

const api = axios.create({
  baseURL: 'https://barbecues-backend-app.herokuapp.com',
});

export default api;
