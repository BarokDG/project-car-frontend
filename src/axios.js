import axios from "axios";

const baseUrl = "'http://127.0.0.1:5000'";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
