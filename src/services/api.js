import axios from "axios";

// grab the api url from env variables
const API_URL = `${process.env.REACT_APP_API_URL}`;
const LOCAL_STORAGE_KEY = `${process.env.REACT_APP_STORAGE_KEY}`

// we communicate with JSON
const DEFAULT_HEADERS = {
  "content-type": "application/json"
};

// on each request we need to send auth headers
axios.interceptors.request.use(
    config => {
      const { accessToken, clientToken, userToken } =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

      Object.assign(config.headers.common, {
        "token-type": "Bearer",
        "access-token": accessToken,
        client: clientToken,
        uid: userToken
      });

      return config;
    },
    error => Promise.reject(error)
);

/**
 * on each response we need to grab the auth headers
 * and persist it to a local storage
 */
axios.interceptors.response.use(
    response => {
      const accessToken = response.headers["access-token"];
      const clientToken = response.headers["client"];
      const userToken = response.headers["uid"];

      if (accessToken) {
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({ accessToken, clientToken, userToken })
        );
      }
      return response;
    },
    error => Promise.reject(error)
);

/**
 *  helper method to perform an api requests
 *
 * @param path
 * @param method
 * @param data
 * @param headers
 * @returns {Promise<*>}
 */
export const apiRequest = async ({ path, method = "GET", data, headers = {} }) => {
  try {
    const response = await axios({
      url: API_URL + path,
      method,
      data: data || {},
      headers: Object.assign({}, DEFAULT_HEADERS, headers)
    });

    return response;
  } catch (error) {
    return error;
  }
};