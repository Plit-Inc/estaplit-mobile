import api from './api';

export async function getReservations(latitude, longitude) {
  const response = await api.get(
    `/search/search_parkings?lat=${latitude}&long=${longitude}`,
    {},
  );
  if (response.status !== 200) throw new Error(response.status);

  return response;
}

export async function getCloseParkings() {
  const response = await api.get('', {});
  if (response.status !== 200) throw new Error(response.status);

  return response;
}
