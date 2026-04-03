import axios from "axios";

const system_key = "medicway_system_key_2024"; // System key for API authentication
// const URL = "https://medicwaycare-gggd.onrender.com/api/v1/";


const URL="https://medicwaycare-gggd.onrender.com/api/v1/";
const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "x-system-key": system_key,
  },
  withCredentials: true,
});

export default axiosInstance;
