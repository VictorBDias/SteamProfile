import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.steampowered.com/',
});

export default api;
