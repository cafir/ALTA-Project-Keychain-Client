import React from "react";
//style
import { Container } from "@material-ui/core"
import useStyles from "./styles.js"

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";


const App = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Container maxWidth="sm" className={classes.con}>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/auth' exact element={<Auth/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
    
}

export default App;