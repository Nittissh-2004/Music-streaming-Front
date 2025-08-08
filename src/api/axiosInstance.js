import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://music-streaming-back-5.onrender.com/api", // Base API URL
});

export default axiosInstance;
