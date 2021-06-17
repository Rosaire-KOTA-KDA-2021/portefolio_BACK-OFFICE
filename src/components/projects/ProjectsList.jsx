import React, { useEffect, useState } from "react";
import "./Projects.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Container from "@material-ui/core/Container";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ProjectItem } from "./protectItem/ProjectItem";
import { projectsApi } from "../../Api/projectsApi";
import AlertDialog from "../shared/AlertDialog";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export const Projects = ({ projects, onDelete }) => {
	const classes = useStyles;
	return (
		<Container>
			<TableContainer component={Paper}>
				<Table
					className={classes.table}
					size="small"
					aria-label="a dense table"
				>
					<TableHead>
						<TableRow>
							<TableCell>Description</TableCell>
							<TableCell align="right">ID</TableCell>
							<TableCell align="right">Titre</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{projects?.map((row) => (
							<ProjectItem project={row} onDelete={onDelete} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};
export const ProjectsStore = () => {
	const [projects, setProjects] = useState([]);
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
			}
		});
	};
	const handelDelete = (id) => {
		projectsApi.delete(`/api/projects/${id}`).then((res) => {
			return fetchProjects();
		});
	};

	if (!isLoading) return <div>chargement...</div>;
	return <Projects projects={projects} onDelete={handelDelete} />;
};
