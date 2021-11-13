import React from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyles from './styles'
import DeleteIcon from "@material-ui/icons/Delete"

import { useDispatch } from "react-redux";

import { deleteHolder } from "../../../actions/holders";

const Holder = ({ holder, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{holder.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                style={{color: 'grey'}} 
                size="small" 
                onClick={() => setCurrentId(holder._id)}>
                    <MoreHorizIcon font="default" />
                </Button>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{holder.name}</Typography>
            <Typography className={classes.title} variant="h5" gutterBottom>{holder.password}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteHolder(holder._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Holder;