import axios from 'axios';

const customFetch = axios.create({
  baseURL: '/api/v1',
});

// // Add headers to disable caching
// customFetch.interceptors.request.use((config) => {
//   config.headers['Cache-Control'] = 'no-cache';
//   config.headers['Pragma'] = 'no-cache';
//   config.headers['Expires'] = '0';
//   return config;
// });

export default customFetch;
