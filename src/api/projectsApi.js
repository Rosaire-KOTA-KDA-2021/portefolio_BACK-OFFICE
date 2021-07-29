import axios from "axios";

export const projectsApi = axios.create({
  baseURL: "https://portofolio-cms-api.herokuapp.com",
});
