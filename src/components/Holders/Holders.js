import React, { useEffect } from "react";
import { Container, CircularProgress, Grid} from "@material-ui/core";
import { useSelector } from "react-redux";

import Holder from "./Holder/Holder";
import useStyles from './styles'

const Holders = ({ setCurrentId }) => {
    const {holders, isLoading } = useSelector((state) => state.holders)
    const classes = useStyles();

    if (!holders.length && !isLoading) {
        return (
            <h1>No Post</h1>
        )
    }

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {holders.map((holder) => (
                    <Container key={holder.id} item xs={12} sm={6}>
                        <Holder holder={holder} setCurrentId={setCurrentId}/>
                    </Container>
                ))}
            </Grid>
        )
    )
}

export default Holders;