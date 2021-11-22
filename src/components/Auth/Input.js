import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import useStyles from './styles.js'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
            className={classes.txt}
            name={name} 
            onChange={handleChange} 
            variant="outlined" 
            required 
            fullWidth 
            label={label} 
            autoFocus={autoFocus} 
            type={type} 
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility /> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }: null }/>
        </Grid>
    )
}

export default Input;