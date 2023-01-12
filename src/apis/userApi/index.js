import api from '~/services/api';

export const getUser = steamId =>
  Promise.resolve(
    api.get(
      `ISteamUser/GetPlayerSummaries/v0002/?key=4F4F16F4826479CA79C8E3857D884ED6&steamids=${steamId}`
    )
  );
