import axios from "axios";

export const projectsApi = axios.create({
	baseURL: "http://localhost:3964",
});

export const fetchProjects = async () => {
	return await (
		await projectsApi.get("/api/projects/")
	).data;
};
