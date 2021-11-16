import React, { useState, useEffect } from "react";
import { Container, Grow, Grid} from "@material-ui/core"

import Form from "../Form/Form";
import Holders from "../Holders/Holders";
import Navbar from "../Navbar/Navbar";

//redux
import { useDispatch } from "react-redux";

//action
import { getHolders } from "../../actions/holders";
import useStyles from './styles.js'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHolders());
    }, [dispatch])

    return (
        <Grow in> 
            <Container align="center">
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                        <Navbar/>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        <Holders setCurrentId={setCurrentId}/>
                </Grid>
            </Container>
        </Grow>
    )
    
}

export default Home;