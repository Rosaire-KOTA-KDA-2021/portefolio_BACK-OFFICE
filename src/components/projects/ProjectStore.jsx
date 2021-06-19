import React, { useEffect, useState } from "react";
import { projectsApi } from "../../api/projectsApi";
import ProjectsList from "./List/ProjectsList";

export const ProjectsStore = () => {
  const [projects, setProjects] = useState(
    localStorage.getItem("projects") ? localStorage.getItem("projects") : []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    projectsApi.get("/api/projects/").then((response) => {
      const data = response.data;
      if (data.length > 0) {
        setProjects(data);
        setIsLoading(true);
        localStorage.setItem("projects", JSON.stringify(data));
      }
    });
  };
  const handelDelete = (id) => {
    projectsApi.delete(`/api/projects/${id}`).then((res) => {
      return fetchProjects();
    });
  };

  if (!isLoading) return <div>chargement...</div>;
  return <ProjectsList projects={projects} onDelete={handelDelete} />;
};
