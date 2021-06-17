import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { projectsApi } from "../../../Api/projectsApi";
export const ProjectItem = ({ project, onDelete }) => {
	return (
		<>
			<TableRow key={project.id}>
				<TableCell component="th" scope="row">
					{project.description}
				</TableCell>
				<TableCell align="right">{project.id}</TableCell>
				<TableCell align="right">{project.title}</TableCell>
				<TableCell align="right">
					<ButtonGroup
						color="primary"
						aria-label="outlined secondary button group"
					>
						<Button>
							<Link to="/">Ajouter</Link>
						</Button>
						<Button>
							<Link to={`update/${project.id}`}>Modifier</Link>
						</Button>
						<Button onClick={() => onDelete(project.id)}>Supprimer</Button>
					</ButtonGroup>
				</TableCell>
			</TableRow>
		</>
	);
};
