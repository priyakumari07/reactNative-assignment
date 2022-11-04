import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demo.bigiron.com/api',
});

export default api;
