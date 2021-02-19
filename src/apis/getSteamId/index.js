import api from '~/services/api';

export const getSteamId = customUrl =>
  Promise.resolve(
    api.get(
      `ISteamUser/ResolveVanityURL/v0001/?key=483F111C4F4707BEC2B4B5639FA3EA8D&vanityurl=${customUrl}`
    )
  );
