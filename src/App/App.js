import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../Component/Header";
import SideMenu from "../Component/SideMenu";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import Employees from "../Employees/Employees";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#4caf50",
    // },
    background: {
      default: "#f4f5fd",
    },
  },
  // shape: {
  //   borderRadius: "12px",
  // },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
