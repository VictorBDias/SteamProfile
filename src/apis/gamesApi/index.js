import axios from 'axios';

const api = axios.create({
  baseUrl:
    'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=483F111C4F4707BEC2B4B5639FA3EA8D&steamid=76561198300021798&format=json',
});

export default api;
