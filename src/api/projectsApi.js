import axios from "axios";

export const projectsApi = axios.create({
  baseURL: "https://cryptic-sands-81509.herokuapp.com",
});
