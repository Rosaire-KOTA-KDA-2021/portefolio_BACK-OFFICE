import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { projectsApi } from "../../../api/projectsApi";
import RecipeReviewCard from "../../../components/shared/card/RecipeReviewCard";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProjectById();
  });
  const fetchProjectById = () => {
    projectsApi.get(`/api/projects/${id}`).then((response) => {
      if (response.data) {
        setProject(response.data);
      } else return alert("Cet projet n'existe pas.");
    });
  };
  return (
    <>
      <Container center>
        <RecipeReviewCard project={project} />
      </Container>
    </>
  );
};

export default Detail;
