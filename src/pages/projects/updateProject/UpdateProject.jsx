import { Button, Container, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import InputField from "../../../components/shared/Input/InputField";
import { projectsApi } from "../../../api/projectsApi";
import { useParams, Redirect } from "react-router-dom";

export const UpdateProject = (defaultValue = {}) => {
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  const [values, setValues] = React.useState(() => {
    const project = JSON.parse(localStorage.getItem("projects")).find(
      (item) => parseInt(item.id) === parseInt(id)
    );
    return project !== null ? project : defaultValue;
  });

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handelUpdate = (event) => {
    event.preventDefault();

    projectsApi.put(`/api/projects/${id}`, values).then((response) => {
      setValues({
        title: "",
        image: "img.test.jpg",
        used_technologies: "img",
        description: "",
      });
      setRedirect(true);
      return alert(response.data);
    });
  };
  if (redirect) return <Redirect to="/" />;
  return (
    <>
      <Container center>
        <Container component={Paper}>
          <Typography center>Ajouter un nouveau projet</Typography>
          <form action="" method="post" onSubmit={handelUpdate}>
            <Grid container>
              <Grid item xs={12} sm={4} md={5}>
                <InputField
                  values={values.title}
                  handleChange={handleChange}
                  inputName="title"
                  label="Titre du projet"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={6}>
                <InputField
                  values={values.used_technologies}
                  handleChange={handleChange}
                  inputName="used_technologies"
                  label="Sous titre du projet"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} md={5}>
                <InputField
                  values={values.github_link}
                  handleChange={handleChange}
                  inputName="github_link"
                  label="Lien Github"
                  number={300}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <InputField
                  values={values.image}
                  handleChange={handleChange}
                  inputName="image"
                  label="Lien Image Cloudinay"
                  number={300}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <InputField
                  values={values.description}
                  handleChange={handleChange}
                  inputName="description"
                  label="Description"
                  number={300}
                />
              </Grid>
            </Grid>
            <Button
              color="primary"
              variant="contained"
              spacing="2"
              type="submit"
            >
              Enregistrer
            </Button>
          </form>
        </Container>
      </Container>
    </>
  );
};
