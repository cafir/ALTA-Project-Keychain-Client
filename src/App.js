import React from "react";
//style
import { Container } from "@material-ui/core"

 
//component
import Navbar from "./components/Navbar/Navbar.js";
//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";


const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/auth' exact element={<Auth/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
    
}

export default App;