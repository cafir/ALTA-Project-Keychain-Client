import React, { useState, useEffect } from "react";
import { Container, Grow, Grid} from "@material-ui/core"

import Form from "../Form/Form";
import Holders from "../Holders/Holders";

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
                <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Holders setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
    
}

export default Home;