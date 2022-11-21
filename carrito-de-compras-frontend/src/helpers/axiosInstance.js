import axios from "axios";
import { defaultUrl } from "../store/actions/types";

const api = axios.create({
  baseURL: `${defaultUrl}`,
});
api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
