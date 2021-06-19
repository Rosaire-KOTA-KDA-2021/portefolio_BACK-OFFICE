import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme, number) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: `${150}%`,
  },
}));

export default function InputField({
  values,
  handleChange,
  inputName,
  label,
  number,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={values}
            defaultvalue={values}
            onChange={handleChange}
            labelWidth={100}
            name={inputName}
            required
          />
        </FormControl>
      </div>
    </div>
  );
}
