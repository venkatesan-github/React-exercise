import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));

const ButtonInput = (props) => {
  const classes = useStyles();

  const { variant, color, size, text, onClick, ...other } = props;

  return (
    <Button
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </Button>
  );
};

export default ButtonInput;
