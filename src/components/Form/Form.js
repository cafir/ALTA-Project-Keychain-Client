import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { createHolder, updateHolder } from "../../actions/holders";

const Form = ({ currentId, setCurrentId }) => {
  const [holderData, setHolderData] = useState({
    name: "",
    password: "",
    tags: "",
  });
  const holder = useSelector((state) =>
    currentId ? state.holders.find((h) => h._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (holder) {
      setHolderData(holder);
    }
  }, [holder]);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updateHolder(currentId, { ...holderData, userName: user?.result?.name })
      );
      clear();
    } else {
      dispatch(createHolder({ ...holderData, userName: user?.result?.name }));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null);
    setHolderData({ name: "", password: "", tags: "" });
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
          <Typography variant="h6">
            {currentId ? "Editing" : "Creating"} Password Holder
          </Typography>
          <TextField
            className={classes.txt}
            name="name"
            variant="outlined"
            label="Holder Name"
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
        </form>
      </Paper>
    );
  } else {
    return <div />;
  }
};

export default Form;
