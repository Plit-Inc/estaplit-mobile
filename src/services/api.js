import axios from 'axios';

const api = axios.create({
  baseURL: 'https://estaplit-backend-ggibamede.vercel.app',
});

export default api;
