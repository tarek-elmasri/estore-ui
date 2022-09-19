import ls from 'local-storage'
import axios from 'axios'
import { updateSession } from '.';
import { queryClient } from '../application/ApiClientProvider'
import { CURRENT_USER_QUERY_KEY } from './services/useUserProfile';

const locale = ls.get("locale");

const axiosInstance = axios.create({
  baseURL: `https://estore-demo-api.herokuapp.com/api/${locale ? locale : "ar"
    }`,
  withCredentials: true,
});

axiosInstance.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";
axiosInstance.defaults.headers.common["Accept"] =
  "application/json; charset=utf-8";

// adding access token to requests if present
axiosInstance.interceptors.request.use((req) => {
  let tokens = ls.get("tokens");
  if (tokens && tokens.access_token) {
    req.headers["Authorization"] = `Bearer ${tokens.access_token}`;
  }
  return req;
});

// intercepting expired token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.code === "UA411" &&
      error.config
    ) {

      try {
        const { data } = await updateSession();
        ls.set("tokens", data);
        return axiosInstance.request(error.config);
      } catch (err) {
        ls.remove("tokens");
        queryClient.resetQueries(CURRENT_USER_QUERY_KEY);
        return Promise.reject(err);
      }
    } else {
      return Promise.reject(error);
    }
  }
);


export default axiosInstance