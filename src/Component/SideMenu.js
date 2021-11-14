import { makeStyles } from "@material-ui/core";
import React from "react";

const useSyles = makeStyles({
  sideMenuStyle: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = useSyles();
  return <div className={classes.sideMenuStyle}></div>;
};

export default SideMenu;
