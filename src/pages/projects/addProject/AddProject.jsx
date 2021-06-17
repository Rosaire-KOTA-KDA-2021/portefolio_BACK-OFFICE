import { Button, Container, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import InputField from "../../../components/shared/Input/InputField";
import { projectsApi } from "../../../api/projectsApi";

export const AddProject = ({ project }) => {
  const [values, setValues] = React.useState({
    title: project ? project.title : "",
    image: project ? project.image : "",
    subtitle: project ? project.subtitle : "",
    description: project ? project.description : "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const project = {
      title: values.title,
      image: "img.test.jpg",
      subtitle: values.subtitle,
      description: values.description,
    };
    projectsApi.post("/api/projects", values).then((response) => {
      setValues({
        title: "",
        image: "img.test.jpg",
        subtitle: "img",
        description: "",
      });

      return alert(response.data);
    });
  };
  return (
    <>
      <Container center>
        <Container component={Paper}>
          <Typography center>Ajouter un nouveau projet</Typography>
          <form action="" method="post" onSubmit={handelSubmit}>
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
                  values={values.subtitle}
                  handleChange={handleChange}
                  inputName="subtitle"
                  label="Sous titre du projet"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} md={5}>
                <InputField
                  values={values.description}
                  handleChange={handleChange}
                  inputName="description"
                  label="Description"
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
