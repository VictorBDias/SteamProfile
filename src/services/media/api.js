import axios from 'axios';

const api = axios.create({
  baseURL: 'http://media.steampowered.com/',
});

export default api;
