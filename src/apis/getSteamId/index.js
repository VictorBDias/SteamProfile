import api from '~/services/api';

export const getSteamId = customUrl =>
  Promise.resolve(
    api.get(
      `ISteamUser/ResolveVanityURL/v0001/?key=4F4F16F4826479CA79C8E3857D884ED6&vanityurl=${customUrl}`
    )
  );
