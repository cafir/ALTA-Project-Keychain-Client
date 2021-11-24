import React from "react";
//style
import { Container } from "@material-ui/core"
import useStyles from "./styles.js"

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'))

    console.log(user)
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Container maxWidth="sm" className={classes.con}>
                <Routes>
                    <Route path='/' exact element={ <Navigate to='/holders' />}/>
                    <Route path='/holders' exact element={ <Home/>}/>
                    <Route path='/holders/search' exact element={<Home/>}/>
                    <Route path='/auth' exact element={<Auth/> }/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
    
}

export default App;