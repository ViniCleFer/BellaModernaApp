import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.13:3333',
});

export default api;

/* 

  baseURL para Emulador Android
  baseURL: 'http://10.0.2.2:3333'
  
  baseURL para Emulador Ios
  baseURL: 'http://localhost:3333'  
  
*/