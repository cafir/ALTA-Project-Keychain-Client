import React, { useState } from "react";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import useStyles from './styles.js'
import Input from "./Input.js";
import Icon from './icon.js'
import { signin, signup } from "../../actions/auth"
import Logo from "../../images/logoKeychain.png"

import { useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom'

import { GoogleLogin } from 'react-google-login'

const initialState = { firstName: '', lastNAme: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup )
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful. Try again later.")
    }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper} >
                <img className={classes.logo} src={Logo} alt="logoKeyChain"/>
                <Typography className={classes.titleKeyChain} variant="h5">{isSignup ? 'KeyChain' : 'KeyChain'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup ? (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            ) : null
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup ? null : 
                            <Grid container justify="flex-end">
                                <Grid item>
                                    
                                </Grid>
                            </Grid>
                        }
                        { isSignup ? <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/> : null}

                    </Grid>
                    <br/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.buttonSubmit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                    <GoogleLogin
                        clientId="215062051960-ojg4c343icabs53jfv4q8iqfb5mjc19o.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.buttonSubmit} fullWidth onClick={renderProps.onClick}  disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                                Sign In with Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <div className={classes.switchSign}>
                        { isSignup ?
                            <div>
                                <Typography className={classes.text}>Already have an account?</Typography>
                                <Button fullWidth onClick={switchMode} className={classes.buttonSubmit2} variant="contained">Sign In</Button>
                            </div>
                            : 
                            <div>
                                <Typography className={classes.text}>Dont have an account?</Typography>
                                <Button fullWidth onClick={switchMode} className={classes.buttonSubmit2} variant="contained">Sign Up</Button>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Auth;