import axios from "axios";

const api = axios.create({
  baseURL: "http://10.6.38.166:19000",
});

export default api;
