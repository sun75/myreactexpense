// src/services/api.js
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://confident-cat-production.up.railway.app",
});

export default instance;
