import api from '~/services/api';

export const getOwnedGames = steamId =>
  Promise.resolve(
    api.get(
      `IPlayerService/GetOwnedGames/v0001/?key=483F111C4F4707BEC2B4B5639FA3EA8D&steamid=${steamId}&include_appinfo=true&format=json`
    )
  );
