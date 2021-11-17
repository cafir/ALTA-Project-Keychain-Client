import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Paper,
} from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useStyles from "./styles";
import keyChainLogo from "../../images/KeyChainPutih.png";

import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <img className={classes.imageNavbar} src={keyChainLogo} alt="icon" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" className={classes.log}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {!user && (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please sign In
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Navbar;
