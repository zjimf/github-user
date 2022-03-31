/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Nav from "./components/public/Nav";
import DefaultUsers from "./components/public/DefaultUsers";
import UserCard from "./components/public/UserCard";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, Grid } from "@material-ui/core";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Mukta, sans-serif"].join(""),
    },
  },
});

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isConnect, setIsConnect] = useState(true);
  const isEmpty = Object.keys(userInfo).length === 0;
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Nav setUserInfo={setUserInfo} setIsConnect={setIsConnect} />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          {isEmpty ? (
            <DefaultUsers />
          ) : (
            <Grid item key={uuidv4()}>
              {isConnect ? (
                <UserCard user={userInfo} />
              ) : (
                <Typography variant="h3" color="#CDD9E5">
                  user not found
                </Typography>
              )}
            </Grid>
          )}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
