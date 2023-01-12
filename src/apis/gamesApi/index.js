import api from '~/services/api';

export const getOwnedGames = steamId =>
  Promise.resolve(
    api.get(
      `IPlayerService/GetOwnedGames/v0001/?key=4F4F16F4826479CA79C8E3857D884ED6&steamid=${steamId}&include_appinfo=true&format=json`
    )
  );
