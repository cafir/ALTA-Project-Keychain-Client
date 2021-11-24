import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper, Collapse, Container } from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import useStyles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { createHolder, updateHolder, getHolders } from "../../actions/holders";
import { useNavigate } from "react-router-dom";
import { bytes } from '../encryptionHandler'

const Form = ({ currentId, setCurrentId, page }) => {
  const [holderData, setHolderData] = useState({
    name: "",
    password: "",
    tags: "",
  });
  const holder = useSelector((state) =>
    currentId ? state.holders.holders.find((h) => h._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (holder) {
      const temp = { ...holder, password: bytes(holder.password) }
      setHolderData(temp);
    }
  }, [holder]);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateHolder(currentId, { ...holderData, userName: user?.result?.name}));
      clear();
    } else {
      dispatch(createHolder({ ...holderData, userName: user?.result?.name}));
      dispatch(getHolders(user?.result?._id || user?.result?.googleId, page))
      clear();
    }
    console.log(holderData)
  };

  const clear = () => {
    setCurrentId(null);
    setHolderData({ name: "", password: "", tags: "" });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  if (user?.result?.name) {
    return (

      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography onClick={handleOpen} className={classes.titleHolder} variant="h6">
            {currentId ? "Editing" : "Creating"} Password Holder
          </Typography>
          {open ? null : <ExpandMore/>}
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Container align="center">
              <TextField
                className={classes.txt}
                name="name"
                variant="outlined"
                label="Username/Email"
                value={holderData.name}
                onChange={(e) =>
                  setHolderData({ ...holderData, name: e.target.value })
                }
              />
              <TextField
                className={classes.txt}
                name="password"
                variant="outlined"
                label="Password"
                value={holderData.password}
                onChange={(e) =>
                  setHolderData({ ...holderData, password: e.target.value })
                }
              />
              <TextField
                className={classes.txt}
                name="tags"
                variant="outlined"
                label="Tags"
                value={holderData.tags}
                onChange={(e) =>
                  setHolderData({ ...holderData, tags: e.target.value.split(",") })
                }
              />
              <Button className={classes.buttonSubmit} size="large" type="submit">
                Submit
              </Button>
            </Container>
          </Collapse>
        </form>
      </Paper>
    );
  } else {
    return <div />;
  }
};


export default Form;
