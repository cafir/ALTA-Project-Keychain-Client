import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import useStyles from './styles'

import { useDispatch, useSelector } from "react-redux";
import { createHolder, updateHolder } from "../../actions/holders";



const Form = ( {currentId, setCurrentId}) => {
    const [holderData, setHolderData] = useState({
        name: '', password: '',  tags: ''
    });
    const holder = useSelector((state) => currentId ? state.holders.find((h) => h._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (holder) {
            setHolderData(holder)
        }
    }, [holder])

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateHolder(currentId, holderData));
        } else {
            dispatch(createHolder(holderData))
        }

        dispatch(createHolder(holderData))

        clear()
    }

    const clear = () => {
        setCurrentId(null);
        setHolderData({ name: '', password: '',  tags: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} Password Holder</Typography>
                <TextField name="name" variant="outlined" label="Holder Name" fullWidth value={holderData.name} onChange={(e) => setHolderData({ ...holderData, name: e.target.value })}/>
                <TextField name="password" variant="outlined" label="Password" fullWidth value={holderData.password} onChange={(e) => setHolderData({ ...holderData, password: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={holderData.tags} onChange={(e) => setHolderData({ ...holderData, tags: e.target.value.split(',') })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;