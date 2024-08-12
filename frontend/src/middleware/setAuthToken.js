import axios from "axios";
 
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-api-key"] = `${token}`;
  } else {
    delete axios.defaults.headers.common["x-api-key"];
  }
};
 