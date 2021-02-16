import api from '~/services/api';

export const getUser = steamId =>
  Promise.resolve(
    api.get(
      `ISteamUser/GetPlayerSummaries/v0002/?key=483F111C4F4707BEC2B4B5639FA3EA8D&steamids=${steamId}`
    )
  );
