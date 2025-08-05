// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://music-streaming-back-5.onrender.com', // replace with your real Render URL
});

export default API;
