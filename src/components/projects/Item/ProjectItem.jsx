import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import AlertDialog from "../../shared/AlertDialog/AlertDialog";
export const ProjectItem = ({ project, onDelete }) => {
  return (
    <>
      <TableRow key={project.id}>
        <TableCell component="th" scope="row">
          <Link to={`/detail/${project.id}`}> {project.description}</Link>
        </TableCell>

        <TableCell align="right">
          <Link to={`/detail/${project.id}`}>{project.title}</Link>
        </TableCell>
        <TableCell align="right">
          <Link to={`/detail/${project.id}`}>{project.github_link}</Link>
        </TableCell>
        <TableCell align="right">
          <ButtonGroup disableElevation variant="contained" color="default">
            <Button>
              <Link to={`update/${project.id}`}>Modifier</Link>
            </Button>

            <AlertDialog projectId={project.id} onDelete={onDelete} />
          </ButtonGroup>
        </TableCell>
      </TableRow>
    </>
  );
};
