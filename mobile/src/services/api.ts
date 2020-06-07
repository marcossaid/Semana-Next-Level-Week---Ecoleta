import axios from "axios";

const api = axios.create({
  baseURL: "http://10.5.23.109:3333",
});

export default api;
