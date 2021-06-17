import axios from "axios";

export const projectsApi = axios.create({
  baseURL: "http://localhost:3964",
});
